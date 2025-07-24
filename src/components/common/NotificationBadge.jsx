import { Bell } from 'lucide-react';

export default function NotificationBadge({ count = 0 }) {
  return (
    <div className="relative">
      <Bell size={24} className="text-blue-600" />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </div>
  );
}