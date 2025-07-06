import React from 'react';
import { MessageCircle } from 'lucide-react';
import './MessageButton.css';

function MessageButton() {
  return (
    <a
      href="https://wa.me/201062842697"
      className="fixed-message-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}

export default MessageButton; 