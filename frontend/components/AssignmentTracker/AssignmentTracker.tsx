import { useState, useEffect } from 'react';

export default function AssignmentTracker({ userId }: { userId: string }) {
  const [assignments, setAssignments] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    fetch(`/api/assignment/user/${userId}`).then(res => res.json()).then(setAssignments);
  }, [userId]);

  const addAssignment = async () => {
    await fetch('/api/assignment/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, dueDate, userId })
    });
    setTitle('');
    setDueDate('');
    const res = await fetch(`/api/assignment/user/${userId}`);
    setAssignments(await res.json());
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Assignment Tracker</h2>
      <div className="flex mb-2">
        <input
          type="text"
          className="border p-1 flex-1 mr-2"
          placeholder="Assignment Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="date"
          className="border p-1 mr-2"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-2 rounded" onClick={addAssignment}>Add</button>
      </div>
      <ul className="space-y-1">
        {assignments.map((a, i) => (
          <li key={i} className="flex justify-between">
            <span>{a.title}</span>
            <span className="text-gray-500 text-sm">{new Date(a.dueDate).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}