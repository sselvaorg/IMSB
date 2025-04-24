import React, { useEffect, useState } from "react";
import SideNav from "../../Components/SideNav/SideNav";
import NavBar from "../../Components/NavBar/NavBar";
import { useAuth } from "../../Contexts/useAuth";
import { GetAllMessages, MarkAsRead } from "../../Services/InboxService";
import { Message } from "../../helpers/declarations";

type Props = {};

const InboxPage = (props: Props) => {
  const { isLoggedIn } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    setLoading(true);
    const data = await GetAllMessages();
    setMessages(data);
    setLoading(false);
  };

  const handleMarkAsRead = async (id: number) => {
    const updated = await MarkAsRead(id);
    if (updated) {
      setMessages((prev) =>
        prev.map((msg) => (msg.id === id ? { ...msg, isRead: true } : msg))
      );
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className={`w-full min-h-screen ${isLoggedIn() ? "ps-64" : "p-0"}`}>
      {isLoggedIn() && <SideNav />}
      <NavBar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Inbox</h2>
        {loading ? (
          <p>Loading messages...</p>
        ) : messages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          <ul className="space-y-4">
            {messages.map((msg) => (
              <li
                key={msg.id}
                className={`p-4 rounded-xl shadow-md ${
                  msg.isRead ? "bg-gray-200" : "bg-white"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold">{msg.title}</h4>
                    <p className="text-sm text-gray-600">{msg.content}</p>
                  </div>
                  {!msg.isRead && (
                    <button
                      onClick={() => handleMarkAsRead(msg.id)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
                    >
                      Mark as Read
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InboxPage;
