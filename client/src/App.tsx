import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import CatB from "@/pages/PgCatB";
import OreSupl from "@/pages/OreSupl";
import AboutPage from "@/pages/AboutPage";
import PriceList from "@/pages/PriceList";
import NotFound from "@/pages/not-found";
import Tos from "@/pages/tos";
import Privacy from "@/pages/Privaci";



function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/categoria-b" component={CatB} />
      <Route path="/ore-suplimentare" component={OreSupl} />
      <Route path="/despre" component={AboutPage} />
      <Route path="/pricelist" component={PriceList} />
      <Route path="/termeni-conditii" component={Tos} />
      <Route path="/politica-confidentialitate" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
