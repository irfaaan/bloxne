import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              BloxCalc Pro
            </h3>
            <p className="text-sm text-muted-foreground">
              The ultimate trading calculator for Blox Fruits. Calculate accurate values, 
              track trends, and make informed trading decisions.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                <i className="fab fa-discord text-sm"></i>
              </div>
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                <i className="fab fa-youtube text-sm"></i>
              </div>
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                <i className="fab fa-twitter text-sm"></i>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navigation</h4>
            <div className="space-y-2 text-sm">
              <Link href="/">
                <span className="text-muted-foreground hover:text-foreground cursor-pointer block">
                  Calculator
                </span>
              </Link>
              <Link href="/values">
                <span className="text-muted-foreground hover:text-foreground cursor-pointer block">
                  Fruit Values
                </span>
              </Link>
              <Link href="/values/natural">
                <span className="text-muted-foreground hover:text-foreground cursor-pointer block">
                  Natural Fruits
                </span>
              </Link>
              <Link href="/values/elemental">
                <span className="text-muted-foreground hover:text-foreground cursor-pointer block">
                  Elemental Fruits
                </span>
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <div className="space-y-2 text-sm">
              <Link href="/contact">
                <span className="text-muted-foreground hover:text-foreground cursor-pointer block" data-testid="footer-contact">
                  Contact Us
                </span>
              </Link>
              <span className="text-muted-foreground block">FAQ</span>
              <span className="text-muted-foreground block">Trading Guide</span>
              <span className="text-muted-foreground block">Updates</span>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <div className="space-y-2 text-sm">
              <Link href="/privacy-policy">
                <span className="text-muted-foreground hover:text-foreground cursor-pointer block" data-testid="footer-privacy">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/terms-of-service">
                <span className="text-muted-foreground hover:text-foreground cursor-pointer block" data-testid="footer-terms">
                  Terms of Service
                </span>
              </Link>
              <Link href="/disclaimer">
                <span className="text-muted-foreground hover:text-foreground cursor-pointer block" data-testid="footer-disclaimer">
                  Disclaimer
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} BloxCalc Pro. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground">
              Not affiliated with Blox Fruits or Roblox Corporation.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}