import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import ProfileImg from "../assets/images/profile.jpg";
import type {
  WeddingDetails,
  LoveStoryItem,
  Guest,
  Message,
  RSVPData,
} from "../types";

// Guest hook - get guest by UUID from URL path
export const useGuest = () => {
  // Get UUID from path: http://localhost:5173/3aec30cf-22f7-49be-a9a3-8d3f66e2cdb0
  const pathname = window.location.pathname;
  const guestUUID = pathname.substring(1); // Remove the leading '/'
  // If it's an empty string (root path) or not a valid UUID format, set it to null
  const validUUID = guestUUID && guestUUID.length > 0 ? guestUUID : null;
  const [guest, setGuest] = useState<Guest | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGuest = async () => {
      if (!validUUID) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("guest")
          .select("*")
          .eq("code", validUUID)
          .single();

        if (error) throw error;

        if (data) {
          setGuest({
            id: data.id,
            name: data.name,
            avatar: ProfileImg, // We'll use a default avatar
            isMain: true,
            from: data.from,
            created_at: data.created_at,
          });
        }
      } catch (error: any) {
        console.error("Error fetching guest:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGuest();
  }, [validUUID]);

  return { guest, loading, error, guestExists: !!guest };
};

// Wedding details hook
export const useWeddingDetails = () => {
  const [weddingDetails, setWeddingDetails] = useState<WeddingDetails | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeddingDetails = async () => {
      try {
        const { data, error } = await supabase
          .from("wedding_details")
          .select("*")
          .limit(1)
          .single();

        if (error) throw error;

        setWeddingDetails(data as WeddingDetails);
      } catch (error: any) {
        console.error("Error fetching wedding details:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeddingDetails();
  }, []);

  return { weddingDetails, loading, error };
};

// Love story hook
export const useLoveStory = () => {
  const [loveStory, setLoveStory] = useState<LoveStoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLoveStory = async () => {
      try {
        const { data, error } = await supabase
          .from("love_story_item")
          .select("*")
          .order("id", { ascending: true });

        if (error) throw error;

        setLoveStory(data as LoveStoryItem[]);
      } catch (error: any) {
        console.error("Error fetching love story:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLoveStory();
  }, []);

  return { loveStory, loading, error };
};

// Gallery hook
export const useGallery = () => {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const { data, error } = await supabase
          .from("gallery")
          .select("image")
          .order("id", { ascending: true });

        if (error) throw error;

        setGalleryImages(data.map((item: any) => item.image));
      } catch (error: any) {
        console.error("Error fetching gallery:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return { galleryImages, loading, error };
};

// Messages hook with pagination
export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Get guest UUID for tracking if they've submitted a message
  const pathname = window.location.pathname;
  const pathUUID = pathname.substring(1); // Remove the leading '/'
  const guestUUID = pathUUID && pathUUID.length > 0 ? pathUUID : null;

  useEffect(() => {
    const fetchMessages = async () => {
      console.log("fetch message");
      try {
        const { data, error } = await supabase
          .from("message")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        // Format messages
        const formattedMessages = data.map((item: any) => ({
          id: item.id,
          name: item.name,
          message: item.message,
          time: formatTime(new Date(item.created_at)),
        }));

        setMessages(formattedMessages);

        // Check if this guest has already submitted a message
        if (guestUUID) {
          const { data: guestMessage } = await supabase
            .from("message")
            .select("id")
            .eq("guest_uuid", guestUUID)
            .maybeSingle();

          setHasSubmitted(!!guestMessage);
        }
      } catch (error: any) {
        console.error("Error fetching messages:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();

    // Set up real-time subscription
    const channel = supabase
      .channel("public:message")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "message" },
        () => {
          fetchMessages();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [guestUUID]);

  // Function to add a new message
  const addMessage = async (name: string, message: string) => {
    if (hasSubmitted && guestUUID) {
      setError("You have already submitted a message");
      return false;
    }

    try {
      setLoading(true);
      const { error } = await supabase.from("message").insert([
        {
          name,
          message,
          guest_uuid: guestUUID || null,
        },
      ]);

      if (error) throw error;

      if (guestUUID) {
        setHasSubmitted(true);
      }

      return true;
    } catch (error: any) {
      console.error("Error adding message:", error);
      setError(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  function formatTime(date: Date) {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600)
      return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  }

  return {
    messages,
    loading,
    error,
    addMessage,
    hasSubmitted,
  };
};

// RSVP hook
export const useRSVP = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Get guest UUID for tracking if they've submitted RSVP
  const pathname = window.location.pathname;
  const pathUUID = pathname.substring(1); // Remove the leading '/'
  const guestUUID = pathUUID && pathUUID.length > 0 ? pathUUID : null;

  // Check if this guest has already submitted an RSVP
  useEffect(() => {
    const checkExistingRSVP = async () => {
      if (!guestUUID) return;

      try {
        const { data, error } = await supabase
          .from("rsvp")
          .select("id")
          .eq("guest_uuid", guestUUID)
          .maybeSingle();

        if (error) throw error;

        setHasSubmitted(!!data);
      } catch (error: any) {
        console.error("Error checking existing RSVP:", error);
      }
    };

    checkExistingRSVP();
  }, [guestUUID]);

  // Function to submit RSVP
  const submitRSVP = async (rsvpData: RSVPData) => {
    if (hasSubmitted && guestUUID) {
      setError("You have already submitted an RSVP");
      return false;
    }

    try {
      setLoading(true);
      const { error } = await supabase.from("rsvp").insert([
        {
          ...rsvpData,
          guest_uuid: guestUUID || null,
          guests: parseInt(rsvpData.guests, 10) || 1,
        },
      ]);

      if (error) throw error;

      if (guestUUID) {
        setHasSubmitted(true);
      }

      return true;
    } catch (error: any) {
      console.error("Error submitting RSVP:", error);
      setError(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    submitRSVP,
    loading,
    error,
    hasSubmitted,
  };
};
