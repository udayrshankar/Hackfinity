import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Clock, MapPin, User, AlertCircle, CheckCircle } from 'lucide-react';

const timeSlots = [
  "9:00 AM", "9:45 AM", "10:45 AM", "11:30 AM", "12:15 PM", "1:45 PM", "2:30 PM", "3:15 PM"
];

const todaySchedule = [
  {
    time: "9:00 AM - 9:45 AM",
    subject: "Mathematics",
    teacher: "Dr. Smith",
    room: "Room 101",
    status: "completed",
    type: "regular"
  },
  {
    time: "9:45 AM - 10:30 AM",
    subject: "Physics",
    teacher: "Prof. Johnson",
    room: "Lab 201",
    status: "ongoing",
    type: "regular"
  },
  {
    time: "10:45 AM - 11:30 AM",
    subject: "Chemistry",
    teacher: "Dr. Williams",
    room: "Lab 202",
    status: "upcoming",
    type: "substitution",
    originalTeacher: "Dr. Brown"
  },
  {
    time: "11:30 AM - 12:15 PM",
    subject: "English",
    teacher: "Ms. Davis",
    room: "Room 105",
    status: "upcoming",
    type: "regular",
    availableForQuestions: true
  },
  {
    time: "12:15 PM - 1:00 PM",
    subject: "Lunch Break",
    type: "break"
  },
  {
    time: "1:45 PM - 2:30 PM",
    subject: "History",
    teacher: "Mr. Wilson",
    room: "Room 103",
    status: "cancelled",
    type: "cancelled"
  },
  {
    time: "2:30 PM - 3:15 PM",
    subject: "Free Period",
    type: "free"
  }
];

const weekSchedule = {
  "Monday": [
    { time: "9:00 AM", subject: "Mathematics", teacher: "Dr. Smith", room: "101" },
    { time: "9:45 AM", subject: "Physics", teacher: "Prof. Johnson", room: "201" },
    { time: "10:45 AM", subject: "Chemistry", teacher: "Dr. Williams", room: "202" },
    { time: "11:30 AM", subject: "English", teacher: "Ms. Davis", room: "105" },
    { time: "1:45 PM", subject: "History", teacher: "Mr. Wilson", room: "103" },
    { time: "2:30 PM", subject: "Computer Science", teacher: "Ms. Lee", room: "Lab 301" }
  ],
  "Tuesday": [
    { time: "9:00 AM", subject: "Physics", teacher: "Prof. Johnson", room: "201" },
    { time: "9:45 AM", subject: "Mathematics", teacher: "Dr. Smith", room: "101" },
    { time: "10:45 AM", subject: "English", teacher: "Ms. Davis", room: "105" },
    { time: "11:30 AM", subject: "Chemistry", teacher: "Dr. Williams", room: "202" },
    { time: "1:45 PM", subject: "Art", teacher: "Ms. Taylor", room: "Studio" },
    { time: "2:30 PM", subject: "Physical Education", teacher: "Coach Brown", room: "Gym" }
  ]
};

function getStatusColor(status: string, type: string) {
  if (type === "cancelled") return "bg-red-100 text-red-700 border-red-200";
  if (type === "substitution") return "bg-orange-100 text-orange-700 border-orange-200";
  if (type === "break") return "bg-blue-100 text-blue-700 border-blue-200";
  if (type === "free") return "bg-green-100 text-green-700 border-green-200";
  
  switch (status) {
    case "completed": return "bg-gray-100 text-gray-700 border-gray-200";
    case "ongoing": return "bg-blue-100 text-blue-700 border-blue-200";
    case "upcoming": return "bg-green-100 text-green-700 border-green-200";
    default: return "bg-gray-100 text-gray-700 border-gray-200";
  }
}

function getStatusIcon(status: string, type: string) {
  if (type === "cancelled") return <AlertCircle className="h-4 w-4" />;
  if (status === "completed") return <CheckCircle className="h-4 w-4" />;
  if (status === "ongoing") return <Clock className="h-4 w-4" />;
  return <Clock className="h-4 w-4" />;
}

export function Timetable() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="today" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
        </TabsList>
        
        <TabsContent value="today" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Today's Schedule
              </CardTitle>
              <p className="text-sm text-muted-foreground">Monday, September 17, 2025</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {todaySchedule.map((item, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${getStatusColor(item.status || "", item.type)}`}>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(item.status || "", item.type)}
                          <span className="font-medium">{item.subject}</span>
                          {item.type === "substitution" && (
                            <Badge variant="outline" className="text-xs">Substitution</Badge>
                          )}
                          {item.availableForQuestions && (
                            <Badge variant="outline" className="text-xs bg-green-50 text-green-700">Available for Q&A</Badge>
                          )}
                        </div>
                        <p className="text-sm">{item.time}</p>
                        {item.teacher && (
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              <span>{item.teacher}</span>
                            </div>
                            {item.room && (
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                <span>{item.room}</span>
                              </div>
                            )}
                          </div>
                        )}
                        {item.type === "substitution" && item.originalTeacher && (
                          <p className="text-xs text-orange-600">
                            Originally: {item.originalTeacher}
                          </p>
                        )}
                        {item.type === "cancelled" && (
                          <p className="text-xs text-red-600">
                            Class has been cancelled
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="week" className="space-y-4">
          <div className="grid gap-4">
            {Object.entries(weekSchedule).map(([day, schedule]) => (
              <Card key={day}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{day}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {schedule.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{item.subject}</p>
                          <p className="text-sm text-muted-foreground">{item.time}</p>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <p>{item.teacher}</p>
                          <p>{item.room}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}