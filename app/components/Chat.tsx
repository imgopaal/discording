import { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Joti Essarani',
      text: 'fine',
      isUser: false,
    },
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        name: 'Gopal',
        text: inputValue,
        isUser: true,
      };

      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  return (
    <div className="p-4 bg-gray-100">
      <ul className="space-y-2">
        {messages.map((message) => (
          <li
            key={message.id}
            className={`p-4 ${
              message.isUser ? 'bg-blue-200' : 'bg-gray-300'
            } rounded-lg`}
          >
            <strong className="font-semibold">{message.name}:</strong>{' '}
            {message.text}
          </li>
        ))}
      </ul>
      <div className="flex mt-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-lg mr-2"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;