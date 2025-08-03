import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, ExternalLink, Plus } from "lucide-react";

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI & Machine Learning Workshop",
      date: "December 15, 2024",
      time: "2:00 PM - 6:00 PM",
      venue: "Computer Lab 101",
      description: "Hands-on workshop covering neural networks, deep learning frameworks, and practical ML applications. Learn to build your first AI model!",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Workshop",
      capacity: "50 students",
      status: "Open"
    },
    {
      id: 2,
      title: "Winter Hackathon 2024",
      date: "January 20-21, 2025",
      time: "9:00 AM - 9:00 PM",
      venue: "Main Auditorium",
      description: "48-hour coding challenge with exciting prizes worth ₹50,000. Team up with fellow coders and build innovative solutions.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Hackathon",
      capacity: "100 students",
      status: "Open"
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      date: "February 5, 2025",
      time: "10:00 AM - 4:00 PM",
      venue: "Computer Lab 102",
      description: "Complete bootcamp covering HTML, CSS, JavaScript, and React. Perfect for beginners wanting to start their web dev journey.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Bootcamp",
      capacity: "40 students",
      status: "Open"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Python Programming Contest",
      date: "November 10, 2024",
      description: "Competitive programming contest with algorithmic challenges and data structure problems.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Competition",
      participants: "75 students"
    },
    {
      id: 5,
      title: "Tech Talk: Industry Insights",
      date: "October 25, 2024",
      description: "Guest lecture by Google senior engineer on career paths and industry trends in software development.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Tech Talk",
      participants: "120 students"
    },
    {
      id: 6,
      title: "Mobile App Development Workshop",
      date: "September 18, 2024",
      description: "Full-day workshop on React Native development with hands-on project building.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Workshop",
      participants: "60 students"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/30">
            <Calendar className="w-4 h-4 mr-2" />
            Events & Workshops
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Join Our Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Participate in workshops, hackathons, and tech talks designed to enhance your skills and expand your network.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Upcoming Events
              </h2>
              <p className="text-xl text-muted-foreground">
                Register now to secure your spot!
              </p>
            </div>
            <Button variant="hero">
              <Plus className="w-4 h-4 mr-2" />
              Suggest Event
            </Button>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="tech-card overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          {event.type}
                        </Badge>
                        <Badge 
                          variant={event.status === "Open" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {event.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary smooth-transition">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <CardDescription className="text-base mb-6 leading-relaxed">
                        {event.description}
                      </CardDescription>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2 text-primary" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-2 text-primary" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2 text-primary" />
                          {event.venue}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="w-4 h-4 mr-2 text-primary" />
                          {event.capacity}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button variant="hero" className="flex-1">
                          Register Now
                        </Button>
                        <Button variant="outline">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Details
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

      {/* Past Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Past Events
            </h2>
            <p className="text-xl text-muted-foreground">
              Take a look at our successful events and workshops
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <Card key={event.id} className="tech-card group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                  />
                  <Badge className="absolute top-4 left-4 bg-secondary/90 text-secondary-foreground">
                    {event.type}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary smooth-transition">
                    {event.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {event.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      {event.participants}
                    </div>
                    <Button variant="outline" size="sm">
                      View Photos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Stay Updated with Our Events
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our mailing list to get notified about upcoming events, workshops, and special announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
            />
            <Button variant="hero" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}