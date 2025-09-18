import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Settings as SettingsIcon, Bell, Shield, Palette, Globe, 
  User, Accessibility, Moon, Sun, Volume2, Eye, Languages 
} from 'lucide-react';

export function Settings() {
  return (
    <div className="space-y-4">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Student" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h3>John Smith</h3>
              <p className="text-sm text-muted-foreground">Grade 12 • Section A</p>
              <div className="flex gap-2">
                <Badge variant="outline">Student</Badge>
                <Badge variant="outline" className="bg-green-50 text-green-700">Active</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Alerts</TabsTrigger>
          <TabsTrigger value="appearance">Display</TabsTrigger>
          <TabsTrigger value="accessibility">Access</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="space-y-4">
          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Student ID</p>
                    <p className="font-medium">STU-2025-001</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Class</p>
                    <p className="font-medium">12th Grade, Section A</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Roll Number</p>
                    <p className="font-medium">25</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Academic Year</p>
                    <p className="font-medium">2024-2025</p>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Make profile visible to classmates</p>
                    <p className="text-sm text-muted-foreground">Others can see your study activity</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Share academic progress</p>
                    <p className="text-sm text-muted-foreground">Allow teachers to see detailed analytics</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Data usage analytics</p>
                    <p className="text-sm text-muted-foreground">Help improve app features</p>
                  </div>
                  <Switch />
                </div>
                
                <Button className="w-full" variant="outline">
                  Manage Data & Privacy
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Role-Based Features */}
          <Card>
            <CardHeader>
              <CardTitle>Account Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-blue-900">Student Account</p>
                      <p className="text-sm text-blue-700">Access to all student features</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">Current</Badge>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Teachers and administrators have additional features for managing classes and generating reports.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Class reminders</p>
                    <p className="text-sm text-muted-foreground">Get notified before classes start</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Assignment deadlines</p>
                    <p className="text-sm text-muted-foreground">Reminders for due dates</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Attendance alerts</p>
                    <p className="text-sm text-muted-foreground">Warning when attendance is low</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Schedule changes</p>
                    <p className="text-sm text-muted-foreground">Class cancellations and substitutions</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Study suggestions</p>
                    <p className="text-sm text-muted-foreground">AI-powered learning recommendations</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Social activities</p>
                    <p className="text-sm text-muted-foreground">Study groups and peer connections</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5" />
                Sound & Vibration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Sound notifications</span>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-medium">Vibration</span>
                  <Switch defaultChecked />
                </div>
                
                <div className="space-y-2">
                  <p className="font-medium">Notification sound</p>
                  <Select defaultValue="default">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="chime">Chime</SelectItem>
                      <SelectItem value="bell">Bell</SelectItem>
                      <SelectItem value="soft">Soft Tone</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Theme & Appearance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium">Theme</p>
                  <Select defaultValue="system">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">
                        <div className="flex items-center gap-2">
                          <Sun className="h-4 w-4" />
                          Light
                        </div>
                      </SelectItem>
                      <SelectItem value="dark">
                        <div className="flex items-center gap-2">
                          <Moon className="h-4 w-4" />
                          Dark
                        </div>
                      </SelectItem>
                      <SelectItem value="system">
                        <div className="flex items-center gap-2">
                          <SettingsIcon className="h-4 w-4" />
                          System
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <p className="font-medium">Color scheme</p>
                  <div className="grid grid-cols-4 gap-2">
                    <Button variant="outline" className="h-12 bg-blue-100 border-blue-300">
                      <div className="w-full h-full bg-blue-500 rounded"></div>
                    </Button>
                    <Button variant="outline" className="h-12 bg-green-100 border-green-300">
                      <div className="w-full h-full bg-green-500 rounded"></div>
                    </Button>
                    <Button variant="outline" className="h-12 bg-purple-100 border-purple-300">
                      <div className="w-full h-full bg-purple-500 rounded"></div>
                    </Button>
                    <Button variant="outline" className="h-12 bg-orange-100 border-orange-300">
                      <div className="w-full h-full bg-orange-500 rounded"></div>
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Compact view</p>
                    <p className="text-sm text-muted-foreground">Show more content on screen</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Animations</p>
                    <p className="text-sm text-muted-foreground">Enable smooth transitions</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Language & Region
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium">Language</p>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                      <SelectItem value="hi">हिन्दी</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <p className="font-medium">Date format</p>
                  <Select defaultValue="mdy">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="ymd">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <p className="font-medium">Time format</p>
                  <Select defaultValue="12h">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12h">12 hour (AM/PM)</SelectItem>
                      <SelectItem value="24h">24 hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="accessibility" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Accessibility className="h-5 w-5" />
                Accessibility Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium">Text size</p>
                  <Select defaultValue="normal">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                      <SelectItem value="extra-large">Extra Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">High contrast mode</p>
                    <p className="text-sm text-muted-foreground">Improve text readability</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Screen reader support</p>
                    <p className="text-sm text-muted-foreground">Enhanced voice navigation</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Reduce motion</p>
                    <p className="text-sm text-muted-foreground">Minimize animations and transitions</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Focus indicators</p>
                    <p className="text-sm text-muted-foreground">Enhanced keyboard navigation</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Audio descriptions</p>
                    <p className="text-sm text-muted-foreground">Describe visual content in videos</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Visual Assistance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Color blind support</p>
                    <p className="text-sm text-muted-foreground">Adjust colors for better visibility</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="space-y-2">
                  <p className="font-medium">Color blind type</p>
                  <Select defaultValue="none">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="deuteranopia">Deuteranopia</SelectItem>
                      <SelectItem value="protanopia">Protanopia</SelectItem>
                      <SelectItem value="tritanopia">Tritanopia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Bold text</p>
                    <p className="text-sm text-muted-foreground">Make text easier to read</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="h-5 w-5" />
                Learning Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Dyslexia-friendly font</p>
                    <p className="text-sm text-muted-foreground">Use OpenDyslexic font</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Reading guide</p>
                    <p className="text-sm text-muted-foreground">Highlight current line while reading</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Simplified interface</p>
                    <p className="text-sm text-muted-foreground">Reduce visual clutter</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}