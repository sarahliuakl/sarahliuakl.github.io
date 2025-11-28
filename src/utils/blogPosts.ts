// This file uses Vite's import.meta.glob to fetch markdown posts
// It processes them to extract metadata (slug, title, excerpt)

interface PostData {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Keep the raw content for the detail page
}

// Function to extract title (first H1) and excerpt (first paragraph)
const extractMetadata = (markdown: string): { title: string; excerpt: string } => {
  let title = 'Untitled Post';
  let excerpt = 'No excerpt available.';

  const lines = markdown.split('\n');
  let titleFound = false;
  let excerptFound = false;

  for (const line of lines) {
    const trimmedLine = line.trim();

    // Find the first H1 for the title
    if (!titleFound && trimmedLine.startsWith('# ')) {
      title = trimmedLine.substring(2).trim();
      titleFound = true;
      continue; // Move to the next line after finding the title
    }

    // Find the first non-empty line after the title (or from the start if no title)
    // that isn't a heading, list, blockquote, etc. as the excerpt
    if (titleFound && !excerptFound && trimmedLine.length > 0 && !trimmedLine.startsWith('#') && !trimmedLine.startsWith('- ') && !trimmedLine.startsWith('* ') && !trimmedLine.startsWith('> ') && !trimmedLine.startsWith('```') && !trimmedLine.startsWith('---')) {
      excerpt = trimmedLine;
      excerptFound = true;
      break; // Stop after finding the first paragraph
    }
  }

  return { title, excerpt };
};


export const fetchPosts = async (): Promise<PostData[]> => {
  // Use Vite's import.meta.glob to get all .md files in the /posts directory
  // IMPORTANT: The path '/posts/*.md' assumes your posts are in a top-level 'posts' directory.
  // Adjust if you place them elsewhere (e.g., 'src/posts/*.md').
  // `eager: true` imports the modules directly.
  // `import: 'default'` imports the raw string content of the markdown file.
  const modules = import.meta.glob('../../posts/*.md', { eager: true, as: 'raw' });

  const posts: PostData[] = [];

  for (const path in modules) {
    const rawContent = modules[path];
    if (typeof rawContent !== 'string') continue; // Type guard

    // Extract slug from path (e.g., '/posts/my-first-post.md' -> 'my-first-post')
    const slug = path
      .split('/')
      .pop()
      ?.replace('.md', '');

    if (slug) {
      const { title, excerpt } = extractMetadata(rawContent);
      posts.push({
        slug,
        title,
        excerpt,
        content: rawContent, // Store the full markdown content
      });
    }
  }

  // Sort posts: dated posts first (newest to oldest), then undated posts alphabetically
  posts.sort((a, b) => {
    // Check if slugs start with a date pattern (YYYY- or YYYY-MM- or YYYY-MM-DD-)
    const datePatternA = a.slug.match(/^(\d{4}(-\d{2})?(-\d{2})?)/);
    const datePatternB = b.slug.match(/^(\d{4}(-\d{2})?(-\d{2})?)/);
    
    const hasDateA = datePatternA !== null;
    const hasDateB = datePatternB !== null;
    
    // If both have dates, sort by date descending (newest first)
    if (hasDateA && hasDateB) {
      return b.slug.localeCompare(a.slug);
    }
    
    // Dated posts come before undated posts
    if (hasDateA && !hasDateB) return -1;
    if (!hasDateA && hasDateB) return 1;
    
    // Both undated: sort alphabetically
    return a.slug.localeCompare(b.slug);
  });

  return posts;
};

// Function to get a single post by slug
export const getPostBySlug = async (slug: string): Promise<PostData | null> => {
  const posts = await fetchPosts();
  return posts.find(post => post.slug === slug) || null;
};
