import { Github, Linkedin, InstagramIcon, Mail, Heart } from "lucide-react";

const Finale = () => {
  const currentYear = new Date().getFullYear();

  const marqueeTags = [
    "RAHUL KUMAR SINGH",
    "FRONTEND DEVELOPER",
    "REACT EXPERT",
    "NEXT.JS EXPERT",
    "TAILWIND CSS",
    "WEB APPLICATIONS",
    "UI/UX FOCUS",
  ];

  return (
    <section className="relative w-full bg-white border-t-8 border-black pt-20 overflow-hidden">
      {/* ... marquee ... */}
      <div className="absolute top-0 left-0 w-full py-4 bg-black overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex items-center shrink-0">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center">
              {marqueeTags.map((tag) => (
                <span
                  key={tag}
                  className="text-white font-mono text-xs uppercase tracking-[0.3em] mx-10"
                >
                  {tag}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center">
        <div className="flex flex-col md:flex-row space-x-4 items-center gap-4 text-center">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-100 border-2 border-green-600 rounded-full">
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-green-800">
              Available for Freelance Projects
            </span>
          </div>
          <p className="text-xs font-mono text-black/70 uppercase tracking-widest leading-loose max-w-sm">
            From India 🇮🇳 to the World 🌍 <br /> <span>• Crafting Scalable Digital Products</span>
          </p>
        </div>
      </div>

      {/* Extreme Bottom Bar */}
      <div className="w-full bg-white pt-10 pb-24 md:pb-10 px-6 mt-auto border-t border-black/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 opacity-70">
          <p className="text-[10px] md:text-[11px] font-mono text-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-center md:text-left">
            © {currentYear} Rahul Kumar Singh
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] md:text-[11px] font-mono text-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-center md:text-right font-medium">
            <span className="whitespace-nowrap">Designed & Engineered</span>
            <span className="flex items-center gap-2">
              <span>with</span>
              <Heart className="w-3.5 h-3.5 text-red-700 fill-red-500 animate-heartbeat inline-block" />
              <span>by Rahul</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Finale;
