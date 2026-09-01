import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import GlobalFooter from './components/layout/GlobalFooter';
import GlobalHeader from './components/layout/GlobalHeader';
import ComingSoon from './pages/ComingSoon';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <GlobalHeader />
      <div className="flex min-h-screen flex-col bg-white pt-[76px]">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<ComingSoon title="How It Works" />} />
            <Route path="/features" element={<ComingSoon title="Features" />} />
            <Route path="/for-business" element={<ComingSoon title="For Business" />} />
            <Route path="/catalogues" element={<ComingSoon title="Catalogues" />} />
            <Route path="/pricing" element={<ComingSoon title="Pricing" />} />
            <Route path="/faq-support" element={<ComingSoon title="FAQ & Support" />} />
            <Route path="/contact" element={<ComingSoon title="Contact" />} />
            <Route path="/privacy" element={<ComingSoon title="Privacy Policy" />} />
            <Route path="/terms" element={<ComingSoon title="Terms & Conditions" />} />
            <Route path="/imprint" element={<ComingSoon title="Legal Notice" />} />
            <Route path="/download" element={<ComingSoon title="Download StoreMate" />} />
            <Route path="*" element={<ComingSoon title="This page is currently under development and will be available soon." />} />
          </Routes>
        </div>
        <GlobalFooter />
      </div>
    </Router>
  );
}
