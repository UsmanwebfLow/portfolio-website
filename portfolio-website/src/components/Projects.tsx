'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include product catalog, shopping cart, user authentication, and order management.',
      image: '/project-1.jpg',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
      category: 'Full Stack',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/project-2.jpg',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      category: 'Full Stack',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful data visualizations.',
      image: '/project-3.jpg',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      category: 'Frontend',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media metrics with real-time data processing and interactive charts.',
      image: '/project-4.jpg',
      technologies: ['Python', 'FastAPI', 'React', 'D3.js', 'PostgreSQL'],
      category: 'Data Science',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      id: 5,
      title: 'Mobile Fitness App',
      description: 'A cross-platform mobile application for fitness tracking with workout routines, progress monitoring, and social features.',
      image: '/project-5.jpg',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      category: 'Mobile',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, syntax highlighting, and content management system for writers and developers.',
      image: '/project-6.jpg',
      technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
      category: 'Frontend',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    }
  ]

  const categories = ['All', 'Full Stack', 'Frontend', 'Mobile', 'Data Science']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            A collection of projects I&apos;ve worked on, showcasing different technologies and problem-solving approaches.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-primary-300 dark:text-primary-700">
                    <Eye />
                  </div>
                </div>
                {/* Project overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-sm rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in working together or want to see more of my work?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects