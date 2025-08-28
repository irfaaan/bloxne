import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-muted-foreground">
          Find answers to common questions about BloxCalc Pro and fruit trading.
        </p>
      </div>

      <div className="space-y-8">
        {/* Trading Questions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <i className="fas fa-exchange-alt text-primary"></i>
              <span>Trading & Values</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Are the fruit values accurate?</AccordionTrigger>
                <AccordionContent>
                  Our values are community-driven estimates updated regularly based on actual trading data, 
                  market trends, and community feedback. While we strive for accuracy, always verify trades 
                  independently as market conditions change frequently.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I use the trade calculator?</AccordionTrigger>
                <AccordionContent>
                  Simply select the fruits you're offering and the fruits you want in return. The calculator 
                  will show you the total value difference and whether the trade is fair, in your favor, 
                  or against you. Green means good, red means unfavorable.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>What makes a trade "fair"?</AccordionTrigger>
                <AccordionContent>
                  A fair trade is when both sides have approximately equal total values (within 5% difference). 
                  However, rarity, demand, and personal preference also play important roles in trading decisions.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Why do fruit values change?</AccordionTrigger>
                <AccordionContent>
                  Fruit values fluctuate based on game updates, community demand, rarity changes, and trading patterns. 
                  New fruits, balance changes, and events can significantly impact the market.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Platform Questions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <i className="fas fa-cog text-accent"></i>
              <span>Platform & Usage</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-5">
                <AccordionTrigger>Is BloxCalc Pro free to use?</AccordionTrigger>
                <AccordionContent>
                  Yes! BloxCalc Pro is completely free to use. All features including the calculator, 
                  fruit values database, and trading guides are available at no cost.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger>How often is the database updated?</AccordionTrigger>
                <AccordionContent>
                  We update fruit values and market data regularly, typically multiple times per week. 
                  Major updates occur after game patches or significant market shifts.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7">
                <AccordionTrigger>Can I suggest value changes?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! We welcome community feedback. Contact us through the contact page with 
                  evidence of recent trades or market changes to help us maintain accurate values.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8">
                <AccordionTrigger>Do you have a mobile app?</AccordionTrigger>
                <AccordionContent>
                  BloxCalc Pro is a web application that works perfectly on mobile browsers. 
                  You can bookmark it on your phone's home screen for quick access.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Technical Questions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <i className="fas fa-question-circle text-green-500"></i>
              <span>Technical Support</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-9">
                <AccordionTrigger>The calculator isn't working properly</AccordionTrigger>
                <AccordionContent>
                  Try refreshing the page or clearing your browser cache. If the issue persists, 
                  contact us with details about your browser and the specific problem you're experiencing.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-10">
                <AccordionTrigger>Can I save my favorite trades?</AccordionTrigger>
                <AccordionContent>
                  Currently, trades are not saved between sessions. We're considering adding user accounts 
                  and trade history features in future updates based on community interest.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-11">
                <AccordionTrigger>How do I report a bug or issue?</AccordionTrigger>
                <AccordionContent>
                  Please use our contact form to report bugs. Include as much detail as possible: 
                  what you were doing, what happened, and what browser you're using.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Still Have Questions */}
        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">Still have questions?</h3>
              <p className="text-muted-foreground">
                Can't find what you're looking for? We're here to help!
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}