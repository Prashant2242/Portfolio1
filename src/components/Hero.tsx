import { Download, Mail } from 'lucide-react';
import { useEffect, useRef } from 'react';
import profile from "../assets/profile.jpg"

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: { x: number; y: number; radius: number; speed: number; opacity: number }[] = [];
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random(),
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        star.opacity = Math.sin(Date.now() * 0.001 + star.x) * 0.5 + 0.5;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">

          {/* LEFT SIDE IMAGE WITH RESPONSIVE SIZE */}
          <div className="animate-float md:mr-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>

              {/* UPDATED — Smaller image on mobile */}
              <div className="relative 
                w-40 h-40 
                sm:w-52 sm:h-52 
                md:w-64 md:h-64 
                lg:w-80 lg:h-80 
                rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl shadow-blue-500/50 
                transform transition-transform hover:scale-105 duration-300"
              >
                <img
                  src={profile}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT-SIDE CONTENT */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in">
            <h2 className="text-xl md:text-2xl text-blue-300 font-light animate-slide-down">
              Hello, I'm
            </h2>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-slide-up">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Sandli Sharma
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 font-light animate-slide-up delay-200">
              Media Anchor | Content Creator | Storyteller
            </p>

            <p className="text-base md:text-lg text-gray-400 max-w-2xl animate-fade-in delay-300">
            Anchor, podcaster, and content creator turning stories into experiences. Skilled in interviews and multimedia content that captivates audiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6 animate-fade-in delay-500">
              <button
                onClick={scrollToContact}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </button>

              <a
                href="https://drive.google.com/file/d/1PZagwdJLvJ18Npn76Ykv64eB-zG1du1Y/view?usp=sharing"
                download
                className="group px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-blue-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

