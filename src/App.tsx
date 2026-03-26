import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import Negotiation from "./pages/Negotiation.tsx";
import Courses from "./pages/Courses.tsx";
import PublicTraining from "./pages/PublicTraining.tsx";
import References from "./pages/References.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Terms from "./pages/Terms.tsx";
import Privacy from "./pages/Privacy.tsx";
import Admin from "./pages/Admin.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sluzby" element={<Services />} />
          <Route path="/vyjednavani" element={<Negotiation />} />
          <Route path="/kurzy" element={<Courses />} />
          <Route path="/verejny-trenink" element={<PublicTraining />} />
          <Route path="/reference" element={<References />} />
          <Route path="/clanky" element={<Blog />} />
          <Route path="/clanky/:slug" element={<BlogPost />} />
          <Route path="/o-mne" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/obchodni-podminky" element={<Terms />} />
          <Route path="/gdpr" element={<Privacy />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
