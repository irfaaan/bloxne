export default function PrivacyPolicy() {
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

      <div className="space-y-8 prose prose-gray dark:prose-invert max-w-none">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p>
            BloxCalc Pro is committed to protecting your privacy. We collect minimal information necessary 
            to provide our trading calculator and fruit database services.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Usage data and analytics to improve our service</li>
            <li>Device information for optimization purposes</li>
            <li>Cookies for website functionality</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p>
            The information we collect is used to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and maintain our trading calculator service</li>
            <li>Analyze usage patterns to improve user experience</li>
            <li>Ensure website security and prevent fraud</li>
            <li>Display relevant advertisements through Google AdSense</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p>
            Our website uses Google AdSense to display advertisements. Google may use cookies 
            and other technologies to serve ads based on your browsing behavior. You can 
            control ad personalization through Google's Ad Settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p>
            We implement reasonable security measures to protect your information. However, 
            no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Changes will be posted on 
            this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through 
            our contact page.
          </p>
        </section>
      </div>
    </div>
  );
}