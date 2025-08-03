import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code2, Zap, Trophy, Calendar, Users, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const featuredEvents = [
    {
      id: 1,
      title: "AI & Machine Learning Workshop",
      date: "Dec 15, 2024",
      description: "Hands-on workshop covering neural networks and practical ML applications",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Workshop"
    },
    {
      id: 2,
      title: "Winter Hackathon 2024",
      date: "Jan 20-21, 2025",
      description: "48-hour coding challenge with exciting prizes and industry mentors",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Hackathon"
    }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "Smart Campus Navigator",
      description: "AI-powered navigation system for our college campus",
      tech: ["React", "Node.js", "MongoDB"],
      status: "Completed"
    },
    {
      id: 2,
      title: "Student Grade Analyzer",
      description: "Data visualization tool for academic performance tracking",
      tech: ["Python", "Flask", "Chart.js"],
      status: "In Progress"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="circuit-pattern absolute inset-0 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/30">
              <Zap className="w-4 h-4 mr-2" />
              Welcome to ROI Tech Club
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
              Code. Create. Conquer.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the premier technical club where innovation meets collaboration. 
              Build cutting-edge projects, participate in hackathons, and shape the future of technology.
            </p>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <Button 
                 variant="hero" 
                 size="lg" 
                 className="text-lg px-8 py-3"
                 asChild
               >
                 <Link to="/join">
                   Join Our Community <ArrowRight className="ml-2" />
                 </Link>
               </Button>
               <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
                 <Link to="/events">
                   View Events
                 </Link>
               </Button>
               <Button variant="glow" size="lg" className="text-lg px-8 py-3" asChild>
                 <Link to="/projects">
                   Explore Projects
                 </Link>
               </Button>
             </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">25+</div>
              <div className="text-muted-foreground">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a community of passionate students dedicated to pushing the boundaries of technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="tech-card group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Learn & Develop</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Master cutting-edge technologies through workshops, tutorials, and hands-on projects guided by industry experts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="tech-card group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Collaborate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Work with like-minded peers on innovative projects, participate in hackathons, and build lasting connections.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="tech-card group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Compete & Win</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Showcase your skills in competitions, win exciting prizes, and gain recognition in the tech community.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Featured Events
              </h2>
              <p className="text-xl text-muted-foreground">
                Don't miss out on our upcoming workshops and competitions
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/events">
                View All Events <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="tech-card group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                    {event.type}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl group-hover:text-primary smooth-transition">
                      {event.title}
                    </CardTitle>
                    <Badge variant="outline" className="text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      {event.date}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {event.description}
                  </CardDescription>
                  <Button variant="outline" size="sm">
                    Learn More <ExternalLink className="ml-2 w-3 h-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-xl text-muted-foreground">
                Innovative solutions built by our talented members
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="tech-card group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl group-hover:text-primary smooth-transition">
                      {project.title}
                    </CardTitle>
                    <Badge 
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm">
                    View Details <ExternalLink className="ml-2 w-3 h-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join a community of innovators, builders, and dreamers. Let's create the future together.
          </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button 
               variant="hero" 
               size="lg" 
               className="text-lg px-8 py-3"
               asChild
             >
               <Link to="/join">
                 Become a Member <ArrowRight className="ml-2" />
               </Link>
             </Button>
             <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
               <Link to="/contact">
                 Get in Touch
               </Link>
             </Button>
           </div>
        </div>
      </section>
    </div>
  );
}