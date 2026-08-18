import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Archives from "./pages/Archives";
import About from "./pages/About";
import WeekDetail from "./pages/WeekDetail";
import Timeline from "./pages/Timeline";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import AnalyticsConsent from "./components/AnalyticsConsent";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/archives"} component={Archives} />
      <Route path={"/semaine/:week"} component={WeekDetail} />
      <Route path={"/timeline"} component={Timeline} />
      <Route path={"/about"} component={About} />
      <Route path={"/stats"} component={AnalyticsDashboard} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster />
          <Router />
          <AnalyticsConsent />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
