import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import Home from './pages/home/Index';
import NotFound from './pages/not-found/Index';
import { ROUTE_PATHS } from './lib';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_PATHS.HOME} element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-center" richColors />
    </Router>
  );
}

export default App;
