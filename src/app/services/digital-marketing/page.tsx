'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, ArrowRight, CheckCircle, BarChart, Search, Mail, Megaphone, TrendingUp, Target, Users, Clock, DollarSign, Star, Phone, MailIcon, MessageSquare, Globe, Zap, Eye, MousePointer, ArrowUp, Leaf } from 'lucide-react'
import Link from 'next/link'

export default function DigitalMarketing() {
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

  // WhatsApp link
  const whatsappLink = "https://wa.me/919345419934?text=Hi!%20I'd%20like%20to%20book%20my%20free%2030-minute%20consultation%20and%20know%20more%20about%20your%20services";

  return (
    <div className="min-h-screen bg-background">
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
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Link href="/">
                <Button variant="ghost" className="mb-6 text-blue-600 hover:text-blue-700">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 border-blue-200">🚀 Digital Marketing</Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
              variants={itemVariants}
            >
              Drive Growth With
              <motion.span 
                className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"
                animate={{
                  background: [
                    "linear-gradient(to right, #3b82f6, #22c55e)",
                    "linear-gradient(to right, #22c55e, #3b82f6)",
                  ],
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Data-Driven Marketing
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Transform your business with strategic digital marketing that delivers measurable results. From SEO to social media, we create campaigns that convert and elevate your brand.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white" onClick={() => window.open(whatsappLink, '_blank')}>
                  Start Your Campaign
                  <ArrowUp className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              {/* Removed Free Audit button as requested */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent">Our Marketing Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions to grow your online presence
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
                icon: Search,
                title: "SEO & SEM",
                description: "Boost your search rankings and drive organic traffic",
                features: ["On-Page SEO", "Technical SEO", "Local SEO", "PPC Campaigns"]
              },
              {
                icon: Mail,
                title: "Email Marketing",
                description: "Engage your audience with targeted email campaigns",
                features: ["Newsletter Campaigns", "Automation", "A/B Testing", "Analytics"]
              },
              {
                icon: Megaphone,
                title: "Content Marketing",
                description: "Create compelling content that resonates with your audience",
                features: ["Blog Writing", "Video Content", "Infographics", "Whitepapers"]
              },
              {
                icon: Users,
                title: "Social Media Marketing",
                description: "Build your brand across all social platforms",
                features: ["Strategy Development", "Content Creation", "Community Management", "Influencer Marketing"]
              },
              {
                icon: Target,
                title: "Paid Advertising",
                description: "Targeted ads that reach your ideal customers",
                features: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Retargeting"]
              },
              {
                icon: BarChart,
                title: "Analytics & Reporting",
                description: "Data-driven insights to optimize your marketing",
                features: ["Performance Tracking", "ROI Analysis", "Custom Dashboards", "Monthly Reports"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-blue-100">
                  <CardHeader>
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </motion.div>
                    <CardTitle className="text-xl text-blue-800">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-3 w-3 text-blue-500 mr-2" />
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

      {/* Marketing Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50/30 to-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent">Our Marketing Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A strategic approach to deliver exceptional marketing results
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
                title: "Research & Analysis",
                description: "Understanding your market, competitors, and target audience"
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Creating a comprehensive marketing roadmap tailored to your goals"
              },
              {
                step: "03",
                title: "Campaign Execution",
                description: "Implementing multi-channel marketing campaigns with precision"
              },
              {
                step: "04",
                title: "Optimization & Scaling",
                description: "Continuously improving performance and scaling successful campaigns"
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {phase.step}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results & Metrics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent">Proven Results</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real metrics from our successful marketing campaigns
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
              { metric: "300%", label: "Average ROI Increase", icon: TrendingUp },
              { metric: "5x", label: "Traffic Growth", icon: Globe },
              { metric: "60%", label: "Cost Reduction", icon: DollarSign },
              { metric: "85%", label: "Client Satisfaction", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow border-blue-100">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </motion.div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mb-2">{stat.metric}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-br from-blue-50/30 to-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses achieve remarkable growth
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                company: "E-commerce Store",
                industry: "Retail",
                challenge: "Low online visibility and sales",
                solution: "Comprehensive SEO and PPC strategy",
                results: "400% increase in organic traffic, 250% boost in sales"
              },
              {
                company: "SaaS Startup",
                industry: "Technology",
                challenge: "Struggling with user acquisition",
                solution: "Content marketing and LinkedIn ads",
                results: "10x qualified leads, reduced CAC by 60%"
              },
              {
                company: "Local Restaurant",
                industry: "Food & Beverage",
                challenge: "Limited local awareness",
                solution: "Local SEO and social media marketing",
                results: "300% increase in online orders, 5x social media engagement"
              },
              {
                company: "B2B Company",
                industry: "Manufacturing",
                challenge: "Poor lead generation",
                solution: "Account-based marketing and email campaigns",
                results: "500% increase in qualified leads, 3x conversion rate"
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full border-blue-100">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg text-blue-800">{study.company}</CardTitle>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">{study.industry}</Badge>
                    </div>
                    <CardDescription className="text-sm">
                      <strong>Challenge:</strong> {study.challenge}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-blue-600">Solution</p>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="text-sm font-medium text-green-600">Results</p>
                        <p className="text-sm text-muted-foreground">{study.results}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
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
                Why Choose Our Marketing Services?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: "Targeted Approach",
                    description: "Data-driven strategies that focus on your ideal customers"
                  },
                  {
                    icon: Eye,
                    title: "Full Transparency",
                    description: "Detailed reporting and complete visibility into campaign performance"
                  },
                  {
                    icon: Zap,
                    title: "Quick Results",
                    description: "Agile methodology that delivers measurable results quickly"
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    description: "Certified marketing professionals with proven track records"
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
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-blue-800">{benefit.title}</h3>
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
              <Card className="p-8 border-blue-100">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2 text-blue-800">Ready to Grow Your Business?</CardTitle>
                  <CardDescription>
                    Get in touch with us for a consultation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Removed phone number and kept only email as requested */}
                  <div className="flex items-center space-x-3">
                    <MailIcon className="h-5 w-5 text-blue-600" />
                    <span>reach@ascendverse.com</span>
                  </div>
                  <Separator />
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white" size="lg" onClick={() => window.open(whatsappLink, '_blank')}>
                      Get In Touch
                      <ArrowUp className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Marketing Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join 500+ businesses that have achieved remarkable growth with our marketing strategies
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondary" size="lg" className="text-lg px-8 bg-white text-blue-600 hover:bg-blue-50" onClick={() => window.open(whatsappLink, '_blank')}>
                Start Your Campaign
                <ArrowUp className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}