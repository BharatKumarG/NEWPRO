'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, ArrowRight, CheckCircle, Code, Smartphone, Globe, Database, Cloud, Shield, Zap, Users, Clock, DollarSign, Star, Phone, Mail, MessageSquare, Leaf, TreePine, Recycle, ArrowUp } from 'lucide-react'
import Link from 'next/link'

export default function DigitalProductDevelopment() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section 
        className="py-20 lg:py-32 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"
          animate={{
            background: [
              "linear-gradient(to right, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1))",
              "linear-gradient(to right, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.1))",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        {/* Floating Green Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-green-200/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-emerald-200/20 rounded-full"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Link href="/">
                <Button variant="ghost" className="mb-6 text-green-600 hover:text-green-700">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">🌱 Sustainable Digital Product Development</Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
              variants={itemVariants}
            >
              Building Green
              <motion.span 
                className="block text-green-600 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                animate={{
                  background: [
                    "linear-gradient(to right, #22c55e, #16a34a, #15803d)",
                    "linear-gradient(to right, #15803d, #16a34a, #22c55e)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Digital Products
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Transform your ideas into eco-friendly digital products with our sustainable development practices. From concept to deployment, we build solutions that drive growth while protecting our planet.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="text-lg px-8 bg-green-600 hover:bg-green-700 text-white" onClick={() => window.open('https://wa.me/919345419934?text=Hi!%20I\'d%20like%20to%20book%20my%20free%30-minute%20consultation%20and%20know%20more%20about%20your%20services', '_blank')}>
                  Start Your Green Project
                  <Leaf className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">Our Green Development Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Eco-friendly development solutions tailored to your sustainable business needs
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Globe,
                title: "Sustainable Web Development",
                description: "Eco-conscious web applications built with green hosting and optimization",
                features: ["Green React/Next.js", "Energy-Efficient Code", "Carbon-Neutral Hosting", "Sustainable Design"]
              },
              {
                icon: Smartphone,
                title: "Eco Mobile Development",
                description: "Green mobile applications optimized for battery life and reduced data usage",
                features: ["Green React Native", "Battery Optimization", "Lightweight Apps", "Sustainable UX"]
              },
              {
                icon: Database,
                title: "Green Backend Development",
                description: "Energy-efficient server-side solutions with sustainable infrastructure",
                features: ["Eco API Development", "Green Database Design", "Cloud Optimization", "Microservices"]
              },
              {
                icon: Cloud,
                title: "Sustainable Cloud Solutions",
                description: "Green cloud infrastructure with renewable energy providers",
                features: ["Green AWS/Azure", "Eco DevOps", "Sustainable CI/CD", "Serverless Computing"]
              },
              {
                icon: Shield,
                title: "Green Security & Compliance",
                description: "Eco-friendly security practices and environmental compliance",
                features: ["Sustainable Security", "Green Compliance", "Eco Audits", "Environmental Standards"]
              },
              {
                icon: Zap,
                title: "Energy Optimization",
                description: "Lightning-fast applications with minimal energy consumption",
                features: ["Green Speed Optimization", "Eco Caching", "Sustainable CDN", "Energy Monitoring"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-green-100">
                  <CardHeader>
                    <motion.div 
                      className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="h-6 w-6 text-green-600" />
                    </motion.div>
                    <CardTitle className="text-xl text-green-800">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Green Development Process */}
      <section className="py-20 bg-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">Our Green Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A sustainable methodology that ensures successful eco-friendly project delivery
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                title: "Eco Discovery & Planning",
                description: "Understanding your requirements and creating a sustainable project roadmap",
                icon: Leaf
              },
              {
                step: "02", 
                title: "Green Design & Prototyping",
                description: "Creating eco-friendly wireframes, mockups, and sustainable prototypes",
                icon: Recycle
              },
              {
                step: "03",
                title: "Sustainable Development",
                description: "Building the product with energy-efficient coding and green testing",
                icon: Code
              },
              {
                step: "04",
                title: "Green Deployment",
                description: "Launching with carbon-neutral infrastructure and ongoing eco support",
                icon: TreePine
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div 
                  className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <phase.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-green-800">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Green Technologies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">Sustainable Technologies We Use</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Eco-friendly tools and frameworks to build modern green digital products
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Green React", "Eco Next.js", "Sustainable TypeScript", "Energy Node.js", 
              "Green Python", "Eco PostgreSQL", "Sustainable MongoDB", "Green AWS",
              "Eco Docker", "Eco Kubernetes", "Sustainable GraphQL", "Eco Redis",
              "Green Flutter", "Eco Swift", "Sustainable Kotlin", "Green Vue.js"
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow border-green-100">
                  <Badge variant="secondary" className="text-sm bg-green-100 text-green-800 border-green-200">{tech}</Badge>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Green Development */}
      <section className="py-20 bg-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">
                Why Choose Our Green Development Services?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "Eco Expert Team",
                    description: "Senior developers with 10+ years of experience in building sustainable products"
                  },
                  {
                    icon: Leaf,
                    title: "Carbon-Neutral Process",
                    description: "Development practices that offset carbon emissions and promote sustainability"
                  },
                  {
                    icon: DollarSign,
                    title: "Cost-Effective Green",
                    description: "Competitive pricing while maintaining environmental responsibility"
                  },
                  {
                    icon: Shield,
                    title: "Green Quality Assurance",
                    description: "Comprehensive eco-testing and sustainable code reviews"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-green-800">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-green-100">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2 text-green-800">Ready to Build Your Green Product?</CardTitle>
                  <CardDescription>
                    Let's discuss how we can turn your sustainable vision into reality
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-green-600" />
                    <span>reach@ascendverse.com</span>
                  </div>
                  <Separator />
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg" onClick={() => window.open('https://wa.me/919345419934?text=Hi!%20I\'d%20like%20to%20book%20my%20free%30-minute%20consultation%20and%20know%20more%20about%20your%20services', '_blank')}>
                      Schedule Green Consultation
                      <Leaf className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Green CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something Sustainable Together
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join 200+ companies that trust us to deliver exceptional green digital products
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondary" size="lg" className="text-lg px-8 bg-white text-green-600 hover:bg-green-50" onClick={() => window.open('https://wa.me/919345419934?text=Hi!%20I\'d%20like%20to%20book%20my%20free%30-minute%20consultation%20and%20know%20more%20about%20your%20services', '_blank')}>
                Start Your Green Project Today
                <Leaf className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}