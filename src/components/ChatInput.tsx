
import React, { useState } from 'react';
import { Send, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const quickMessages = [
    "I'm feeling overwhelmed today",
    "I need motivation to start journaling",
    "How can I process difficult emotions?",
    "I'm struggling with self-doubt"
  ];

  return (
    <div className="space-y-4">
      {/* Quick message suggestions */}
      <div className="flex flex-wrap gap-2 justify-center">
        {quickMessages.map((quick, index) => (
          <button
            key={index}
            onClick={() => setMessage(quick)}
            className="px-3 py-1.5 text-xs bg-white/60 hover:bg-white/80 text-journaly-brown rounded-full border border-journaly-cream/50 transition-all duration-200 hover:scale-105"
          >
            {quick}
          </button>
        ))}
      </div>

      {/* Main chat input */}
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share what's on your heart... I'm here to listen 💕"
            className="w-full p-4 pr-14 rounded-2xl border border-journaly-cream/50 bg-white/80 backdrop-blur-sm text-journaly-brown placeholder:text-journaly-brown/50 resize-none focus:outline-none focus:ring-2 focus:ring-journaly-peach/50 focus:border-journaly-peach transition-all duration-200"
            rows={3}
            disabled={disabled}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <Button
            type="submit"
            disabled={!message.trim() || disabled}
            className="absolute bottom-3 right-3 w-10 h-10 rounded-full journaly-gradient hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:hover:scale-100 shadow-lg border-0"
          >
            <Send className="w-4 h-4 text-journaly-brown" />
          </Button>
        </div>
      </form>

      {/* Emotional support message */}
      <div className="flex items-center justify-center gap-2 text-xs text-journaly-brown/60">
        <Heart className="w-3 h-3 text-journaly-terracotta" />
        <span>Your feelings are valid, and you're not alone in this journey</span>
        <Heart className="w-3 h-3 text-journaly-terracotta" />
      </div>
    </div>
  );
};

export default ChatInput;
