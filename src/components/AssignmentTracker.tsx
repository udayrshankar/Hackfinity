import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts';
import { BookOpen, Clock, CheckCircle, AlertTriangle, TrendingUp, FileText } from 'lucide-react';

const assignments = [
  {
    id: 1,
    title: "Physics Lab Report",
    subject: "Physics",
    dueDate: "2025-09-18",
    status: "pending",
    progress: 75,
    priority: "high",
    description: "Complete analysis of pendulum experiment"
  },
  {
    id: 2,
    title: "Mathematics Problem Set",
    subject: "Mathematics",
    dueDate: "2025-09-20",
    status: "in-progress",
    progress: 50,
    priority: "medium",
    description: "Solve differential equations chapter 5"
  },
  {
    id: 3,
    title: "History Essay",
    subject: "History",
    dueDate: "2025-09-22",
    status: "not-started",
    progress: 0,
    priority: "medium",
    description: "World War II impact analysis"
  },
  {
    id: 4,
    title: "Chemistry Project",
    subject: "Chemistry",
    dueDate: "2025-09-25",
    status: "not-started",
    progress: 0,
    priority: "low",
    description: "Organic compounds research project"
  },
  {
    id: 5,
    title: "English Presentation",
    subject: "English",
    dueDate: "2025-09-15",
    status: "completed",
    progress: 100,
    priority: "high",
    description: "Shakespeare's Hamlet analysis"
  }
];

const academicProgress = [
  { month: 'Aug', mathematics: 85, physics: 78, chemistry: 92, english: 88, history: 82 },
  { month: 'Sep', mathematics: 88, physics: 82, chemistry: 89, english: 90, history: 85 },
];

const weeklyProgress = [
  { week: 'Week 1', completed: 12, assigned: 15 },
  { week: 'Week 2', completed: 8, assigned: 10 },
  { week: 'Week 3', completed: 15, assigned: 18 },
  { week: 'Week 4', completed: 10, assigned: 12 },
];

function getDaysUntilDue(dueDate: string) {
  const today = new Date();
  const due = new Date(dueDate);
  const diffTime = due.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function getStatusColor(status: string) {
  switch (status) {
    case "completed": return "bg-green-100 text-green-700 border-green-200";
    case "in-progress": return "bg-blue-100 text-blue-700 border-blue-200";
    case "pending": return "bg-orange-100 text-orange-700 border-orange-200";
    case "not-started": return "bg-gray-100 text-gray-700 border-gray-200";
    default: return "bg-gray-100 text-gray-700 border-gray-200";
  }
}

function getPriorityColor(priority: string) {
  switch (priority) {
    case "high": return "text-red-600";
    case "medium": return "text-orange-600";
    case "low": return "text-green-600";
    default: return "text-gray-600";
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case "completed": return <CheckCircle className="h-4 w-4 text-green-600" />;
    case "in-progress": return <Clock className="h-4 w-4 text-blue-600" />;
    case "pending": return <AlertTriangle className="h-4 w-4 text-orange-600" />;
    case "not-started": return <FileText className="h-4 w-4 text-gray-600" />;
    default: return <FileText className="h-4 w-4 text-gray-600" />;
  }
}

export function AssignmentTracker() {
  const pendingAssignments = assignments.filter(a => a.status !== "completed");
  const completedAssignments = assignments.filter(a => a.status === "completed");
  
  return (
    <div className="space-y-4">
      {/* Overview Cards */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Active</p>
                <p className="text-2xl font-bold">{pendingAssignments.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold">{completedAssignments.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pending" className="space-y-3">
          {pendingAssignments.map((assignment) => {
            const daysLeft = getDaysUntilDue(assignment.dueDate);
            return (
              <Card key={assignment.id} className={getStatusColor(assignment.status)}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(assignment.status)}
                          <h4 className="font-medium">{assignment.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                        <p className="text-sm">{assignment.description}</p>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant="outline" 
                          className={`${getPriorityColor(assignment.priority)} capitalize`}
                        >
                          {assignment.priority}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{assignment.progress}%</span>
                      </div>
                      <Progress value={assignment.progress} className="h-2" />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">
                        Due: {new Date(assignment.dueDate).toLocaleDateString()}
                      </p>
                      <div className="text-sm">
                        {daysLeft > 0 ? (
                          <span className={daysLeft <= 2 ? "text-red-600" : "text-muted-foreground"}>
                            {daysLeft} day{daysLeft > 1 ? 's' : ''} left
                          </span>
                        ) : (
                          <span className="text-red-600 font-medium">Overdue</span>
                        )}
                      </div>
                    </div>
                    
                    <Button size="sm" className="w-full">
                      Continue Working
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-3">
          {completedAssignments.map((assignment) => (
            <Card key={assignment.id} className={getStatusColor(assignment.status)}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(assignment.status)}
                      <h4 className="font-medium">{assignment.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                    <p className="text-sm">Submitted: {new Date(assignment.dueDate).toLocaleDateString()}</p>
                  </div>
                  <Badge variant="outline" className="text-green-600">
                    Completed
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="analytics" className="space-y-4">
          {/* Academic Progress Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Academic Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={academicProgress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Line type="monotone" dataKey="mathematics" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="physics" stroke="#ef4444" strokeWidth={2} />
                    <Line type="monotone" dataKey="chemistry" stroke="#10b981" strokeWidth={2} />
                    <Line type="monotone" dataKey="english" stroke="#f59e0b" strokeWidth={2} />
                    <Line type="monotone" dataKey="history" stroke="#8b5cf6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Mathematics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Physics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Chemistry</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>English</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>History</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Weekly Completion Rate */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Completion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyProgress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Bar dataKey="completed" fill="#10b981" radius={4} />
                    <Bar dataKey="assigned" fill="#e5e7eb" radius={4} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex gap-4 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span>Assigned</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}