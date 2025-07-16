import { useState } from 'react';
import { Quote, Share, Copy, Bookmark, Volume2, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const DailyHit = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { toast } = useToast();

  const dailyQuote = {
    text: "Comfort kills dreams. The moment you get comfortable, you stop growing. Champions live in the uncomfortable.",
    author: "David Goggins",
    category: "Mental Toughness"
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`"${dailyQuote.text}" - ${dailyQuote.author}`);
    toast({
      title: "Copied to clipboard",
      description: "Quote copied successfully!",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Daily Hit from Burn Plan B',
        text: `"${dailyQuote.text}" - ${dailyQuote.author}`,
        url: window.location.href,
      });
    } else {
      handleCopy();
    }
  };

  const handleSave = () => {
    toast({
      title: "Quote saved",
      description: "Added to your collection!",
    });
  };

  return (
    <section id="daily-hit" className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-title font-black mb-4">
            Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fire to-fire-glow">
              Daily Hit
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful motivation delivered daily. No fluff. Just fire.
          </p>
        </div>

        {/* Daily Quote Card */}
        <Card className="bg-gradient-to-br from-background to-charcoal border-primary/20 shadow-2xl">
          <CardContent className="p-8 md:p-12">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Quote className="h-8 w-8 text-primary" />
              </div>
            </div>

            {/* Quote Text */}
            <blockquote className="text-2xl md:text-3xl font-bold text-center leading-relaxed mb-8">
              "{dailyQuote.text}"
            </blockquote>

            {/* Author */}
            <div className="text-center mb-8">
              <p className="text-lg font-semibold text-primary">— {dailyQuote.author}</p>
              <p className="text-sm text-muted-foreground mt-1">{dailyQuote.category}</p>
            </div>

            {/* Audio Player */}
            <div className="flex justify-center mb-8">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsPlaying(!isPlaying)}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                {isPlaying ? (
                  <>
                    <Pause className="mr-2 h-5 w-5" />
                    Pause Audio
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-5 w-5" />
                    Listen (30s)
                  </>
                )}
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 flex-wrap">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="hover:text-primary"
              >
                <Copy className="mr-2 h-4 w-4" />
                Copy
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="hover:text-primary"
              >
                <Share className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSave}
                className="hover:text-primary"
              >
                <Bookmark className="mr-2 h-4 w-4" />
                Save
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Email Signup */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Get This Delivered Daily</h3>
          <p className="text-muted-foreground mb-6">
            Join thousands who start their day with fire. Unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-gradient-to-r from-fire to-fire-glow hover:from-fire-glow hover:to-fire">
              Get Daily Hits
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyHit;