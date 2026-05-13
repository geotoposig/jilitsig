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

  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

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
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-300 pb-4 gap-4">
                <div>
                  <h2 className="text-3xl font-black uppercase tracking-tighter">Compétences & Expertise</h2>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mt-1">Géo-Intelligence & Analyse Spatiale</p>
                </div>
                <span className="font-mono text-[10px] text-slate-400">STACK_ANALYSIS.LOG</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    title: "1. Géomatique & SIG Advanced (Desktop & Cloud)",
                    points: [
                      { label: "Expertise Logicielle", text: "Maîtrise avancée de ArcGIS Pro/Desktop et QGIS (Analyse spatiale complexe, sémiologie graphique, et modélisation 3D)." },
                      { label: "Cloud Computing", text: "Analyse de données géospatiales massives (Big Data) via Google Earth Engine (GEE) pour le suivi environnemental et climatique." },
                      { label: "Automatisation", text: "Développement de scripts Python (ArcPy, PyQGIS) pour l'optimisation des workflows et le géotraitement automatisé." },
                      { label: "Databases", text: "Conception et gestion de bases de données spatiales (PostgreSQL/PostGIS, SQL Server, Access)." },
                      { label: "Outils SIG", text: "Utilisation intensive de Grass GIS, Global Mapper, MapInfo, et ArcView." }
                    ],
                    skills: ["ArcGIS Pro", "QGIS", "GEE", "Python", "PostGIS"],
                    dark: true
                  },
                  {
                    title: "2. Télédétection & Geo-AI (Intelligence Artificielle)",
                    points: [
                      { label: "Traitement d'Images", text: "Analyse d'imagerie optique et radar (Sentinel-1 & 2, Landsat) via SNAP, ENVI, Erdas Imagine, et PCI Geomatica." },
                      { label: "Analyse de Pointe", text: "Classification avancée (Object-based), reconnaissance de formes, segmentation, et études diachroniques haute résolution." },
                      { label: "Innovation", text: "Initiation aux techniques de Deep Learning (Geo-AI) pour l'extraction automatique de caractéristiques et traitement des données LiDAR." }
                    ],
                    skills: ["Sentinel", "ENVI", "Erdas", "Deep Learning", "LiDAR"],
                    dark: false
                  },
                  {
                    title: "3. Webmapping & Plateformes Interactives",
                    points: [
                      { label: "Frontend Maps", text: "Création de cartes interactives dynamiques avec Leaflet.js, OpenLayers." },
                      { label: "Dashboards", text: "Conception de tableaux de bord interactifs pour l'aide à la décision (ArcGIS Dashboards, Streamlit)." },
                      { label: "Web GIS Architecture", text: "Maîtrise de la diffusion de flux de données standards (WMS, WFS, WMTS) et architecture de plateformes géographiques web." }
                    ],
                    skills: ["Leaflet", "OpenLayers", "Streamlit", "WMS/WFS"],
                    dark: false
                  },
                  {
                    title: "4. Urbanisme, Aménagement & Ingénierie",
                    points: [
                      { label: "Planification", text: "Suivi technique et analyse des documents d'urbanisme (SDAU, PA, PDAR, SRAT, SNAT)." },
                      { label: "Études Thématiques", text: "Réalisation d'études statistiques et cartographiques (Habitat, population, foncier, scolaire) et analyses de risques." },
                      { label: "Expertise Métier", text: "Maîtrise des techniques de levés topographiques, de photogrammétrie et de gestion urbaine 3D (Google SketchUp)." }
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
                    title: "6. Design, Infographie & Communication",
                    points: [
                      { label: "Design Graphique", text: "Conception de supports professionnels (Affiches, Flyers, Dépliants) avec Adobe Illustrator, Photoshop et Canvas." },
                      { label: "Production Vidéo", text: "Montage et motion design pour la vulgarisation de données spatiales (After Effects, Camtasia Studio)." },
                      { label: "Cartographie d'Édition", text: "Réalisation de documents graphiques haute qualité pour l'édition et la communication institutionnelle." }
                    ],
                    skills: ["Illustrator", "Photoshop", "After Effects"],
                    dark: false
                  }
                ].map((cat, idx) => (
                  <div key={idx} className={`${cat.dark ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-ink border-gray-300'} border p-6 flex flex-col gap-6 relative group overflow-hidden`}>
                    {cat.dark && <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -mr-16 -mt-16"></div>}
                    
                    <div className="relative z-10">
                      <h3 className={`text-xs font-black uppercase tracking-widest mb-4 ${cat.dark ? 'text-blue-400' : 'text-blue-600'}`}>{cat.title}</h3>
                      
                      <div className="space-y-4 mb-6">
                        {cat.points.map((p, pIdx) => (
                          <div key={pIdx} className="group/item">
                            <span className={`text-[10px] font-black uppercase tracking-tighter block mb-0.5 ${cat.dark ? 'text-slate-400' : 'text-slate-500'}`}>{p.label}</span>
                            <p className={`text-[11px] leading-relaxed ${cat.dark ? 'text-slate-300' : 'text-slate-600'}`}>{p.text}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100/10">
                        {cat.skills.map(skill => (
                          <span key={skill} className={`px-2 py-0.5 text-[9px] font-bold uppercase border rounded-sm ${cat.dark ? 'border-blue-500/30 text-blue-400 bg-blue-500/5' : 'border-blue-100 text-blue-600 bg-blue-50'}`}>
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
              className="space-y-8"
            >
              <div className="flex justify-between items-end border-b border-gray-300 pb-4">
                <h2 className="text-3xl font-black uppercase tracking-tighter">Parcours Professionnel</h2>
                <span className="font-mono text-[10px] text-slate-400">TIMELINE_EXEC.DAT</span>
              </div>

              <div className="grid grid-cols-1 gap-4 max-w-4xl">
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
                    desc: "Collecte de données pour mesurer la conformité des établissements pionniers aux critères de labélisation au profit de l'ONDH. Responsable: Prof. Mhammed Abderebbi."
                  },
                  {
                    company: "Global for Survey and Consulting (GSC)",
                    year: "07/24 - 08/24",
                    role: "Chargé de mission Enquêteur Contrôleur & Chauffeur",
                    desc: "Réalisation d'enquête panel de ménages au profit de l'Observatoire National de Développement Humain (ONDH). Responsable: Prof. Mhammed Abderebbi."
                  },
                  {
                    company: "Haut-Commissariat au Plan (HCP)",
                    year: "12/23 - 05/24",
                    role: "Chargé de mission Opérateur Cellule SIG",
                    desc: "Mise à jour des repères géographiques et découpage des districts pour le recensement 2024 RGPH (urbain et rural) via QGIS."
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
                  },
                  {
                    company: "SIS Consultants",
                    year: "06/22 - 08/22",
                    role: "Chargé de Projet - L'investissement touristique",
                    desc: "Responsable d'équipes de collecte des données du secteur touristique (Supervision de 20 personnes)."
                  },
                  {
                    company: "MAROC INGENOV",
                    year: "06/21 - 08/22",
                    role: "Enquêteur de terrain & Chauffeur",
                    desc: "Inventaire des points d'eau et leurs usages en milieu urbain pour l'Agence du Bassin Hydraulique du Bouregreg et de la Chaouia (ABHBC)."
                  },
                  {
                    company: "Faculté des Sciences Appliquées Ait Melloul",
                    year: "11/19 - 03/20",
                    role: "Stagiaire bibliothécaire",
                    desc: "Numérisation, archivage et organisation d'événements scientifiques (conférences, workshops). Orientation et conseil du public."
                  }
                ].map((exp, idx) => (
                  <div key={idx} className="bg-white border border-gray-300 p-6 flex flex-col md:flex-row gap-6 relative group hover:border-blue-400 transition-colors">
                    <div className="w-32 shrink-0">
                       <span className="inline-block bg-slate-900 border border-slate-800 text-white text-[9px] font-black px-2 py-0.5 uppercase tracking-widest">
                          {exp.year}
                       </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-black uppercase tracking-tight mb-1">{exp.company}</h3>
                      <p className="text-xs font-bold text-blue-600 mb-4">{exp.role}</p>
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
                          title: "Étude de prestations topographiques liées à la Taxe sur les Terrains Non Bâtis (TNB) - Découpage technique par zones à tarification fiscale différenciée de la commune de Lalla Mimouna", 
                          client: "Collectivité territoriale de LALLA MIMOUNA / KENITRA",
                          status: "TERMINÉ",
                          date: "31/10/2025",
                          statusColor: "text-green-600",
                          id: "BDC-260653",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/260653"
                        },
                        { 
                          title: "Elaboration d’une carte de la zone couverte par plan d’aménagement en vigueur de centre mokrisset", 
                          client: "Commune rurale de MOQRISSAT / OUEZZANE",
                          status: "TERMINÉ",
                          date: "18/10/2025",
                          statusColor: "text-green-600",
                          id: "BDC-253995",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/253995"
                        },
                        { 
                          title: "إعداد خريطة حديثة للجماعة الترابية البدوزة", 
                          client: "Commune EL BEDDOUZA / SAFI",
                          status: "TERMINÉ",
                          date: "21/10/2025",
                          statusColor: "text-green-600",
                          rtl: true,
                          id: "BDC-254807",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/254807"
                        },
                        { 
                          title: "Etude de prestations topographiques liées à la Taxe sur les Terrains Non Bâtis (TNB) – Découpage technique par zones à tarification fiscale différenciée de la commune de SIDI TAIBI", 
                          client: "Collectivité territoriale de SIDI TAIBI / KENITRA",
                          status: "TERMINÉ",
                          date: "23/10/2025",
                          statusColor: "text-green-600",
                          id: "BDC-256253",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/256253"
                        },
                        { 
                          title: "ETUDE TECHNIQUE - TOPOGRAPHIE", 
                          client: "Commune AIT KAMRA / AL HOCEIMA",
                          status: "TERMINÉ",
                          date: "20/10/2025",
                          statusColor: "text-green-600",
                          id: "BDC-255075",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/255075"
                        },
                        { 
                          title: "Etablissement d’une carte topographique récente de la commune EL Maader EL kabir", 
                          client: "Commune rurale de EL MAADER ELKABIR / TIZNIT",
                          status: "TERMINÉ",
                          date: "21/10/2025",
                          statusColor: "text-green-600",
                          id: "BDC-255551",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/255551"
                        },
                        { 
                          title: "Elaboration d’une cartographie de la commune de Oued Laou relevant de la Province de Tétouan", 
                          client: "Commune urbaine de OUED LAOU / TETOUAN",
                          status: "TERMINÉ",
                          date: "17/10/2025",
                          statusColor: "text-green-600",
                          id: "BDC-253851",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/253851"
                        },
                        { 
                          title: "ETUDE TECHNIQUE : ETUDE TOPOGRAPHIQUE POUR L'ELABORATION DE CARTES THEMATIQUES ET LA DELIMUTATION DES ZONES A LA COMMUNE DE LAKHSSAS", 
                          client: "Commune urbaine de LAKHSAS / SIDI IFNI",
                          status: "TERMINÉ",
                          date: "17/10/2025",
                          statusColor: "text-green-600",
                          id: "BDC-253602",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/253602"
                        },
                        { 
                          title: "إعداد خريطة حديثة للجماعة الترابية امي مقورن", 
                          client: "Commune de IMI M'QOURNE / CHTOUKA-AIT BAHA",
                          status: "TERMINÉ",
                          date: "21/10/2025",
                          statusColor: "text-green-600",
                          rtl: true,
                          id: "BDC-255008",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/255008"
                        },
                        { 
                          title: "ETABLISSEMENT D’UNE CARTE TOPOGRAPHIQUE DE LA COMMUNE AZLAF PROVINCE DE DRIOUCH", 
                          client: "Commune rurale de AZLAF / MAROC, DRIOUCH",
                          status: "TERMINÉ",
                          date: "20/10/2025",
                          statusColor: "text-green-600",
                          id: "BDC-255146",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/255146"
                        },
                        { 
                          title: "Etude topographique pour l’élaboration de cartes thématique et la délimitation des zones conformement aux disposition de la loi 14-25 à la commune d’al hoceima", 
                          client: "Commune urbaine de AL HOCEIMA / AL HOCEIMA",
                          status: "TERMINÉ",
                          date: "16/10/2025",
                          statusColor: "text-green-600",
                          id: "BDC-253156",
                          link: "https://www.marchespublics.gov.ma/bdc/entreprise/consultation/show/253156"
                        }
                      ].map((proj, idx) => (
                        <tr 
                          key={idx} 
                          className={`hover:bg-slate-50 transition-colors cursor-pointer group ${expandedProjectId === proj.id ? 'bg-emerald-50 border-emerald-200' : ''}`}
                          onClick={() => setExpandedProjectId(expandedProjectId === proj.id ? null : proj.id)}
                        >
                          <td className="px-6 py-4">
                            <div className="flex flex-col gap-0.5">
                              <span className={`font-mono text-[9px] uppercase tracking-widest ${expandedProjectId === proj.id ? 'text-emerald-600 font-bold' : 'text-slate-400'}`}>{proj.id}</span>
                              <span className={`text-[11px] font-bold ${expandedProjectId === proj.id ? 'text-slate-900 text-sm' : 'text-slate-700'} ${proj.rtl ? 'text-right' : ''} line-clamp-1 group-hover:line-clamp-none transition-all`} dir={proj.rtl ? 'rtl' : 'ltr'}>
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
                                  <div className="pt-4 pb-2 space-y-3">
                                    <div className="p-3 bg-white/80 border border-emerald-100 rounded text-[11px]">
                                      <p className={`text-slate-800 leading-relaxed font-semibold ${proj.rtl ? 'text-right outline-none' : ''}`} dir={proj.rtl ? 'rtl' : 'ltr'}>
                                        {proj.title}
                                      </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                       <div className="p-2 bg-white/60 border border-emerald-100 rounded">
                                          <p className="font-black text-[9px] text-emerald-600 uppercase">DATE D'EXÉCUTION</p>
                                          <p className="font-mono text-slate-700 font-bold">{proj.date}</p>
                                       </div>
                                       <div className="p-2 bg-white/60 border border-emerald-100 rounded">
                                          <p className="font-black text-[9px] text-emerald-600 uppercase">LOCALISATION</p>
                                          <p className="text-slate-700 font-bold truncate">{proj.client.split(' / ')[1] || 'Maroc'}</p>
                                       </div>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </td>
                          <td className="px-6 py-4 text-[11px] font-medium text-slate-500 uppercase">{proj.client.split(' / ')[0]}</td>
                          <td className={`px-6 py-4 text-right`}>
                            <div className="flex flex-col items-end gap-1">
                               <span className={`font-mono text-[9px] font-black uppercase tracking-widest ${proj.statusColor} flex flex-col items-end`}>
                                <span>{proj.status}</span>
                                <span className="text-[8px] opacity-70 underline decoration-1">{proj.date}</span>
                              </span>
                              {proj.link && (
                                <a 
                                  href={proj.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-[9px] text-emerald-600 hover:underline font-bold bg-emerald-100/50 px-1.5 py-0.5 rounded-sm"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  LIEN REF
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

