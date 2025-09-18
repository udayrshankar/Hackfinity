import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Switch } from "./ui/switch";
import { Calendar, Clock, Target, BookOpen, Zap, CheckCircle, Plus } from 'lucide-react';

const todayRoutine = [
  {
    id: 1,
    time: "8:30 AM",
    type: "class",
    title: "Morning Assembly",
    duration: "15 min",
    status: "completed",
    location: "Main Hall"
  },
  {
    id: 2,
    time: "9:00 AM",
    type: "class",
    title: "Mathematics",
    duration: "45 min",
    status: "completed",
    location: "Room 101",
    teacher: "Dr. Smith"
  },
  {
    id: 3,
    time: "9:45 AM",
    type: "class",
    title: "Physics",
    duration: "45 min",
    status: "ongoing",
    location: "Lab 201",
    teacher: "Prof. Johnson"
  },
  {
    id: 4,
    time: "10:30 AM",
    type: "break",
    title: "Short Break",
    duration: "15 min",
    status: "upcoming"
  },
  {
    id: 5,
    time: "10:45 AM",
    type: "class",
    title: "Chemistry",
    duration: "45 min",
    status: "upcoming",
    location: "Lab 202",
    teacher: "Dr. Williams"
  },
  {
    id: 6,
    time: "11:30 AM",
    type: "study",
    title: "Review Physics Notes",
    duration: "30 min",
    status: "upcoming",
    priority: "high",
    aiGenerated: true
  },
  {
    id: 7,
    time: "12:00 PM",
    type: "class",
    title: "English",
    duration: "45 min",
    status: "upcoming",
    location: "Room 105",
    teacher: "Ms. Davis"
  },
  {
    id: 8,
    time: "12:45 PM",
    type: "break",
    title: "Lunch Break",
    duration: "60 min",
    status: "upcoming"
  },
  {
    id: 9,
    time: "1:45 PM",
    type: "study",
    title: "Complete Math Assignment",
    duration: "45 min",
    status: "upcoming",
    priority: "medium",
    aiGenerated: true
  },
  {
    id: 10,
    time: "2:30 PM",
    type: "free",
    title: "Free Period",
    duration: "45 min",
    status: "upcoming"
  },
  {
    id: 11,
    time: "3:15 PM",
    type: "study",
    title: "Prepare for Chemistry Quiz",
    duration: "30 min",
    status: "upcoming",
    priority: "high",
    aiGenerated: true
  }
];

const weeklyGoals = [
  {
    id: 1,
    title: "Complete Physics Lab Report",
    progress: 75,
    deadline: "Thursday",
    priority: "high"
  },
  {
    id: 2,
    title: "Study for Math Quiz",
    progress: 50,
    deadline: "Friday",
    priority: "medium"
  },
  {
    id: 3,
    title: "Read History Chapter 8",
    progress: 90,
    deadline: "Wednesday",
    priority: "low"
  }
];

const suggestions = [
  {
    id: 1,
    type: "time-optimization",
    title: "Optimize Study Time",
    description: "Move Physics review to after Chemistry class for better retention",
    impact: "15 min saved"
  },
  {
    id: 2,
    type: "break-suggestion",
    title: "Add Walking Break",
    description: "Consider a 10-minute walk after lunch to improve afternoon focus",
    impact: "Better concentration"
  },
  {
    id: 3,
    type: "study-technique",
    title: "Use Pomodoro Technique",
    description: "Break your 45-min Math assignment into 2 focused 20-min sessions",
    impact: "Improved efficiency"
  }
];

function getTypeIcon(type: string) {
  switch (type) {
    case "class": return <BookOpen className="h-4 w-4" />;
    case "study": return <Target className="h-4 w-4" />;
    case "break": return <Clock className="h-4 w-4" />;
    case "free": return <Zap className="h-4 w-4" />;
    default: return <Calendar className="h-4 w-4" />;
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "completed": return "bg-green-100 text-green-700 border-green-200";
    case "ongoing": return "bg-blue-100 text-blue-700 border-blue-200";
    case "upcoming": return "bg-gray-50 text-gray-700 border-gray-200";
    default: return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

function getPriorityColor(priority?: string) {
  switch (priority) {
    case "high": return "text-red-600";
    case "medium": return "text-orange-600";
    case "low": return "text-green-600";
    default: return "text-gray-600";
  }
}

export function DailyRoutine() {
  return (
    <div className="space-y-4">
      {/* Daily Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Today's Routine
          </CardTitle>
          <p className="text-sm text-muted-foreground">Monday, September 17, 2025</p>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-muted-foreground">
              2 completed • 1 ongoing • 8 upcoming
            </div>
            <Button size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-1" />
              Add Task
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="today" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="suggestions">AI Tips</TabsTrigger>
        </TabsList>
        
        <TabsContent value="today" className="space-y-3">
          {todayRoutine.map((item) => (
            <Card key={item.id} className={getStatusColor(item.status)}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {getTypeIcon(item.type)}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{item.title}</h4>
                      <div className="flex items-center gap-2">
                        {item.aiGenerated && (
                          <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700">
                            AI
                          </Badge>
                        )}
                        {item.priority && (
                          <Badge variant="outline" className={`text-xs ${getPriorityColor(item.priority)}`}>
                            {item.priority}
                          </Badge>
                        )}
                        {item.status === "completed" && (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{item.time}</span>
                      <span>{item.duration}</span>
                      {item.location && <span>{item.location}</span>}
                      {item.teacher && <span>with {item.teacher}</span>}
                    </div>
                    
                    {item.status === "ongoing" && (
                      <div className="mt-2">
                        <div className="flex items-center gap-2 text-sm text-blue-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                          <span>In progress</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="week" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyGoals.map((goal) => (
                  <div key={goal.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{goal.title}</h4>
                      <Badge variant="outline" className={getPriorityColor(goal.priority)}>
                        {goal.priority}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Due: {goal.deadline}</span>
                      <span>{goal.progress}% complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Study Schedule Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Auto-schedule study sessions</p>
                    <p className="text-sm text-muted-foreground">Let AI plan your study time</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Break reminders</p>
                    <p className="text-sm text-muted-foreground">Get notified to take breaks</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Focus time blocking</p>
                    <p className="text-sm text-muted-foreground">Block distractions during study</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="suggestions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-purple-600" />
                AI-Powered Suggestions
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Based on your schedule and study patterns
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {suggestions.map((suggestion) => (
                  <div key={suggestion.id} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">{suggestion.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {suggestion.description}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-green-600">
                        {suggestion.impact}
                      </Badge>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm">Apply</Button>
                      <Button size="sm" variant="outline">Dismiss</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Productivity Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-900">
                    📊 You're most productive between 10 AM - 12 PM. Consider scheduling challenging tasks during this time.
                  </p>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-900">
                    ✅ You've completed 85% of your planned tasks this week. Great job!
                  </p>
                </div>
                
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-900">
                    ⚡ Try the Pomodoro Technique for your longer study sessions to maintain focus.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}