import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Trophy, Star, Users, Code, Calendar } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Smart Campus Navigator",
      description: "AI-powered navigation system for our college campus with real-time location tracking, route optimization, and facility information.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js", "MongoDB", "Google Maps API", "Machine Learning"],
      status: "Completed",
      team: "Alex Chen, Priya Sharma, David Kim",
      duration: "6 months",
      github: "https://github.com/roitech/smart-campus-navigator",
      demo: "https://campus-navigator.demo.com",
      features: [
        "Real-time indoor navigation",
        "Crowd-sourced facility updates",
        "Accessibility route planning",
        "Multi-language support"
      ]
    },
    {
      id: 2,
      title: "Student Grade Analyzer",
      description: "Comprehensive data visualization tool for academic performance tracking with predictive analytics and personalized recommendations.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Python", "Flask", "Chart.js", "PostgreSQL", "Pandas"],
      status: "In Progress",
      team: "Sarah Wilson, Michael Rodriguez, Lisa Zhang",
      duration: "4 months",
      github: "https://github.com/roitech/grade-analyzer",
      demo: null,
      features: [
        "Interactive grade visualization",
        "Performance prediction",
        "Study recommendations",
        "Progress tracking"
      ]
    },
    {
      id: 3,
      title: "Event Management System",
      description: "Complete event management platform for student organizations with registration, ticketing, and analytics capabilities.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Vue.js", "Express.js", "MySQL", "Stripe API", "Socket.io"],
      status: "Completed",
      team: "Emma Johnson, Ryan Patel, Jessica Lee",
      duration: "5 months",
      github: "https://github.com/roitech/event-management",
      demo: "https://event-manager.demo.com",
      features: [
        "Event creation and management",
        "Online payment integration",
        "Real-time attendance tracking",
        "Email notifications"
      ]
    },
    {
      id: 4,
      title: "Library Resource Optimizer",
      description: "Smart system to optimize library resource allocation using occupancy prediction and automated book recommendation.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["Django", "React", "TensorFlow", "Redis", "PostgreSQL"],
      status: "In Progress",
      team: "Mark Thompson, Ana Garcia, Kevin Wong",
      duration: "3 months",
      github: "https://github.com/roitech/library-optimizer",
      demo: null,
      features: [
        "Occupancy prediction",
        "Resource recommendation",
        "Automated inventory management",
        "Usage analytics"
      ]
    }
  ];

  const achievements = [
    {
      title: "TechCrunch Disrupt Winner",
      project: "Smart Campus Navigator",
      description: "First place in the college category with ₹1,00,000 prize",
      date: "March 2024"
    },
    {
      title: "State Innovation Award",
      project: "Event Management System",
      description: "Recognized as best student innovation project",
      date: "January 2024"
    },
    {
      title: "Open Source Contribution",
      project: "Multiple Projects",
      description: "Over 500+ GitHub stars across our open source projects",
      date: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/30">
            <Code className="w-4 h-4 mr-2" />
            Projects & Achievements
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Building the Future
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore innovative projects built by our talented members, showcasing creativity, technical excellence, and real-world impact.
          </p>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Innovative solutions addressing real-world challenges
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={project.id} className="tech-card overflow-hidden">
                <div className={`lg:flex ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 p-6 lg:p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <Badge 
                          variant={project.status === "Completed" ? "default" : "secondary"}
                          className="text-sm"
                        >
                          {project.status}
                        </Badge>
                        <div className="flex gap-2">
                          {project.github && (
                            <Button variant="outline" size="icon" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                          {project.demo && (
                            <Button variant="outline" size="icon" asChild>
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-3">{project.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed mb-4">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="w-4 h-4 mr-2 text-primary" />
                          {project.team}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2 text-primary" />
                          {project.duration}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-muted-foreground">
                              <Star className="w-3 h-3 mr-2 mt-1 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        {project.demo ? (
                          <Button variant="hero" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        ) : (
                          <Button variant="hero" disabled>
                            Coming Soon
                          </Button>
                        )}
                        <Button variant="outline" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Awards & Recognition
            </h2>
            <p className="text-xl text-muted-foreground">
              Celebrating excellence and innovation in our projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="tech-card group text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  <Badge variant="outline" className="mx-auto w-fit">
                    {achievement.project}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {achievement.description}
                  </CardDescription>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {achievement.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Contribution CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Want to Contribute?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our project teams and work on exciting innovations. Whether you're a beginner or experienced, there's a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Join a Project Team
            </Button>
            <Button variant="outline" size="lg">
              Propose New Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}