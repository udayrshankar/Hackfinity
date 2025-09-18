import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { BookOpen, Video, FileText, Download, Star, Search, Filter, Eye } from 'lucide-react';

const resources = {
  documents: [
    {
      id: 1,
      title: "Calculus Fundamentals Guide",
      subject: "Mathematics",
      type: "PDF",
      size: "2.4 MB",
      rating: 4.8,
      downloads: 1250,
      uploadDate: "2025-09-10",
      description: "Comprehensive guide covering limits, derivatives, and integrals"
    },
    {
      id: 2,
      title: "Physics Formula Sheet",
      subject: "Physics",
      type: "PDF",
      size: "1.2 MB",
      rating: 4.9,
      downloads: 890,
      uploadDate: "2025-09-12",
      description: "All essential physics formulas in one place"
    },
    {
      id: 3,
      title: "Chemistry Lab Manual",
      subject: "Chemistry",
      type: "PDF",
      size: "5.1 MB",
      rating: 4.6,
      downloads: 567,
      uploadDate: "2025-09-08",
      description: "Step-by-step lab procedures and safety guidelines"
    }
  ],
  videos: [
    {
      id: 1,
      title: "Understanding Quantum Physics",
      subject: "Physics",
      duration: "45:30",
      quality: "1080p",
      rating: 4.7,
      views: 15420,
      uploadDate: "2025-09-05",
      description: "Introduction to quantum mechanics and wave-particle duality"
    },
    {
      id: 2,
      title: "Advanced Algebra Techniques",
      subject: "Mathematics", 
      duration: "32:15",
      quality: "720p",
      rating: 4.5,
      views: 8920,
      uploadDate: "2025-09-11",
      description: "Master complex algebraic equations and problem-solving"
    },
    {
      id: 3,
      title: "Organic Chemistry Reactions",
      subject: "Chemistry",
      duration: "28:45",
      quality: "1080p",
      rating: 4.8,
      views: 12350,
      uploadDate: "2025-09-07",
      description: "Visual breakdown of major organic reaction mechanisms"
    }
  ],
  references: [
    {
      id: 1,
      title: "Modern History Timeline",
      subject: "History",
      type: "Interactive",
      rating: 4.6,
      usage: 2340,
      uploadDate: "2025-09-09",
      description: "Interactive timeline of 20th century events"
    },
    {
      id: 2,
      title: "Periodic Table Explorer",
      subject: "Chemistry",
      type: "Interactive",
      rating: 4.9,
      usage: 5670,
      uploadDate: "2025-09-06",
      description: "Comprehensive periodic table with element details"
    },
    {
      id: 3,
      title: "Literary Analysis Templates",
      subject: "English",
      type: "Template",
      rating: 4.4,
      usage: 1890,
      uploadDate: "2025-09-13",
      description: "Structured templates for analyzing literature"
    }
  ]
};

const recentlyViewed = [
  {
    title: "Calculus Fundamentals Guide",
    subject: "Mathematics",
    type: "PDF",
    viewedAt: "2 hours ago"
  },
  {
    title: "Understanding Quantum Physics",
    subject: "Physics", 
    type: "Video",
    viewedAt: "1 day ago"
  },
  {
    title: "Chemistry Lab Manual",
    subject: "Chemistry",
    type: "PDF",
    viewedAt: "2 days ago"
  }
];

const recommendations = [
  {
    title: "Advanced Calculus Problems",
    subject: "Mathematics",
    type: "Practice Set",
    reason: "Based on your recent Calculus study"
  },
  {
    title: "Physics Simulation Lab",
    subject: "Physics",
    type: "Interactive",
    reason: "Complements your Quantum Physics viewing"
  },
  {
    title: "Molecular Modeling Tutorial",
    subject: "Chemistry",
    type: "Video",
    reason: "Follows your lab manual study"
  }
];

