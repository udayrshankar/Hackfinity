import { useState } from 'react';
import { Home } from './components/Home';
import { AttendanceTracker } from './components/AttendanceTracker';
import { Timetable } from './components/Timetable';
import { Notifications } from './components/Notifications';
import { AssignmentTracker } from './components/AssignmentTracker';
import { FreePeriodSuggestions } from './components/FreePeriodSuggestions';
import { DailyRoutine } from './components/DailyRoutine';
import { Analytics } from './components/Analytics';
import { ResourceLibrary } from './components/ResourceLibrary';
import { Settings } from './components/Settings';

import { 
  Home as HomeIcon, 
  Calendar, 
  Bell, 
  BookOpen, 
  Clock, 
  BarChart3, 
  FileText, 
  Settings as SettingsIcon,
  Users,
  Target
} from 'lucide-react';

const navigationItems = [
  { id: 'home', label: 'Home', icon: HomeIcon, component: Home },
  { id: 'attendance', label: 'Attendance', icon: BarChart3, component: AttendanceTracker },
  { id: 'timetable', label: 'Timetable', icon: Calendar, component: Timetable },
  { id: 'notifications', label: 'Alerts', icon: Bell, component: Notifications },
  { id: 'assignments', label: 'Tasks', icon: Target, component: AssignmentTracker },
  { id: 'free-period', label: 'Discover', icon: Users, component: FreePeriodSuggestions },
  { id: 'routine', label: 'Routine', icon: Clock, component: DailyRoutine },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, component: Analytics },
  { id: 'resources', label: 'Library', icon: FileText, component: ResourceLibrary },
  { id: 'settings', label: 'Settings', icon: SettingsIcon, component: Settings }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  
  const ActiveComponent = navigationItems.find(item => item.id === activeTab)?.component || Home;
  
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile App Layout */}
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-white border-b border-border px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">SchoolApp</h1>
              <p className="text-sm text-muted-foreground">Student Dashboard</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Online</span>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="pb-20">
          <div className="p-4">
            <ActiveComponent />
          </div>
        </div>
        
        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-border">
          <div className="grid grid-cols-5 gap-1">
            {navigationItems.slice(0, 5).map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex flex-col items-center gap-1 py-2 px-1 transition-colors ${
                    isActive 
                      ? 'text-primary bg-primary/5' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs">{item.label}</span>
                </button>
              );
            })}
          </div>
          
          {/* Secondary Navigation - Swipeable */}
          <div className="border-t border-border/50">
            <div className="flex overflow-x-auto scrollbar-hide py-2 px-2 gap-1">
              {navigationItems.slice(5).map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-2 py-2 px-3 rounded-full whitespace-nowrap transition-colors ${
                      isActive 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}