import { useState } from 'react';

export default function PeerConnect({ userId, interests }: { userId: string, interests: string[] }) {
  const [peers, setPeers] = useState<any[]>([]);

  const findPeers = async () => {
    const res = await fetch('/api/peerconnect/find', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, interests })
    });
    setPeers(await res.json());
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Peer Connect</h2>
      <button className="bg-blue-500 text-white px-2 rounded mb-2" onClick={findPeers}>
        Find Peers
      </button>
      <ul className="space-y-2">
        {peers.map((peer, i) => (
          <li key={i} className="flex items-center space-x-2">
            {peer.image && <img src={peer.image} alt={peer.name} className="w-8 h-8 rounded-full" />}
            <span>{peer.name} - {peer.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}