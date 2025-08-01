import { useState, useEffect } from 'react';

export default function AnnouncementsFeed() {
  const [announcements, setAnnouncements] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/announcement/all').then(res => res.json()).then(setAnnouncements);
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Announcements</h2>
      <ul className="space-y-2">
        {announcements.map((a, i) => (
          <li key={i}>
            <div className="font-semibold">{a.title}</div>
            <div className="text-gray-600">{a.body}</div>
            <div className="text-gray-400 text-xs">{new Date(a.date).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}