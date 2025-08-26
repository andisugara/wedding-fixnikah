# Wedding Invitation Website with Supabase Integration

This project is a wedding invitation website built with React, TypeScript, Vite, and Supabase for data storage and management.

## Features

- Guest-specific invitations with unique URLs
- Wedding details display
- Couple profiles
- Love story timeline
- Photo gallery
- RSVP functionality
- Guest messages
- Countdown timer

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Supabase Database Structure

The project uses the following tables in Supabase:

1. **wedding_details**: Wedding information (bride, groom, dates, etc.)
2. **guest**: Information about guests
3. **gallery**: Wedding photo gallery
4. **love_story_item**: Love story timeline
5. **message**: Guest messages
6. **rsvp**: Guest RSVP responses

## URL Format

Guest-specific invitations use the format:
```
http://your-site.com/?uuid=GUEST_UUID
```

Where `GUEST_UUID` is the unique identifier from the `guest` table in Supabase.

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` directory to your hosting service.
```
