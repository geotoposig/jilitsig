import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Map,
  Globe,
  Database,
  Code,
  User,
  Mail,
  Phone,
  Linkedin,
  Github,
  Award,
  Briefcase,
  Layers,
  ChevronRight,
  Menu,
  X,
  MapPinned,
} from 'lucide-react';

const name = "Elmostafa JILIT";
const title = "Cartographe, Géomaticien & Expert SIG";
const contact = {
  age: "33 ans",
  license: "Permis B",
  phone: "+212 668 09 02 85",
  email: "jilitsig@hotmail.com",
  location: "Agadir, Maroc",
  linkedin: "#",
};

type Page = 'home' | 'competences' | 'experience' | 'projets';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: { label: string; id: Page }[] = [
    { label: "Accueil", id: 'home' },
    { label: "Compétences", id: 'competences' },
    { label: "Expériences", id: 'experience' },
    { label: "Projets", id: 'projets' },
  ];

  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="min-h-screen technical-grid text-ink font-sans selection:bg-blue-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-300 px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPage('home')}>
          <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white font-bold">EJ</div>
          <div>
            <h1 className="font-bold text-lg leading-none uppercase tracking-tight">{name}</h1>
            <p className="font-mono text-[10px] tracking-tight text-slate-500 uppercase">30.4278° N, -9.5981° W | AGADIR, MAROC</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setPage(link.id)}
              className={`transition-all relative py-1 ${
                page === link.id
                  ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                  : "text-slate-400 hover:text-ink"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-gray-300 absolute w-full z-40 overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setPage(link.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 text-[11px] font-black uppercase tracking-widest ${
                    page === link.id
                      ? "bg-blue-600 text-white"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 md:p-8 min-h-[calc(100vh-140px)]">
        <AnimatePresence mode="wait">
          {page === 'home' && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              {/* Left Column: Profile & Info */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="bg-white border border-gray-300 p-6 border-l-4 border-l-blue-600 relative">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Objectif & Profil</h2>
                    <span className="font-mono text-[10px] text-slate-400">01/04</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight mb-4">{title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify mb-6">
                    Expert avec plus de <strong className="text-ink">7 ans d'expérience</strong> en analyse spatiale et modélisation des risques. 
                    Spécialisé dans l'intégration de l'<strong className="text-blue-600">IA (Geo-AI)</strong> et le développement 
                    de solutions de cartographie interactive pour l'aménagement durable du territoire.
                  </p>
                  
                  <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
                    <div className="flex justify-between text-[11px]">
                      <span className="font-black uppercase tracking-tighter">Email</span>
                      <span className="font-mono text-slate-500">{contact.email}</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="font-black uppercase tracking-tighter">Phone</span>
                      <span className="font-mono text-slate-500">{contact.phone}</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="font-black uppercase tracking-tighter">Location</span>
                      <span className="font-mono text-slate-500">{contact.location}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-300 p-6">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Formation</h2>
                    <span className="font-mono text-[10px] text-slate-400">02/04</span>
                  </div>
                  <div className="space-y-6">
                    <div className="border-l-2 border-blue-600 pl-4">
                      <p className="text-[11px] font-black uppercase mb-1">Master Spécialisé SIG & Télédétection</p>
                      <p className="font-mono text-[10px] text-slate-500">Univ. Hassan II Casablanca | 2017-2019</p>
                    </div>
                    <div className="border-l-2 border-gray-200 pl-4">
                      <p className="text-[11px] font-black uppercase mb-1">Licence en Géographie</p>
                      <p className="font-mono text-[10px] text-slate-500">Univ. Ibn Zohr Agadir | 2014-2017</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero & Quick Links */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div className="bg-slate-900 border border-slate-800 p-12 text-white relative overflow-hidden flex flex-col justify-center min-h-[340px]">
                  {/* Digital terrain background effect */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                  
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                       <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest">Live Portfolio V4.0</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                      Cartographe <br />
                      <span className="text-blue-500">& Expert SIG</span>
                    </h2>
                    <div className="pt-6">
                      <a
                        href={contact.linkedin}
                        className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 rounded-lg font-black uppercase text-[11px] tracking-widest hover:bg-white hover:text-slate-900 transition-all"
                      >
                        <Linkedin size={16} />
                        CONNECT_NOW
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-300 p-6 flex flex-col justify-between">
                    <div>
                      <h2 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">Expériences</h2>
                      <p className="text-sm font-medium text-slate-600 mb-4">Parcours centré sur l'aménagement du territoire et l'analyse de données géospatiales complexes.</p>
                    </div>
                    <button onClick={() => setPage('experience')} className="text-[11px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform">
                      VIEW_PATH <ChevronRight size={14} />
                    </button>
                  </div>
                  <div className="bg-white border border-gray-300 p-6 flex flex-col justify-between">
                    <div>
                      <h2 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">Compétences</h2>
                      <p className="text-sm font-medium text-slate-600 mb-4">Maîtrise des écosystèmes ESRI, Open Source GIS et intégration de modèles de Deep Learning.</p>
                    </div>
                    <button onClick={() => setPage('competences')} className="text-[11px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform">
                      VIEW_STACK <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {page === 'competences' && (
            <motion.div
              key="competences"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-8"
            >
              <div className="flex justify-between items-end border-b border-gray-300 pb-4">
                <h2 className="text-3xl font-black uppercase tracking-tighter">Expertise Technique</h2>
                <span className="font-mono text-[10px] text-slate-400">STACK_ANALYSIS.LOG</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "SIG Advanced",
                    skills: ["ArcGIS Pro", "QGIS", "Analyse Spatiale", "Télédétection"],
                    level: 95,
                    dark: true
                  },
                  {
                    title: "Webmapping & AI",
                    skills: ["Python", "Leaflet.js", "Deep Learning", "JavaScript"],
                    level: 82,
                    dark: false
                  },
                  {
                    title: "Data Management",
                    skills: ["PostGIS", "SQL Server", "Big Data (GEE)", "ETL Tools"],
                    level: 88,
                    dark: false
                  }
                ].map((cat, idx) => (
                  <div key={idx} className={`${cat.dark ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-ink border-gray-300'} border p-8 flex flex-col justify-between min-h-[280px]`}>
                    <div>
                      <h3 className={`text-[10px] font-black uppercase tracking-widest mb-6 ${cat.dark ? 'text-blue-400' : 'text-slate-400'}`}>{cat.title}</h3>
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {cat.skills.map(skill => (
                          <span key={skill} className={`px-2 py-1 text-[10px] font-bold uppercase border rounded-sm ${cat.dark ? 'border-blue-500/50 text-blue-400' : 'border-blue-200 text-blue-600'}`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                         <div className={`h-1 w-full rounded overflow-hidden ${cat.dark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                            <div className="h-full bg-blue-600" style={{ width: `${cat.level}%` }}></div>
                         </div>
                         <p className="font-mono text-[9px] mt-2 uppercase text-slate-500 tracking-widest">Mastery Level: {cat.level}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {page === 'experience' && (
            <motion.div
              key="experience"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-8"
            >
              <div className="flex justify-between items-end border-b border-gray-300 pb-4">
                <h2 className="text-3xl font-black uppercase tracking-tighter">Parcours Professionnel</h2>
                <span className="font-mono text-[10px] text-slate-400">TIMELINE_EXEC.DAT</span>
              </div>

              <div className="grid grid-cols-1 gap-4 max-w-4xl">
                {[
                  {
                    company: "Haut-Commissariat au Plan (HCP)",
                    year: "2024",
                    role: "Contrôleur Cartographe (RGPH 2024)",
                    desc: "Mise à jour des repères géographiques et découpage des districts de recensement."
                  },
                  {
                    company: "Agri Invest Développement",
                    year: "MIS.",
                    role: "Chargé de mission Enquêteur",
                    desc: "Réalisation d'enquêtes de terrain et collecte de données socio-économiques dans la région de l'Oriental."
                  }
                ].map((exp, idx) => (
                  <div key={idx} className="bg-white border border-gray-300 p-6 flex flex-col md:flex-row gap-6 relative group">
                    <div className="w-20 shrink-0">
                       <span className="inline-block bg-blue-600 text-white text-[9px] font-black px-2 py-0.5 uppercase tracking-widest">
                          {exp.year}
                       </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-black uppercase tracking-tight mb-1">{exp.company}</h3>
                      <p className="text-xs font-bold text-blue-600 italic mb-4">{exp.role}</p>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {page === 'projets' && (
            <motion.div
              key="projets"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-8"
            >
              <div className="flex justify-between items-end border-b border-gray-300 pb-4">
                <h2 className="text-3xl font-black uppercase tracking-tighter">Projets & Commandes 2025</h2>
                <span className="font-mono text-[10px] text-slate-400">PROJECTS_MASTER.DB</span>
              </div>

              <div className="bg-white border border-gray-300 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">ID / Objet</th>
                        <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Bénéficiaire</th>
                        <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Statut</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { 
                          title: "Étude topographique TNB - Lalla Mimouna", 
                          client: "Commune Lalla Mimouna",
                          status: "Finalisé",
                          statusColor: "text-green-600",
                          id: "PROJ-2025-001"
                        },
                        { 
                          title: "Carte plan d'aménagement Mokrisset", 
                          client: "Commune Moqrissat",
                          status: "En cours",
                          statusColor: "text-blue-600",
                          id: "PROJ-2025-002"
                        },
                        { 
                          title: "إعداد خريطة حديثة للجماعة الترابية البدوزة", 
                          client: "Commune El Beddouza",
                          status: "Révision",
                          statusColor: "text-amber-600",
                          rtl: true,
                          id: "PROJ-2025-003"
                        }
                      ].map((proj, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                          <td className="px-6 py-4">
                            <div className="flex flex-col gap-0.5">
                              <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest">{proj.id}</span>
                              <span className={`text-[11px] font-bold text-slate-700 ${proj.rtl ? 'text-right' : ''}`} dir={proj.rtl ? 'rtl' : 'ltr'}>
                                {proj.title}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-[11px] font-medium text-slate-500 uppercase">{proj.client}</td>
                          <td className={`px-6 py-4 text-right`}>
                            <span className={`font-mono text-[9px] font-black uppercase tracking-widest ${proj.statusColor}`}>
                              {proj.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 px-8 py-6 flex flex-col md:flex-row justify-between items-center border-t border-slate-800 relative z-20">
        <div className="flex gap-6 font-mono text-[10px] mb-4 md:mb-0">
          <span className="flex items-center gap-1.5"><Globe size={10} className="text-slate-600" /> LAT: 30.4278°</span>
          <span className="flex items-center gap-1.5"><Globe size={10} className="text-slate-600" /> LON: -9.5981°</span>
          <span className="flex items-center gap-1.5"><MapPinned size={10} className="text-slate-600" /> ALT: 31M</span>
        </div>
        
        <div className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-400 mb-4 md:mb-0">
          © 2026 {name} | CONCEPTION EXPERTISE SIG
        </div>
        
        <div className="flex gap-6 font-mono text-[10px] uppercase text-slate-400 border-l border-slate-800 pl-6 hidden md:flex">
          <a href="#" className="hover:text-white transition-colors cursor-pointer">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors cursor-pointer">GitHub</a>
          <a href="#" className="hover:text-white transition-colors cursor-pointer">V4.0_STABLE</a>
        </div>
      </footer>
    </div>
  );
}

