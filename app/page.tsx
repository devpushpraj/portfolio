
export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      {/* 1. Hero Section */}
      <section className="flex flex-col items-center justify-center pt-32 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-blue-600/10 blur-[120px] -z-10" />
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
          Open for Opportunities
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 leading-tight">
          Pushpraj Singh
        </h1>
        <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl text-center leading-relaxed">
          Computer Science Student & Full Stack Developer. Specialized in <span className="text-white font-semibold">Java, C++</span> and Modern Web Apps.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
  {/* GitHub Button */}
  <a 
    href="https://github.com/devpushpraj" 
    target="_blank" 
    rel="noopener noreferrer"
    className="px-10 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2"
  >
    <span>View GitHub</span>
  </a>

  {/* LinkedIn Button */}
  <a 
    href="https://www.linkedin.com/in/pushpraj-singh99" 
    target="_blank" 
    rel="noopener noreferrer"
    className="px-10 py-4 border border-white/10 bg-white/5 rounded-xl hover:bg-white/10 transition-all font-bold flex items-center gap-2"
  >
    <span>LinkedIn</span>
  </a>
</div>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <a href="#projects" className="px-10 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            View Projects
          </a>
          <a href="#contact" className="px-10 py-4 border border-white/10 bg-white/5 rounded-xl hover:bg-white/10 transition-all font-bold">
            Contact Me
          </a>
        </div>
      </section>

      {/* 2. Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
        <h2 className="text-3xl font-bold mb-12 text-blue-500 uppercase tracking-widest">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all">
            <h3 className="text-2xl font-bold mb-4">Library Management System</h3>
            <p className="text-gray-400 mb-6">A robust backend application built with Java to manage book tracking and user database.</p>
            <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full uppercase">Java / OOPs</span>
          </div>

          {/* Project 2 */}
          <div className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all">
            <h3 className="text-2xl font-bold mb-4">Interactive Portfolio V2</h3>
            <p className="text-gray-400 mb-6">Modern web experience built with Next.js 15, Tailwind CSS, and optimized for performance.</p>
            <span className="text-xs font-bold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full uppercase">Next.js / Tailwind</span>
          </div>
        </div>
      </section>

      {/* 3. Skills Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-xl font-bold mb-10 text-gray-500 uppercase tracking-widest">Technical Arsenal</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Java', 'C++', 'Next.js', 'Tailwind', 'JavaScript', 'Statistics', 'Git', 'Video Editing'].map((skill) => (
            <div key={skill} className="p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-white/10 transition-all">
              <p className="text-gray-300 font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Contact Form Section */}
      <section id="contact" className="max-w-2xl mx-auto px-6 py-32">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4">Get In Touch</h2>
          <p className="text-gray-400">Have a question or want to work together?</p>
        </div>
        
        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
          {/* PASTE YOUR ACCESS KEY HERE */}
          <input type="hidden" name="access_key" value="2e19e60e-d1f0-4d98-9982-4eb7a3dae261" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Name" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500 outline-none transition-all" required />
            <input type="email" name="email" placeholder="Email" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500 outline-none transition-all" required />
          </div>
          <textarea name="message" placeholder="Message" rows={5} className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500 outline-none transition-all" required></textarea>
          
          <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-blue-600/20">
            Send Message
          </button>
        </form>
      </section>

      <footer className="py-10 text-center text-gray-600 text-sm border-t border-white/5">
        © 2026 Pushpraj Singh • Built with Next.js
      </footer>
    </main>
  );
}