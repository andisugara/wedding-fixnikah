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
import { weddingDetails } from "./data/weddingData";

function App() {
  const [currentScreen, setCurrentScreen] = useState("profiles");
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showRSVP, setShowRSVP] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
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
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case "cover":
        return <CoverScreen setCurrentScreen={setCurrentScreen} />;
      case "profiles":
        return <ProfileSelection setCurrentScreen={setCurrentScreen} />;
      case "loading":
        return <LoadingScreen />;
      case "main":
        return (
          <div className="bg-black text-white">
            <NetflixHeader
              setActiveSection={setActiveSection}
              setShowRSVP={setShowRSVP}
              setCurrentScreen={setCurrentScreen}
            />
            <HeroSection
              isMuted={isMuted}
              setIsMuted={setIsMuted}
              setShowModal={setShowModal}
              setActiveSection={setActiveSection}
            />
            <HolyVerseSection />
            <CountdownSection timeLeft={timeLeft} />
            <CoupleSection />
            <LoveStorySection />
            <EventSection />
            <GallerySection />
            <MessagesSection />
            <WeddingGiftSection />
            <ClosingStatementSection />
            <RSVPModal showRSVP={showRSVP} setShowRSVP={setShowRSVP} />
          </div>
        );
      default:
        return <CoverScreen setCurrentScreen={setCurrentScreen} />;
    }
  };

  return <div className="App">{renderScreen()}</div>;
}

export default App;
