import { Heart, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 py-12 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Sandli Sharma
            </h3>
            <p className="text-gray-400 mb-4">
              Media Anchor | Content Creator | Storyteller
            </p>
            <p className="text-gray-500 text-sm">
              Bringing stories to life with passion and authenticity across multiple platforms.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'My Work', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="space-y-2 mb-4">
              <p className="text-gray-400 text-sm">sandliangrish@gmail.com</p>
              <p className="text-gray-400 text-sm">+91 7657848428</p>
            </div>
            <div className="flex gap-3">
              {[
                {
                  icon: <Instagram size={20} className="text-pink-500" />,
                  url: 'https://www.instagram.com/sandliforum?igsh=Z3Zvdm8yb203bTNl',
                },
                {
                  icon: <Linkedin size={20} className="text-blue-500" />,
                  url: 'https://www.linkedin.com/in/yourprofile',
                },
                {
                  icon: <Youtube size={20} className="text-red-500" />,
                  url: 'https://www.youtube.com/@yourchannel',
                },
              ].map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  {platform.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Sandli Sharma. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500 animate-pulse" /> by Sandli
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
