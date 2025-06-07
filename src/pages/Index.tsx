
import React from 'react';
import ChatSection from '../components/ChatSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Chat Section - made smaller */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/af45a584-9a38-4d0a-ae00-1395c47976bd.png" 
                alt="Connect & Share" 
                className="h-8 md:h-10"
              />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-journaly-brown mb-4 leading-tight">
              Talk to Our
              <span className="journaly-text-gradient block md:inline md:ml-3">
                Emotional AI Companion
              </span>
            </h2>
            
            <p className="text-base text-journaly-brown/70 max-w-2xl mx-auto leading-relaxed">
              Share your thoughts, feelings, and challenges with our empathetic AI companion. 
              Get supportive, understanding responses that truly connect with your emotional journey.
            </p>
          </div>

          {/* Chat Container */}
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl shadow-xl border border-journaly-cream/50 overflow-hidden">
            {/* Chat Header */}
            <div className="journaly-gradient p-4 border-b border-journaly-cream/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-5 h-5 text-journaly-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-journaly-brown">Journaly AI Companion</h3>
                  <p className="text-journaly-brown/60 text-sm">Always here to listen with empathy and care</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-journaly-brown/60">Online</span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              <div className="flex gap-3 mb-6 justify-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full journaly-gradient flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-journaly-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                  </svg>
                </div>
                
                <div className="max-w-[80%] order-2">
                  <div className="p-3 rounded-2xl shadow-sm bg-white/80 backdrop-blur-sm border border-journaly-cream/50">
                    <p className="text-sm leading-relaxed text-journaly-brown">
                      Hello beautiful soul! 💕 I'm here to listen with an open heart. Whatever you're going through - whether it's joy, struggle, confusion, or growth - this is a safe space for you to express yourself. What would you like to share with me today?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-journaly-cream/30 bg-white/20 backdrop-blur-sm">
              <div className="space-y-3">
                {/* Quick message suggestions */}
                <div className="flex flex-wrap gap-2 justify-center">
                  <button className="px-3 py-1.5 text-xs bg-white/60 hover:bg-white/80 text-journaly-brown rounded-full border border-journaly-cream/50 transition-all duration-200 hover:scale-105">
                    I'm feeling overwhelmed today
                  </button>
                  <button className="px-3 py-1.5 text-xs bg-white/60 hover:bg-white/80 text-journaly-brown rounded-full border border-journaly-cream/50 transition-all duration-200 hover:scale-105">
                    I need motivation to start journaling
                  </button>
                  <button className="px-3 py-1.5 text-xs bg-white/60 hover:bg-white/80 text-journaly-brown rounded-full border border-journaly-cream/50 transition-all duration-200 hover:scale-105">
                    How can I process difficult emotions?
                  </button>
                  <button className="px-3 py-1.5 text-xs bg-white/60 hover:bg-white/80 text-journaly-brown rounded-full border border-journaly-cream/50 transition-all duration-200 hover:scale-105">
                    I'm struggling with self-doubt
                  </button>
                </div>

                {/* Main chat input */}
                <form className="relative">
                  <div className="relative">
                    <textarea
                      placeholder="Share what's on your heart... I'm here to listen 💕"
                      className="w-full p-3 pr-12 rounded-2xl border border-journaly-cream/50 bg-white/80 backdrop-blur-sm text-journaly-brown placeholder:text-journaly-brown/50 resize-none focus:outline-none focus:ring-2 focus:ring-journaly-peach/50 focus:border-journaly-peach transition-all duration-200"
                      rows={2}
                    />
                    <button
                      type="submit"
                      className="absolute bottom-2 right-2 w-8 h-8 rounded-full journaly-gradient hover:scale-105 transition-all duration-200 shadow-lg border-0 flex items-center justify-center"
                    >
                      <svg className="w-3 h-3 text-journaly-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </form>

                {/* Emotional support message */}
                <div className="flex items-center justify-center gap-2 text-xs text-journaly-brown/60">
                  <svg className="w-3 h-3 text-journaly-terracotta" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>Your feelings are valid, and you're not alone in this journey</span>
                  <svg className="w-3 h-3 text-journaly-terracotta" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center gap-2 text-journaly-brown/60">
              <svg className="w-4 h-4 text-journaly-terracotta" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="text-sm">100% Empathetic</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-journaly-brown/60">
              <svg className="w-4 h-4 text-journaly-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-sm">Always Available</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-journaly-brown/60">
              <svg className="w-4 h-4 text-journaly-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
              </svg>
              <span className="text-sm">Judgment-Free Zone</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
