import { useState, useEffect, useRef } from 'react';
import { Mic, Video, Edit, Headphones, Globe, Users } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'Media Anchor', icon: <Mic size={32} />, color: 'from-red-500 to-pink-500' },
    { name: 'Managing Live Interviews', icon: <Video size={32} />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Script Writing', icon: <Edit size={32} />, color: 'from-purple-500 to-indigo-500' },
    { name: 'Voice Modulation', icon: <Headphones size={32} />, color: 'from-green-500 to-teal-500' },
    { name: 'Social Media', icon: <Globe size={32} />, color: 'from-orange-500 to-yellow-500' },
    { 
      name: 'Team Management', 
      icon: <Users size={32} />, 
      color: 'from-pink-500 to-rose-500' 
    },
  ];

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
      id="skills"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-blob"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg">
            Expertise across multiple domains of media and content creation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                <div className="relative text-center">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${skill.color} mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300 justify-center`}>
                    <div className="text-white">{skill.icon}</div>
                  </div>

                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      {/*  <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Awards Won', value: '15+' },
            { label: 'Happy Clients', value: '200+' },
            { label: 'Live Shows', value: '350+' },
            { label: 'Content Hours', value: '1000+' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 transition-all duration-1000 hover:transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <h4 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </h4>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
            </div> */}
      </div>
    </section>
  );
};

export default Skills;
