import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  UserPlus, 
  Code2, 
  Palette, 
  PenTool, 
  Users, 
  Calendar,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Heart,
  Star
} from "lucide-react";

export default function Join() {
  const roles = [
    {
      title: "Web Developer",
      icon: Code2,
      description: "Build amazing web applications using modern frameworks",
      skills: ["React", "Node.js", "JavaScript", "Python", "Database Design"],
      level: "Beginner to Advanced",
      commitment: "5-8 hours/week"
    },
    {
      title: "UI/UX Designer",
      icon: Palette,
      description: "Create beautiful and intuitive user experiences",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
      level: "Beginner to Advanced",
      commitment: "4-6 hours/week"
    },
    {
      title: "Content Writer",
      icon: PenTool,
      description: "Create engaging technical content and documentation",
      skills: ["Technical Writing", "Blog Writing", "Documentation", "SEO", "Social Media"],
      level: "Beginner to Intermediate",
      commitment: "3-5 hours/week"
    },
    {
      title: "Event Coordinator",
      icon: Calendar,
      description: "Organize workshops, hackathons, and networking events",
      skills: ["Event Planning", "Communication", "Leadership", "Project Management", "Marketing"],
      level: "Beginner to Advanced",
      commitment: "6-10 hours/week"
    },
    {
      title: "Community Manager",
      icon: Users,
      description: "Foster community engagement and manage social platforms",
      skills: ["Social Media", "Community Building", "Communication", "Analytics", "Content Strategy"],
      level: "Beginner to Intermediate",
      commitment: "4-7 hours/week"
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Fill Registration Form",
      description: "Complete our online registration form with your details and interests"
    },
    {
      step: 2,
      title: "Attend Orientation",
      description: "Join our next orientation session to learn about the club and meet the team"
    },
    {
      step: 3,
      title: "Choose Your Role",
      description: "Select one or more roles that match your skills and interests"
    },
    {
      step: 4,
      title: "Start Contributing",
      description: "Jump into projects and events based on your chosen role"
    }
  ];

  const faqs = [
    {
      question: "Do I need prior experience to join?",
      answer: "Not at all! We welcome students of all skill levels. We have mentorship programs and beginner-friendly projects to help you get started. What matters most is your enthusiasm to learn and contribute."
    },
    {
      question: "What is the time commitment?",
      answer: "It varies by role, but typically 3-10 hours per week. You can adjust your involvement based on your academic schedule. During exam periods, we're completely understanding if you need to reduce your participation."
    },
    {
      question: "Can I change roles later?",
      answer: "Absolutely! Many of our members contribute to multiple areas. You can start with one role and gradually take on others as you develop new skills or discover new interests."
    },
    {
      question: "Are there any membership fees?",
      answer: "No, membership is completely free! We believe in making technology education accessible to everyone. However, we do appreciate donations for organizing events and workshops."
    },
    {
      question: "How often do you meet?",
      answer: "We have weekly general meetings, role-specific sessions, and project work. All meetings are hybrid (both online and offline) to accommodate different schedules and preferences."
    },
    {
      question: "What programming languages should I know?",
      answer: "For developers, JavaScript and Python are most common, but we work with many technologies. Don't worry if you're not familiar with everything - we'll help you learn what you need for your projects."
    }
  ];

  const benefits = [
    "Hands-on experience with real projects",
    "Networking opportunities with industry professionals",
    "Certificate of participation and achievement",
    "Priority access to internship opportunities",
    "Skill development workshops and mentorship",
    "Leadership experience and team collaboration",
    "Portfolio building and career guidance",
    "Access to exclusive tech events and conferences"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/30">
            <UserPlus className="w-4 h-4 mr-2" />
            Join ROI Tech Club
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Start Your Tech Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join a community of passionate innovators, build amazing projects, and accelerate your career in technology.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-3">
            Apply Now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Available Roles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Choose Your Role
            </h2>
            <p className="text-xl text-muted-foreground">
              Find the perfect role that matches your skills and interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <Card key={index} className="tech-card group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{role.title}</CardTitle>
                    <CardDescription className="text-base">
                      {role.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Required Skills:</h4>
                        <div className="flex flex-wrap gap-1">
                          {role.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-2 text-primary" />
                          Level: {role.level}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-2 text-primary" />
                          {role.commitment}
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full mt-4">
                        Apply for This Role
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              How to Join
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to become part of our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <Card key={step.step} className="tech-card group text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-3">
              <ExternalLink className="w-5 h-5 mr-2" />
              Fill Registration Form
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Why Join Us?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Being part of ROI Tech Club opens doors to incredible opportunities, 
                lifelong friendships, and accelerated career growth in technology.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
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

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about joining our club
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="tech-card">
                <AccordionTrigger className="text-left hover:text-primary px-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-6 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards an exciting journey in technology. Apply now and become part of something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-3">
              Apply Now <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Contact Us First
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}