'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Menu, X, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ChevronRight, CheckCircle, BarChart, Code, Users, Star, Quote, ExternalLink, ArrowRight, TrendingUp, Globe, Zap, ArrowUp } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      alert('An error occurred. Please try again.')
    }
  }

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
      {/* Navigation Bar */}
      <motion.nav 
        className="sticky top-0 z-50 bg-white/90 border-b border-border/40 backdrop-blur-md supports-[backdrop-filter]:bg-background/95"
        style={{ y }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo - ASCENDVERSE */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-1/2 md:w-1/3 lg:w-1/4 max-w-[80%]">
                <img
                  src="/logo.png"
                  alt="ASCENDVERSE"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <motion.a 
                href="#services" 
                className="text-foreground hover:text-blue-600 transition-colors relative group font-medium"
                whileHover={{ y: -2 }}
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 transition-all group-hover:w-full"></span>
              </motion.a>
              <motion.a 
                href="#about" 
                className="text-foreground hover:text-blue-600 transition-colors relative group font-medium"
                whileHover={{ y: -2 }}
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 transition-all group-hover:w-full"></span>
              </motion.a>
              <motion.a 
                href="#contact" 
                className="text-foreground hover:text-blue-600 transition-colors relative group font-medium"
                whileHover={{ y: -2 }}
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 transition-all group-hover:w-full"></span>
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                  Get Started
                </Button>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div 
            className="md:hidden py-4 space-y-2 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#services" className="block py-2 text-foreground hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#about" className="block py-2 text-foreground hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#contact" className="block py-2 text-foreground hover:text-blue-600 transition-colors font-medium">Contact</a>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">Get Started</Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10"
          animate={{
            background: [
              "linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(34, 197, 94, 0.1))",
              "linear-gradient(to right, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1))",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200/20 rounded-full"
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
          className="absolute top-40 right-20 w-16 h-16 bg-green-200/20 rounded-full"
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
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 border-blue-200">🚀 Digital Excellence</Badge>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
              variants={itemVariants}
            >
              We Build Brands That Transform Your Business
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Transform your business with cutting-edge digital strategies, innovative solutions, and data-driven marketing campaigns that deliver measurable results and elevate your brand to new heights.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                  Start Your Ascension
                  <ArrowUp className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="text-lg px-8 border-blue-300 text-blue-700 hover:bg-blue-50">
                  View Our Work
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to elevate your brand and accelerate growth
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Digital Marketing */}
            <motion.div variants={itemVariants}>
              <Card className="group hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-2 border-blue-100">
                <CardHeader>
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <BarChart className="h-6 w-6 text-blue-600" />
                  </motion.div>
                  <CardTitle className="text-xl text-blue-800">Digital Marketing</CardTitle>
                  <CardDescription>
                    Data-driven marketing strategies that connect with your audience and drive conversions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="text-sm">SEO & SEM Optimization</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="text-sm">Content Marketing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="text-sm">Email Campaigns</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="text-sm">PPC Advertising</span>
                    </li>
                  </ul>
                  <motion.div className="mt-6" whileHover={{ x: 5 }}>
                    <Link href="/services/digital-marketing" className="text-blue-600 hover:text-blue-700 flex items-center text-sm font-medium">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Digital Product Development */}
            <motion.div variants={itemVariants}>
              <Card className="group hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-2 border-green-100">
                <CardHeader>
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4 group-hover:from-green-200 group-hover:to-green-300 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Code className="h-6 w-6 text-green-600" />
                  </motion.div>
                  <CardTitle className="text-xl text-green-800">Digital Product Development</CardTitle>
                  <CardDescription>
                    Custom digital solutions built to scale your business and enhance user experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Web Development</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Mobile Apps</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">E-commerce Solutions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">API Integration</span>
                    </li>
                  </ul>
                  <motion.div className="mt-6" whileHover={{ x: 5 }}>
                    <Link href="/services/digital-product-development" className="text-green-600 hover:text-green-700 flex items-center text-sm font-medium">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Media Management */}
            <motion.div variants={itemVariants}>
              <Card className="group hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-2 border-purple-100">
                <CardHeader>
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-4 group-hover:from-purple-200 group-hover:to-purple-300 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Users className="h-6 w-6 text-purple-600" />
                  </motion.div>
                  <CardTitle className="text-xl text-purple-800">Social Media Management</CardTitle>
                  <CardDescription>
                    Build meaningful connections and grow your community across all social platforms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      <span className="text-sm">Content Strategy</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      <span className="text-sm">Community Management</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      <span className="text-sm">Influencer Partnerships</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      <span className="text-sm">Social Analytics</span>
                    </li>
                  </ul>
                  <motion.div className="mt-6" whileHover={{ x: 5 }}>
                    <Link href="/services/social-media-management" className="text-purple-600 hover:text-purple-700 flex items-center text-sm font-medium">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section with Statistics */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50/30 to-green-50/30">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent">
                Your Partner in Digital Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 8 years of experience in the digital landscape, we've helped countless businesses transform their online presence and achieve remarkable growth. Our team of experts combines creativity, technology, and strategic thinking to deliver solutions that not only look great but drive real results.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We believe in building long-term partnerships with our clients, understanding their unique challenges, and crafting tailored strategies that align with their business goals. From startups to established enterprises, we have the expertise to take your brand to the next level.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                  Learn More About Us
                  <ArrowUp className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { number: "500+", label: "Projects Delivered", icon: Zap },
                { number: "8+", label: "Years Experience", icon: TrendingUp },
                { number: "200+", label: "Happy Clients", icon: Users },
                { number: "24/7", label: "Support Available", icon: Globe }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Card className="text-center p-6 border-blue-100">
                    <motion.div 
                      className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your digital presence? Let's discuss how we can help achieve your goals
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.02 }}>
                <Card className="border-blue-100">
                  <CardHeader>
                    <CardTitle className="text-blue-800">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span>reach@ascendverse.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span>123 Business Ave, Suite 100<br />New York, NY 10001</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <Card className="border-blue-100">
                  <CardHeader>
                    <CardTitle className="text-blue-800">Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <Card className="border-blue-100">
                  <CardHeader>
                    <CardTitle className="text-blue-800">Follow Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      {[
                        { icon: Facebook, label: "Facebook" },
                        { icon: Twitter, label: "Twitter" },
                        { icon: Linkedin, label: "LinkedIn" },
                        { icon: Instagram, label: "Instagram" }
                      ].map((social, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button variant="outline" size="icon" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                            <social.icon className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-800 to-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-24 h-12 mr-3">
                  <img
                    src="/logo.png"
                    alt="ASCENDVERSE"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-sm text-blue-100">
                Your trusted partner for digital excellence and growth.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li><Link href="/services/digital-marketing" className="hover:text-white transition-colors">Digital Marketing</Link></li>
                <li><Link href="/services/digital-product-development" className="hover:text-white transition-colors">Product Development</Link></li>
                <li><Link href="/services/social-media-management" className="hover:text-white transition-colors">Social Media</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </motion.div>
          </div>
          
          <Separator className="my-8 bg-blue-700" />
          
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-blue-100">
              © 2025 ASCENDVERSE. All rights reserved. 🚀 Ascend Beyond Limits
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" }
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button variant="ghost" size="icon" className="text-blue-100 hover:text-white hover:bg-blue-700">
                    <social.icon className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}