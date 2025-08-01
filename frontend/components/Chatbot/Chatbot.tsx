import { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState<{role:string, content:string}[]>([
    { role: 'assistant', content: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', content: input }]);
    setLoading(true);
    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: input }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    setMessages([
      ...messages,
      { role: 'user', content: input },
      { role: 'assistant', content: data.reply }
    ]);
    setInput('');
    setLoading(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow w-full">
      <div className="h-64 overflow-y-auto mb-2 flex flex-col space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
            <span className={msg.role === 'user' ? 'bg-blue-100 px-2 py-1 rounded' : 'bg-gray-100 px-2 py-1 rounded'}>
              {msg.content}
            </span>
          </div>
        ))}
        {loading && <div className="text-gray-400">AI is typing...</div>}
      </div>
      <div className="flex">
        <input
          className="flex-1 border p-2 rounded-l"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Ask me anything..."
        />
        <button className="bg-blue-500 text-white px-4 rounded-r" onClick={sendMessage} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
}