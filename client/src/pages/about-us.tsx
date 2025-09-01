import { Link } from "wouter";
import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";

export default function AboutUs() {
  // SEO optimization for About Us page
  useSEO({
    title: "About Us | Blox Fruits Values Calculator Team & Mission",
    description: "Learn about the Blox Fruits Values Calculator team, our mission to provide accurate trading values, and our commitment to helping players make fair trades in the community.",
    keywords: "about blox fruits calculator, team, mission, accurate trading values, fair trades, community help, calculator team",
    canonical: window.location.href
  });

  useEffect(() => {
    
    // Add page-specific schema markup
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Blox Fruits Values Calculator",
      "description": "Learn about our mission to provide accurate Blox Fruits trading values and help players make fair trades",
      "url": "https://bloxfruitvaluescalculator.com/about-us"
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="bg-background text-foreground" role="main">
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Hero Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate Blox Fruits players dedicated to providing the most accurate and reliable trading calculator for the community.
          </p>
        </header>

        {/* Our Mission */}
        <section className="mb-16" aria-labelledby="mission-heading">
          <h2 id="mission-heading" className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <div className="bg-card p-8 rounded-lg border">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Blox Fruits Values Calculator, we believe every player deserves access to accurate, up-to-date trading information. Our mission is to eliminate trading scams, promote fair exchanges, and empower players with the knowledge they need to make informed trading decisions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We understand the frustration of unfair trades and the complexity of tracking ever-changing fruit values. That's why we've built the most comprehensive and user-friendly calculator in the Blox Fruits community.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-3xl font-bold mb-8 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-lg border">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Value Tracking</h3>
              <p className="text-muted-foreground">
                We continuously monitor trading servers, community discussions, and official sources to provide the most accurate fruit values. Our database updates daily to reflect real market conditions.
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold mb-3">Fair Trade Analysis</h3>
              <p className="text-muted-foreground">
                Our advanced calculator compares trade offers instantly, showing exact value differences and fairness indicators to help you make informed decisions every time.
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">Scam Prevention</h3>
              <p className="text-muted-foreground">
                By providing transparent, verified values, we help players avoid common trading scams and identify overpriced offers before they make costly mistakes.
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3">Market Intelligence</h3>
              <p className="text-muted-foreground">
                Beyond basic values, we provide demand ratings, trend analysis, and trading insights to help you maximize your trading potential and build valuable collections.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16" aria-labelledby="values-heading">
          <h2 id="values-heading" className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="space-y-6">
            <div className="p-6 bg-card rounded-lg border">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                <span className="text-blue-500">🎯</span>
                Accuracy First
              </h3>
              <p className="text-muted-foreground">
                We prioritize accuracy above all else. Every value in our database is verified through multiple sources and cross-referenced with real trading activity to ensure reliability.
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                <span className="text-green-500">🌟</span>
                Community Focused
              </h3>
              <p className="text-muted-foreground">
                We're built by players, for players. Our tools and features are designed based on real community needs and feedback from thousands of Blox Fruits traders.
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-3">
                <span className="text-purple-500">🔒</span>
                Transparency
              </h3>
              <p className="text-muted-foreground">
                We believe in complete transparency. Our methodology is open, our sources are credited, and our calculations are always explained so you can trust our results.
              </p>
            </div>
          </div>
        </section>

        {/* Our Data Sources */}
        <section className="mb-16" aria-labelledby="data-heading">
          <h2 id="data-heading" className="text-3xl font-bold mb-8 text-center">How We Gather Data</h2>
          <div className="bg-card p-8 rounded-lg border">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our values are collected through comprehensive monitoring and analysis:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Live Trading Activity</strong> - Direct monitoring of real player trades</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Community Analysis</strong> - Player feedback and market observations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Trading Servers</strong> - Real-time transaction monitoring across platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Market Trends</strong> - Historical data analysis and demand tracking</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have questions, feedback, or suggestions? We'd love to hear from you. Our team is committed to continuously improving our tools based on community input.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Contact Us
              </button>
            </Link>
            <Link href="/faq">
              <button className="border border-border px-6 py-3 rounded-lg hover:bg-accent transition-colors">
                View FAQ
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}