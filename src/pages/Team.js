import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import TiltCard from '../components/TiltCard';
import MagneticButton from '../components/MagneticButton';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "CEO & Founder",
      bio: "Visionary leader with 10+ years in tech. Passionate about building products that make a difference.",
      expertise: ["Strategy", "Leadership", "Product Vision"],
      image: "AM",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 2,
      name: "Sarah Kim",
      role: "CTO",
      bio: "Full-stack engineer specializing in scalable architectures. Loves solving complex technical challenges.",
      expertise: ["Architecture", "Backend", "DevOps"],
      image: "SK",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Lead Mobile Developer",
      bio: "Mobile app enthusiast with expertise in iOS and Android. Creates beautiful, performant mobile experiences.",
      expertise: ["iOS", "Android", "React Native"],
      image: "MC",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Lead Web Developer",
      bio: "Frontend specialist crafting modern, responsive web applications. Expert in React and Next.js.",
      expertise: ["React", "Next.js", "TypeScript"],
      image: "ER",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 5,
      name: "David Park",
      role: "AI/ML Engineer",
      bio: "Machine learning expert building intelligent solutions. Passionate about AI innovation and automation.",
      expertise: ["Machine Learning", "Python", "TensorFlow"],
      image: "DP",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 6,
      name: "Lisa Anderson",
      role: "UI/UX Designer",
      bio: "Creative designer focused on user-centered design. Transforms ideas into beautiful, intuitive interfaces.",
      expertise: ["UI Design", "UX Research", "Prototyping"],
      image: "LA",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of the curve, constantly exploring new technologies and methodologies."
    },
    {
      title: "Excellence",
      description: "We're committed to delivering the highest quality work in every project we undertake."
    },
    {
      title: "Collaboration",
      description: "We believe in working closely with our clients to achieve shared success."
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <RevealOnScroll animation="fadeUp">
              <span className="text-sm font-medium tracking-widest text-gray-500 uppercase"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Our Team
              </span>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={100}>
              <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                style={{ fontFamily: 'Syne, sans-serif' }}>
                Meet the Minds
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                  Behind the Magic
                </span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={200}>
              <p className="mt-6 text-xl text-gray-400 max-w-2xl leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}>
                We're a team of passionate developers, designers, and innovators dedicated to creating exceptional digital experiences.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <RevealOnScroll key={member.id} animation="fadeUp" delay={index * 100}>
                <TiltCard 
                  className="p-8 bg-white border border-gray-200 rounded-3xl text-center group hover:border-black transition-all duration-500"
                  intensity={8}
                  scale={1.02}
                >
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-black text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto group-hover:scale-110 transition-transform duration-300"
                      style={{ fontFamily: 'Syne, sans-serif' }}>
                      {member.image}
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-gray-200 group-hover:border-black transition-colors duration-300" />
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-2xl font-bold text-black mb-2"
                    style={{ fontFamily: 'Syne, sans-serif' }}>
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-4"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {member.role}
                  </p>

                  {/* Bio */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.expertise.map((skill, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-black hover:text-white transition-all duration-300"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-100">
                    <a 
                      href={member.social.linkedin} 
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a 
                      href={member.social.twitter} 
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300"
                      aria-label="Twitter"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a 
                      href={member.social.github} 
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <RevealOnScroll animation="fadeUp">
              <span className="text-sm font-medium tracking-widest text-gray-400 uppercase"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Our Values
              </span>
            </RevealOnScroll>
            <RevealOnScroll animation="fadeUp" delay={100}>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-black"
                style={{ fontFamily: 'Syne, sans-serif' }}>
                What Drives Us
              </h2>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <RevealOnScroll key={index} animation="fadeUp" delay={index * 100}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold"
                    style={{ fontFamily: 'Syne, sans-serif' }}>
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3"
                    style={{ fontFamily: 'Syne, sans-serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {value.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll animation="fadeUp">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              Want to Join
              <br />
              Our Team?
            </h2>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={100}>
            <p className="text-xl text-gray-400 mb-10"
              style={{ fontFamily: 'DM Sans, sans-serif' }}>
              We're always looking for talented individuals who share our passion for creating amazing digital experiences.
            </p>
          </RevealOnScroll>
          <RevealOnScroll animation="fadeUp" delay={200}>
            <MagneticButton 
              to="/contact" 
              className="group px-10 py-5 bg-white text-black text-lg font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 mx-auto"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              View Open Positions
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </MagneticButton>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Team;



