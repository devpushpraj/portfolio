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
    </main>
  );
}