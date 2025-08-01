import { useSession } from 'next-auth/react';
import Chatbot from '../components/Chatbot/Chatbot';

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return <div className="p-4">Please login to access the dashboard.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-6 space-y-8">
      <h1 className="text-3xl font-bold">Welcome, {session.user?.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><Chatbot /></div>
        {/* Add AssignmentTracker, Timetable, Announcements, etc as widgets here */}
      </div>
    </div>
  );
}