import { useState } from 'react';

export default function TimetableUploader({ userId }: { userId: string }) {
  const [timetable, setTimetable] = useState<any>(null);
  const [text, setText] = useState('');

  const upload = async () => {
    const res = await fetch('/api/timetable/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, userId })
    });
    const data = await res.json();
    setTimetable(data.timetable);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Timetable Assistant</h2>
      <textarea
        className="border w-full p-2 mb-2"
        rows={4}
        placeholder="Paste your timetable text here"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-2 rounded" onClick={upload}>Upload & Parse</button>
      {timetable && (
        <pre className="bg-gray-100 mt-2 p-2 rounded text-xs">
          {JSON.stringify(timetable, null, 2)}
        </pre>
      )}
    </div>
  );
}