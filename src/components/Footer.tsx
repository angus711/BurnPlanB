import { Flame, Mail, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
    { icon: <Mail className="h-5 w-5" />, href: "#", label: "Email" }
  ];

  const footerLinks = [
    {
      title: "Content",
      links: [
        { name: "Stories", href: "#stories" },
        { name: "Daily Hit", href: "#daily-hit" },
        { name: "Categories", href: "#" },
        { name: "Archive", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Mission", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Press", href: "#" }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "Join Newsletter", href: "#join" },
        { name: "Share Story", href: "#" },
        { name: "Merch", href: "#" },
        { name: "Community Guidelines", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-obsidian border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Flame className="h-8 w-8 text-primary animate-fire-glow" />
              <span className="text-2xl font-bold">Burn Plan B</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Igniting relentless motivation through real stories of those who chose greatness over comfort.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-charcoal hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-bold mb-2">Never miss a story</h4>
              <p className="text-muted-foreground">Get the daily motivation that changes everything.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 md:w-64 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-fire to-fire-glow hover:from-fire-glow hover:to-fire rounded-lg font-medium transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Burn Plan B. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Signature Quote */}
        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-lg font-medium text-primary italic">
            "The world doesn't need your Plan B. It needs your everything."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;