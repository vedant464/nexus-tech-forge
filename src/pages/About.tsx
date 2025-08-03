import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users, Award, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Faculty Coordinator",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Computer Science Professor with 15+ years of experience in AI and Machine Learning",
      email: "sarah.johnson@college.edu"
    },
    {
      name: "Alex Chen",
      role: "Club President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Final year CS student passionate about full-stack development and open source",
      email: "alex.chen@student.college.edu"
    },
    {
      name: "Priya Sharma",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Data Science enthusiast with expertise in ML and competitive programming",
      email: "priya.sharma@student.college.edu"
    },
    {
      name: "Michael Rodriguez",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Mobile app developer and UI/UX designer with multiple published apps",
      email: "michael.rodriguez@student.college.edu"
    }
  ];

  const achievements = [
    {
      title: "National Hackathon Winner",
      description: "First place in TechCrunch Disrupt College Championship 2024",
      icon: Award,
      year: "2024"
    },
    {
      title: "Best Student Organization",
      description: "Recognized by the college for outstanding contribution to student life",
      icon: Users,
      year: "2023"
    },
    {
      title: "Innovation Award",
      description: "Won the State-level Innovation Competition for Smart Campus project",
      icon: Target,
      year: "2023"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/30">
            <Users className="w-4 h-4 mr-2" />
            About ROI Tech Club
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Building Tomorrow's Tech Leaders
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Since 2020, we've been fostering innovation, collaboration, and technical excellence 
            among students passionate about technology and programming.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="tech-card group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To empower students with cutting-edge technical skills, foster innovation through 
                  collaborative projects, and build a community of future tech leaders who will 
                  shape the digital world.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="tech-card group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To be the premier technical club that bridges the gap between academic learning 
                  and industry requirements, creating opportunities for students to excel in 
                  technology and entrepreneurship.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="tech-card group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Innovation, Collaboration, Excellence, and Inclusion. We believe in learning 
                  together, sharing knowledge freely, and creating an environment where every 
                  member can thrive and grow.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  ROI Tech Club was founded in 2020 by a group of passionate computer science students 
                  who wanted to create a platform for peer learning and collaboration. What started 
                  as a small study group has now grown into one of the most active technical 
                  communities on campus.
                </p>
                <p>
                  Our journey began with just 10 members organizing weekly coding sessions in the 
                  library. Today, we proudly serve over 150 active members, host monthly hackathons, 
                  and maintain partnerships with leading tech companies for internships and placements.
                </p>
                <p>
                  We've organized over 50 events, built 25+ innovative projects, and helped hundreds 
                  of students kickstart their careers in technology. Our alumni work at top companies 
                  like Google, Microsoft, Amazon, and many successful startups.
                </p>
              </div>
              <Button variant="hero" className="mt-8" asChild>
                <Link to="/join">
                  Be Part of Our Story <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated leaders who make our community thrive
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="tech-card group text-center">
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto group-hover:scale-110 smooth-transition"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full"></div>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto w-fit">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-4">
                    {member.bio}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="w-full">
                    Contact
                  </Button>
                </CardContent>
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
              Our Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recognition and awards that showcase our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="tech-card group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 smooth-transition">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="outline">{achievement.year}</Badge>
                    </div>
                    <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {achievement.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Want to Learn More?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our team or join our community to discover more about what we do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/join">
                Join Our Club
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}