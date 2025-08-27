import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          Contact Us
        </h1>
        <p className="text-muted-foreground">
          Have questions, suggestions, or need support? We'd love to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Send us a Message</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName" 
                  placeholder="Your first name"
                  data-testid="contact-firstname"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName" 
                  placeholder="Your last name"
                  data-testid="contact-lastname"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your.email@example.com"
                data-testid="contact-email"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input 
                id="subject" 
                placeholder="What's this about?"
                data-testid="contact-subject"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Tell us more about your question or feedback..."
                rows={6}
                data-testid="contact-message"
              />
            </div>
            
            <Button type="submit" className="w-full" data-testid="contact-submit">
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-primary"></i>
                </div>
                <div>
                  <h3 className="font-medium">Email Support</h3>
                  <p className="text-muted-foreground">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-clock text-accent"></i>
                </div>
                <div>
                  <h3 className="font-medium">Response Time</h3>
                  <p className="text-muted-foreground">
                    24-48 hours for general inquiries
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-question-circle text-green-500"></i>
                </div>
                <div>
                  <h3 className="font-medium">Support Types</h3>
                  <p className="text-muted-foreground">
                    Bug reports, feature requests, general questions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-medium mb-2">Are the fruit values accurate?</h4>
                <p className="text-sm text-muted-foreground">
                  Our values are community-driven estimates updated regularly. 
                  Always verify trades independently as market conditions change.
                </p>
              </div>
              
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-medium mb-2">How often is the database updated?</h4>
                <p className="text-sm text-muted-foreground">
                  We update fruit values and market data regularly based on 
                  community feedback and trading patterns.
                </p>
              </div>
              
              <div className="border border-border rounded-lg p-4">
                <h4 className="font-medium mb-2">Is BloxCalc Pro free to use?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes! BloxCalc Pro is completely free. We support the service 
                  through advertisements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}