
import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  isTyping?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot, isTyping }) => {
  return (
    <div className={`flex gap-3 mb-6 ${isBot ? 'justify-start' : 'justify-end'}`}>
      {isBot && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full journaly-gradient flex items-center justify-center shadow-lg">
          <Bot className="w-5 h-5 text-journaly-brown" />
        </div>
      )}
      
      <div className={`max-w-[80%] ${isBot ? 'order-2' : 'order-1'}`}>
        <div
          className={`p-4 rounded-2xl shadow-sm ${
            isBot
              ? 'bg-white/80 backdrop-blur-sm border border-journaly-cream/50'
              : 'journaly-gradient text-journaly-brown'
          }`}
        >
          {isTyping ? (
            <div className="flex items-center gap-1">
              <span className="text-journaly-brown/70">Journaly is thinking</span>
              <div className="flex gap-1 ml-2">
                <div className="w-2 h-2 bg-journaly-terracotta rounded-full animate-typing"></div>
                <div className="w-2 h-2 bg-journaly-terracotta rounded-full animate-typing" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-journaly-terracotta rounded-full animate-typing" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          ) : (
            <p className={`text-sm leading-relaxed ${isBot ? 'text-journaly-brown' : 'text-white'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
      
      {!isBot && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-journaly-brown flex items-center justify-center shadow-lg">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
