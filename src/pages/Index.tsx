import Footer from "@/components/portfolio/Footer";
import Dashboard from "@/components/portfolio/Dashboard";
import Navigation from "@/components/portfolio/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Index;
