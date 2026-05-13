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
  Monitor,
  Files,
  FileSpreadsheet,
  ExternalLink,
} from 'lucide-react';

const name = "Elmostafa JILIT";
const title = "Cartographe, Géomaticien & Expert SIG";
const contact = {
  age: "33 ans",
  license: "Permis B",
  phone: "+212 668 09 02 85",
  email: "jilitsig@gmail.com",
  location: "Agadir, Maroc",
  linkedin: "#",
};

type Page = 'home' | 'competences' | 'experience' | 'projets' | 'websig';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const navLinks: { label: string; id: Page }[] = [
    { label: "Accueil", id: 'home' },
    { label: "Compétences", id: 'competences' },
    { label: "Expériences", id: 'experience' },
    { label: "Projets", id: 'projets' },
    { label: "Plateformes Web-SIG", id: 'websig' },
  ];

  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="min-h-screen technical-grid text-ink font-sans selection:bg-blue-100 pb-12">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 md:px-12 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setPage('home')}>
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">EJ</div>
          <div>
            <h1 className="font-black text-xl md:text-2xl leading-none uppercase tracking-tight text-slate-900">{name}</h1>
            <p className="font-mono text-xs tracking-tight text-slate-500 uppercase mt-0.5">30.4278° N, -9.5981° W | AGADIR, MAROC</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 text-xs font-black uppercase tracking-[0.25em]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setPage(link.id)}
              className={`transition-all relative py-2 px-1 ${
                page === link.id
                  ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:rounded-full"
                  : "text-slate-400 hover:text-slate-900"
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
                  className={`block w-full text-left px-4 py-4 text-sm font-black uppercase tracking-widest ${
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
      <main className="max-w-[1600px] mx-auto p-4 md:p-10 min-h-[calc(100vh-160px)]">
        <AnimatePresence mode="wait">
          {page === 'home' && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Left Column: Profile & Info */}
              <div className="lg:col-span-4 flex flex-col gap-8">
                <div className="bg-white border border-slate-200 p-8 border-l-4 border-l-orange-400 shadow-sm rounded-r-2xl relative">
                  <div className="flex justify-between items-start mb-8">
                    <h2 className="text-xs font-black uppercase text-slate-400 tracking-widest bg-slate-50 px-3 py-1 rounded-full">Objectif</h2>
                    <span className="font-mono text-xs text-slate-400">01/04</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-6">Cartographe, Géomaticien, Enquêteur & Aménagement territoire</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify mb-8">
                    <strong className="text-slate-900 font-bold">Expert (+7 ans)</strong> en analyse spatiale, études de terrain et modélisation des risques. 
                    Je maîtrise l’intégration de l’IA et la cartographie interactive pour le traitement de données complexes. 
                    <strong className="text-blue-600 font-bold">Formateur certifié (ArcGIS, QGIS)</strong>, j'allie expertise scientifique et innovation technologique pour l'aménagement durable des territoires.
                  </p>
                  
                  <div className="pt-8 border-t border-slate-100 flex flex-col gap-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-black uppercase tracking-tight text-slate-400 text-xs text-nowrap">Email</span>
                      <span className="font-mono text-slate-600 font-medium break-all text-right ml-4">{contact.email}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-black uppercase tracking-tight text-slate-400 text-xs">Phone</span>
                      <span className="font-mono text-slate-600 font-medium">{contact.phone}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-black uppercase tracking-tight text-slate-400 text-xs text-nowrap">Location</span>
                      <span className="font-mono text-slate-600 font-medium text-right ml-4">{contact.location}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
                  <div className="flex justify-between items-start mb-8">
                    <h2 className="text-xs font-black uppercase text-slate-400 tracking-widest bg-slate-50 px-3 py-1 rounded-full">Formation Académique</h2>
                    <span className="font-mono text-xs text-slate-400">02/04</span>
                  </div>
                  <div className="space-y-8">
                    <div className="border-l-4 border-orange-400 pl-6 py-1">
                      <p className="text-sm font-black uppercase text-slate-900 mb-2">Master Spécialisé En SIG, Télédétection et Cartographie Appliquée</p>
                      <p className="font-mono text-xs text-blue-600 font-bold mb-3">2017-2019 | Univ. Hassan II Casablanca, Maroc</p>
                      <p className="text-xs text-slate-500 leading-relaxed italic">Théorie et pratique des SIG - Cartographie - Aménagement et collectivités locales - Télédétection - GPS.</p>
                    </div>
                    <div className="border-l-4 border-slate-200 pl-6 py-1">
                      <p className="text-sm font-black uppercase text-slate-900 mb-2">Licence Fondamentale En Géographie</p>
                      <p className="font-mono text-xs text-slate-500 font-bold mb-3">2014-2017 | Univ. Ibn Zohr Agadir, Maroc</p>
                      <p className="text-xs text-slate-500 leading-relaxed italic">Urbanisme, statistiques, Système d'information géographique, démographie et aménagement territoriale.</p>
                    </div>
                    <div className="border-l-4 border-slate-200 pl-6 py-1">
                      <p className="text-sm font-black uppercase text-slate-900 mb-2">Baccalauréat Lettres & Sciences Humaines</p>
                      <p className="font-mono text-xs text-slate-500 font-bold">2013-2014 | Lycée Sidi Moussa Lhamri, Taroudant</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero & Quick Links */}
              <div className="lg:col-span-8 flex flex-col gap-8">
                <div className="bg-slate-900 border border-slate-800 p-12 md:p-20 text-white rounded-3xl relative overflow-hidden flex flex-col justify-center min-h-[450px] shadow-2xl">
                  {/* Digital terrain background effect */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
                  
                  <div className="relative z-10 space-y-8">
                    <div className="flex items-center gap-3">
                       <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(59,130,246,0.8)]"></div>
                       <span className="font-mono text-xs text-blue-400 uppercase tracking-[0.3em] font-bold">Live Portfolio V4.0 Stable</span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                      Cartographe <br />
                      <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">& Expert SIG</span>
                    </h2>
                    <div className="pt-10 flex flex-wrap gap-4">
                      <a
                        href={contact.linkedin}
                        className="inline-flex items-center gap-4 px-8 py-4 bg-blue-600 text-white rounded-xl font-black uppercase text-xs tracking-widest hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-500/20"
                      >
                        <Linkedin size={20} />
                        CONNECT_NOW
                      </a>
                      <button 
                        onClick={() => setPage('projets')}
                        className="inline-flex items-center gap-4 px-8 py-4 border border-white/20 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-all backdrop-blur-sm"
                      >
                        PROJETS_2025
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group">
                    <div>
                      <h2 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-6 bg-slate-50 w-fit px-3 py-1 rounded-full">Expériences</h2>
                      <p className="text-lg font-bold text-slate-900 mb-6 leading-tight">Parcours centré sur l'aménagement du territoire et l'analyse de données géospatiales complexes.</p>
                    </div>
                    <button onClick={() => setPage('experience')} className="text-xs font-black text-blue-600 uppercase tracking-widest flex items-center gap-3 hover:gap-5 transition-all">
                      EXPLORER LE PARCOURS <ChevronRight size={18} />
                    </button>
                  </div>
                  <div className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group">
                    <div>
                      <h2 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-6 bg-slate-50 w-fit px-3 py-1 rounded-full">Compétences</h2>
                      <p className="text-lg font-bold text-slate-900 mb-6 leading-tight">Maîtrise des écosystèmes ESRI, Open Source GIS et intégration de modèles de Deep Learning.</p>
                    </div>
                    <button onClick={() => setPage('competences')} className="text-xs font-black text-blue-600 uppercase tracking-widest flex items-center gap-3 hover:gap-5 transition-all">
                      DÉTAILS TECHNIQUES <ChevronRight size={18} />
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
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-200 pb-6 gap-4">
                <div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter">Compétences & Expertise</h2>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mt-2">Maîtrise des écosystèmes ESRI, Open Source GIS et Geo-AI</p>
                </div>
                <span className="font-mono text-xs text-slate-400 bg-slate-100 px-4 py-1 rounded-full">STACK_ANALYSIS.LOG</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {[
                  {
                    title: "1. Géomatique & SIG Advanced",
                    points: [
                      { label: "Expertise Logicielle", text: "Maîtrise avancée de ArcGIS Pro et QGIS (Analyse spatiale complexe, sémiologie graphique, et modélisation 3D)." },
                      { label: "Cloud Computing", text: "Analyse de données géospatiales massives (Big Data) via Google Earth Engine (GEE)." },
                      { label: "Automatisation", text: "Développement de scripts Python (ArcPy, PyQGIS) pour l'optimisation des workflows." },
                      { label: "Databases", text: "Conception et gestion de bases de données spatiales (PostgreSQL/PostGIS, SQL Server)." }
                    ],
                    skills: ["ArcGIS Pro", "QGIS", "GEE", "Python", "PostGIS"],
                    dark: true
                  },
                  {
                    title: "2. Télédétection & Geo-AI",
                    points: [
                      { label: "Traitement d'Images", text: "Analyse d'imagerie optique et radar (Sentinel-1 & 2, Landsat) via SNAP, ENVI, et Erdas Imagine." },
                      { label: "Analyse de Pointe", text: "Classification avancée (Object-based), reconnaissance de formes, et études diachroniques." },
                      { label: "Innovation", text: "Initiation aux techniques de Deep Learning (Geo-AI) pour l'extraction automatique." }
                    ],
                    skills: ["Sentinel", "ENVI", "Deep Learning", "LiDAR"],
                    dark: false
                  },
                  {
                    title: "3. Webmapping & Dashboards",
                    points: [
                      { label: "Frontend Maps", text: "Création de cartes interactives dynamiques avec Leaflet.js et OpenLayers." },
                      { label: "Tableaux de Bord", text: "Conception de tableaux de bord interactifs pour l'aide à la décision (ArcGIS Dashboards)." },
                      { label: "Architecture", text: "Maîtrise de la diffusion de flux de données standards (WMS, WFS, WMTS)." }
                    ],
                    skills: ["Leaflet", "OpenLayers", "Streamlit", "ArcGIS Online"],
                    dark: false
                  },
                  {
                    title: "4. Urbanisme & Aménagement",
                    points: [
                      { label: "Planification", text: "Suivi technique et analyse des documents d'urbanisme (SDAU, PA, PDAR)." },
                      { label: "Études Thématiques", text: "Réalisation d'études statistiques et cartographiques et analyses de risques." },
                      { label: "Expertise Métier", text: "Techniques de levés topographiques et de photogrammétrie." }
                    ],
                    skills: ["SDAU", "PA", "Photogrammétrie", "SketchUp"],
                    dark: true
                  },
                  {
                    title: "5. Data Science & Statistiques",
                    points: [
                      { label: "Analyse Quantitative", text: "Traitement et analyse de données d'enquêtes complexes via STATA, SPSS, et Sphinx." },
                      { label: "Modélisation", text: "Validation d'hypothèses statistiques et réalisation de livrables d'aide à la décision." },
                      { label: "Bureautique", text: "Maîtrise experte de la suite Office, particulièrement Excel (VBA/Power Query)." }
                    ],
                    skills: ["STATA", "SPSS", "Excel/VBA"],
                    dark: false
                  },
                  {
                    title: "6. Design & Communication",
                    points: [
                      { label: "Design Graphique", text: "Conception de supports professionnels avec Adobe Illustrator et Photoshop." },
                      { label: "Production Vidéo", text: "Montage et motion design pour la vulgarisation de données spatiales." }
                    ],
                    skills: ["Illustrator", "Photoshop", "After Effects"],
                    dark: false
                  }
                ].map((cat, idx) => (
                  <div key={idx} className={`${cat.dark ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'} border p-8 rounded-3xl flex flex-col gap-8 shadow-sm hover:shadow-xl transition-all relative overflow-hidden`}>
                    <div className="relative z-10 flex flex-col h-full">
                      <h3 className={`text-sm font-black uppercase tracking-widest mb-6 ${cat.dark ? 'text-blue-400' : 'text-blue-600'}`}>{cat.title}</h3>
                      
                      <div className="space-y-6 mb-auto">
                        {cat.points.map((p, pIdx) => (
                          <div key={pIdx}>
                            <span className={`text-xs font-black uppercase tracking-tight block mb-1 ${cat.dark ? 'text-slate-400' : 'text-slate-500'}`}>{p.label}</span>
                            <p className="text-sm leading-relaxed">{p.text}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 pt-8 border-t border-slate-100/10 mt-8">
                        {cat.skills.map(skill => (
                          <span key={skill} className={`px-3 py-1 text-xs font-bold uppercase border rounded-lg ${cat.dark ? 'border-blue-500/30 text-blue-400 bg-blue-500/10' : 'border-blue-100 text-blue-600 bg-blue-50'}`}>
                            {skill}
                          </span>
                        ))}
                      </div>
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
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-200 pb-6 gap-4">
                <div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter">Parcours Professionnel</h2>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mt-2">Expertise terrain et gestion de projets géospatiaux</p>
                </div>
                <span className="font-mono text-xs text-slate-400 bg-slate-100 px-4 py-1 rounded-full">HISTORY_EXEC.LOG</span>
              </div>

              <div className="grid grid-cols-1 gap-6 max-w-5xl">
                {[
                  {
                    company: "AGRI INVEST DÉVELOPPEMENT",
                    year: "05/25 - 06/25",
                    role: "Chargé de mission Enquêteur & Chauffeur",
                    desc: "Collecte des données relatives aux coopératives laitières de la région de l'Oriental au profit de la Direction régionale de l'agriculture."
                  },
                  {
                    company: "Global for Survey and Consulting (GSC)",
                    year: "05/25 - 06/25",
                    role: "Chargé de mission Enquêteur (N°01/ECP/2025)",
                    desc: "Collecte de données pour mesurer la conformité des établissements pionniers aux critères de labélisation au profit de l'ONDH."
                  },
                  {
                    company: "Haut-Commissariat au Plan (HCP)",
                    year: "12/23 - 05/24",
                    role: "Chargé de mission Opérateur Cellule SIG",
                    desc: "Mise à jour des repères géographiques et découpage des districts pour le recensement 2024 RGPH via QGIS."
                  },
                  {
                    company: "Haut-Commissariat au Plan (HCP)",
                    year: "03/23 - 12/23",
                    role: "Chargé de mission Contrôleur Cartographe",
                    desc: "Coordination avec les agents d'autorité et les équipes terrain pour assurer une collecte précise des données cartographiques."
                  },
                  {
                    company: "PCM Consulting",
                    year: "08/22 - 03/23",
                    role: "Enquêteur de terrain & Chauffeur",
                    desc: "Enquête nationale pour l'établissement d'une situation de référence (PAF2022) sur l'inclusion de la petite agriculture."
                  }
                ].map((exp, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 p-8 rounded-3xl flex flex-col md:flex-row gap-8 hover:border-blue-400 transition-all shadow-sm hover:shadow-md group">
                    <div className="w-40 shrink-0">
                       <span className="inline-block bg-slate-900 border border-slate-800 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-slate-900/10">
                          {exp.year}
                       </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black uppercase text-slate-900 mb-2">{exp.company}</h3>
                      <p className="text-base font-bold text-blue-600 mb-4">{exp.role}</p>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-12">
                <div className="flex justify-between items-end border-b border-slate-200 pb-6 mb-8">
                  <h2 className="text-3xl font-black uppercase tracking-tighter">Formations Animées</h2>
                  <span className="font-mono text-xs text-slate-400">TRAINING_CENTER.V4</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
                  {[
                    {
                      title: "SIG : Techniques d’Acquisition et de Traitement",
                      org: "AFRICAN TALENT SKILL & Labo LADES",
                      year: "10/2025",
                      role: "Formateur Spécialisé",
                      desc: "Animation d'une formation spécialisée en Systèmes d’Information Géographique à Mohammedia, Maroc."
                    },
                    {
                      title: "Géo IA et Gestion des Risques Naturels",
                      org: "Faculté des Sciences Kénitra",
                      year: "12/24 - 02/25",
                      role: "Professeur Vacataire (Master)",
                      desc: "Conception et animation de séances théoriques et pratiques SIG pour le niveau Master."
                    }
                  ].map((train, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 p-8 rounded-3xl flex flex-col gap-6 hover:border-blue-400 border-l-8 border-l-blue-600 transition-all shadow-sm">
                      <div className="flex justify-between items-start">
                         <span className="bg-blue-600 text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">
                            {train.year}
                         </span>
                         <Award className="text-blue-200" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-black uppercase text-slate-900 mb-2 leading-tight">{train.title}</h3>
                        <p className="text-sm font-bold text-slate-500 mb-1">{train.org}</p>
                        <p className="text-xs font-bold text-blue-600 mb-4 uppercase tracking-tighter">{train.role}</p>
                        <p className="text-sm text-slate-600 leading-relaxed font-medium italic bg-slate-50 p-4 rounded-xl">"{train.desc}"</p>
                      </div>
                    </div>
                  ))}
                </div>
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
              className="space-y-10"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-200 pb-6 gap-4">
                <div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter">Projets & Commandes 2025</h2>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-[0.2em] mt-2 italic">Marchés publics & Consultations Techniques</p>
                </div>
                <span className="font-mono text-xs text-slate-400 bg-slate-100 px-3 py-1 rounded-full">PROJECTS_MASTER.DB</span>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">ID / Description de l'Objet</th>
                        <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest hidden md:table-cell">Bénéficiaire Principal</th>
                        <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-right">Statut / Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {[
                        { 
                          title: "Étude de prestations topographiques liées à la Taxe sur les Terrains Non Bâtis (TNB) - Découpage technique par zones à tarification fiscale différenciée de la commune de Lalla Mimouna", 
                          client: "Collectivité territoriale de LALLA MIMOUNA / KENITRA",
                          status: "TERMINÉ",
                          date: "31/10/2025",
                          statusColor: "text-emerald-600",
                          id: "BDC-260653",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/260653"
                        },
                        { 
                          title: "Elaboration d’une carte de la zone couverte par plan d’aménagement en vigueur de centre mokrisset", 
                          client: "Commune rurale de MOQRISSAT / OUEZZANE",
                          status: "TERMINÉ",
                          date: "18/10/2025",
                          statusColor: "text-emerald-600",
                          id: "BDC-253995",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/253995"
                        },
                        { 
                          title: "إعداد خريطة حديثة للجماعة الترابية البدوزة", 
                          client: "Commune EL BEDDOUZA / SAFI",
                          status: "TERMINÉ",
                          date: "21/10/2025",
                          statusColor: "text-emerald-600",
                          rtl: true,
                          id: "BDC-254807",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/254807"
                        },
                        { 
                          title: "Etude de prestations topographiques liées à la Taxe sur les Terrains Non Bâtis (TNB) – Découpage technique par zones à tarification fiscale différenciée de la commune de SIDI TAIBI", 
                          client: "Collectivité territoriale de SIDI TAIBI / KENITRA",
                          status: "TERMINÉ",
                          date: "23/10/2025",
                          statusColor: "text-emerald-600",
                          id: "BDC-256253",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/256253"
                        },
                        { 
                          title: "ETUDE TECHNIQUE - TOPOGRAPHIE", 
                          client: "Commune AIT KAMRA / AL HOCEIMA",
                          status: "TERMINÉ",
                          date: "20/10/2025",
                          statusColor: "text-emerald-600",
                          id: "BDC-255075",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/255075"
                        },
                        { 
                          title: "Etablissement d’une carte topographique récente de la commune EL Maader EL kabir", 
                          client: "Commune rurale de EL MAADER ELKABIR / TIZNIT",
                          status: "TERMINÉ",
                          date: "21/10/2025",
                          statusColor: "text-emerald-600",
                          id: "BDC-255551",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/255551"
                        },
                        { 
                          title: "Elaboration d’une cartographie de la commune de Oued Laou relevant de la Province de Tétouan", 
                          client: "Commune urbaine de OUED LAOU / TETOUAN",
                          status: "TERMINÉ",
                          date: "17/10/2025",
                          statusColor: "text-emerald-600",
                          id: "BDC-253851",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/253851"
                        },
                        { 
                          title: "ETUDE TECHNIQUE : ETUDE TOPOGRAPHIQUE POUR L'ELABORATION DE CARTES THEMATIQUES ET LA DELIMUTATION DES ZONES A LA COMMUNE DE LAKHSSAS", 
                          client: "Commune urbaine de LAKHSAS / SIDI IFNI",
                          status: "TERMINÉ",
                          date: "17/10/2025",
                          statusColor: "text-emerald-600",
                          id: "BDC-253602",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/253602"
                        },
                        { 
                          title: "إعداد خريطة حديثة للجماعة الترابية امي مقورن", 
                          client: "Commune de IMI M'QOURNE / CHTOUKA-AIT BAHA",
                          status: "TERMINÉ",
                          date: "21/10/2025",
                          statusColor: "text-emerald-600",
                          rtl: true,
                          id: "BDC-255008",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/255008"
                        },
                        { 
                          title: "ETABLISSEMENT D’UNE CARTE TOPOGRAPHIQUE DE LA COMMUNE AZLAF PROVINCE DE DRIOUCH", 
                          client: "Commune rurale de AZLAF / MAROC, DRIOUCH",
                          status: "TERMINÉ",
                          date: "20/10/2025",
                          statusColor: "text-emerald-600",
                          id: "BDC-255146",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/255146"
                        },
                        { 
                          title: "Etude topographique pour l’élaboration de cartes thématique et la délimitation des zones conformement aux disposition de la loi 14-25 à la commune d’al hoceima", 
                          client: "Commune urbaine de AL HOCEIMA / AL HOCEIMA",
                          status: "TERMINÉ",
                          date: "16/10/2025",
                          statusColor: "text-emerald-600",
                          id: "BDC-253156",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/253156"
                        }
                      ].map((proj, idx) => (
                        <tr 
                          key={idx} 
                          className={`hover:bg-slate-50 transition-all cursor-pointer group ${expandedProjectId === proj.id ? 'bg-emerald-50/40' : ''}`}
                          onClick={() => setExpandedProjectId(expandedProjectId === proj.id ? null : proj.id)}
                        >
                          <td className="px-8 py-6">
                            <div className="flex flex-col gap-1.5">
                              <span className={`font-mono text-xs uppercase tracking-widest ${expandedProjectId === proj.id ? 'text-emerald-600 font-bold' : 'text-slate-400'}`}>{proj.id}</span>
                              <span className={`text-sm md:text-base font-bold leading-snug ${expandedProjectId === proj.id ? 'text-slate-900' : 'text-slate-700'} ${proj.rtl ? 'text-right' : ''} line-clamp-1 group-hover:line-clamp-none transition-all`} dir={proj.rtl ? 'rtl' : 'ltr'}>
                                {proj.title}
                              </span>
                            </div>
                            
                            <AnimatePresence>
                              {expandedProjectId === proj.id && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pt-6 pb-2 space-y-4">
                                    <div className="p-5 bg-white border border-emerald-100 rounded-xl text-sm shadow-sm">
                                      <p className="text-xs font-black uppercase text-emerald-600 mb-3 tracking-widest">DÉTAIL COMPLET DE LA MISSION</p>
                                      <p className={`text-slate-800 leading-relaxed font-semibold text-base ${proj.rtl ? 'text-right' : ''}`} dir={proj.rtl ? 'rtl' : 'ltr'}>
                                        {proj.title}
                                      </p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                       <div className="p-4 bg-white border border-emerald-100 rounded-xl shadow-sm">
                                          <p className="font-black text-xs text-emerald-600 uppercase tracking-widest mb-1">PÉRIODE D'EXÉCUTION</p>
                                          <p className="font-mono text-slate-900 font-bold text-sm">{proj.date}</p>
                                       </div>
                                       <div className="p-4 bg-white border border-emerald-100 rounded-xl shadow-sm">
                                          <p className="font-black text-xs text-emerald-600 uppercase tracking-widest mb-1">LOCALISATION DU MARCHÉ</p>
                                          <p className="text-slate-900 font-bold text-sm truncate">{proj.client.split(' / ')[1] || 'Maroc'}</p>
                                       </div>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </td>
                          <td className="px-8 py-6 text-sm font-bold text-slate-500 uppercase hidden md:table-cell">{proj.client.split(' / ')[0]}</td>
                          <td className={`px-8 py-6 text-right`}>
                            <div className="flex flex-col items-end gap-3">
                               <span className={`font-mono text-xs font-black uppercase tracking-widest ${proj.statusColor} flex flex-col items-end gap-1`}>
                                <span className="bg-emerald-100 px-3 py-1 rounded-full">{proj.status}</span>
                                <span className="text-xs opacity-60 italic">{proj.date}</span>
                              </span>
                              {proj.link && (
                                <a 
                                  href={proj.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-xs text-white hover:scale-105 transition-transform bg-emerald-600 px-4 py-2 rounded-lg font-bold shadow-sm shadow-emerald-500/20"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  CONSULTER BDC
                                </a>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
          {page === 'websig' && (
            <motion.div
              key="websig"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-200 pb-6 gap-4">
                <div>
                   <h2 className="text-4xl font-black uppercase tracking-tighter">Plateformes Web-SIG Numériques</h2>
                   <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mt-2">Solutions Géospatiales Intégrées & Services Cloud Professionnels</p>
                </div>
                <span className="font-mono text-xs text-slate-400 bg-slate-100 px-4 py-1 rounded-full">GEOPORTAL_HUB.v5</span>
              </div>

              <div className="grid grid-cols-1 gap-16">
                {[
                  {
                    id: "TNB-GIS",
                    title: "Système de Gestion Numérique TNB-GIS",
                    subtitle: "COMMUNE OULAD SGHIR | GOUVERNANCE NUMÉRIQUE",
                    desc: "Le projet TNB-GIS représente une avancée majeure dans la gestion des recettes de la commune d'Oulad Sghir. Le système repose sur le croisement des données spatiales avec les registres fiscaux locaux, permettant d'identifier les terrains non bâtis, de les classer et de calculer automatiquement les redevances via une carte interactive.",
                    features: [
                      { icon: <MapPinned size={24} />, title: "Repérage Spatial", text: "Localisation précise à 100%" },
                      { icon: <Database size={24} />, title: "Données Centralisées", text: "Architecture PostGIS & PostgreSQL" },
                      { icon: <Layers size={24} />, title: "Optimisation Fiscale", text: "Gestion précise de l'assiette TNB" }
                    ],
                    objectives: [
                      { title: "Digitalisation Totale", desc: "Remplacement des registres papier par un système spatialisé." },
                      { title: "Équité Fiscale", desc: "Infrastructure garantissant l'inclusion de tous les contribuables." },
                      { title: "Aide à la Décision", desc: "Dashboards temps réel identifiant le potentiel fiscal." },
                      { title: "Automatisation", desc: "Triggers SQL pour mise à jour automatique des états." }
                    ],
                    stack: [
                      { label: "Data Stack", techs: ["PostgreSQL", "PostGIS"] },
                      { label: "Frontend", techs: ["Leaflet.js", "JavaScript"] },
                      { label: "Engine", techs: ["PHP", "SQL Triggers"] }
                    ],
                    badge: "Version Stable 4.2 - Production",
                    dark: true
                  },
                  {
                    id: "TOPOMA",
                    title: " طوبوما SIG | Topoma SIG",
                    subtitle: "EXTRACTION DE DONNÉES GÉOGRAPHIQUES CLOUD",
                    desc: "La plateforme professionnelle gratuite pour la préparation et le téléchargement de cartes géo-référencées. Conçue pour faciliter le flux de travail des topographes et ingénieurs SIG en permettant l'extraction rapide de fonds de cartes et l'intégration de données multi-sources.",
                    link: "https://topoma.vercel.app/",
                    features: [
                      { icon: <Monitor size={24} />, title: "Export GeoTIFF", text: "Fonds de cartes haute résolution géo-référencés" },
                      { icon: <Files size={24} />, title: "Formats Multiples", text: "Support SHP, KML, DXF et GeoJSON" },
                      { icon: <FileSpreadsheet size={24} />, title: "Import Excel (X,Y)", text: "Tombée de points via coordonnées GPS" }
                    ],
                    objectives: [
                      { title: "Libre Accès", desc: "Outil gratuit pour les chercheurs et professionnels." },
                      { title: "Interopérabilité", desc: "Interface CAD-SIG unifiée pour tous les formats." },
                      { title: "Zones d'Intérêt", desc: "Définition interactive de l'AOI pour extraction ciblée." },
                      { title: "Productivité", desc: "Gain de temps critique lors de la préparation des cartes." }
                    ],
                    stack: [
                      { label: "Core Data", techs: ["Satellite", "OpenStreetMap"] },
                      { label: "Output", techs: ["GeoTIFF", "KML", "SHP", "DXF", "XLS"] },
                      { label: "Cloud", techs: ["Vercel", "Next.js Architecture"] }
                    ],
                    badge: "Édition Bêta 2026 - Accès Libre",
                    dark: false
                  }
                ].map((platform) => (
                  <div key={platform.id} className="grid grid-cols-1 lg:grid-cols-3 bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-xl group hover:shadow-2xl transition-all">
                    {/* Header/Hero Section */}
                    <div className={`lg:col-span-2 flex flex-col ${platform.dark ? 'bg-slate-900 text-white' : 'bg-blue-600 text-white'}`}>
                      <div className="p-12 md:p-16 relative overflow-hidden flex-1 flex flex-col justify-center border-b border-white/10 min-h-[250px]">
                         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                         <div className="relative z-10">
                            <h3 className={`text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 ${platform.id === 'TOPOMA' ? 'text-right' : ''}`} dir={platform.id === 'TOPOMA' ? 'rtl' : 'ltr'}>
                              {platform.title}
                            </h3>
                            <p className={`${platform.dark ? 'text-blue-400' : 'text-blue-100'} font-mono text-sm font-bold tracking-[0.3em] uppercase opacity-80`}>
                              {platform.subtitle}
                            </p>
                         </div>
                      </div>
                      
                      <div className="bg-white p-10 md:p-14 text-slate-800 space-y-12 flex-1">
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           {platform.features.map((feat, i) => (
                             <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center gap-3 hover:bg-blue-50 hover:border-blue-200 transition-all">
                                <span className="text-blue-600 scale-110 mb-2">{feat.icon}</span>
                                <h4 className="text-sm font-black uppercase text-slate-900 leading-tight">{feat.title}</h4>
                                <p className="text-xs text-slate-500 font-medium">{feat.text}</p>
                             </div>
                           ))}
                         </div>

                         <div className="space-y-6">
                            <div className="flex items-center gap-4">
                               <div className="h-1 w-10 bg-blue-600 rounded-full"></div>
                               <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Vision du Projet</h4>
                            </div>
                            <p className="text-base text-slate-600 font-medium leading-relaxed text-justify">
                              {platform.desc}
                            </p>
                         </div>

                         <div className="space-y-6">
                            <div className="flex items-center gap-4">
                               <div className="h-1 w-10 bg-blue-600 rounded-full"></div>
                               <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Objectifs Stratégiques</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                               {platform.objectives.map((obj, i) => (
                                 <div key={i} className="flex gap-4">
                                    <div className="shrink-0 w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center mt-0.5">
                                       <ChevronRight size={14} className="text-blue-600" />
                                    </div>
                                    <div>
                                       <p className="text-sm font-black uppercase text-slate-900 mb-1">{obj.title}</p>
                                       <p className="text-xs text-slate-500 leading-relaxed">{obj.desc}</p>
                                    </div>
                                 </div>
                               ))}
                            </div>
                         </div>
                      </div>
                    </div>

                    {/* Sidebar: Technical Stack */}
                    <div className="bg-slate-50/80 p-10 md:p-12 flex flex-col justify-between border-l border-slate-200">
                      <div className="space-y-10">
                        <div className="flex justify-between items-start">
                           <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Spécifications</h3>
                           <Code size={20} className="text-slate-300" />
                        </div>

                        <div className="space-y-10">
                           {platform.stack.map((layer, i) => (
                             <div key={i}>
                                <p className="text-xs font-black uppercase text-blue-600 mb-4 tracking-widest">{layer.label}</p>
                                <div className="flex flex-wrap gap-2">
                                   {layer.techs.map(t => (
                                     <span key={t} className="px-3 py-1.5 bg-white border border-slate-200 text-xs font-bold text-slate-700 rounded-lg shadow-sm hover:border-blue-400 transition-colors">
                                        {t}
                                     </span>
                                   ))}
                                </div>
                             </div>
                           ))}
                        </div>
                      </div>

                      <div className="mt-20 space-y-6">
                         {platform.link ? (
                           <a 
                            href={platform.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-blue-600 text-white font-black uppercase text-sm tracking-widest py-5 rounded-2xl hover:bg-blue-700 hover:scale-[1.02] shadow-xl shadow-blue-500/30 transition-all flex items-center justify-center gap-3 group/btn"
                           >
                              ACCÉDER À LA PLATEFORME <ExternalLink size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                           </a>
                         ) : (
                           <button className="w-full bg-slate-200 text-slate-500 cursor-not-allowed font-black uppercase text-sm tracking-widest py-5 rounded-2xl flex items-center justify-center gap-3">
                              RÉSEAU INTERNE GOUV <Database size={20} />
                           </button>
                         )}

                         <div className="flex items-center gap-3 text-slate-400 px-2 justify-center">
                            <Award size={18} className="text-blue-400" />
                            <span className="text-xs font-black uppercase tracking-widest">{platform.badge}</span>
                         </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="glass-card mt-12 px-8 py-10 flex flex-col md:flex-row justify-between items-center border-x-0 border-b-0 rounded-none relative z-20">
        <div className="flex flex-wrap justify-center gap-10 font-mono text-xs mb-8 md:mb-0">
          <span className="flex items-center gap-2 text-slate-500"><Globe size={14} className="text-blue-500" /> LAT: 30.4278°</span>
          <span className="flex items-center gap-2 text-slate-500"><Globe size={14} className="text-blue-500" /> LON: -9.5981°</span>
          <span className="flex items-center gap-2 text-slate-500"><MapPinned size={14} className="text-blue-500" /> ALT: 31M</span>
        </div>
        
        <div className="text-xs font-black tracking-[0.25em] uppercase text-slate-900 mb-8 md:mb-0 text-center">
          © 2026 {name} | INGÉNIERIE GÉOMATIQUE & WEB-SIG
        </div>
        
        <div className="flex gap-10 font-mono text-xs uppercase text-slate-500 border-l border-slate-200 pl-10 hidden lg:flex">
          <a href="#" className="hover:text-blue-600 transition-colors cursor-pointer font-bold">LinkedIn</a>
          <a href="#" className="hover:text-blue-600 transition-colors cursor-pointer font-bold">GitHub</a>
          <a href="#" className="text-slate-300 font-bold px-2 py-0.5 border border-slate-100 rounded">V4.2_STABLE</a>
        </div>
      </footer>
    </div>
  );
}

