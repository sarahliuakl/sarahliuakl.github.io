import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, TrendingUp, Code, Sparkles, BookOpen, Languages, BarChart3, Megaphone } from 'lucide-react';
import { fetchPosts } from '../utils/blogPosts';

interface PostData {
  slug: string;
  title: string;
  excerpt: string;
}

const HomePage: React.FC = () => {
  const [latestPosts, setLatestPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const posts = await fetchPosts();
      setLatestPosts(posts.slice(0, 3)); // Get latest 3 posts
    };
    loadPosts();
  }, []);

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16 md:py-20 rounded-2xl overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        
        <div className="container mx-auto px-8 md:px-16 lg:px-20 grid md:grid-cols-5 gap-10 items-center relative z-10">
          {/* Text Content */}
          <div className="md:col-span-3 text-center md:text-left">
            <div className="inline-flex items-center bg-pink-100 text-pink-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Auckland, New Zealand 🇳🇿 ↔ China 🇨🇳
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight">
              Sarah Liu
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-xl mx-auto md:mx-0">
              Connecting Kiwi Brands with China's Digital Market
            </p>
            <p className="text-base text-gray-500 mb-8 max-w-lg mx-auto md:mx-0">
              Bilingual Digital Marketing Specialist | AI-Powered Solutions | Cross-Border E-commerce Expert
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center inline-flex items-center justify-center"
              >
                Let's Connect
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/thoughts"
                className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-8 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 text-center inline-flex items-center justify-center"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Read My Insights
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative">
              <img
                src="/images/sarahliu1.png"
                alt="Sarah Liu - Digital Marketing Expert"
                className="rounded-2xl w-72 md:w-80 h-auto object-cover border-4 border-white shadow-xl"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Languages className="w-5 h-5 text-pink-500" />
                  <span className="text-sm font-medium text-gray-700">EN / 中文</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - New */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { number: '5+', label: 'Years Experience', icon: TrendingUp },
          { number: '2', label: 'Languages Fluent', icon: Languages },
          { number: '10+', label: 'AI Tools Mastered', icon: Sparkles },
          { number: '∞', label: 'Passion for Growth', icon: BarChart3 },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <stat.icon className="w-8 h-8 text-pink-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* About Section - Enhanced */}
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Cross-Border Digital Solutions Specialist
        </h2>
        <p className="text-pink-600 font-medium mb-6">Information Sciences, Massey University</p>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-12 text-lg">
          Former IT Project Manager at a major healthcare group in China, leading end-to-end delivery of multiple digital systems. Now based in New Zealand, I leverage AI technologies, data insights, and digital strategy to help local businesses effectively engage the Chinese market. I excel at turning complex business needs into clear, actionable solutions.
        </p>

        {/* Service Cards - Enhanced with icons */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: 'Digital Production',
              description: 'Creating engaging videos, landing pages, and visual content that drives conversions across platforms.',
              icon: Code,
              color: 'from-pink-500 to-rose-500'
            },
            {
              title: 'China Market Entry',
              description: 'WeChat, Douyin, Xiaohongshu, Zhihu - navigating China\'s unique digital ecosystem for NZ brands.',
              icon: Globe,
              color: 'from-purple-500 to-indigo-500'
            },
            {
              title: 'Advertising Strategy',
              description: 'Data-driven campaigns across Google, Meta, and Chinese platforms with measurable ROI.',
              icon: Megaphone,
              color: 'from-orange-500 to-amber-500'
            },
            {
              title: 'AI-Powered Marketing',
              description: 'Leveraging Claude, GPT, Gemini and automation tools to scale content and insights.',
              icon: Sparkles,
              color: 'from-cyan-500 to-blue-500'
            },
          ].map((service, index) => (
            <div key={index} className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Thoughts Section - New */}
      {latestPosts.length > 0 && (
        <section className="bg-gradient-to-br from-gray-50 to-white py-12 px-8 rounded-2xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Latest Insights</h2>
              <p className="text-gray-500 mt-1">Thoughts on AI, digital marketing, and cross-border commerce</p>
            </div>
            <Link 
              to="/thoughts" 
              className="hidden md:inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link 
                key={post.slug} 
                to={`/thoughts/${post.slug}`}
                className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-pink-200 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center text-pink-500 text-sm font-medium">
                  Read more
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
          
          <div className="md:hidden mt-6 text-center">
            <Link 
              to="/thoughts" 
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
            >
              View All Insights
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </section>
      )}

      {/* CTA Section - New */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Expand into China's Digital Market?
        </h2>
        <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
          Whether you're a Kiwi brand looking to reach Chinese consumers or need bilingual digital marketing expertise, let's discuss how I can help.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/contact"
            className="bg-white text-pink-600 font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 inline-flex items-center justify-center"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link
            to="/portfolio"
            className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            View My Work
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
