import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Bell, AlertTriangle, Calendar, BookOpen, Users, Clock, CheckCircle } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: "urgent",
    category: "attendance",
    title: "Attendance Alert",
    message: "Your Mathematics attendance has dropped to 75%. Immediate attention required.",
    timestamp: "2 minutes ago",
    read: false,
    icon: AlertTriangle,
    color: "text-red-600"
  },
  {
    id: 2,
    type: "info",
    category: "class",
    title: "Class Substitution",
    message: "Chemistry class (11:30 AM) will be taken by Dr. Williams instead of Dr. Brown.",
    timestamp: "15 minutes ago",
    read: false,
    icon: Users,
    color: "text-orange-600"
  },
  {
    id: 3,
    type: "assignment",
    category: "assignment",
    title: "Assignment Due Tomorrow",
    message: "Physics lab report is due tomorrow at 11:59 PM. Don't forget to submit!",
    timestamp: "1 hour ago",
    read: false,
    icon: BookOpen,
    color: "text-blue-600"
  },
  {
    id: 4,
    type: "event",
    category: "event",
    title: "Science Exhibition",
    message: "Annual Science Exhibition registration starts tomorrow. Prepare your projects!",
    timestamp: "2 hours ago",
    read: true,
    icon: Calendar,
    color: "text-green-600"
  },
  {
    id: 5,
    type: "class",
    category: "class",
    title: "Class Cancelled",
    message: "History class (1:45 PM) has been cancelled due to teacher unavailability.",
    timestamp: "3 hours ago",
    read: true,
    icon: Clock,
    color: "text-gray-600"
  },
  {
    id: 6,
    type: "info",
    category: "general",
    title: "Exam Schedule Released",
    message: "Mid-term examination schedule has been published. Check your dashboard.",
    timestamp: "1 day ago",
    read: true,
    icon: Calendar,
    color: "text-purple-600"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Physics Lab Exam",
    date: "September 20, 2025",
    time: "10:00 AM",
    type: "exam"
  },
  {
    id: 2,
    title: "Mathematics Quiz",
    date: "September 22, 2025",
    time: "9:00 AM",
    type: "quiz"
  },
  {
    id: 3,
    title: "Science Fair",
    date: "September 25, 2025",
    time: "2:00 PM",
    type: "event"
  }
];

function getNotificationBg(type: string, read: boolean) {
  if (read) return "bg-gray-50";
  
  switch (type) {
    case "urgent": return "bg-red-50 border-l-4 border-l-red-500";
    case "assignment": return "bg-blue-50 border-l-4 border-l-blue-500";
    case "event": return "bg-green-50 border-l-4 border-l-green-500";
    default: return "bg-orange-50 border-l-4 border-l-orange-500";
  }
}

export function Notifications() {
  const unreadCount = notifications.filter(n => !n.read).length;
  
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
            {unreadCount > 0 && (
              <Badge variant="destructive" className="ml-2">
                {unreadCount}
              </Badge>
            )}
          </CardTitle>
          <Button variant="outline" size="sm">
            Mark All Read
          </Button>
        </CardHeader>
      </Card>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="urgent">Urgent</TabsTrigger>
          <TabsTrigger value="assignments">Tasks</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-3">
          {notifications.map((notification) => {
            const IconComponent = notification.icon;
            return (
              <Card key={notification.id} className={getNotificationBg(notification.type, notification.read)}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <IconComponent className={`h-5 w-5 mt-0.5 ${notification.color}`} />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{notification.title}</h4>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>
        
        <TabsContent value="urgent" className="space-y-3">
          {notifications.filter(n => n.type === "urgent").map((notification) => {
            const IconComponent = notification.icon;
            return (
              <Card key={notification.id} className={getNotificationBg(notification.type, notification.read)}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <IconComponent className={`h-5 w-5 mt-0.5 ${notification.color}`} />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{notification.title}</h4>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>
        
        <TabsContent value="assignments" className="space-y-3">
          {notifications.filter(n => n.category === "assignment").map((notification) => {
            const IconComponent = notification.icon;
            return (
              <Card key={notification.id} className={getNotificationBg(notification.type, notification.read)}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <IconComponent className={`h-5 w-5 mt-0.5 ${notification.color}`} />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{notification.title}</h4>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>
        
        <TabsContent value="events" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <p className="text-sm text-muted-foreground">{event.date} at {event.time}</p>
                    </div>
                    <Badge variant="outline" className="capitalize">
                      {event.type}
                    </Badge>
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