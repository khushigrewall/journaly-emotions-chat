
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

  const generateTherapistResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Therapeutic responses with professional empathy and therapeutic techniques
    if (lowerMessage.includes('overwhelmed') || lowerMessage.includes('stressed') || lowerMessage.includes('anxious')) {
      return "I hear that you're feeling overwhelmed right now, and I want to acknowledge how difficult that must be for you. 🤗 When we feel overwhelmed, it's often our mind's way of telling us we're carrying too much at once. Let's take a moment together - can you try taking three deep breaths with me? What feels like the heaviest burden you're carrying today? Sometimes naming what overwhelms us can help us break it down into more manageable pieces.";
    }
    
    if (lowerMessage.includes('sad') || lowerMessage.includes('depressed') || lowerMessage.includes('down')) {
      return "Thank you for trusting me with your feelings of sadness. 💙 Depression and sadness can feel so isolating, but you're not alone in this. What you're experiencing is valid, and it takes courage to reach out. Sadness often carries important information about our needs or losses. Can you tell me more about what might be contributing to these feelings? There's no pressure to share more than you're comfortable with - I'm here to listen at your pace.";
    }
    
    if (lowerMessage.includes('angry') || lowerMessage.includes('frustrated') || lowerMessage.includes('mad')) {
      return "I can sense the frustration and anger you're experiencing, and those are completely valid emotions. 🔥 Anger often serves as a protective emotion - it can signal when our boundaries have been crossed or when something important to us feels threatened. Rather than judging your anger, let's explore what it might be trying to tell you. What situation or experience triggered these feelings? Understanding the 'why' behind anger can help us respond to it more effectively.";
    }
    
    if (lowerMessage.includes('lonely') || lowerMessage.includes('alone') || lowerMessage.includes('isolated')) {
      return "Loneliness can be one of the most painful human experiences, and I want you to know that what you're feeling is deeply understood. 🌙 Even in moments of profound loneliness, you have value and you matter. Sometimes loneliness isn't about being physically alone - it can be about feeling unseen or misunderstood. Can you help me understand what loneliness feels like for you? Is it more about physical isolation, or perhaps feeling disconnected even when others are around?";
    }
    
    if (lowerMessage.includes('motivation') || lowerMessage.includes('inspire') || lowerMessage.includes('stuck')) {
      return "Feeling stuck or lacking motivation is something many people experience, and it doesn't reflect any failure on your part. ✨ Sometimes our motivation gets blocked when we're overwhelmed, grieving, or when our goals don't align with our current emotional needs. Let's explore this together - what used to motivate you in the past? And what small step, even the tiniest one, might feel possible for you today? Remember, progress doesn't always look like big leaps forward.";
    }
    
    if (lowerMessage.includes('grateful') || lowerMessage.includes('thankful') || lowerMessage.includes('happy') || lowerMessage.includes('joy')) {
      return "What a gift to witness your gratitude and joy! 🌟 These positive emotions are just as important to honor and explore as the difficult ones. Joy and gratitude can be powerful healing forces. I'm curious - what's bringing you this sense of gratitude today? How does it feel in your body when you experience this joy? Sometimes reflecting on our positive emotions can help us understand what truly nourishes our spirit.";
    }
    
    if (lowerMessage.includes('journal') || lowerMessage.includes('write') || lowerMessage.includes('writing')) {
      return "Journaling can be such a powerful tool for self-discovery and emotional processing. 📝 Writing allows us to externalize our internal world and often helps us see patterns or insights we might miss otherwise. What draws you to journaling right now? Are you looking to process specific emotions, or is it more about general self-reflection? There's no 'right' way to journal - it's about finding what serves your emotional and mental well-being.";
    }
    
    if (lowerMessage.includes('fear') || lowerMessage.includes('scared') || lowerMessage.includes('afraid')) {
      return "Fear is such a primal and powerful emotion, and I want to acknowledge the courage it takes to name it. 🦋 Fear often arises when we're facing uncertainty or potential threat - whether physical, emotional, or psychological. It's your nervous system trying to protect you. Can you help me understand what you're afraid of? Sometimes when we can name our fears specifically, they become a bit less overwhelming. What would feel supportive for you as you navigate this fear?";
    }
    
    if (lowerMessage.includes('change') || lowerMessage.includes('growth') || lowerMessage.includes('transform')) {
      return "Change and growth, while often positive, can also feel destabilizing and scary. 🌱 It's completely normal to have mixed feelings about transformation - part excitement, part fear. Growth often requires us to let go of familiar patterns, even ones that no longer serve us. What kind of change or growth are you experiencing or hoping for? What feels most challenging about this process for you right now? Remember, growth isn't linear - it's okay to have setbacks or moments of doubt.";
    }
    
    if (lowerMessage.includes('relationship') || lowerMessage.includes('family') || lowerMessage.includes('friend')) {
      return "Relationships can be some of our greatest sources of joy and also our deepest challenges. 💫 It sounds like there's something happening in your relationships that's on your mind. Human connections are complex - they bring up our attachment patterns, our fears, our hopes. Would you feel comfortable sharing more about what's happening in your relationships? What support do you need as you navigate these interpersonal dynamics?";
    }
    
    if (lowerMessage.includes('work') || lowerMessage.includes('job') || lowerMessage.includes('career')) {
      return "Work and career concerns can significantly impact our overall well-being and sense of identity. 💼 Many people struggle with finding meaning, balance, or satisfaction in their professional lives. What's happening with work that's bringing this up for you? Are you dealing with stress, dissatisfaction, transitions, or something else? Remember that your worth isn't determined by your productivity or professional success - you have inherent value as a human being.";
    }
    
    // Default therapeutic response with validation and open-ended questions
    return "Thank you for sharing with me - it takes courage to open up about what's on your heart. 💕 I can sense that something important is happening for you, and I want you to know that whatever you're experiencing is valid and deserving of attention. As we sit with this together, I'm wondering - what would feel most helpful for you right now? Sometimes it's being heard, sometimes it's gaining new perspective, and sometimes it's simply feeling less alone. What do you need in this moment?";
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

    // Simulate therapist thinking time (longer for more thoughtful responses)
    setTimeout(() => {
      const botResponse = generateTherapistResponse(messageText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 2000 + Math.random() * 1500); // Random delay between 2-3.5 seconds for more realistic therapist response time
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="/lovable-uploads/af45a584-9a38-4d0a-ae00-1395c47976bd.png" 
              alt="Connect & Share" 
              className="h-8 md:h-10"
            />
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
                <h3 className="font-semibold text-journaly-brown text-lg">Journaly AI Therapist</h3>
                <p className="text-journaly-brown/60 text-sm">Licensed to listen with empathy and professional care</p>
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
            <span className="text-sm">Professional Empathy</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-journaly-brown/60">
            <MessageCircle className="w-4 h-4 text-journaly-terracotta" />
            <span className="text-sm">24/7 Support</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-journaly-brown/60">
            <Sparkles className="w-4 h-4 text-journaly-terracotta" />
            <span className="text-sm">Safe Space</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
