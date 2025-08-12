'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Tag, Search, ArrowRight } from 'lucide-react'
import { useState, useMemo } from 'react'

// Mock data for demonstration - in real app, this would come from props or API
const mockPosts = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js: A Complete Guide',
    excerpt: 'Learn how to build modern web applications with Next.js, the React framework that gives you the best developer experience.',
    date: '2024-01-15',
    author: 'Your Name',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'JavaScript', 'Web Development'],
    featured: true,
    readTime: '8 min read'
  },
  {
    slug: 'javascript-async-patterns',
    title: 'Modern JavaScript Async Patterns: From Callbacks to Async/Await',
    excerpt: 'Explore the evolution of asynchronous JavaScript from callbacks through Promises to modern async/await syntax with practical examples.',
    date: '2024-01-05',
    author: 'Your Name',
    category: 'JavaScript',
    tags: ['JavaScript', 'Async', 'Promises', 'Programming'],
    featured: true,
    readTime: '10 min read'
  },
  {
    slug: 'building-responsive-layouts',
    title: 'Building Responsive Layouts with Tailwind CSS',
    excerpt: 'Master the art of creating beautiful, responsive layouts using Tailwind CSS utility classes and modern CSS Grid and Flexbox.',
    date: '2024-01-10',
    author: 'Your Name',
    category: 'CSS',
    tags: ['CSS', 'Tailwind CSS', 'Responsive Design', 'Frontend'],
    featured: false,
    readTime: '6 min read'
  }
]

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = useMemo(() => {
    const cats = new Set(mockPosts.map(post => post.category))
    return ['All', ...Array.from(cats)]
  }, [])

  const filteredPosts = useMemo(() => {
    let filtered = mockPosts

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    return filtered
  }, [searchQuery, selectedCategory])

  const featuredPosts = mockPosts.filter(post => post.featured)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="blog" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Thoughts, tutorials, and insights about web development, technology, and design.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Posts</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-video bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-primary-300 dark:text-primary-700">
                      📝
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-sm rounded-full">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300">
                      Read More
                      <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* All Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            All Posts {searchQuery && `(${filteredPosts.length} results for "${searchQuery}")`}
          </h3>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No posts found. Try adjusting your search or filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative aspect-video bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl text-primary-300 dark:text-primary-700">
                        📄
                      </div>
                    </div>
                    {post.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded flex items-center"
                        >
                          <Tag size={10} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded">
                          +{post.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300">
                        Read
                        <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to stay updated with the latest posts?
          </p>
          <button className="btn-primary">
            Subscribe to Newsletter
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog