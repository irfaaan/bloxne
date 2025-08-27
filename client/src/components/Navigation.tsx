import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer">
                BloxCalc Pro
              </h1>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/">
                <span className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  location === "/" 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}>
                  Calculator
                </span>
              </Link>
              
              <Link href="/values">
                <span className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  location.startsWith("/values") 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}>
                  Fruit Values
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
              data-testid="mobile-menu-button"
            >
              <i className="fas fa-bars text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}