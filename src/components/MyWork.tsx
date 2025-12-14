import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Youtube, Instagram, Image as ImageIcon } from 'lucide-react';
//
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

import Podcast1 from "../assets/Podcast1.png"
import Podcast2 from "../assets/Podcast2.png"

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

  // YouTube Videos
  const youtubeVideos: MediaItem[] = [
  { id: 1, url: 'https://youtu.be/Z3nnbxWNxKE', thumbnail: 'https://img.youtube.com/vi/Z3nnbxWNxKE/hqdefault.jpg', title: 'Rishte Naate - Raghbir Singh Sohal Interview' },
  { id: 2, url: 'https://www.youtube.com/watch?v=nvdms7DaUTg', thumbnail: 'https://img.youtube.com/vi/nvdms7DaUTg/hqdefault.jpg', title: 'Gallan Goll Song - Gulab Sidhu News' },
  { id: 3, url: 'https://youtu.be/D3Ps04_1fnw', thumbnail: 'https://img.youtube.com/vi/D3Ps04_1fnw/hqdefault.jpg', title: 'Kamaal Ae Song - Inderjit Nikku News' },
  { id: 4, url: 'https://www.youtube.com/watch?v=ID8M8dAbwR8', thumbnail: 'https://img.youtube.com/vi/ID8M8dAbwR8/hqdefault.jpg', title: 'Royal Singh Interview' },
  { id: 5, url: 'https://youtu.be/sIniidzX3Hc', thumbnail: 'https://img.youtube.com/vi/sIniidzX3Hc/hqdefault.jpg', title: 'Love Gill Interview' },
  { id: 6, url: 'https://youtu.be/xjR4RfNgNww', thumbnail: 'https://img.youtube.com/vi/xjR4RfNgNww/hqdefault.jpg', title: 'Geeta Zaildar Interview' },
  { id: 7, url: 'https://youtu.be/xjR4RfNgNww', thumbnail: 'https://img.youtube.com/vi/xjR4RfNgNww/hqdefault.jpg', title: 'Geeta Zaildar Interview' },
  { id: 8, url: 'https://youtu.be/xjR4RfNgNww', thumbnail: 'https://img.youtube.com/vi/xjR4RfNgNww/hqdefault.jpg', title: 'Geeta Zaildar Interview' },
  { id: 9, url: 'https://youtu.be/xjR4RfNgNww', thumbnail: 'https://img.youtube.com/vi/xjR4RfNgNww/hqdefault.jpg', title: 'Geeta Zaildar Interview' },
];


  // Podcasts (YouTube)
  const podcastVideos: MediaItem[] = [
    { id: 1, url: "https://www.youtube.com/watch?v=1vRB3a03-Xc", thumbnail: Podcast1, title: "Podcast Episode 1" },
    { id: 2, url: "https://www.youtube.com/watch?v=OQRIYUltCnw&t=2s", thumbnail: Podcast2, title: "Podcast Episode 2" },
  ];

  // Instagram Videos
  const instagramVideos: MediaItem[] = [
    { id: 1, url: 'https://www.instagram.com/reel/DP3WnqKiOL4/', thumbnail: INSTA1, title: 'News' },
    { id: 2, url: 'https://www.instagram.com/reel/DNf_925pbLD/', thumbnail: INSTA2, title: 'News' },
    { id: 3, url: 'https://www.instagram.com/reel/DNZVXWbBQW8/', thumbnail: INSTA3, title: 'News' },
    { id: 4, url: 'https://www.instagram.com/reel/DQgYPlvjHnF/', thumbnail: INSTA4, title: 'News' },
    { id: 5, url: 'https://www.instagram.com/reel/DQYyEv0Dt4M/', thumbnail: INSTA5, title: 'News' },
    { id: 6, url: 'https://www.instagram.com/reel/DQWQQ_QDY9d/', thumbnail: INSTA6, title: 'News' },
  ];

  // Image Gallery
  const images: MediaItem[] = [
    { id: 1, url: image1 },
    { id: 2, url: image2 },
    { id: 3, url: image3 },
    { id: 4, url: image4 },
    { id: 5, url: image5 },
    { id: 6, url: image6 },
  ];

  // Section fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  // Slider logic
  const nextSlide = (setter: any, total: number) => setter((prev: number) => (prev + 3 >= total ? 0 : prev + 3));
  const prevSlide = (setter: any, total: number) => setter((prev: number) => (prev - 3 < 0 ? Math.max(0, total - 3) : prev - 3));

  return (
    <section id="work" ref={sectionRef} className="relative py-20 bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-20">
          {/* YouTube Videos */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center gap-3 mb-8">
              <Youtube className="text-red-500" size={32} />
              <h3 className="text-3xl font-bold text-white">YouTube Videos</h3>
            </div>
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {youtubeVideos.slice(youtubeIndex, youtubeIndex + 3).map((video) => (
                  <a key={video.id} href={video.url} target="_blank" rel="noopener noreferrer" className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105">
                    <div className="aspect-video relative">
                      <img src={video.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Youtube size={48} className="text-white" />
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-t from-gray-900 to-gray-800">
                      <h4 className="text-white font-semibold">{video.title}</h4>
                    </div>
                  </a>
                ))}
              </div>
              {youtubeVideos.length > 3 && <>
                <button onClick={() => prevSlide(setYoutubeIndex, youtubeVideos.length)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"><ChevronLeft size={24} /></button>
                <button onClick={() => nextSlide(setYoutubeIndex, youtubeVideos.length)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"><ChevronRight size={24} /></button>
              </>}
            </div>
          </div>

          {/* Podcasts */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center gap-3 mb-8">
              <Youtube className="text-red-400" size={32} />
              <h3 className="text-3xl font-bold text-white">Podcasts</h3>
            </div>
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {podcastVideos.slice(podcastIndex, podcastIndex + 3).map((video) => (
                  <a key={video.id} href={video.url} target="_blank" rel="noopener noreferrer" className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-400/30 transition-all duration-300 transform hover:scale-105">
                    <div className="aspect-video relative">
                      <img src={video.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Youtube size={48} className="text-white" />
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-t from-gray-900 to-gray-800">
                      <h4 className="text-white font-semibold">{video.title}</h4>
                    </div>
                  </a>
                ))}
              </div>
              {podcastVideos.length > 3 && <>
                <button onClick={() => prevSlide(setPodcastIndex, podcastVideos.length)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"><ChevronLeft size={24} /></button>
                <button onClick={() => nextSlide(setPodcastIndex, podcastVideos.length)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"><ChevronRight size={24} /></button>
              </>}
            </div>
          </div>

          {/* Instagram */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center gap-3 mb-8">
              <Instagram className="text-pink-500" size={32} />
              <h3 className="text-3xl font-bold text-white">Instagram Videos</h3>
            </div>
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {instagramVideos.slice(instagramIndex, instagramIndex + 3).map((video) => (
                  <a key={video.id} href={video.url} target="_blank" rel="noopener noreferrer" className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-105">
                    <div className="aspect-square">
                      <img src={video.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Instagram className="text-white" size={48} />
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-t from-gray-900 to-gray-800">
                      <h4 className="text-white font-semibold">{video.title}</h4>
                    </div>
                  </a>
                ))}
              </div>
              {instagramVideos.length > 3 && <>
                <button onClick={() => prevSlide(setInstagramIndex, instagramVideos.length)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"><ChevronLeft size={24} /></button>
                <button onClick={() => nextSlide(setInstagramIndex, instagramVideos.length)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"><ChevronRight size={24} /></button>
              </>}
            </div>
          </div>

          {/* Gallery (titles removed) */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center gap-3 mb-8">
              <ImageIcon className="text-purple-500" size={32} />
              <h3 className="text-3xl font-bold text-white">Gallery</h3>
            </div>
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {images.slice(imageIndex, imageIndex + 3).map((image) => (
                  <div key={image.id} className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105">
                    <div className="aspect-square">
                      <img src={image.url} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                ))}
              </div>
              {images.length > 3 && <>
                <button onClick={() => prevSlide(setImageIndex, images.length)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"><ChevronLeft size={24} /></button>
                <button onClick={() => nextSlide(setImageIndex, images.length)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"><ChevronRight size={24} /></button>
              </>}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MyWork;  
