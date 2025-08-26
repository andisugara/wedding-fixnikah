import type { WeddingDetails, LoveStoryItem, Guest } from "../types";
import ProfileImg from "../assets/images/profile.jpg";

export const weddingDetails: WeddingDetails = {
  groom: "Fulan",
  bride: "Fulanah",
  groomFull: "Fulan, S.Kom",
  brideFull: "Fulanah, S.Pd",
  groomParents: "Bapak Surya & Ibu Sari",
  brideParents: "Bapak Budi & Ibu Ani",
  weddingDate: "2025-10-15",
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

export const loveStory: LoveStoryItem[] = [
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

export const galleryImages = [
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=300&fit=crop",
];

export const profile: Guest = {
  id: 1,
  name: "Andi Sugara",
  avatar: ProfileImg,
  isMain: true,
  from: "Riko",
  created_at: "2024-01-01",
};
