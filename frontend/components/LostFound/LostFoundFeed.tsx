import { useState, useEffect } from 'react';

export default function LostFoundFeed() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/lostfound/all').then(res => res.json()).then(setItems);
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Lost & Found</h2>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex space-x-2">
            {item.image && <img src={item.image} alt="item" className="w-16 h-16 object-cover rounded" />}
            <div>
              <div className="font-semibold">{item.description}</div>
              <div className="text-gray-500">{item.location}</div>
              <div className="text-xs text-gray-400">{new Date(item.date).toLocaleString()}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}