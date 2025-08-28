import { Link } from "wouter";

export default function AboutUs() {
  return (
    <div className="bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate Blox Fruits players dedicated to providing the most accurate and reliable trading calculator for the community.
          </p>
        </div>

        {/* Our Mission */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <div className="bg-card p-8 rounded-lg border">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Blox Fruits Values Calculator, we believe every player deserves access to accurate, up-to-date trading information. Our mission is to eliminate trading scams, promote fair exchanges, and empower players with the knowledge they need to make informed trading decisions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We understand the frustration of unfair trades and the complexity of tracking ever-changing fruit values. That's why we've built the most comprehensive and user-friendly calculator in the Blox Fruits community.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Do</h2>
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
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
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
        </div>

        {/* Our Data Sources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Trusted Data Sources</h2>
          <div className="bg-card p-8 rounded-lg border">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our values are aggregated from the most trusted sources in the Blox Fruits community:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>DarkKitsune.com</strong> - Official trading values and market data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>BloxFruitsValues.com</strong> - Community-verified pricing information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Active Trading Servers</strong> - Real-time transaction monitoring</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span><strong>Official Discord Communities</strong> - Community feedback and validation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
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
        </div>
      </div>
    </div>
  );
}