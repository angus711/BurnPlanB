import { Clock, ArrowRight, Flame, Target, Trophy, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Stories = () => {
  const stories = [
    {
      id: 1,
      title: "How Michael Jordan Turned Rejection Into Fire",
      subtitle: "Cut from his high school team",
      category: "Comeback",
      readTime: "2 min",
      icon: <Trophy className="h-5 w-5" />,
      description: "The story of how being cut from his high school basketball team became the fuel that drove Jordan to greatness."
    },
    {
      id: 2,
      title: "J.K. Rowling: 12 Publishers Said No. She Said Yes.",
      subtitle: "From welfare to billionaire",
      category: "Failure",
      readTime: "3 min",
      icon: <Target className="h-5 w-5" />,
      description: "How rejection after rejection only strengthened her resolve to share Harry Potter with the world."
    },
    {
      id: 3,
      title: "Kobe's 4 AM Sessions: The Mamba Mentality",
      subtitle: "Outworking everyone while they slept",
      category: "Discipline",
      readTime: "2 min",
      icon: <Flame className="h-5 w-5" />,
      description: "The legendary work ethic that separated Kobe from every other player in the game."
    },
    {
      id: 4,
      title: "Elon Musk: Living in His Office",
      subtitle: "When comfort wasn't an option",
      category: "Mindset",
      readTime: "3 min",
      icon: <Zap className="h-5 w-5" />,
      description: "How sleeping in the Tesla factory became the symbol of all-in commitment."
    },
    {
      id: 5,
      title: "David Goggins: From 300lbs to Navy SEAL",
      subtitle: "Rewriting his entire identity",
      category: "Discipline",
      readTime: "4 min",
      icon: <Target className="h-5 w-5" />,
      description: "The most extreme transformation story of mental toughness and refusing to quit."
    },
    {
      id: 6,
      title: "Serena Williams: Conquering Doubters",
      subtitle: "Proving them wrong every time",
      category: "Comeback",
      readTime: "2 min",
      icon: <Trophy className="h-5 w-5" />,
      description: "How she turned every criticism into motivation to dominate tennis."
    }
  ];

  const categories = [
    { name: "All", active: true },
    { name: "Failure", active: false },
    { name: "Comeback", active: false },
    { name: "Mindset", active: false },
    { name: "Discipline", active: false }
  ];

  return (
    <section id="stories" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-title font-black mb-4">
            Stories That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fire to-fire-glow">
              Ignite
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from people who burned their safety nets and chose greatness.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-1 bg-muted rounded-lg">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={category.active ? "default" : "ghost"}
                size="sm"
                className={category.active ? "bg-primary text-primary-foreground" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story) => (
            <Card key={story.id} className="group hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {story.icon}
                    </div>
                    <span className="text-sm font-medium text-primary">{story.category}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {story.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {story.title}
                </h3>
                <p className="text-primary font-medium">{story.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{story.description}</p>
                <div className="flex items-center text-primary group-hover:text-fire transition-colors">
                  <span className="font-medium">Read Story</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Load More Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Stories;