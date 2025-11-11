'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, ArrowRight, CheckCircle, Users, Heart, MessageCircle, Share2, TrendingUp, Target, Clock, DollarSign, Star, Phone, MailIcon, MessageSquare, Calendar, Eye, ThumbsUp, Award, Camera, Video, Hash, AtSign, ArrowUp } from 'lucide-react'
import Link from 'next/link'

export default function SocialMediaManagement() {
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
              <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 border-blue-200">🚀 Social Media Management</Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
              variants={itemVariants}
            >
              Build Communities
              <motion.span 
                className="block bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent"
                animate={{
                  background: [
                    "linear-gradient(to right, #3b82f6, #22c55e)",
                    "linear-gradient(to right, #22c55e, #3b82f6)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                That Thrive Online
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Transform your social media presence with strategic content management and community engagement. We build brands that connect, engage, and convert across all platforms.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white" onClick={() => window.open('https://wa.me/919345419934?text=Hi!%20I\'d%20like%20to%20book%20my%20free%30-minute%20consultation%20and%20know%20more%20about%20your%20services', '_blank')}>
                  Grow Your Social
                  <ArrowUp className="ml-2 h-5 w-5" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent">Our Social Media Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive social media solutions to elevate your brand presence
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
                icon: Target,
                title: "Strategy Development",
                description: "Custom social media strategies tailored to your brand goals",
                features: ["Audience Research", "Platform Selection", "Content Planning", "Goal Setting"]
              },
              {
                icon: Camera,
                title: "Content Creation",
                description: "Engaging content that captures your brand essence",
                features: ["Visual Design", "Video Production", "Copywriting", "Storytelling"]
              },
              {
                icon: Users,
                title: "Community Management",
                description: "Build and nurture your online community",
                features: ["Engagement", "Customer Support", "Moderation", "Relationship Building"]
              },
              {
                icon: TrendingUp,
                title: "Growth Marketing",
                description: "Strategic campaigns to expand your reach",
                features: ["Influencer Marketing", "Paid Social", "Contests", "Giveaways"]
              },
              {
                icon: Eye,
                title: "Analytics & Reporting",
                description: "Data-driven insights to optimize performance",
                features: ["Performance Tracking", "Audience Insights", "Competitor Analysis", "ROI Reports"]
              },
              {
                icon: Award,
                title: "Reputation Management",
                description: "Monitor and protect your brand image",
                features: ["Brand Monitoring", "Crisis Management", "Review Management", "Brand Mentions"]
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

      {/* Platforms We Manage */}
      <section className="py-20 bg-gradient-to-br from-blue-50/30 to-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent">Platforms We Excel In</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert management across all major social media platforms
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Facebook",
                icon: MessageCircle,
                users: "2.9B+",
                description: "Community building and targeted advertising",
                color: "bg-blue-600"
              },
              {
                name: "Instagram",
                icon: Camera,
                users: "1.4B+",
                description: "Visual storytelling and influencer marketing",
                color: "bg-pink-500"
              },
              {
                name: "LinkedIn",
                icon: Users,
                users: "800M+",
                description: "Professional networking and B2B marketing",
                color: "bg-blue-700"
              },
              {
                name: "Twitter",
                icon: Hash,
                users: "450M+",
                description: "Real-time engagement and trending topics",
                color: "bg-sky-500"
              },
              {
                name: "TikTok",
                icon: Video,
                users: "1B+",
                description: "Short-form video and viral content",
                color: "bg-black"
              },
              {
                name: "YouTube",
                icon: Video,
                users: "2.5B+",
                description: "Video content and channel management",
                color: "bg-red-500"
              },
              {
                name: "Pinterest",
                icon: Heart,
                users: "450M+",
                description: "Visual discovery and e-commerce integration",
                color: "bg-red-600"
              },
              {
                name: "Snapchat",
                icon: Camera,
                users: "600M+",
                description: "AR content and younger demographics",
                color: "bg-yellow-500"
              }
            ].map((platform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-all border-blue-100">
                  <motion.div 
                    className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <platform.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="font-semibold mb-1 text-blue-800">{platform.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{platform.users} users</p>
                  <p className="text-xs text-muted-foreground">{platform.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

          {/* Content Strategy */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent">Content That Converts</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Strategic content creation that drives engagement and delivers results
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
                    type: "Visual Content",
                    description: "Stunning graphics and visual stories",
                    examples: ["Infographics", "Carousels", "Stories", "Reels"]
                  },
                  {
                    type: "Video Content",
                    description: "Engaging video that captures attention",
                    examples: ["Short Videos", "Live Streams", "Tutorials", "Behind the Scenes"]
                  },
                  {
                    type: "Interactive Content",
                    description: "Content that encourages participation",
                    examples: ["Polls", "Quizzes", "Q&A Sessions", "Contests"]
                  },
                  {
                    type: "Educational Content",
                    description: "Value-driven content that builds authority",
                    examples: ["How-to Guides", "Tips & Tricks", "Industry Insights", "Case Studies"]
                  },
                  {
                    type: "Entertainment Content",
                    description: "Fun content that increases shareability",
                    examples: ["Memes", "Trending Topics", "Humor", "User-Generated Content"]
                  },
                  {
                    type: "Promotional Content",
                    description: "Strategic promotion that drives sales",
                    examples: ["Product Showcases", "Special Offers", "Testimonials", "Launch Announcements"]
                  }
                ].map((content, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="h-full border-blue-100">
                      <CardHeader>
                        <CardTitle className="text-lg text-blue-800">{content.type}</CardTitle>
                        <CardDescription>{content.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {content.examples.map((example, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs bg-blue-100 text-blue-800 border-blue-200">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Success Metrics */}
          <section className="py-20 bg-gradient-to-br from-blue-50/30 to-green-50/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent">Proven Social Results</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Real metrics from our successful social media campaigns
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
                  { metric: "500%", label: "Engagement Increase", icon: Heart },
                  { metric: "10x", label: "Follower Growth", icon: Users },
                  { metric: "85%", label: "Response Rate", icon: MessageCircle },
                  { metric: "4.9x", label: "ROI Average", icon: TrendingUp }
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
                    Why Choose Our Social Media Management?
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        icon: Target,
                        title: "Platform Expertise",
                        description: "Deep knowledge of each platform's algorithms and best practices"
                      },
                      {
                        icon: Calendar,
                        title: "Consistent Posting",
                        description: "Regular, timely content that keeps your audience engaged"
                      },
                      {
                        icon: Eye,
                        title: "Brand Voice",
                        description: "Consistent brand messaging across all social platforms"
                      },
                      {
                        icon: ThumbsUp,
                        title: "Community Focus",
                        description: "Building genuine relationships with your followers"
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
                      <CardTitle className="text-2xl mb-2 text-blue-800">Ready to Amplify Your Social Presence?</CardTitle>
                      <CardDescription>
                        Get a free social media audit and strategy consultation
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <MailIcon className="h-5 w-5 text-blue-600" />
                        <span>reach@ascendverse.com</span>
                      </div>
                      <Separator />
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white" size="lg" onClick={() => window.open('https://wa.me/919345419934?text=Hi!%20I\'d%20like%20to%20book%20my%20free%30-minute%20consultation%20and%20know%20more%20about%20your%20services', '_blank')}>
                          Get Free Audit
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
                  Let's Build Your Social Empire
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Join 300+ brands that have transformed their social media presence with our expert management
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="secondary" size="lg" className="text-lg px-8 bg-white text-blue-600 hover:bg-blue-50" onClick={() => window.open('https://wa.me/919345419934?text=Hi!%20I\'d%20like%20to%20book%20my%20free%30-minute%20consultation%20and%20know%20more%20about%20your%20services', '_blank')}>
                    Start Your Social Journey
                    <ArrowUp className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </div>
      )
}