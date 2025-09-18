import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, RadarChart, PolarGrid, 
  PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { TrendingUp, Clock, Target, BookOpen, Users, Award, Calendar, Brain } from 'lucide-react';

// Mock data for analytics
const attendanceData = [
  { month: 'Aug', attendance: 88 },
  { month: 'Sep', attendance: 85 },
  { month: 'Oct', attendance: 92 },
  { month: 'Nov', attendance: 87 }
];

const subjectPerformance = [
  { subject: 'Math', score: 92, trend: 'up' },
  { subject: 'Physics', score: 85, trend: 'up' },
  { subject: 'Chemistry', score: 88, trend: 'down' },
  { subject: 'English', score: 90, trend: 'up' },
  { subject: 'History', score: 82, trend: 'stable' }
];

const studyTimeData = [
  { day: 'Mon', math: 2, physics: 1.5, chemistry: 1, english: 0.5, history: 1 },
  { day: 'Tue', math: 1.5, physics: 2, chemistry: 1.5, english: 1, history: 0.5 },
  { day: 'Wed', math: 2.5, physics: 1, chemistry: 2, english: 0.5, history: 1.5 },
  { day: 'Thu', math: 1, physics: 2.5, chemistry: 1, english: 1.5, history: 1 },
  { day: 'Fri', math: 2, physics: 1.5, chemistry: 1.5, english: 1, history: 2 }
];

const skillsRadarData = [
  { skill: 'Problem Solving', value: 85 },
  { skill: 'Critical Thinking', value: 78 },
  { skill: 'Communication', value: 92 },
  { skill: 'Collaboration', value: 88 },
  { skill: 'Creativity', value: 75 },
  { skill: 'Time Management', value: 82 }
];

const engagementData = [
  { name: 'Class Participation', value: 85, color: '#3b82f6' },
  { name: 'Assignment Completion', value: 92, color: '#10b981' },
  { name: 'Study Group Activity', value: 68, color: '#f59e0b' },
  { name: 'Online Resources', value: 76, color: '#8b5cf6' }
];

const productivityMetrics = [
  { metric: 'Focus Time', value: 6.5, unit: 'hrs/day', change: '+12%', trend: 'up' },
  { metric: 'Tasks Completed', value: 18, unit: 'this week', change: '+5%', trend: 'up' },
  { metric: 'Study Efficiency', value: 87, unit: '%', change: '+8%', trend: 'up' },
  { metric: 'Break Adherence', value: 78, unit: '%', change: '-3%', trend: 'down' }
];

const timeAllocation = [
  { category: 'Classes', hours: 30, percentage: 50 },
  { category: 'Study', hours: 15, percentage: 25 },
  { category: 'Assignments', hours: 9, percentage: 15 },
  { category: 'Group Work', hours: 3, percentage: 5 },
  { category: 'Free Time', hours: 3, percentage: 5 }
];

function getTrendIcon(trend: string) {
  switch (trend) {
    case 'up': return <TrendingUp className="h-3 w-3 text-green-600" />;
    case 'down': return <TrendingUp className="h-3 w-3 text-red-600 rotate-180" />;
    default: return <div className="h-3 w-3 bg-gray-400 rounded-full" />;
  }
}

function getTrendColor(trend: string) {
  switch (trend) {
    case 'up': return 'text-green-600';
    case 'down': return 'text-red-600';
    default: return 'text-gray-600';
  }
}

export function Analytics() {
  return (
    <div className="space-y-4">
      {/* Key Metrics Overview */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Overall GPA</p>
                <p className="text-2xl font-bold">3.7</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Study Hours</p>
                <p className="text-2xl font-bold">28h</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="performance" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="productivity">Productivity</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>
        
        <TabsContent value="performance" className="space-y-4">
          {/* Attendance Trend */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Attendance Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Line type="monotone" dataKey="attendance" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Subject Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Subject Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subjectPerformance.map((subject, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{subject.subject}</span>
                      <div className="flex items-center gap-2">
                        <span className={getTrendColor(subject.trend)}>{subject.score}%</span>
                        {getTrendIcon(subject.trend)}
                      </div>
                    </div>
                    <Progress value={subject.score} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Skills Radar */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Skill Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={skillsRadarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="skill" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar name="Skills" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="engagement" className="space-y-4">
          {/* Study Time Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Study Time by Subject</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={studyTimeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Bar dataKey="math" stackId="a" fill="#3b82f6" />
                    <Bar dataKey="physics" stackId="a" fill="#ef4444" />
                    <Bar dataKey="chemistry" stackId="a" fill="#10b981" />
                    <Bar dataKey="english" stackId="a" fill="#f59e0b" />
                    <Bar dataKey="history" stackId="a" fill="#8b5cf6" />
                  </BarChart>
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
          
          {/* Engagement Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Engagement Levels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={engagementData}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {engagementData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="productivity" className="space-y-4">
          {/* Productivity Metrics */}
          <div className="grid grid-cols-2 gap-4">
            {productivityMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{metric.metric}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">{metric.value}</span>
                      <span className="text-sm text-muted-foreground">{metric.unit}</span>
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${getTrendColor(metric.trend)}`}>
                      {getTrendIcon(metric.trend)}
                      <span>{metric.change}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Time Allocation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Time Allocation This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {timeAllocation.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.category}</span>
                      <span className="text-sm text-muted-foreground">
                        {item.hours}h ({item.percentage}%)
                      </span>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="insights" className="space-y-4">
          {/* AI Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-600" />
                AI-Generated Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-l-blue-500">
                  <h4 className="font-medium text-blue-900">Strength Identified</h4>
                  <p className="text-sm text-blue-800 mt-1">
                    Your Mathematics performance has improved by 15% this month. Keep up the consistent practice!
                  </p>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-l-orange-500">
                  <h4 className="font-medium text-orange-900">Area for Improvement</h4>
                  <p className="text-sm text-orange-800 mt-1">
                    Chemistry scores have dipped slightly. Consider joining study groups or seeking extra help.
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-l-green-500">
                  <h4 className="font-medium text-green-900">Goal Achievement</h4>
                  <p className="text-sm text-green-800 mt-1">
                    You're on track to achieve your attendance goal of 90%. Current: 88.5%
                  </p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-l-purple-500">
                  <h4 className="font-medium text-purple-900">Study Pattern</h4>
                  <p className="text-sm text-purple-800 mt-1">
                    You're most productive during 10-12 PM. Consider scheduling challenging subjects during this time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-600" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <p className="font-medium">Perfect Week</p>
                    <p className="text-sm text-muted-foreground">100% attendance last week</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl">📚</div>
                  <div>
                    <p className="font-medium">Study Streak</p>
                    <p className="text-sm text-muted-foreground">5 days of consistent study</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl">✅</div>
                  <div>
                    <p className="font-medium">Assignment Master</p>
                    <p className="text-sm text-muted-foreground">Submitted all assignments on time</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}