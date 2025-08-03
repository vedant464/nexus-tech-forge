import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, Calendar, Clock, User, ArrowRight, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Machine Learning: A Beginner's Guide",
      excerpt: "Dive into the world of ML with practical examples and step-by-step tutorials. Learn the fundamentals and build your first model.",
      content: "Machine Learning has become one of the most exciting fields in technology...",
      author: {
        name: "Priya Sharma",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        role: "Data Science Lead"
      },
      publishDate: "Dec 8, 2024",
      readTime: "8 min read",
      category: "Machine Learning",
      featured: true,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["ML", "Python", "Beginner", "Tutorial"]
    },
    {
      id: 2,
      title: "React Best Practices for Modern Web Development",
      excerpt: "Explore advanced React patterns, performance optimization techniques, and modern development workflows.",
      content: "React has evolved significantly over the years...",
      author: {
        name: "Alex Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        role: "Frontend Developer"
      },
      publishDate: "Dec 5, 2024",
      readTime: "12 min read",
      category: "Web Development",
      featured: false,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "JavaScript", "Frontend", "Best Practices"]
    },
    {
      id: 3,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt: "Learn how to design and build robust, scalable REST APIs using Node.js, Express, and modern database technologies.",
      content: "API development is crucial for modern applications...",
      author: {
        name: "Michael Rodriguez",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        role: "Backend Developer"
      },
      publishDate: "Dec 2, 2024",
      readTime: "15 min read",
      category: "Backend Development",
      featured: false,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Node.js", "Express", "API", "Backend"]
    },
    {
      id: 4,
      title: "The Future of Web Design: Trends for 2025",
      excerpt: "Discover the latest design trends, tools, and techniques that will shape web design in 2025 and beyond.",
      content: "Web design continues to evolve rapidly...",
      author: {
        name: "Sarah Kim",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        role: "UI/UX Designer"
      },
      publishDate: "Nov 28, 2024",
      readTime: "10 min read",
      category: "Design",
      featured: false,
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Design", "UI/UX", "Trends", "2025"]
    },
    {
      id: 5,
      title: "Cybersecurity Fundamentals for Developers",
      excerpt: "Essential security practices every developer should know to build secure applications and protect user data.",
      content: "Security should be a top priority for every developer...",
      author: {
        name: "David Wilson",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        role: "Security Engineer"
      },
      publishDate: "Nov 25, 2024",
      readTime: "11 min read",
      category: "Security",
      featured: false,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Security", "DevOps", "Best Practices", "OWASP"]
    },
    {
      id: 6,
      title: "Mobile App Development with React Native",
      excerpt: "Build cross-platform mobile applications using React Native. Learn the fundamentals and advanced techniques.",
      content: "React Native has revolutionized mobile development...",
      author: {
        name: "Lisa Zhang",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        role: "Mobile Developer"
      },
      publishDate: "Nov 20, 2024",
      readTime: "14 min read",
      category: "Mobile Development",
      featured: false,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React Native", "Mobile", "Cross-platform", "JavaScript"]
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "Machine Learning", "Design", "Security", "Backend Development"];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/30">
            <BookOpen className="w-4 h-4 mr-2" />
            Tech Blog & Articles
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Learn & Share Knowledge
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover insightful articles, tutorials, and tech insights written by our community members and industry experts.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge 
                    key={category} 
                    variant="outline" 
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground smooth-transition"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Featured Article
              </h2>
            </div>

            <Card className="tech-card overflow-hidden">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        Featured
                      </Badge>
                      <Badge variant="outline">
                        {featuredPost.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl mb-4 group-hover:text-primary smooth-transition">
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={featuredPost.author.avatar} alt={featuredPost.author.name} />
                          <AvatarFallback>{featuredPost.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{featuredPost.author.name}</div>
                          <div className="text-sm text-muted-foreground">{featuredPost.author.role}</div>
                        </div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center mb-1">
                          <Calendar className="w-3 h-3 mr-1" />
                          {featuredPost.publishDate}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="hero" size="lg">
                      Read Full Article <ArrowRight className="ml-2" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest trends and technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="tech-card group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary smooth-transition line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={post.author.avatar} alt={post.author.name} />
                      <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{post.author.name}</div>
                      <div className="text-xs text-muted-foreground">{post.author.role}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.publishDate}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    Read More <ArrowRight className="ml-2 w-3 h-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Contribute CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Share Your Knowledge
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have something interesting to share? Write for our blog and help the community learn and grow together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Submit Article <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Writing Guidelines
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}