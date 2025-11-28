import { useEffect, useRef, useState } from 'react';
import about from "../assets/about.jpeg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
              <img
    src={about}
    alt="About Sandli Sharma"
    className="w-full h-64 md:h-[31rem] object-cover"
  />
              </div>
            </div>
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-3xl font-bold text-white">
            Anchoring with  <span className="text-blue-400">Purpose, Passion, and Precision</span>
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
            Versatile Anchor and Media Professional with extensive experience in the entertainment industry, event coverage, and content creation. Skilled in scriptwriting, project management, and on-screen presentation, with a strong sense of storytelling and audience engagement.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
            Known for a confident screen presence, effective team coordination, and solid office and internal management abilities. Adept at conceptualizing, producing, and delivering high-quality content across digital and broadcast platforms. Passionate about connecting with diverse audiences, adapting to fast-paced environments, and consistently exceeding expectations.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
            Dedicated to delivering engaging, polished, and impactful content that resonates with viewers and drives meaningful results.
            </p>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
