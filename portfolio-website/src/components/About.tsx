'use client'

import { motion } from 'framer-motion'
import { Code, Database, Palette, Server, Smartphone, Globe } from 'lucide-react'

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: Palette,
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular']
    },
    {
      category: 'Backend',
      icon: Server,
      technologies: ['Node.js', 'Python', 'Express', 'FastAPI', 'GraphQL', 'REST APIs']
    },
    {
      category: 'Database',
      icon: Database,
      technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'Prisma']
    },
    {
      category: 'DevOps',
      icon: Globe,
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Linux']
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'PWA']
    },
    {
      category: 'Tools',
      icon: Code,
      technologies: ['Git', 'VS Code', 'Figma', 'Postman', 'Jest', 'Webpack']
    }
  ]

  const timeline = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      description: 'Leading development of enterprise web applications and mentoring junior developers.'
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'Startup Inc.',
      description: 'Built scalable web applications using React, Node.js, and cloud technologies.'
    },
    {
      year: '2020',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Created responsive and interactive user interfaces for various client projects.'
    },
    {
      year: '2019',
      title: 'Computer Science Graduate',
      company: 'University',
      description: 'Bachelor of Science in Computer Science with focus on web technologies.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Story
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Hello! I&apos;m a passionate full stack developer with over 5 years of experience 
                building web applications that solve real-world problems. I love turning complex 
                ideas into simple, beautiful, and functional designs.
              </p>
              <p>
                My journey in web development started during university, where I discovered my 
                passion for creating digital experiences. Since then, I&apos;ve worked with startups 
                and established companies, helping them bring their visions to life.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, contributing to 
                open source projects, or sharing my knowledge through technical writing and 
                mentoring other developers.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '5+', label: 'Years Experience' },
                { number: '20+', label: 'Technologies' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                  <div className="text-primary-600 dark:text-primary-400 font-semibold text-sm">
                    {item.year}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                  <div className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                    {item.company}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About