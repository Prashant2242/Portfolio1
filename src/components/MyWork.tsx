import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Youtube, Instagram, Image as ImageIcon } from 'lucide-react';

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";

import INSTA1 from "../assets/INSTA1.png";
import INSTA2 from "../assets/INSTA2.png";
import INSTA3 from "../assets/INSTA3.png";
import INSTA4 from "../assets/INSTA4.png";
import INSTA5 from "../assets/INSTA5.png";
import INSTA6 from "../assets/INSTA6.png";

import Podcast1 from "../assets/Podcast1.png";
import Podcast2 from "../assets/Podcast2.png";

interface MediaItem {
  id: number;
  url: string;
  thumbnail?: string;
  title?: string;
}

const MyWork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [youtubeIndex, setYoutubeIndex] = useState(0);
  const [instagramIndex, setInstagramIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [podcastIndex, setPodcastIndex] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);

  /* ------------------ YOUTUBE THUMBNAIL HELPERS ------------------ */
  const getYoutubeId = (url: string) => {
    if (url.includes("youtu.be/")) return url.split("youtu.be/")[1].split("?")[0];
    if (url.includes("v=")) return url.split("v=")[1].split("&")[0];
    return "";
  };

  const getYoutubeThumbnail = (url: string) =>
    `https://img.youtube.com/vi/${getYoutubeId(url)}/hqdefault.jpg`;

  /* ------------------ DATA ------------------ */

  const youtubeVideos: MediaItem[] = [
    { id: 1, url: 'https://youtu.be/Z3nnbxWNxKE', title: 'Rishte Naate - Raghbir Singh Sohal Interview' },
    { id: 2, url: 'https://www.youtube.com/watch?v=nvdms7DaUTg', title: 'Gallan Goll Song - Gulab Sidhu News' },
    { id: 3, url: 'https://youtu.be/D3Ps04_1fnw', title: 'Kamaal Ae Song - Inderjit Nikku News' },
    { id: 4, url: 'https://www.youtube.com/watch?v=ID8M8dAbwR8', title: 'Royal Singh Interview' },
    { id: 5, url: 'https://youtu.be/sIniidzX3Hc', title: 'Love Gill Interview' },
    { id: 6, url: 'https://youtu.be/xjR4RfNgNww', title: 'Geeta Zaildar Interview' },
    { id: 7, url: 'https://youtu.be/xjR4RfNgNww', title: 'Geeta Zaildar Interview' },
    { id: 8, url: 'https://youtu.be/xjR4RfNgNww', title: 'Geeta Zaildar Interview' },
    { id: 9, url: 'https://youtu.be/xjR4RfNgNww', title: 'Geeta Zaildar Interview' },
  ];

  const podcastVideos: MediaItem[] = [
    { id: 1, url: "https://www.youtube.com/watch?v=1vRB3a03-Xc", thumbnail: Podcast1, title: "Podcast Episode 1" },
    { id: 2, url: "https://www.youtube.com/watch?v=OQRIYUltCnw&t=2s", thumbnail: Podcast2, title: "Podcast Episode 2" },
  ];

  const instagramVideos: MediaItem[] = [
    { id: 1, url: 'https://www.instagram.com/reel/DP3WnqKiOL4/', thumbnail: INSTA1, title: 'News' },
    { id: 2, url: 'https://www.instagram.com/reel/DNf_925pbLD/', thumbnail: INSTA2, title: 'News' },
    { id: 3, url: 'https://www.instagram.com/reel/DNZVXWbBQW8/', thumbnail: INSTA3, title: 'News' },
    { id: 4, url: 'https://www.instagram.com/reel/DQgYPlvjHnF/', thumbnail: INSTA4, title: 'News' },
    { id: 5, url: 'https://www.instagram.com/reel/DQYyEv0Dt4M/', thumbnail: INSTA5, title: 'News' },
    { id: 6, url: 'https://www.instagram.com/reel/DQWQQ_QDY9d/', thumbnail: INSTA6, title: 'News' },
  ];

  const images: MediaItem[] = [
    { id: 1, url: image1 },
    { id: 2, url: image2 },
    { id: 3, url: image3 },
    { id: 4, url: image4 },
    { id: 5, url: image5 },
    { id: 6, url: image6 },
  ];

  /* ------------------ EFFECTS ------------------ */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const nextSlide = (setter: any, total: number) =>
    setter((prev: number) => (prev + 3 >= total ? 0 : prev + 3));

  const prevSlide = (setter: any, total: number) =>
    setter((prev: number) => (prev - 3 < 0 ? Math.max(0, total - 3) : prev - 3));

  /* ------------------ JSX ------------------ */

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* YOUTUBE */}
        <div className={`${isVisible ? "opacity-100" : "opacity-0"} transition-all`}>
          <div className="flex items-center gap-3 mb-8">
            <Youtube className="text-red-500" size={32} />
            <h3 className="text-3xl font-bold text-white">YouTube Videos</h3>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
            {youtubeVideos.slice(youtubeIndex, youtubeIndex + 3).map(video => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition"
              >
                <div className="aspect-video relative">
                  <img
                    src={getYoutubeThumbnail(video.url)}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Youtube size={48} className="text-white" />
                  </div>
                </div>
                <div className="p-4 text-white font-semibold">{video.title}</div>
              </a>
            ))}

            {youtubeVideos.length > 3 && (
              <>
                <button onClick={() => prevSlide(setYoutubeIndex, youtubeVideos.length)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-500 p-3 rounded-full">
                  <ChevronLeft />
                </button>
                <button onClick={() => nextSlide(setYoutubeIndex, youtubeVideos.length)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-500 p-3 rounded-full">
                  <ChevronRight />
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MyWork;

