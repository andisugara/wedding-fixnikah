export interface WeddingDetails {
  groom: string;
  bride: string;
  groomFull: string;
  brideFull: string;
  groomParents: string;
  brideParents: string;
  weddingDate: string;
  akadDate: string;
  akadTime: string;
  receptionDate: string;
  receptionTime: string;
  venue: string;
  address: string;
  holyVerse: string;
  holyVerseRef: string;
}

export interface LoveStoryItem {
  title: string;
  date: string;
  story: string;
  image: string;
}

export interface Guest {
  id: number;
  name: string;
  avatar: string;
  isMain: boolean;
  from: string;
  created_at: string;
}

export interface Message {
  id: number;
  name: string;
  message: string;
  time: string;
}

export interface RSVPData {
  name: string;
  email: string;
  phone: string;
  attendance: string;
  guests: string;
  message: string;
}
