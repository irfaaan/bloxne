import { useSEO } from "@/hooks/useSEO";

export default function PrivacyPolicy() {
  // SEO optimization for Privacy Policy page
  useSEO({
    title: "Privacy Policy | Blox Fruits Calculator Data Protection",
    description: "Read our privacy policy to understand how we collect, use, and protect your data when using the Blox Fruits Values Calculator. Your privacy is important to us.",
    keywords: "privacy policy, data protection, blox fruits calculator privacy, cookies, user data, information collection",
    canonical: window.location.href
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-8 max-w-none">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Collect</h2>
          <p className="text-foreground">
            BloxCalc Pro is committed to protecting your privacy. We collect minimal information necessary 
            to provide our trading calculator and fruit database services.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>Usage data and analytics to improve our service</li>
            <li>Device information for optimization purposes</li>
            <li>Cookies for website functionality</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">How We Use Your Information</h2>
          <p className="text-foreground">
            The information we collect is used to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li>Provide and maintain our trading calculator service</li>
            <li>Analyze usage patterns to improve user experience</li>
            <li>Ensure website security and prevent fraud</li>
            <li>Display relevant advertisements through Google AdSense</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Third-Party Services</h2>
          <p className="text-foreground">
            Our website uses Google AdSense to display advertisements. Google may use cookies 
            and other technologies to serve ads based on your browsing behavior. You can 
            control ad personalization through Google's Ad Settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Security</h2>
          <p className="text-foreground">
            We implement reasonable security measures to protect your information. However, 
            no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Changes to This Policy</h2>
          <p className="text-foreground">
            We may update our Privacy Policy from time to time. Changes will be posted on 
            this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
          <p className="text-foreground">
            If you have any questions about this Privacy Policy, please contact us through 
            our contact page.
          </p>
        </section>
      </div>
    </div>
  );
}