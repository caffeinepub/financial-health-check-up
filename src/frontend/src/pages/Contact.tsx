import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail, Clock } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function Contact() {
  const whatsappNumber = '918829921156';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Get Professional Financial Guidance
        </h1>
        <p className="text-muted-foreground text-lg">
          Let's work together to secure your financial future
        </p>
      </div>

      {/* Main Contact Card */}
      <Card className="border-2 shadow-lg bg-card/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Schedule Your Financial Review</CardTitle>
          <CardDescription className="text-base">
            Connect with our expert advisor to discuss your financial health assessment and create a personalized plan
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* WhatsApp CTA */}
          <div className="bg-primary/10 rounded-lg p-6 text-center space-y-4">
            <div className="flex justify-center">
              <div className="bg-primary/20 p-4 rounded-full">
                <SiWhatsapp className="h-12 w-12 text-primary" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Connect on WhatsApp</h3>
              <p className="text-muted-foreground">
                Get instant responses and personalized financial advice
              </p>
            </div>
            <Button 
              asChild
              size="lg" 
              className="w-full sm:w-auto text-lg px-8"
            >
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <SiWhatsapp className="h-5 w-5" />
                Contact Now
              </a>
            </Button>
          </div>

          {/* Services Offered */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">What We Offer</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex gap-3 p-4 rounded-lg bg-muted/50">
                <MessageCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Personalized Consultation</h4>
                  <p className="text-sm text-muted-foreground">One-on-one financial planning sessions</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-lg bg-muted/50">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Investment Planning</h4>
                  <p className="text-sm text-muted-foreground">Strategic wealth building strategies</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-lg bg-muted/50">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Insurance Review</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive coverage analysis</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-lg bg-muted/50">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Retirement Planning</h4>
                  <p className="text-sm text-muted-foreground">Secure your golden years</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <Card className="bg-muted/30 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              <strong>Why Choose Us?</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              With years of experience in financial planning and insurance advisory, we help individuals and families achieve financial security and peace of mind. Our personalized approach ensures that your unique needs and goals are at the center of every recommendation.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
