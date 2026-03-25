'use client';

import { motion } from 'framer-motion';
import { Mail, Globe } from 'lucide-react';
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  // --- CUSTOM SVG ICONS (TAAKI ERROR NA AAYE) ---
  const GithubIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.5 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"></path></svg>
  );

  const LinkedInIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
  );

  const YoutubeIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.781 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
  );

  const InstagramIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
  );

  const socials = [
    { name: 'GitHub', icon: <GithubIcon />, link: 'https://github.com/devpushpraj' },
    { name: 'LinkedIn', icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/pushpraj-singh99' },
    { name: 'Twitter', icon: <Globe />, link: 'https://x.com/pushpraj_css' },
    { name: 'YouTube', icon: <YoutubeIcon />, link: 'https://www.youtube.com/@madebypxbytes' },
    { name: 'Instagram', icon: <InstagramIcon />, link: 'https://www.instagram.com/pushprajgrows/' },
    { name: 'Mail', icon: <Mail />, link: '#contact' },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 font-sans">
      
      {/* 1. Hero Section */}
      <section className="flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-blue-600/10 blur-[120px] -z-10" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">Open for Opportunities</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 leading-tight">Pushpraj Singh</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed text-center">Computer Science Student & Full Stack Developer. Specialized in <span className="text-white font-semibold">Java, C++</span> and Modern Web Apps.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-12 flex flex-wrap justify-center gap-6">
          <a href="#projects" className="px-10 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">View Projects</a>
          <a href="#contact" className="px-10 py-4 border border-white/10 bg-white/5 rounded-xl hover:bg-white/10 transition-all font-bold">Contact Me</a>
        </motion.div>
      </section>

      {/* 2. Social Media Links */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-xl font-bold mb-10 text-gray-500 uppercase tracking-widest">Connect with Me</h2>
        <motion.div className="grid grid-cols-3 md:grid-cols-6 gap-6 justify-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          {socials.map((social) => (
            <motion.a key={social.name} href={social.link} target={social.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" variants={iconVariants} whileHover={{ scale: 1.1, y: -5 }} className="group flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 hover:bg-blue-600/5 transition-all">
              <div className="text-gray-400 group-hover:text-blue-400 transition-colors">
                {social.icon}
              </div>
              <span className="text-xs font-medium text-gray-500 group-hover:text-white uppercase tracking-tighter">{social.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* 3. Projects Section - Clickable Cards */}
<section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
  <h2 className="text-3xl font-bold mb-12 text-blue-500 uppercase tracking-widest text-left">Selected Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Project 1 - Clickable */}
    <a 
      href="https://github.com/devpushpraj/Java-Library-System"  // <--- Apna GitHub link yahan dalo
      target="_blank"
      className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all text-left"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Library Management System</h3>
        <Globe className="w-5 h-5 text-gray-500 group-hover:text-blue-400" />
      </div>
      <p className="text-gray-400 mb-6 leading-relaxed">A robust backend application built with Java to manage book tracking and user database.</p>
      <div className="flex gap-2">
        <span className="text-[10px] font-bold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full uppercase">Java</span>
        <span className="text-[10px] font-bold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full uppercase">MySQL</span>
        <span className="text-[10px] font-bold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full uppercase">JDBC</span>
      </div>
    </a>

    {/* Project 2 - Clickable */}
    <a 
      href="https://pushpraj-portfolio-drab.vercel.app/" // <--- Live link yahan dalo
      target="_blank"
      className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-purple-500/50 hover:bg-purple-500/5 transition-all text-left"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">Interactive Portfolio V2</h3>
        <Globe className="w-5 h-5 text-gray-500 group-hover:text-purple-400" />
      </div>
      <p className="text-gray-400 mb-6 leading-relaxed">Modern web experience built with Next.js 15, Tailwind CSS, and Framer Motion.</p>
      <div className="flex gap-2">
        <span className="text-[10px] font-bold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full uppercase">Next.js</span>
        <span className="text-[10px] font-bold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full uppercase">Tailwind</span>
      </div>
    </a>
    {/* Project 3 - Clickable */}
      <a 
  href="https://github.com/devpushpraj/ATM-Simulator-Java-MySQL" 
  target="_blank"
  className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all text-left"
>
  <div className="flex justify-between items-start mb-4">
    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Java ATM Simulator</h3>
    <Globe className="w-5 h-5 text-gray-500 group-hover:text-blue-400" />
  </div>
  <p className="text-gray-400 mb-6 leading-relaxed">A command-line banking application built with Java, focusing on security logic, balance management, and OOPs concepts.</p>
  <div className="flex gap-2">
    <span className="text-[10px] font-bold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full uppercase">Java</span>
    <span className="text-[10px] font-bold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full uppercase">Logic Building</span>
  </div>
 </a>
  </div>
</section>

{/* 4. Technical Arsenal - Clickable Skill Badges */}
<section className="max-w-6xl mx-auto px-6 py-20 text-left">
  <h2 className="text-xl font-bold mb-10 text-gray-500 uppercase tracking-widest">Technical Arsenal</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      { name: 'Java', link: 'https://www.java.com/' },
      { name: 'C++', link: 'https://isocpp.org/' },
      { name: 'Next.js', link: 'https://nextjs.org/' },
      { name: 'Tailwind', link: 'https://tailwindcss.com/' },
      { name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'Statistics', link: '#' },
      { name: 'Git', link: 'https://github.com/' },
      { name: 'Video Editing', link: '#' }
    ].map((skill) => (
      <a 
        key={skill.name} 
        href={skill.link}
        target="_blank"
        className="p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-white/10 hover:border-blue-500/50 transition-all cursor-pointer group"
      >
        <p className="text-gray-300 font-medium group-hover:text-white group-hover:scale-110 transition-all">{skill.name}</p>
      </a>
    ))}
  </div>
</section>

      {/* 5. Contact Form Section */}
      <ContactForm />

      <footer className="py-10 text-center text-gray-600 text-sm border-t border-white/5">© 2026 Pushpraj Singh • Built with Next.js & Framer Motion</footer>
    </main>
  );
}