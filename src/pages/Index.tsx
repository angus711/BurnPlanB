import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Stories from '@/components/Stories';
import DailyHit from '@/components/DailyHit';
import About from '@/components/About';
import Join from '@/components/Join';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Stories />
      <DailyHit />
      <About />
      <Join />
      <Footer />
    </div>
  );
};

export default Index;