function getTypeIcon(type: string) {
  switch (type.toLowerCase()) {
    case 'pdf':
    case 'document':
      return <FileText className="h-4 w-4" />;
    case 'video':
      return <Video className="h-4 w-4" />;
    case 'interactive':
    case 'template':
      return <BookOpen className="h-4 w-4" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
}

function getSubjectColor(subject: string) {
  const colors = {
    'Mathematics': 'bg-blue-100 text-blue-700',
    'Physics': 'bg-red-100 text-red-700',
    'Chemistry': 'bg-green-100 text-green-700',
    'English': 'bg-purple-100 text-purple-700',
    'History': 'bg-orange-100 text-orange-700'
  };
  return colors[subject as keyof typeof colors] || 'bg-gray-100 text-gray-700';
}

export function ResourceLibrary() {
  return (
    <div className="space-y-4">
      {/* Search and Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search resources..." className="pl-10" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Access */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Recently Viewed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentlyViewed.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  {getTypeIcon(item.type)}
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.subject} • {item.type}</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">{item.viewedAt}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="documents" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="references">References</TabsTrigger>
          <TabsTrigger value="recommended">For You</TabsTrigger>
        </TabsList>
        
        <TabsContent value="documents" className="space-y-3">
          {resources.documents.map((doc) => (
            <Card key={doc.id}>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 mt-1 text-blue-600" />
                      <div className="space-y-1">
                        <h4 className="font-medium">{doc.title}</h4>
                        <p className="text-sm text-muted-foreground">{doc.description}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className={getSubjectColor(doc.subject)}>
                            {doc.subject}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{doc.size}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{doc.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        <span>{doc.downloads}</span>
                      </div>
                      <span>{new Date(doc.uploadDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Preview</Button>
                      <Button size="sm">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="videos" className="space-y-3">
          {resources.videos.map((video) => (
            <Card key={video.id}>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <Video className="h-5 w-5 mt-1 text-red-600" />
                      <div className="space-y-1">
                        <h4 className="font-medium">{video.title}</h4>
                        <p className="text-sm text-muted-foreground">{video.description}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className={getSubjectColor(video.subject)}>
                            {video.subject}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{video.duration}</span>
                          <span className="text-sm text-muted-foreground">{video.quality}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{video.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{video.views.toLocaleString()}</span>
                      </div>
                      <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Add to Playlist</Button>
                      <Button size="sm">Watch Now</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="references" className="space-y-3">
          {resources.references.map((ref) => (
            <Card key={ref.id}>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 mt-1 text-green-600" />
                      <div className="space-y-1">
                        <h4 className="font-medium">{ref.title}</h4>
                        <p className="text-sm text-muted-foreground">{ref.description}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className={getSubjectColor(ref.subject)}>
                            {ref.subject}
                          </Badge>
                          <Badge variant="outline">{ref.type}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{ref.rating}</span>
                      </div>
                      <span>{ref.usage} users</span>
                      <span>{new Date(ref.uploadDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Bookmark</Button>
                      <Button size="sm">Open</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="recommended" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-purple-600" />
                Recommended for You
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Based on your study patterns and interests
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        {getTypeIcon(item.type)}
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.reason}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="outline" className={getSubjectColor(item.subject)}>
                              {item.subject}
                            </Badge>
                            <Badge variant="outline">{item.type}</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm">View Resource</Button>
                      <Button size="sm" variant="outline">Save for Later</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Study Goals Integration */}
          <Card>
            <CardHeader>
              <CardTitle>Goal-Based Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-900">Math Quiz Preparation</p>
                  <p className="text-sm text-blue-700">Practice problems and formula sheets for your upcoming quiz</p>
                  <Button size="sm" className="mt-2">View Resources</Button>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-900">Physics Lab Report</p>
                  <p className="text-sm text-green-700">Templates and examples for your pending lab report</p>
                  <Button size="sm" className="mt-2">View Resources</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}