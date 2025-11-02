import { CalendarDays, Clock } from 'lucide-react';

export const Calendar = () => {
  // Mock calendar events - in real implementation, sync with Google Calendar
  const upcomingEvents = [
    {
      id: 1,
      title: "Morning Workout",
      time: "08:00",
      date: "Today"
    },
    {
      id: 2,
      title: "Team Meeting",
      time: "14:30",
      date: "Today"
    },
    {
      id: 3,
      title: "Grocery Shopping",
      time: "18:00",
      date: "Today"
    },
    {
      id: 4,
      title: "Dentist Appointment",
      time: "10:00",
      date: "Tomorrow"
    }
  ];

  return (
    <div className="mirror-module h-full">
      <div className="flex items-center mb-4">
        <CalendarDays className="w-6 h-6 text-accent mr-2" />
        <h3 className="mirror-text-primary text-xl font-light">Agenda</h3>
      </div>
      
      <div className="space-y-3">
        {upcomingEvents.map((event) => (
          <div key={event.id} className="flex items-center justify-between py-2 border-b border-border/20 last:border-b-0">
            <div className="flex-1">
              <div className="mirror-text-primary text-sm font-normal mb-1">
                {event.title}
              </div>
              <div className="flex items-center mirror-text-secondary text-xs">
                <Clock className="w-3 h-3 mr-1" />
                {event.time} • {event.date}
              </div>
            </div>
            <div className="mirror-status-dot bg-success ml-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};