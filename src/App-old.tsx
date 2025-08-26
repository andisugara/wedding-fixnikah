import { useState, useEffect } from "react";
import {
  Play,
  Info,
  Volume2,
  VolumeX,
  Calendar,
  MapPin,
  Gift,
  Heart,
  X,
} from "lucide-react";
import NikahFix from "./assets/images/nikahfix.png";
import ProfileImg from "./assets/images/profile.jpg";
import BackSound from "./assets/sounds/backsound.mp3";
import Groom from "./assets/images/groom.jpg";
import Bride from "./assets/images/bride.jpg";
import IntimateImg from "./assets/images/intimate.jpg";
import LoadingAudio from "./assets/sounds/loading.mp3";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("cover");
  const [isMuted, setIsMuted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showRSVP, setShowRSVP] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});

  // Wedding data
  const weddingDetails = {
    groom: "Fulan",
    bride: "Fulanah",
    groomFull: "Fulan, S.Kom",
    brideFull: "Fulanah, S.Pd",
    groomParents: "Bapak Surya & Ibu Sari",
    brideParents: "Bapak Budi & Ibu Ani",
    weddingDate: "2025-08-15",
    akadDate: "Saturday, August 15, 2025",
    akadTime: "08:00 - 10:00 WIB",
    receptionDate: "Saturday, August 15, 2025",
    receptionTime: "11:00 - 15:00 WIB",
    venue: "Grand Ballroom Hotel Mulia",
    address: "Jl. Asia Afrika No. 8, Senayan, Jakarta Pusat",
    holyVerse:
      "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.",
    holyVerseRef: "QS. Ar-Rum: 21",
  };

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const weddingTime = new Date(weddingDetails.weddingDate).getTime();
      const difference = weddingTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const audio = new Audio(BackSound);
    audio.loop = true;

    if (currentScreen === "main") {
      if (!isMuted) {
        audio.play();
      } else {
        audio.pause();
      }
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    return () => {
      audio.pause();
    };
  }, [currentScreen, isMuted]);

  // Love story data
  const loveStory = [
    {
      title: "First Meeting",
      date: "January 2020",
      story:
        "Kami bertemu pertama kali di sebuah coffee shop di Jakarta. Mata kami bertemu dan saat itu juga kami tahu bahwa ini adalah awal dari sesuatu yang istimewa.",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop",
    },
    {
      title: "First Date",
      date: "February 2020",
      story:
        "Kencan pertama kami di taman kota. Kami berbicara berjam-jam tentang mimpi dan cita-cita, dan kami menyadari betapa cocoknya kami berdua.",
      image:
        "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=400&h=300&fit=crop",
    },
    {
      title: "The Proposal",
      date: "December 2023",
      story:
        "Di tempat yang sama dimana kami pertama kali bertemu, Riko melamar Octa dengan cincin yang telah ia persiapkan berbulan-bulan. Tentu saja jawabannya adalah 'Yes!'",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
    },
  ];

  // Gallery data
  const galleryImages = [
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=300&fit=crop",
  ];

  // Profiles data
  const profiles = [
    {
      id: 1,
      name: "Andi Sugara",
      avatar: ProfileImg,
      isMain: true,
    },
  ];

  // Cover Screen
  const CoverScreen = () => (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0  z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&h=1080&fit=crop)`,
            filter: "brightness(0.3)",
          }}
        ></div>
      </div>
      {/* Content */}
      <NetflixHeaderCover />
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <div className="text-white/80 text-lg md:text-xl mb-6 font-light">
            Dengan memohon rahmat dan ridho Allah SWT
          </div>

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            {weddingDetails.groom}
            <div className="text-red-600 mx-4">&</div>
            {weddingDetails.bride}
          </h1>

          <div className="text-white/80 text-lg md:text-xl mb-12 font-light">
            Mengundang Anda untuk hadir dalam acara pernikahan kami
          </div>

          <button
            onClick={() => setCurrentScreen("profiles")}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold rounded transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Buka Undangan
          </button>
        </div>
      </div>
    </div>
  );

  const ProfileSelection = () => (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-5xl font-light mb-12">
          Who's watching?
        </h1>
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="text-center group cursor-pointer"
              onClick={() => {
                setCurrentScreen("loading");
                const audio = new Audio(LoadingAudio);
                audio.play();
                setTimeout(() => setCurrentScreen("main"), 4000);
              }}
            >
              <div className="w-32 h-32 mb-4 rounded-lg bg-gray-800 flex items-center justify-center text-6xl group-hover:ring-4 group-hover:ring-white ">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-400 text-lg group-hover:text-white ">
                {profile.name}
              </p>
            </div>
          ))}
        </div>
        <button className="mt-16 text-gray-400 hover:text-white  border border-gray-400 hover:border-white px-6 py-3 text-lg">
          Dateng Yaaaa!!!
        </button>
      </div>
    </div>
  );

  const LoadingScreen = () => (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center justify-center px-4">
        <img
          src={NikahFix}
          alt="NikahFix Logo"
          className="w-32 md:w-64 h-auto mb-8"
        />
        <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white text-xl mt-8 text-center">
          Menyiapkan undangan spesial untuk Anda...
        </p>
      </div>
    </div>
  );

  // Netflix Header
  const NetflixHeader = () => (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <div className="flex items-center space-x-8">
          <div className="text-red-600 text-2xl md:text-3xl font-bold tracking-wide">
            <img
              src={NikahFix}
              alt="NikahFix Logo"
              className="w-32 md:w-32 h-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-6 text-white text-sm font-medium">
            <button
              onClick={() => setActiveSection("holy-verse")}
              className="hover:text-gray-300 transition-colors"
            >
              Ayat Suci
            </button>
            <button
              onClick={() => setActiveSection("countdown")}
              className="hover:text-gray-300 transition-colors"
            >
              Countdown
            </button>
            <button
              onClick={() => setActiveSection("couple")}
              className="hover:text-gray-300 transition-colors"
            >
              Profil
            </button>
            <button
              onClick={() => setActiveSection("story")}
              className="hover:text-gray-300 transition-colors"
            >
              Love Story
            </button>
            <button
              onClick={() => setActiveSection("event")}
              className="hover:text-gray-300 transition-colors"
            >
              Acara
            </button>
            <button
              onClick={() => setActiveSection("gallery")}
              className="hover:text-gray-300 transition-colors"
            >
              Galeri
            </button>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowRSVP(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-medium rounded transition-colors cursor-pointer"
          >
            RSVP
          </button>
          <div
            className="w-8 h-8 bg-red-600 rounded overflow-hidden cursor-pointer hover:ring-2 hover:ring-white transition-all"
            onClick={() => setCurrentScreen("profiles")}
          >
            <img
              src={ProfileImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );

  // Netflix Header
  const NetflixHeaderCover = () => (
    <header className="absolute w-full">
      <div className="px-4 md:px-24 py-8">
        <img
          src={NikahFix}
          alt="NikahFix Logo"
          className="w-32 md:w-64 h-auto"
        />
      </div>
    </header>
  );

  // Hero Section
  const HeroSection = () => (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&h=1080&fit=crop)`,
            filter: "brightness(0.4)",
          }}
        ></div>
      </div>

      <div className="relative z-20 flex items-center h-full px-4 md:px-8">
        <div className="max-w-2xl">
          <div className="mb-4">
            <span className="bg-red-600 text-white px-3 py-1 text-sm font-bold rounded-sm">
              N
            </span>
            <span className="text-white/80 ml-3 text-sm font-light tracking-wider">
              WEDDING SERIES
            </span>
          </div>

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {weddingDetails.groom} <br />
            <span className="text-red-600">&</span> {weddingDetails.bride}
          </h1>

          <div className="flex items-center space-x-4 mb-6 text-sm">
            <span className="text-green-400 font-bold">99% Match</span>
            <span className="text-white/80">2025</span>
            <span className="border border-white/50 text-white/80 px-2 py-1 text-xs rounded">
              HD
            </span>
            <span className="text-white/80">Wedding Special</span>
          </div>

          <p className="text-white/90 text-lg mb-8 max-w-lg leading-relaxed font-light">
            Dimulai dari sebuah pertemuan sederhana, cinta mereka tumbuh
            perlahan, melintasi musim dan waktu. Kini, mereka berdiri di ambang
            janji suci, siap melangkah ke panggung kehidupan bersama.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded flex items-center space-x-2 transition-all duration-300 font-bold text-lg"
            >
              <Play size={20} />
              <span>Play</span>
            </button>

            <button
              onClick={() => setActiveSection("story")}
              className="bg-gray-600/70 hover:bg-gray-500/70 text-white px-8 py-3 rounded flex items-center space-x-2 transition-all duration-300 font-bold text-lg"
            >
              <Info size={20} />
              <span>More Info</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-24 right-4 md:right-8">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/20"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>
    </div>
  );

  // Holy Verse Section
  const HolyVerseSection = () => (
    <div className="bg-gray-900 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">
          Ayat Suci
        </h2>
        <div className="bg-black/50 rounded-lg p-8 md:p-12 border border-gray-700">
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6 font-light italic">
            "{weddingDetails.holyVerse}"
          </p>
          <p className="text-red-600 font-bold text-lg">
            {weddingDetails.holyVerseRef}
          </p>
        </div>
      </div>
    </div>
  );

  // Countdown Section
  const CountdownSection = () => (
    <div className="bg-black py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">
          Countdown to Our Big Day
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-red-600 rounded-lg p-6 md:p-8">
              <div className="text-white text-3xl md:text-4xl font-bold">
                {value || 0}
              </div>
              <div className="text-white/80 text-sm md:text-base font-light capitalize">
                {unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Couple Profile Section
  const CoupleSection = () => (
    <div className="relative py-16 px-4 md:px-8">
      <div className="absolute inset-0">
        <div className="absolute inset-0  z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${IntimateImg})`,
            filter: "brightness(0.3)",
          }}
        ></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-20">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
          Profil Calon Pengantin
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="text-center">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-red-600">
              <img
                src={Groom}
                alt="Groom"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
              {weddingDetails.groomFull}
            </h3>
            <p className="text-white/80 text-lg mb-4">
              Putra dari {weddingDetails.groomParents}
            </p>
            <div className="text-white/60 text-sm">
              Software Engineer yang passionate dalam teknologi dan photography.
              Hobi traveling dan mencoba makanan baru.
            </div>
          </div>

          <div className="text-center">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-red-600">
              <img
                src={Bride}
                alt="Bride"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
              {weddingDetails.brideFull}
            </h3>
            <p className="text-white/80 text-lg mb-4">
              Putri dari {weddingDetails.brideParents}
            </p>
            <div className="text-white/60 text-sm">
              Guru yang berdedikasi dalam pendidikan anak. Suka memasak,
              membaca, dan menghabiskan waktu dengan keluarga.
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Love Story Section
  const LoveStorySection = () => (
    <div className="bg-black py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
          Our Love Story
        </h2>
        <div className="space-y-8">
          {loveStory.map((story, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                  {story.title}
                </h3>
                <p className="text-red-600 text-lg font-semibold mb-4">
                  {story.date}
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  {story.story}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Event Section
  const EventSection = () => (
    <div className="bg-gray-900 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
          Akad & Resepsi
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/50 rounded-lg p-8 border border-gray-700">
            <div className="flex items-center mb-6">
              <Calendar className="text-red-600 mr-4" size={32} />
              <h3 className="text-white text-2xl font-bold">Akad Nikah</h3>
            </div>
            <div className="space-y-4 text-white/90">
              <div>
                <p className="font-bold text-lg">{weddingDetails.akadDate}</p>
                <p className="text-red-600 font-semibold">
                  {weddingDetails.akadTime}
                </p>
              </div>
              <div className="flex items-start">
                <MapPin
                  className="text-red-600 mr-3 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="font-bold">{weddingDetails.venue}</p>
                  <p className="text-white/70">{weddingDetails.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/50 rounded-lg p-8 border border-gray-700">
            <div className="flex items-center mb-6">
              <Heart className="text-red-600 mr-4" size={32} />
              <h3 className="text-white text-2xl font-bold">Resepsi</h3>
            </div>
            <div className="space-y-4 text-white/90">
              <div>
                <p className="font-bold text-lg">
                  {weddingDetails.receptionDate}
                </p>
                <p className="text-red-600 font-semibold">
                  {weddingDetails.receptionTime}
                </p>
              </div>
              <div className="flex items-start">
                <MapPin
                  className="text-red-600 mr-3 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <p className="font-bold">{weddingDetails.venue}</p>
                  <p className="text-white/70">{weddingDetails.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Gallery Section
  const GallerySection = () => (
    <div className="bg-black py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
          Galeri
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Messages Section
  const MessagesSection = () => {
    const [messages, setMessages] = useState([
      {
        id: 1,
        name: "Sarah & Family",
        message:
          "Selamat untuk kalian berdua! Semoga menjadi keluarga yang sakinah mawaddah warahmah. Bahagia selalu!",
        time: "2 jam yang lalu",
      },
      {
        id: 2,
        name: "Ahmad",
        message:
          "Congratulations! Wishing you both a lifetime of happiness and love.",
        time: "5 jam yang lalu",
      },
    ]);

    const [newMessage, setNewMessage] = useState({ name: "", message: "" });

    const addMessage = () => {
      if (newMessage.name && newMessage.message) {
        setMessages([
          {
            id: messages.length + 1,
            name: newMessage.name,
            message: newMessage.message,
            time: "Baru saja",
          },
          ...messages,
        ]);
        setNewMessage({ name: "", message: "" });
      }
    };

    return (
      <div className="bg-gray-900 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
            Ucapan & Doa
          </h2>

          <div className="bg-black/50 rounded-lg p-8 border border-gray-700 mb-8">
            <h3 className="text-white text-xl font-bold mb-6">Kirim Ucapan</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nama Anda"
                value={newMessage.name}
                onChange={(e) =>
                  setNewMessage({ ...newMessage, name: e.target.value })
                }
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <textarea
                placeholder="Tulis ucapan dan doa untuk kami..."
                value={newMessage.message}
                onChange={(e) =>
                  setNewMessage({ ...newMessage, message: e.target.value })
                }
                rows={4}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                onClick={addMessage}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
              >
                Kirim Ucapan
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="bg-black/50 rounded-lg p-6 border border-gray-700 flex items-start"
              >
                <div className="w-12 h-12 rounded overflow-hidden mr-4">
                  <img
                    src={ProfileImg}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-white font-bold">{msg.name}</h4>
                    <span className="text-white/60 text-sm">{msg.time}</span>
                  </div>
                  <p className="text-white/90">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // RSVP Modal - Continued from where it was cut off
  const RSVPModal = () => {
    const [rsvpData, setRsvpData] = useState({
      name: "",
      email: "",
      phone: "",
      attendance: "Hadir",
      guests: "1",
      message: "",
    });

    const handleSubmit = () => {
      if (rsvpData.name && rsvpData.email) {
        alert(
          `Terima kasih ${rsvpData.name}! Konfirmasi kehadiran Anda telah diterima.`
        );
        setShowRSVP(false);
        setRsvpData({
          name: "",
          email: "",
          phone: "",
          attendance: "Hadir",
          guests: "1",
          message: "",
        });
      }
    };

    return showRSVP ? (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              Konfirmasi Kehadiran
            </h2>
            <button
              onClick={() => setShowRSVP(false)}
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-white mb-2 font-semibold">
                Nama Lengkap *
              </label>
              <input
                type="text"
                value={rsvpData.name}
                onChange={(e) =>
                  setRsvpData({ ...rsvpData, name: e.target.value })
                }
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>

            <div>
              <label className="block text-white mb-2 font-semibold">
                Email *
              </label>
              <input
                type="email"
                value={rsvpData.email}
                onChange={(e) =>
                  setRsvpData({ ...rsvpData, email: e.target.value })
                }
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>

            <div>
              <label className="block text-white mb-2 font-semibold">
                Nomor Telepon
              </label>
              <input
                type="tel"
                value={rsvpData.phone}
                onChange={(e) =>
                  setRsvpData({ ...rsvpData, phone: e.target.value })
                }
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label className="block text-white mb-2 font-semibold">
                Konfirmasi Kehadiran *
              </label>
              <select
                value={rsvpData.attendance}
                onChange={(e) =>
                  setRsvpData({ ...rsvpData, attendance: e.target.value })
                }
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
                <option value="Belum Pasti">Belum Pasti</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2 font-semibold">
                Jumlah Tamu
              </label>
              <select
                value={rsvpData.guests}
                onChange={(e) =>
                  setRsvpData({ ...rsvpData, guests: e.target.value })
                }
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} orang
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-white mb-2 font-semibold">
                Pesan/Ucapan
              </label>
              <textarea
                value={rsvpData.message}
                onChange={(e) =>
                  setRsvpData({ ...rsvpData, message: e.target.value })
                }
                rows={3}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold mt-4 transition-colors"
            >
              Konfirmasi
            </button>
          </div>
        </div>
      </div>
    ) : null;
  };

  // Wedding Gift Section
  const WeddingGiftSection = () => (
    <div className="bg-black py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
          Wedding Gift
        </h2>
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
          <div className="flex justify-center mb-6">
            <Gift className="text-red-600" size={48} />
          </div>
          <p className="text-white/90 text-lg mb-6">
            Kehadiran dan doa Anda adalah hadiah terbaik untuk kami. Namun jika
            Anda ingin memberikan sesuatu, kami akan sangat berterima kasih
            untuk kontribusi melalui:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-white text-xl font-bold mb-4">
                Bank Transfer
              </h3>
              <div className="text-left space-y-3">
                <div>
                  <p className="text-white/70 text-sm">Bank Name</p>
                  <p className="text-white font-medium">BCA</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Account Number</p>
                  <p className="text-white font-medium">123 456 7890</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Account Name</p>
                  <p className="text-white font-medium">Fulan & Fulanah</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-white text-xl font-bold mb-4">E-Wallet</h3>
              <div className="text-left space-y-3">
                <div>
                  <p className="text-white/70 text-sm">Gopay</p>
                  <p className="text-white font-medium">0812 3456 7890</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm">OVO</p>
                  <p className="text-white font-medium">0812 3456 7890</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Dana</p>
                  <p className="text-white font-medium">0812 3456 7890</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-white/70 text-sm">
            *Untuk hadiah fisik, silakan hubungi panitia atau langsung bawa pada
            hari H
          </p>
        </div>
      </div>
    </div>
  );

  // Closing Statement Section
  const ClosingStatementSection = () => (
    <div className="relative min-h-[60vh] bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1920&h=1080&fit=crop)`,
            filter: "brightness(0.4)",
          }}
        ></div>
      </div>

      <div className="relative z-20 min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-8">
            Terima Kasih Atas Doa & Dukungannya
          </h2>

          <p className="text-white/90 text-lg md:text-xl mb-12 leading-relaxed">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
            kami. Atas kehadiran dan doa restunya, kami mengucapkan terima
            kasih.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="text-center">
              <h3 className="text-white text-2xl font-bold mb-2">
                {weddingDetails.groom}
              </h3>
              <p className="text-white/70">
                Putra dari {weddingDetails.groomParents}
              </p>
            </div>

            <div className="text-red-600 text-3xl font-bold">&</div>

            <div className="text-center">
              <h3 className="text-white text-2xl font-bold mb-2">
                {weddingDetails.bride}
              </h3>
              <p className="text-white/70">
                Putri dari {weddingDetails.brideParents}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Main Screen
  const MainScreen = () => (
    <div className="bg-black text-white">
      <NetflixHeader />

      <HeroSection />

      <div
        ref={(ref) => {
          if (ref && activeSection === "holy-verse") {
            ref.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <HolyVerseSection />
      </div>

      <div
        ref={(ref) => {
          if (ref && activeSection === "countdown") {
            ref.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <CountdownSection />
      </div>

      <div
        ref={(ref) => {
          if (ref && activeSection === "couple") {
            ref.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <CoupleSection />
      </div>

      <div
        ref={(ref) => {
          if (ref && activeSection === "story") {
            ref.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <LoveStorySection />
      </div>

      <div
        ref={(ref) => {
          if (ref && activeSection === "event") {
            ref.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <EventSection />
      </div>

      <div
        ref={(ref) => {
          if (ref && activeSection === "gallery") {
            ref.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <GallerySection />
      </div>

      <MessagesSection />
      <WeddingGiftSection />
      <ClosingStatementSection />

      {/* Modal Components */}
      <RSVPModal />

      {/* Video Modal - Placeholder */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <X size={32} />
            </button>
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play size={64} className="mx-auto text-red-600 mb-4" />
                <p className="text-white text-xl">Video Wedding Trailer</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Render based on current screen
  return (
    <div className="font-sans">
      {currentScreen === "cover" ? (
        <CoverScreen />
      ) : currentScreen === "profiles" ? (
        <ProfileSelection />
      ) : currentScreen === "loading" ? (
        <LoadingScreen />
      ) : (
        <MainScreen />
      )}
    </div>
  );
};

export default App;
