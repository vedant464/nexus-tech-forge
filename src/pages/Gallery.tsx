import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Calendar, Users, ExternalLink, Download, Filter, Grid, List } from "lucide-react";
import { useState } from "react";

export default function Gallery() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const photoAlbums = [
    {
      id: 1,
      title: "AI Workshop November 2024",
      date: "November 15, 2024",
      category: "Workshops",
      description: "Hands-on machine learning workshop with 50+ participants learning neural networks and practical AI applications.",
      coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      photoCount: 45,
      participants: 52,
      photos: [
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: 2,
      title: "Hackathon 2024 Finals",
      date: "October 20-21, 2024",
      category: "Hackathons",
      description: "48-hour coding marathon with innovative projects, industry mentors, and exciting prizes.",
      coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      photoCount: 78,
      participants: 120,
      photos: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      date: "September 28, 2024",
      category: "Workshops",
      description: "Full-day bootcamp covering modern web technologies from HTML/CSS to React and Node.js.",
      coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      photoCount: 32,
      participants: 40,
      photos: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: 4,
      title: "Tech Talk: Industry Insights",
      date: "September 10, 2024",
      category: "Tech Talks",
      description: "Guest lecture by Google senior engineer discussing career paths and latest industry trends.",
      coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      photoCount: 28,
      participants: 85,
      photos: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: 5,
      title: "Team Building Retreat",
      date: "August 15, 2024",
      category: "Social",
      description: "Annual team retreat with outdoor activities, networking sessions, and fun challenges.",
      coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      photoCount: 56,
      participants: 75,
      photos: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
    },
    {
      id: 6,
      title: "Python Programming Contest",
      date: "July 22, 2024",
      category: "Competitions",
      description: "Competitive programming contest with algorithmic challenges and data structure problems.",
      coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      photoCount: 35,
      participants: 65,
      photos: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ]
    }
  ];

  const categories = ['All', 'Workshops', 'Hackathons', 'Tech Talks', 'Competitions', 'Social'];
  
  const filteredAlbums = selectedCategory === 'All' 
    ? photoAlbums 
    : photoAlbums.filter(album => album.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/30">
            <Camera className="w-4 h-4 mr-2" />
            Photo Gallery
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Memories & Moments
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of photos from workshops, hackathons, tech talks, and community events.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-center gap-4">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge 
                    key={category} 
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground smooth-transition"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Albums */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAlbums.map((album) => (
                <Card key={album.id} className="tech-card group overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={album.coverImage} 
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                      {album.category}
                    </Badge>
                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-sm">
                      {album.photoCount} photos
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary smooth-transition">
                      {album.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {album.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {album.date}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {album.participants}
                      </div>
                    </div>

                    {/* Preview Photos */}
                    <div className="flex gap-1 mb-4">
                      {album.photos.slice(0, 3).map((photo, index) => (
                        <img
                          key={index}
                          src={photo}
                          alt={`Preview ${index + 1}`}
                          className="w-16 h-16 object-cover rounded"
                        />
                      ))}
                      {album.photoCount > 3 && (
                        <div className="w-16 h-16 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
                          +{album.photoCount - 3}
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink className="w-3 h-3 mr-2" />
                        View Album
                      </Button>
                      <Button variant="outline" size="icon">
                        <Download className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredAlbums.map((album) => (
                <Card key={album.id} className="tech-card overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={album.coverImage} 
                        alt={album.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <Badge className="mb-2 bg-primary/20 text-primary border-primary/30">
                            {album.category}
                          </Badge>
                          <h3 className="text-2xl font-bold mb-2">{album.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{album.description}</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-primary" />
                          {album.date}
                        </div>
                        <div className="flex items-center">
                          <Camera className="w-4 h-4 mr-2 text-primary" />
                          {album.photoCount} photos
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2 text-primary" />
                          {album.participants} participants
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button variant="hero">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Full Album
                        </Button>
                        <Button variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {filteredAlbums.length === 0 && (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-bold mb-2">No photos found</h3>
              <p className="text-muted-foreground">
                Try selecting a different category or check back later for new content.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Upload CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Captured a Great Moment?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Share your photos from our events and help build our community gallery. Every moment counts!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Camera className="w-5 h-5 mr-2" />
              Upload Photos
            </Button>
            <Button variant="outline" size="lg">
              Guidelines
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}