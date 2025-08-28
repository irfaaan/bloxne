import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Calculator from "@/pages/calculator";
import FruitValues from "@/pages/fruit-values";
import CategoryPage from "@/pages/category";
import FruitDetail from "@/pages/fruit-detail";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import Disclaimer from "@/pages/disclaimer";
import Contact from "@/pages/contact";
import FAQ from "@/pages/faq";
import TradingGuide from "@/pages/trading-guide";
import Updates from "@/pages/updates";
import Stocks from "@/pages/stocks";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div>
        <Switch>
          <Route path="/" component={Calculator} />
          <Route path="/values" component={FruitValues} />
          <Route path="/values/:category" component={CategoryPage} />
          <Route path="/fruit/:name" component={FruitDetail} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/disclaimer" component={Disclaimer} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={FAQ} />
          <Route path="/trading-guide" component={TradingGuide} />
          <Route path="/updates" component={Updates} />
          <Route path="/stocks" component={Stocks} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
