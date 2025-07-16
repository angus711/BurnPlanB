import { ArrowRight, Mail, Users, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Join = () => {
  const benefits = [
    "Daily motivation delivered to your inbox",
    "Exclusive behind-the-scenes stories",
    "First access to new content",
    "Join a community of 10,000+ driven individuals",
    "No spam, just pure fire"
  ];

  const testimonials = [
    {
      text: "This daily hit is exactly what I needed. Raw, real, and gets me fired up every morning.",
      author: "Sarah K.",
      role: "Entrepreneur"
    },
    {
      text: "Finally found content that doesn't sugarcoat anything. These stories changed my mindset.",
      author: "Marcus R.",
      role: "Athletes"
    },
    {
      text: "I look forward to these emails more than my coffee. That's saying something.",
      author: "Jennifer L.",
      role: "Creative Director"
    }
  ];

  return (
    <section id="join" className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-title font-black mb-6">
            Join The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fire to-fire-glow">
              Movement
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No fluff. Just fire. Get the motivation that turns dreams into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Email Signup */}
          <div>
            <Card className="bg-gradient-to-br from-background to-charcoal border-primary/20">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold">Get Your Daily Hit</h3>
                <p className="text-muted-foreground">
                  Start every day with the mindset of champions
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Form */}
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  />
                  <input
                    type="text"
                    placeholder="Your first name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  />
                  <Button className="w-full bg-gradient-to-r from-fire to-fire-glow hover:from-fire-glow hover:to-fire text-lg py-6">
                    Fuel My Fire
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">What you'll get:</h4>
                  <ul className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Zap className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Trust indicators */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    10,000+ subscribers
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Crown className="h-4 w-4 mr-1" />
                    Premium content
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center lg:text-left">
              What Our Community Says
            </h3>
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background border-primary/20">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-fire/10 to-fire-glow/10 border-primary/30">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-3xl font-black mb-4">Ready to Burn Your Plan B?</h3>
              <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands who chose greatness over comfort. Your journey starts with a single decision.
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-fire to-fire-glow hover:from-fire-glow hover:to-fire text-lg px-8 py-6"
                >
                  Start Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Join;