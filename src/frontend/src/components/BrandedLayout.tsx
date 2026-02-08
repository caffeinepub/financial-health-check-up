import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface BrandedLayoutProps {
  children: ReactNode;
  currentPage: 'checkup' | 'contact';
  onNavigate: (page: 'checkup' | 'contact') => void;
}

export default function BrandedLayout({ children, currentPage, onNavigate }: BrandedLayoutProps) {
  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/generated/financial-health-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="border-b border-border/40 bg-card/50 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="/assets/generated/axis-max-life-logo.dim_600x200.png" 
                alt="Axis Max Life" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
            <nav className="flex gap-2">
              <Button
                variant={currentPage === 'checkup' ? 'default' : 'ghost'}
                onClick={() => onNavigate('checkup')}
                size="sm"
              >
                Health Check
              </Button>
              <Button
                variant={currentPage === 'contact' ? 'default' : 'ghost'}
                onClick={() => onNavigate('contact')}
                size="sm"
              >
                Contact
              </Button>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-border/40 bg-card/50 backdrop-blur-md py-6">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1.5">
              © 2026. Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using{' '}
              <a 
                href="https://caffeine.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
