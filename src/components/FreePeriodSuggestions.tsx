import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BookOpen, Users, Lightbulb, Trophy, Clock, Star, Target, Zap } from 'lucide-react';

const studyResources = [
  {
    id: 1,
    type: "video",
    title: "Quadratic Equations Made Easy",
    subject: "Mathematics",
    duration: "15 min",
    difficulty: "Intermediate",
    rating: 4.8,
    description: "Visual explanation of solving quadratic equations"
  },
  {
    id: 2,
    type: "article",
    title: "Newton's Laws Simplified",
    subject: "Physics",
    duration: "8 min read",
    difficulty: "Beginner",
    rating: 4.6,
    description: "Understanding the three fundamental laws of motion"
  },
  {
    id: 3,
    type: "practice",
    title: "Chemical Bonding Quiz",
    subject: "Chemistry",
    duration: "10 min",
    difficulty: "Advanced",
    rating: 4.7,
    description: "Test your knowledge of ionic and covalent bonds"
  }
];

const microAssignments = [
  {
    id: 1,
    title: "Solve 5 Algebra Problems",
    subject: "Mathematics",
    estimatedTime: "10 min",
    points: 50,
    deadline: "End of day",
    difficulty: "Easy"
  },
  {
    id: 2,
    title: "Memorize 10 Spanish Vocabulary",
    subject: "Spanish",
    estimatedTime: "15 min",
    points: 75,
    deadline: "Tomorrow",
    difficulty: "Medium"
  },
  {
    id: 3,
    title: "Read Chapter Summary",
    subject: "History",
    estimatedTime: "12 min",
    points: 60,
    deadline: "This week",
    difficulty: "Easy"
  }
];

const skillBuilding = [
  {
    id: 1,
    title: "Python Basics: Variables",
    category: "Programming",
    duration: "20 min",
    level: "Beginner",
    icon: "💻",
    description: "Learn about variables and data types in Python"
  },
  {
    id: 2,
    title: "Creative Writing Prompt",
    category: "English",
    duration: "15 min",
    level: "Intermediate",
    icon: "✍️",
    description: "Practice descriptive writing with guided prompts"
  },
  {
    id: 3,
    title: "Mental Math Challenge",
    category: "Mathematics",
    duration: "10 min",
    level: "Advanced",
    icon: "🧮",
    description: "Improve calculation speed and accuracy"
  }
];

const groupActivities = [
  {
    id: 1,
    title: "Mini Science Quiz Battle",
    type: "quiz",
    participants: 8,
    maxParticipants: 12,
    duration: "20 min",
    startTime: "2:45 PM",
    subject: "General Science",
    organizer: "Alex Chen"
  },
  {
    id: 2,
    title: "Math Problem Solving Hackathon",
    type: "hackathon",
    participants: 6,
    maxParticipants: 8,
    duration: "30 min",
    startTime: "3:00 PM",
    subject: "Mathematics",
    organizer: "Sarah Johnson"
  },
  {
    id: 3,
    title: "English Debate: Climate Change",
    type: "discussion",
    participants: 4,
    maxParticipants: 10,
    duration: "25 min",
    startTime: "3:15 PM",
    subject: "English",
    organizer: "Michael Brown"
  }
];

const availablePeers = [
  {
    id: 1,
    name: "Emma Wilson",
    subject: "Mathematics",
    freeUntil: "3:30 PM",
    studyStyle: "Visual Learner",
    avatar: "/placeholder-avatar.jpg"
  },
  {
    id: 2,
    name: "David Kim",
    subject: "Physics",
    freeUntil: "3:45 PM",
    studyStyle: "Problem Solver",
    avatar: "/placeholder-avatar.jpg"
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    subject: "Chemistry",
    freeUntil: "4:00 PM",
    studyStyle: "Group Study",
    avatar: "/placeholder-avatar.jpg"
  }
];

function getDifficultyColor(difficulty: string) {
  switch (difficulty.toLowerCase()) {
    case "easy":
    case "beginner":
      return "bg-green-100 text-green-700";
    case "medium":
    case "intermediate":
      return "bg-yellow-100 text-yellow-700";
    case "hard":
    case "advanced":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export function FreePeriodSuggestions() {
  return (
    <div className="space-y-4">
      {/* Free Time Alert */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-blue-600" />
            <div>
              <h4 className="font-medium text-blue-900">Free Period Detected!</h4>
              <p className="text-sm text-blue-700">You have 45 minutes until your next class. Here are some suggestions:</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="study" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="study">Study</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
        </TabsList>
        
        <TabsContent value="study" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Recommended Study Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studyResources.map((resource) => (
                  <div key={resource.id} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">{resource.title}</h4>
                        <p className="text-sm text-muted-foreground">{resource.subject}</p>
                        <p className="text-sm">{resource.description}</p>
                      </div>
                      <Badge variant="outline" className={getDifficultyColor(resource.difficulty)}>
                        {resource.difficulty}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{resource.duration}</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{resource.rating}</span>
                        </div>
                      </div>
                      <Button size="sm">Start Learning</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tasks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Quick Micro-Assignments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {microAssignments.map((task) => (
                  <div key={task.id} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">{task.title}</h4>
                        <p className="text-sm text-muted-foreground">{task.subject}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-sm text-orange-600">
                          <Zap className="h-3 w-3" />
                          <span>{task.points} pts</span>
                        </div>
                        <Badge variant="outline" className={getDifficultyColor(task.difficulty)}>
                          {task.difficulty}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>⏱️ {task.estimatedTime}</span>
                        <span>📅 Due: {task.deadline}</span>
                      </div>
                      <Button size="sm">Start Task</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="skills" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Skill Building Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skillBuilding.map((skill) => (
                  <div key={skill.id} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <div>
                          <h4 className="font-medium">{skill.title}</h4>
                          <p className="text-sm text-muted-foreground">{skill.category}</p>
                          <p className="text-sm">{skill.description}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className={getDifficultyColor(skill.level)}>
                        {skill.level}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">⏱️ {skill.duration}</span>
                      <Button size="sm">Start Activity</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="social" className="space-y-4">
          {/* Group Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Live Group Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {groupActivities.map((activity) => (
                  <div key={activity.id} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">{activity.title}</h4>
                        <p className="text-sm text-muted-foreground">{activity.subject}</p>
                        <p className="text-sm">Organized by {activity.organizer}</p>
                      </div>
                      <Badge variant="outline" className="capitalize">
                        {activity.type}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>⏰ {activity.startTime}</span>
                        <span>⏱️ {activity.duration}</span>
                        <span>👥 {activity.participants}/{activity.maxParticipants}</span>
                      </div>
                      <Button size="sm" disabled={activity.participants >= activity.maxParticipants}>
                        {activity.participants >= activity.maxParticipants ? "Full" : "Join"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Available Peers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Study Buddies Available
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {availablePeers.map((peer) => (
                  <div key={peer.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={peer.avatar} alt={peer.name} />
                        <AvatarFallback>{peer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{peer.name}</p>
                        <p className="text-sm text-muted-foreground">{peer.subject} • {peer.studyStyle}</p>
                        <p className="text-xs text-green-600">Free until {peer.freeUntil}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Connect
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}