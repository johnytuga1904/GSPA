import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ServicesPage from "./pages/services";
import BookingPage from "./pages/booking";
import GiftCertificatesPage from "./pages/gift-certificates";
import AboutPage from "./pages/about";

function App() {
  return (
    <LanguageProvider>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen bg-neutral-30">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-amber-200 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-amber-800 text-lg">Loading...</p>
            </div>
          </div>
        }
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route
                path="/gift-certificates"
                element={<GiftCertificatesPage />}
              />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
            {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
          </main>
          <Footer />
        </div>
      </Suspense>
    </LanguageProvider>
  );
}

export default App;
