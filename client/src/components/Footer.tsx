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
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <svg className="w-4 h-4 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
                </svg>
              </div>
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <svg className="w-4 h-4 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <svg className="w-4 h-4 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
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
              <Link href="/faq">
                <span className="text-muted-foreground hover:text-foreground cursor-pointer block" data-testid="footer-faq">
                  FAQ
                </span>
              </Link>
              <Link href="/trading-guide">
                <span className="text-muted-foreground hover:text-foreground cursor-pointer block" data-testid="footer-trading-guide">
                  Trading Guide
                </span>
              </Link>
              <Link href="/about-us">
                <span className="text-muted-foreground hover:text-foreground cursor-pointer block" data-testid="footer-about">
                  About Us
                </span>
              </Link>
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
              © {new Date().getFullYear()} <Link href="/"><span className="hover:text-foreground cursor-pointer">bloxfruitvaluescalculator.com</span></Link>. All rights reserved.
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