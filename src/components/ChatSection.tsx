
import React, { useState, useRef, useEffect } from 'react';
import { Heart, Sparkles, MessageCircle } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello beautiful soul! 💕 I'm here to listen with an open heart. Whatever you're going through - whether it's joy, struggle, confusion, or growth - this is a safe space for you to express yourself. What would you like to share with me today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateEmotionalResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Emotional responses based on keywords and sentiment
    if (lowerMessage.includes('overwhelmed') || lowerMessage.includes('stressed') || lowerMessage.includes('anxious')) {
      return "I can feel the weight you're carrying right now, and I want you to know that feeling overwhelmed is a very human experience. 🤗 Your feelings are completely valid. Take a deep breath with me - in through your nose, hold for a moment, and slowly release. You don't have to carry everything at once. What's one small thing that might bring you a moment of peace today?";
    }
    
    if (lowerMessage.includes('sad') || lowerMessage.includes('depressed') || lowerMessage.includes('down')) {
      return "I can sense the heaviness in your heart, and I'm holding space for whatever you're feeling right now. 💙 Sadness often carries important messages about what matters to us. You're so brave for reaching out and sharing this with me. Remember, even in the darkest moments, you are worthy of love and care. What's one tiny act of kindness you could show yourself today?";
    }
    
    if (lowerMessage.includes('angry') || lowerMessage.includes('frustrated') || lowerMessage.includes('mad')) {
      return "Your anger is telling you something important - it's often our heart's way of protecting something we value deeply. 🔥 I hear your frustration, and it's okay to feel this way. Let's honor this emotion while finding healthy ways to express it. What boundary or value do you think your anger might be trying to protect? You have every right to feel what you feel.";
    }
    
    if (lowerMessage.includes('lonely') || lowerMessage.includes('alone') || lowerMessage.includes('isolated')) {
      return "Oh, sweet soul, loneliness can feel so heavy, can't it? 🌙 Please know that even in your aloneness, you are seen and valued. Connection starts from within, and you're taking such a beautiful step by reaching out. Your presence matters in this world. What's one way you've felt connected to yourself or others recently, even in a small way?";
    }
    
    if (lowerMessage.includes('motivation') || lowerMessage.includes('inspire') || lowerMessage.includes('stuck')) {
      return "I love that you're seeking that inner spark! ✨ Sometimes motivation isn't about feeling ready - it's about taking the tiniest step forward even when we don't feel like it. Your desire to grow and move forward shows such courage. What's one small, gentle action that feels doable right now? Remember, progress isn't always linear, and you're already on your way.";
    }
    
    if (lowerMessage.includes('grateful') || lowerMessage.includes('thankful') || lowerMessage.includes('happy') || lowerMessage.includes('joy')) {
      return "Your gratitude and joy are absolutely radiant! 🌟 Thank you for sharing this beautiful energy - it genuinely brightens my day. These moments of appreciation and happiness are so precious. They're like little seeds of light that can sustain us through harder times. What are you most grateful for in this moment? Let's celebrate these feelings together!";
    }
    
    if (lowerMessage.includes('journal') || lowerMessage.includes('write') || lowerMessage.includes('writing')) {
      return "Journaling is such a beautiful gift you can give yourself! 📝 Your thoughts and feelings deserve to be witnessed and honored. There's no right or wrong way to journal - it's simply about creating a sacred conversation with yourself. What draws you to putting pen to paper today? Even one sentence can be a profound act of self-care and reflection.";
    }
    
    if (lowerMessage.includes('fear') || lowerMessage.includes('scared') || lowerMessage.includes('afraid')) {
      return "Fear can feel so overwhelming, can't it? But I want you to know that acknowledging your fears takes incredible courage. 🦋 Fear often points us toward what matters most to us. You're not broken for feeling afraid - you're beautifully human. What would you tell a dear friend who was feeling the same fear? Sometimes we need to offer ourselves that same compassion.";
    }
    
    if (lowerMessage.includes('change') || lowerMessage.includes('growth') || lowerMessage.includes('transform')) {
      return "Change and growth are some of the most courageous acts of the human spirit! 🌱 You're literally becoming who you're meant to be, and that's both exciting and sometimes scary. Every small step you take toward growth ripples out into the world in beautiful ways. What aspect of your growth feels most important to you right now? I'm cheering you on!";
    }
    
    // Default empathetic response
    return "Thank you for sharing a piece of your heart with me. 💕 Every word you've shared matters, and I want you to know that you're heard and valued exactly as you are. Your experiences, feelings, and thoughts are all part of your unique and beautiful journey. What feels most important for you to explore or understand right now? I'm here to listen and support you.";
  };

  const handleSendMessage = async (messageText: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = generateEmotionalResponse(messageText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5 seconds
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-journaly-terracotta" />
            <span className="text-sm font-medium text-journaly-terracotta tracking-wide uppercase">
              Connect & Share
            </span>
            <Sparkles className="w-6 h-6 text-journaly-terracotta" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-journaly-brown mb-6 leading-tight">
            Talk to Our
            <span className="journaly-text-gradient block md:inline md:ml-3">
              Emotional AI Companion
            </span>
          </h2>
          
          <p className="text-lg text-journaly-brown/70 max-w-2xl mx-auto leading-relaxed">
            Share your thoughts, feelings, and challenges with our empathetic AI companion. 
            Get supportive, understanding responses that truly connect with your emotional journey.
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl shadow-xl border border-journaly-cream/50 overflow-hidden">
          {/* Chat Header */}
          <div className="journaly-gradient p-6 border-b border-journaly-cream/30">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-journaly-brown" />
              </div>
              <div>
                <h3 className="font-semibold text-journaly-brown text-lg">Journaly AI Companion</h3>
                <p className="text-journaly-brown/60 text-sm">Always here to listen with empathy and care</p>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-journaly-brown/60">Online</span>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map(message => (
              <ChatMessage
                key={message.id}
                message={message.text}
                isBot={message.isBot}
              />
            ))}
            
            {isTyping && (
              <ChatMessage
                message=""
                isBot={true}
                isTyping={true}
              />
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-journaly-cream/30 bg-white/20 backdrop-blur-sm">
            <ChatInput 
              onSendMessage={handleSendMessage}
              disabled={isTyping}
            />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-2 text-journaly-brown/60">
            <Heart className="w-4 h-4 text-journaly-terracotta" />
            <span className="text-sm">100% Empathetic</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-journaly-brown/60">
            <MessageCircle className="w-4 h-4 text-journaly-terracotta" />
            <span className="text-sm">Always Available</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-journaly-brown/60">
            <Sparkles className="w-4 h-4 text-journaly-terracotta" />
            <span className="text-sm">Judgment-Free Zone</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
