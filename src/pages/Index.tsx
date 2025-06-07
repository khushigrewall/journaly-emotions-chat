
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Star, Users, ArrowRight, Sparkles } from 'lucide-react';
import ChatSection from '../components/ChatSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-5 h-5 text-journaly-terracotta" />
            <span className="text-sm font-medium text-journaly-terracotta tracking-wide uppercase">
              Welcome to Journaly
            </span>
            <Star className="w-5 h-5 text-journaly-terracotta" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-journaly-brown mb-8 leading-tight">
            Your Journey to
            <span className="journaly-text-gradient block md:inline md:ml-4">
              Emotional Wellness
            </span>
          </h1>
          
          <p className="text-xl text-journaly-brown/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect with your inner self through mindful journaling and compassionate AI guidance. 
            Every emotion matters, every thought deserves space, and every step forward is celebrated.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="journaly-gradient hover:scale-105 transition-all duration-200 px-8 py-6 text-lg font-semibold text-journaly-brown rounded-2xl shadow-lg border-0">
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="border-journaly-brown/20 text-journaly-brown hover:bg-journaly-brown/5 px-8 py-6 text-lg rounded-2xl transition-all duration-200">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-journaly-brown mb-6">
              Why Choose 
              <span className="journaly-text-gradient ml-3">Journaly?</span>
            </h2>
            <p className="text-lg text-journaly-brown/70 max-w-2xl mx-auto">
              We believe in the power of emotional connection and personal growth through mindful reflection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-journaly-cream/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 journaly-gradient rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-8 h-8 text-journaly-brown" />
              </div>
              <h3 className="text-xl font-semibold text-journaly-brown mb-4 text-center">Empathetic AI</h3>
              <p className="text-journaly-brown/70 text-center leading-relaxed">
                Our AI companion understands emotions and responds with genuine care, creating a safe space for vulnerable conversations.
              </p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-journaly-cream/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 journaly-gradient rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Sparkles className="w-8 h-8 text-journaly-brown" />
              </div>
              <h3 className="text-xl font-semibold text-journaly-brown mb-4 text-center">Mindful Journaling</h3>
              <p className="text-journaly-brown/70 text-center leading-relaxed">
                Guided prompts and reflective exercises help you explore your thoughts and emotions in meaningful ways.
              </p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-journaly-cream/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 journaly-gradient rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-journaly-brown" />
              </div>
              <h3 className="text-xl font-semibold text-journaly-brown mb-4 text-center">Community Support</h3>
              <p className="text-journaly-brown/70 text-center leading-relaxed">
                Connect with like-minded individuals on similar journeys of self-discovery and emotional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <ChatSection />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-journaly-cream/50">
            <h2 className="text-4xl md:text-5xl font-bold text-journaly-brown mb-6">
              Ready to Begin Your
              <span className="journaly-text-gradient block md:inline md:ml-3">
                Emotional Journey?
              </span>
            </h2>
            <p className="text-lg text-journaly-brown/70 mb-8 max-w-2xl mx-auto">
              Join thousands of others who have found peace, clarity, and growth through mindful journaling and emotional awareness.
            </p>
            <Button className="journaly-gradient hover:scale-105 transition-all duration-200 px-12 py-6 text-xl font-semibold text-journaly-brown rounded-2xl shadow-lg border-0">
              Start Free Today
              <Heart className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
