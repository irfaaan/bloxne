export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          Terms of Service
        </h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-8 prose prose-gray dark:prose-invert max-w-none">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
          <p>
            By accessing and using BloxCalc Pro, you accept and agree to be bound by the terms 
            and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Description of Service</h2>
          <p>
            BloxCalc Pro provides a trading calculator and fruit database for the Blox Fruits 
            game. Our service includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Trade value calculations</li>
            <li>Fruit database with market values</li>
            <li>Trading tools and utilities</li>
            <li>Market trend information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
          <p>
            Users are responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Using the service appropriately and legally</li>
            <li>Not attempting to hack, reverse engineer, or exploit the service</li>
            <li>Respecting other users and the game's terms of service</li>
            <li>Not using automated tools or bots</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
          <p>
            BloxCalc Pro is provided "as is" without any representations or warranties. 
            We do not guarantee the accuracy of trading values or market data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p>
            In no event shall BloxCalc Pro be liable for any indirect, incidental, 
            special, consequential, or punitive damages resulting from your use of the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p>
            The service and its original content are owned by BloxCalc Pro. 
            Blox Fruits is owned by its respective developers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Termination</h2>
          <p>
            We may terminate or suspend access to our service immediately, without prior notice, 
            for any reason whatsoever.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective 
            immediately upon posting.
          </p>
        </section>
      </div>
    </div>
  );
}