import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { CheckCircle, XCircle, Clock, TrendingUp } from 'lucide-react';

const attendanceData = [
  { name: 'Present', value: 85, color: '#10b981' },
  { name: 'Absent', value: 10, color: '#ef4444' },
  { name: 'Late', value: 5, color: '#f59e0b' }
];

const weeklyData = [
  { day: 'Mon', attendance: 95 },
  { day: 'Tue', attendance: 100 },
  { day: 'Wed', attendance: 85 },
  { day: 'Thu', attendance: 90 },
  { day: 'Fri', attendance: 95 },
];

const subjectAttendance = [
  { subject: 'Mathematics', attendance: 92, total: 25, present: 23 },
  { subject: 'Physics', attendance: 88, total: 24, present: 21 },
  { subject: 'Chemistry', attendance: 95, total: 22, present: 21 },
  { subject: 'English', attendance: 85, total: 20, present: 17 },
  { subject: 'History', attendance: 90, total: 18, present: 16 },
];

export function AttendanceTracker() {
  return (
    <div className="space-y-4">
      {/* Overall Attendance Status */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            Overall Attendance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-3xl font-bold text-green-600">88%</div>
              <p className="text-sm text-muted-foreground">Current Status: Good</p>
            </div>
            <div className="w-24 h-24">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={attendanceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={25}
                    outerRadius={40}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {attendanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Present (85%)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Absent (10%)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Late (5%)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Today's Status */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Today's Classes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium">Mathematics</p>
                  <p className="text-sm text-muted-foreground">9:00 AM - 9:45 AM</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">Present</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Physics</p>
                  <p className="text-sm text-muted-foreground">10:00 AM - 10:45 AM</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">Ongoing</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="font-medium">Chemistry</p>
                  <p className="text-sm text-muted-foreground">11:00 AM - 11:45 AM</p>
                </div>
              </div>
              <Badge variant="outline">Upcoming</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Trend */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Weekly Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Bar dataKey="attendance" fill="#3b82f6" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Subject-wise Attendance */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Subject-wise Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subjectAttendance.map((subject, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{subject.subject}</span>
                  <span className="text-sm text-muted-foreground">
                    {subject.present}/{subject.total} ({subject.attendance}%)
                  </span>
                </div>
                <Progress value={subject.attendance} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}