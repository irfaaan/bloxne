export default function Disclaimer() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          Disclaimer
        </h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-8 prose prose-gray dark:prose-invert max-w-none">
        <section>
          <h2 className="text-2xl font-semibold mb-4">General Information</h2>
          <p>
            The information on BloxCalc Pro is provided for general informational purposes only. 
            All information on the site is provided in good faith, however we make no 
            representation or warranty of any kind regarding the accuracy, adequacy, validity, 
            reliability, availability, or completeness of any information on the site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Trading Values</h2>
          <p>
            All fruit values, trading ratios, and market data provided on BloxCalc Pro are 
            estimates and may not reflect actual in-game trading values. The Blox Fruits 
            market is dynamic and values can change frequently.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Values are community-driven estimates</li>
            <li>Market conditions can change rapidly</li>
            <li>Always verify trades independently</li>
            <li>Use your own judgment when trading</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Game Affiliation</h2>
          <p>
            BloxCalc Pro is not affiliated with, endorsed by, or officially connected to 
            the creators of Blox Fruits or Roblox Corporation. This is an independent 
            fan-made tool created to help the community.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">External Links</h2>
          <p>
            Our website may contain links to external sites that are not provided or 
            maintained by us. We do not guarantee the accuracy, relevance, timeliness, 
            or completeness of information on any external website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">No Professional Advice</h2>
          <p>
            The information on this website is not intended as professional advice. 
            This is a gaming tool for entertainment purposes only.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Updates and Changes</h2>
          <p>
            We reserve the right to update, change, or replace any part of this disclaimer 
            at any time without prior notice. It is your responsibility to check this 
            disclaimer periodically for changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p>
            If you have any questions or concerns about this disclaimer, please contact us 
            through our contact page.
          </p>
        </section>
      </div>
    </div>
  );
}