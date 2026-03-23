export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      {/* 1. Hero Section */}
      <section className="flex flex-col items-center justify-center pt-32 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-blue-600/10 blur-[120px] -z-10" />
        
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
          Open for Opportunities
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
          Pushpraj Singh
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl text-center leading-relaxed">
          Computer Science Student & Full Stack Developer. Specialized in <span className="text-white">Java, C++</span> and building high-performance web applications.
        </p>

        <div className="mt-12 flex gap-6">
  <a 
    href="https://github.com/devpushpraj" 
    target="_blank" 
    className="px-10 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
  >
    View GitHub
  </a>
  <a 
    href="https://www.linkedin.com/in/pushpraj-singh99" 
    target="_blank" 
    className="px-10 py-4 border border-white/10 bg-white/5 rounded-xl hover:bg-white/10 transition-all font-bold"
  >
    LinkedIn
  </a>
</div>
      </section>

      {/* 2. Skills Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-10 border-l-4 border-blue-600 pl-4">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Java', 'C++', 'Next.js', 'Tailwind CSS', 'JavaScript', 'Statistics', 'Video Editing', 'Git'].map((skill) => (
            <div key={skill} className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center hover:border-blue-500/50 transition-all group">
              <p className="text-gray-400 group-hover:text-white font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </section>
      {/* 3. Projects Gallery */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
        <h2 className="text-2xl font-bold mb-12 border-l-4 border-blue-600 pl-4 uppercase tracking-widest text-blue-500">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="group relative p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.07] transition-all overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="text-xs font-mono text-blue-400">JAVA / OOPS</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Library Management System</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              A robust backend application built with Java to manage book inventory, member records, and transaction logs with efficient data handling.
            </p>
            <div className="flex gap-4">
              <span className="text-sm text-blue-400 font-medium">#Java</span>
              <span className="text-sm text-blue-400 font-medium">#FileHandling</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.07] transition-all overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="text-xs font-mono text-blue-400">NEXT.JS / TAILWIND</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Professional Portfolio V2</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              A high-performance modern portfolio featuring glassmorphism design, responsive layouts, and optimized SEO using the latest Next.js features.
            </p>
            <div className="flex gap-4">
              <span className="text-sm text-blue-400 font-medium">#React</span>
              <span className="text-sm text-blue-400 font-medium">#TailwindCSS</span>
            </div>
          </div>
        </div>
      </section>
      {/* 4. Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400">Have a project in mind or just want to say hi? My inbox is always open.</p>
        </div>

        <form className="grid grid-cols-1 gap-6 bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-400">Your Name</label>
              <input type="text" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Pushpraj Singh" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-400">Email Address</label>
              <input type="email" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="name@example.com" />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">Message</label>
            <textarea rows={4} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Hey, let's build something cool!"></textarea>
          </div>
          <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98]">
            Send Message
          </button>
        </form>
      </section>

      {/* 4. Footer / Contact Info */}
      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-gray-500">© 2026 Pushpraj Singh. Built with ❤️ and Next.js</p>
      </footer>
    </main>
  );
}