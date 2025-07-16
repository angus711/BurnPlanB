import { Target, Flame, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: <Flame className="h-8 w-8" />,
      title: "No Safety Nets",
      description: "We believe in going all-in. Half-measures breed half-results."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Raw Truth",
      description: "No sugar-coating. Real stories from real people who chose the hard path."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Daily Fire",
      description: "Consistent motivation that compounds. Small hits that create big changes."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Surrounded by others who refuse to settle. Accountability breeds excellence."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-title font-black mb-6">
            Why{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fire to-fire-glow">
              Burn Plan B?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <div>
            <h3 className="text-2xl font-bold mb-6">The Origin Story</h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                It started with a simple observation: everyone has a Plan B. The backup school. 
                The "safe" career. The fallback option that whispers, "You can always quit."
              </p>
              <p>
                But here's the thing—Plan B is a dream killer. It's the voice that says 
                "don't go all-in" because you have something to fall back on.
              </p>
              <p className="text-foreground font-semibold">
                The greatest achievers in history? They burned their boats. They made success 
                the only option.
              </p>
              <p>
                Burn Plan B exists to share those stories. To fuel your fire with real examples 
                of people who chose greatness over comfort, obsession over balance, and relentless 
                pursuit over safe mediocrity.
              </p>
              <p className="text-primary font-bold">
                Because the world doesn't need your Plan B. It needs your everything.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-charcoal border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-charcoal to-background border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-3xl font-black mb-6">Our Mission</h3>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                To ignite relentless motivation in people who refuse to settle. We share the 
                raw, unfiltered stories of those who chose the harder path—because that's where 
                greatness lives. No fluff. No false promises. Just the fuel you need to go all-in 
                on what matters most.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Stories Shared</div>
          </div>
          <div>
            <div className="text-4xl font-black text-primary mb-2">10K+</div>
            <div className="text-muted-foreground">Lives Changed</div>
          </div>
          <div>
            <div className="text-4xl font-black text-primary mb-2">365</div>
            <div className="text-muted-foreground">Days of Fire</div>
          </div>
          <div>
            <div className="text-4xl font-black text-primary mb-2">0</div>
            <div className="text-muted-foreground">Plan Bs Allowed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;