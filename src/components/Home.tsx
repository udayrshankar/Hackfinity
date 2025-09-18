import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Calendar, Clock, TrendingUp, AlertTriangle, CheckCircle, Bell, BookOpen, Target } from 'lucide-react';

const currentTime = new Date().toLocaleTimeString('en-US', { 
  hour: '2-digit', 
  minute: '2-digit',
  hour12: true 
});

const nextClass = {
  subject: "Chemistry",
  teacher: "Dr. Williams", 
  time: "10:45 AM",
  room: "Lab 202",
  timeLeft: "15 minutes",
  type: "substitution"
};

const todayStats = {
  attendanceRate: 88,
  classesAttended: 2,
  totalClasses: 3,
  assignmentsDue: 2,
  completedTasks: 5
};

const recentNotifications = [
  {
    id: 1,
    type: "urgent",
    title: "Attendance Alert",
    message: "Math attendance dropped to 75%",
    time: "5 min ago",
    read: false
  },
  {
    id: 2,
    type: "assignment",
    title: "Physics Lab Due",
    message: "Due tomorrow at 11:59 PM",
    time: "1 hour ago", 
    read: false
  },
  {
    id: 3,
    type: "class",
    title: "Chemistry Substitution",
    message: "Dr. Williams replacing Dr. Brown",
    time: "2 hours ago",
    read: true
  }
];

const upcomingDeadlines = [
  {
    title: "Physics Lab Report",
    subject: "Physics",
    dueDate: "Tomorrow",
    priority: "high",
    progress: 75
  },
  {
    title: "Math Problem Set",
    subject: "Mathematics", 
    dueDate: "Friday",
    priority: "medium",
    progress: 50
  },
  {
    title: "History Essay",
    subject: "History",
    dueDate: "Next Week",
    priority: "low",
    progress: 0
  }
];

const weeklyGoals = [
  {
    title: "Improve Math Attendance",
    progress: 60,
    target: "90%"
  },
  {
    title: "Complete All Assignments",
    progress: 80,
    target: "100%"
  },
  {
    title: "Daily Study Hours",
    progress: 45,
    target: "3 hours"
  }
];

function getNotificationIcon(type: string) {
  switch (type) {
    case "urgent":
      return <AlertTriangle className="h-4 w-4 text-red-600" />;
    case "assignment":
      return <BookOpen className="h-4 w-4 text-blue-600" />;
    case "class":
      return <Calendar className="h-4 w-4 text-orange-600" />;
    default:
      return <Bell className="h-4 w-4 text-gray-600" />;
  }
}

function getPriorityColor(priority: string) {
  switch (priority) {
    case "high":
      return "border-l-red-500 bg-red-50";
    case "medium":
      return "border-l-orange-500 bg-orange-50";
    case "low":
      return "border-l-green-500 bg-green-50";
    default:
      return "border-l-gray-500 bg-gray-50";
  }
}

export function Home() {
  const unreadNotifications = recentNotifications.filter(n => !n.read).length;
  
  return (
    <div className="space-y-4">
      {/* Welcome Header */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Student" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div>
              <h2>Good Morning, John!</h2>
              <p className="text-sm text-muted-foreground">
                {currentTime} • Monday, September 17, 2025
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Attendance</p>
                <p className="text-2xl font-bold text-green-600">{todayStats.attendanceRate}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Tasks Done</p>
                <p className="text-2xl font-bold text-blue-600">{todayStats.completedTasks}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Next Class */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <Clock className="h-5 w-5" />
            Next Class
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-blue-900">{nextClass.subject}</h3>
                <p className="text-sm text-blue-700">
                  {nextClass.time} • {nextClass.room}
                </p>
                <p className="text-sm text-blue-700">with {nextClass.teacher}</p>
              </div>
              <div className="text-right">
                <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-200">
                  Substitution
                </Badge>
                <p className="text-sm text-blue-700 mt-1">in {nextClass.timeLeft}</p>
              </div>
            </div>
            <Button className="w-full">View Full Timetable</Button>
          </div>
        </CardContent>
      </Card>

      {/* Today's Progress */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Today's Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Classes Attended</span>
              <span className="text-sm font-medium">
                {todayStats.classesAttended}/{todayStats.totalClasses}
              </span>
            </div>
            <Progress 
              value={(todayStats.classesAttended / todayStats.totalClasses) * 100} 
              className="h-2" 
            />
          </div>
        </CardContent>
      </Card>

      {/* Recent Notifications */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Recent Updates
            {unreadNotifications > 0 && (
              <Badge variant="destructive" className="ml-2">
                {unreadNotifications}
              </Badge>
            )}
          </CardTitle>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentNotifications.slice(0, 3).map((notification) => (
              <div 
                key={notification.id} 
                className={`flex items-start gap-3 p-3 rounded-lg ${
                  notification.read ? 'bg-gray-50' : 'bg-blue-50'
                }`}
              >
                {getNotificationIcon(notification.type)}
                <div className="flex-1">
                  <p className="font-medium text-sm">{notification.title}</p>
                  <p className="text-sm text-muted-foreground">{notification.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                </div>
                {!notification.read && (
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Deadlines */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Upcoming Deadlines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingDeadlines.map((deadline, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg border-l-4 ${getPriorityColor(deadline.priority)}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium">{deadline.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {deadline.subject} • Due {deadline.dueDate}
                    </p>
                  </div>
                  <Badge variant="outline" className="capitalize">
                    {deadline.priority}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{deadline.progress}%</span>
                  </div>
                  <Progress value={deadline.progress} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Goals */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Weekly Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {weeklyGoals.map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{goal.title}</span>
                  <span className="text-sm text-muted-foreground">{goal.target}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{goal.progress}% complete</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}