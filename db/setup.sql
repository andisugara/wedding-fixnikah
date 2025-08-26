-- Create tables for wedding invitation app

-- Wedding details table
CREATE TABLE public.wedding_details (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  groom character varying,
  bride character varying,
  groomFull character varying,
  brideFull character varying,
  groomParents character varying,
  brideParents character varying,
  weddingDate date,
  akadDate character varying,
  akadTime character varying,
  receptionDate character varying,
  receptionTime character varying,
  venue character varying,
  address character varying,
  holyVerse character varying,
  holyVerseRef character varying,
  CONSTRAINT wedding_details_pkey PRIMARY KEY (id)
);

-- Guest table with UUID
CREATE TABLE public.guest (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  code uuid DEFAULT gen_random_uuid(),
  name character varying,
  from character varying,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT guest_pkey PRIMARY KEY (id)
);

-- Love story items
CREATE TABLE public.love_story_item (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  title character varying,
  date character varying,
  story text,
  image character varying,
  CONSTRAINT love_story_item_pkey PRIMARY KEY (id)
);

-- Gallery images
CREATE TABLE public.gallery (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  image character varying,
  CONSTRAINT gallery_pkey PRIMARY KEY (id)
);

-- Messages from guests
CREATE TABLE public.message (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  name character varying,
  message character varying,
  guest_uuid uuid,
  CONSTRAINT message_pkey PRIMARY KEY (id)
);

-- RSVP responses
CREATE TABLE public.rsvp (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  name character varying,
  email character varying,
  phone character varying,
  attendance character varying,
  guests integer DEFAULT 1,
  message text,
  guest_uuid uuid,
  CONSTRAINT rsvp_pkey PRIMARY KEY (id)
);

-- Sample data for testing
INSERT INTO public.wedding_details (
  groom, bride, groomFull, brideFull, groomParents, brideParents,
  weddingDate, akadDate, akadTime, receptionDate, receptionTime,
  venue, address, holyVerse, holyVerseRef
) VALUES (
  'Fulan', 'Fulanah', 'Fulan, S.Kom', 'Fulanah, S.Pd',
  'Bapak Surya & Ibu Sari', 'Bapak Budi & Ibu Ani',
  '2025-10-15', 'Saturday, August 15, 2025', '08:00 - 10:00 WIB',
  'Saturday, August 15, 2025', '11:00 - 15:00 WIB',
  'Grand Ballroom Hotel Mulia', 'Jl. Asia Afrika No. 8, Senayan, Jakarta Pusat',
  'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.',
  'QS. Ar-Rum: 21'
);

-- Sample guests
INSERT INTO public.guest (name, "from") VALUES 
('Andi Sugara', 'Riko'),
('Ahmad Fauzi', 'Octa'),
('Budi Santoso', 'Riko'),
('Dewi Lestari', 'Octa');

-- Sample love story
INSERT INTO public.love_story_item (title, date, story, image) VALUES
('First Meeting', 'January 2020', 'Kami bertemu pertama kali di sebuah coffee shop di Jakarta. Mata kami bertemu dan saat itu juga kami tahu bahwa ini adalah awal dari sesuatu yang istimewa.', 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop'),
('First Date', 'February 2020', 'Kencan pertama kami di taman kota. Kami berbicara berjam-jam tentang mimpi dan cita-cita, dan kami menyadari betapa cocoknya kami berdua.', 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=400&h=300&fit=crop'),
('The Proposal', 'December 2023', 'Di tempat yang sama dimana kami pertama kali bertemu, Riko melamar Octa dengan cincin yang telah ia persiapkan berbulan-bulan. Tentu saja jawabannya adalah "Yes!"', 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop');

-- Sample gallery images
INSERT INTO public.gallery (image) VALUES
('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop'),
('https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop'),
('https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop'),
('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop'),
('https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=400&h=300&fit=crop'),
('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=300&fit=crop');
