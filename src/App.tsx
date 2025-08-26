import React, { useState, useEffect } from "react";
import { CoverScreen } from "./components/CoverScreen";
import { ProfileSelection } from "./components/ProfileSelection";
import { LoadingScreen } from "./components/LoadingScreen";
import { NetflixHeader } from "./components/NetflixHeader";
import { HeroSection } from "./components/HeroSection";
import { HolyVerseSection } from "./components/HolyVerseSection";
import { CountdownSection } from "./components/CountdownSection";
import { CoupleSection } from "./components/CoupleSection";
import { LoveStorySection } from "./components/LoveStorySection";
import { EventSection } from "./components/EventSection";
import { GallerySection } from "./components/GallerySection";
import { MessagesSection } from "./components/MessagesSection";
import { RSVPModal } from "./components/RSVPModal";
import { WeddingGiftSection } from "./components/WeddingGiftSection";
import { ClosingStatementSection } from "./components/ClosingStatementSection";
import { useWeddingDetails, useGuest, useLoveStory, useGallery } from "./hooks/useSupabase";

function App() {
  const [currentScreen, setCurrentScreen] = useState("profiles");
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showRSVP, setShowRSVP] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  
  // Fetch data from Supabase
  const { guest, loading: loadingGuest, guestExists } = useGuest();
  const { weddingDetails, loading: loadingWeddingDetails } = useWeddingDetails();
  const { loveStory, loading: loadingLoveStory } = useLoveStory();
  const { galleryImages, loading: loadingGallery } = useGallery();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate countdown if wedding details are available
  useEffect(() => {
    if (!weddingDetails) return;
    
    const calculateTimeLeft = () => {
      const difference = +new Date(weddingDetails.weddingDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [weddingDetails]);

  const renderScreen = () => {
    // Check if we're still loading data
    const isLoading = loadingGuest || loadingWeddingDetails || loadingLoveStory || loadingGallery;
    
    if (isLoading) {
      return <LoadingScreen />;
    }
    
    // If no guest UUID or guest doesn't exist
    const pathname = window.location.pathname;
    const guestUUID = pathname.substring(1); // Remove the leading '/'
    // Only show the error if there's a UUID in the path and guest doesn't exist
    if (guestUUID && guestUUID.length > 0 && !guestExists && currentScreen !== 'cover') {
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Undangan Tidak Ditemukan</h1>
          <p className="text-lg mb-8">Maaf, undangan dengan kode tersebut tidak ditemukan.</p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Kembali ke Halaman Utama
          </button>
        </div>
      );
    }
    
    switch (currentScreen) {
      case "cover":
        return <CoverScreen 
          weddingDetails={weddingDetails} 
          setCurrentScreen={setCurrentScreen} 
        />;
      case "profiles":
        return <ProfileSelection 
          guest={guest} 
          setCurrentScreen={setCurrentScreen} 
        />;
      case "loading":
        return <LoadingScreen />;
      case "main":
        return (
          <div className="bg-black text-white">
            <NetflixHeader
              setActiveSection={setActiveSection}
              setShowRSVP={setShowRSVP}
              setCurrentScreen={setCurrentScreen}
              guest={guest}
            />
            <HeroSection
              isMuted={isMuted}
              setIsMuted={setIsMuted}
              setShowModal={setShowModal}
              setActiveSection={setActiveSection}
              weddingDetails={weddingDetails}
            />
            <HolyVerseSection weddingDetails={weddingDetails} />
            <CountdownSection timeLeft={timeLeft} />
            <CoupleSection weddingDetails={weddingDetails} />
            <LoveStorySection loveStory={loveStory} />
            <EventSection weddingDetails={weddingDetails} />
            <GallerySection galleryImages={galleryImages} />
            <MessagesSection />
            <WeddingGiftSection weddingDetails={weddingDetails} />
            <ClosingStatementSection weddingDetails={weddingDetails} />
            <RSVPModal showRSVP={showRSVP} setShowRSVP={setShowRSVP} />
          </div>
        );
      default:
        return <CoverScreen 
          weddingDetails={weddingDetails} 
          setCurrentScreen={setCurrentScreen} 
        />;
    }
  };

  return <div className="App">{renderScreen()}</div>;
}

export default App;
