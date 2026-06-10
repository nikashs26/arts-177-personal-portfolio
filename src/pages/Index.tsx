
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, Github, Linkedin, Mail, ChevronUp, ChevronDown, Calendar, Users, Award, Star, Code, Heart, Gamepad2, Dumbbell, Palette, Music, Lightbulb, BookOpen } from 'lucide-react';

const educationTimeline = [
  {
    school: "Santa Clara University",
    degree: "B.S. in Web Design and Engineering",
    period: "Sept 2024 – Present",
    status: "In Progress",
    logo: "/lovable-uploads/97a30479-ded2-4573-a26c-0a29d4c523ea.png",
    courses: [
      "Advanced Programming",
      "Introduction to Web Technologies",
      "Abstract Data Types and Data Structures",
      "Computer Networks",
      "Probability and Statistics",
      "Calculus and Analytical Geometry III & IV",
    ],
    activities: ["Association for Computing Machinery (ACM)"],
  },
];

type EducationEntry = (typeof educationTimeline)[number];

function EducationEntryContent({ entry }: { entry: EducationEntry }) {
  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <h3 className="text-2xl lg:text-3xl font-bold text-blue-950 tracking-tight leading-tight">
          {entry.school}
        </h3>
        <p className="text-lg text-blue-600 font-medium">{entry.degree}</p>
      </div>

      <div>
        <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
          <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
          Relevant Courses
        </h4>
        <ul className="grid gap-2 gap-x-6 sm:grid-cols-2">
          {entry.courses.map((course) => (
            <li
              key={course}
              className="text-sm md:text-base text-blue-900/80 leading-snug flex gap-2"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
              <span>{course}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
          Activities
        </h4>
        {entry.activities.map((activity) => (
          <p key={activity} className="flex items-center gap-2 text-sm md:text-base text-blue-900/80">
            <Users className="h-4 w-4 shrink-0 text-blue-500" aria-hidden="true" />
            {activity}
          </p>
        ))}
      </div>
    </div>
  );
}

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 400);
      setNavbarScrolled(scrollY > 50);

      // Detect current section
      if (scrollY < 80) {
        setActiveSection('');
        return;
      }

      const sections = ['about', 'education', 'skills', 'projects', 'experience', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Better Bulk",
      description: "Modern full-stack recipe platform with secure auth, smart recommendations, and AI meal planning",
      tech: ["TypeScript", "Python", "React", "TailwindCSS", "Flask", "Lovable", "Supabase"],
      github: "https://github.com/nikashs26/full-stack-recipe",
      live: "https://betterbulk.netlify.app/",
      icon: "/lovable-uploads/618148c4-936d-47a3-8c77-35a7bdcf0843.png",
      details: "Designed and shipped a modern full‑stack recipe platform with a Vite/React frontend on Netlify and a Flask API on Render. Implemented secure Supabase auth, user preferences with fast ChromaDB-backed storage, and a high‑performance recipe cache/search service supporting dietary restrictions, allergens, cuisines, and cooking‑time filters. Built a smart recommendation engine with fair cuisine distribution and guaranteed favorite‑food coverage that respects all user restrictions, plus an AI meal planner that targets user‑set macro goals. Added recipe creation/editing, favorites, and reviews with clean RESTful endpoints, plus curated/manual recipes alongside semantic search. Optimized production performance with a ChromaDB singleton and lightweight embeddings, reduced logging overhead, and improved UX with resilient validation and clear form behavior. Deployed via CI‑style Git pushes; leveraged Lovable AI Copilot for debugging, test scaffolding, and refactors to accelerate delivery and enhance code quality.",
      features: [
        "User authentication and profile management",
        "Recipe creation with rich text editor",
        "Advanced search and filtering",
        "Favorite recipes system",
        "User reviews and ratings",
        "Responsive design for all devices"
      ]
    },
    {
      title: "Simba's Surveillance",
      description: "Real-time Lion King-themed wildlife trespasser detection system",
      tech: ["HTML", "CSS", "React", "Python", "AI/ML", "Computer Vision"],
      github: "https://github.com/NickelR22/simbassurveillance",
      devpost: "https://devpost.com/software/bobs-consulting?ref_content=my-projects-tab&ref_feature=my_projects",
      live: "https://simbassurveillance.vercel.app/",
      icon: "/lovable-uploads/1df91ec5-47e3-43bb-b6e9-77df008d698a.png",
      details: "Developed the complete frontend for a real-time, Lion King-themed wildlife trespasser detection system that uses advanced AI to identify human figures in live-streamed video from protected territories. Created a responsive homepage using React and CSS, structured the comprehensive About page, and implemented dynamic data visualization. Successfully connected the Python-based backend by retrieving and displaying JSON data in the React frontend, including precise timestamps and images of detected trespassers. Enhanced real-time data visualization to improve accessibility and responsiveness, directly supporting wildlife protection efforts.",
      features: [
        "Real-time video stream processing",
        "AI-powered human detection",
        "Live alerts and notifications",
        "Wildlife protection dashboard",
        "Historical data visualization",
        "Mobile-responsive interface"
      ]
    },
    {
      title: "Peter Parks",
      description: "AWS/INRIX Hack 2024 Finalist - Real-time parking detection system",
      tech: ["React", "CSS", "AWS", "INRIX API", "Real-time Data"],
      github: "https://github.com/nikashs26/AI-Hack-2024",
      devpost: "https://devpost.com/software/parking-kjx41u",
      award: "Finalist AWS/INRIX Hack 2024",
      icon: "/lovable-uploads/e0ea65b7-32bb-4430-a0d5-ffc1fd9eb25e.png",
      details: "Led the frontend development team for an innovative web application that detects available parking spaces in real-time using AWS cloud services and INRIX traffic data APIs. Implemented a sophisticated user interface using JavaScript and CSS, with a primary focus on optimal user experience and accessibility. Coordinated extensively with the backend development team to seamlessly integrate frontend components with real-time parking data streams. The project achieved finalist status in the competitive AWS/INRIX Hack 2024, demonstrating technical excellence and practical application.",
      features: [
        "Real-time parking availability",
        "Interactive city maps",
        "Predictive parking analytics",
        "Mobile-first design",
        "AWS cloud integration",
        "INRIX data visualization"
      ]
    },
    {
      title: "Math 13 Course Page",
      description: "Modern redesign of Santa Clara University math professor's course webpage",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/nikashs26/Math-13-Smolarski-Page",
      live: "https://math-13-smolarski-page.vercel.app/static/index.html",
      icon: "/lovable-uploads/9f95cbc2-ef86-4ca7-962d-81a3231913a2.png",
      details: "Conceptualized and led a collaborative team to completely recreate an SCU math professor's course webpage using modern HTML, CSS, and JavaScript technologies. Designed a contemporary, fully responsive interface with significantly improved functionality and enhanced user engagement features. Personally developed the Home and About Professor pages, while contributing innovative ideas for mockups and implementation strategies for all site sections. Focused extensively on enhancing accessibility standards, visual aesthetics, and interactive elements to dramatically improve the overall student learning experience.",
      features: [
        "Responsive course layout",
        "Interactive assignment calendar",
        "Student resource hub",
        "Modern UI/UX design",
        "Accessible navigation",
        "Mobile optimization"
      ]
    }
  ];

  const experiences = [
    {
      company: "Camp Galileo",
      role: "Summer Operations Intern",
      period: "June 2024 - Aug 2024",
      location: "Saratoga, CA",
      logo: "/lovable-uploads/0f4639f8-d264-4e57-a94e-208683190214.png",
      responsibilities: [
        "Managed comprehensive hands-on office operations including creative poster design and systematic organization of camper shirts, name-tags, and lanyards for 200+ campers",
        "Supervised diverse groups of children ages 5-13 in engaging STEAM classes and structured morning extended care sessions, ensuring educational value and safety",
        "Assisted and directly oversaw counselors-in-training, helping them complete assigned tasks while teaching essential mentorship and leadership skills",
        "Handled camper injuries through certified first-aid treatment protocols, ensuring campers remained safe while continuing to enjoy their camp experience"
      ],
      skills: ["Leadership", "Child Safety", "Event Management", "Team Coordination", "First Aid", "Creative Design", "Organization", "Communication", "Problem Solving", "Mentoring"]
    },
    {
      company: "TechKnowHow",
      role: "Assistant Instructor",
      period: "May 2022 - Aug 2022, May 2023 - Aug 2023",
      location: "Campbell/Saratoga, CA",
      logo: "/lovable-uploads/19205251-517b-45a4-ab4c-22599ea5b362.png",
      responsibilities: [
        "Guided classes of 18-20 elementary and middle school students in comprehensive technology programs including Minecraft modding, Blockbench 3D modeling, LEGO robot-building, Roblox game development, and Scratch programming",
        "Provided individualized assistance to students through their projects, answering technical questions and troubleshooting coding challenges",
        "Directed extended care groups in diverse indoor and outdoor activities including strategic board games, educational videos, and supervised play structure activities",
        "Maintained clean and organized classroom environments at the end of each day to ensure smooth camp operations and prompt daily startup"
      ],
      skills: ["Teaching", "Programming Instruction", "Classroom Management", "Technical Support", "Youth Development", "Scratch Programming", "Minecraft Modding", "3D Modeling", "Game Development", "Patience", "Adaptability"]
    }
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "SQL"],
      gradient: "from-blue-700 to-blue-500"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Flask", "TailwindCSS", "Node.js", "Express.js", "Bootstrap", "jQuery"],
      gradient: "from-blue-600 to-sky-500"
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "VS Code", "PyCharm", "Chrome DevTools", "Postman", "Figma", "Adobe Creative Suite"],
      gradient: "from-blue-800 to-blue-600"
    },
    {
      title: "Databases & Cloud",
      skills: ["Supabase", "PostgreSQL", "MySQL", "AWS", "Vercel", "Firebase", "RESTful APIs"],
      gradient: "from-sky-600 to-blue-500"
    },
    {
      title: "Design & Creative",
      skills: ["UI/UX Design", "Adobe Illustrator", "Adobe Photoshop", "Procreate", "Figma", "Responsive Design"],
      gradient: "from-blue-500 to-blue-300"
    },
    {
      title: "AI & Development Tools",
      skills: ["Lovable AI", "Bolt.new", "Cursor", "GitHub Copilot", "Machine Learning Basics"],
      gradient: "from-indigo-600 to-blue-500"
    },
    {
      title: "Soft Skills",
      skills: ["Problem-solving", "Creative Thinking", "Team Leadership", "Project Management", "Communication", "Mentoring"],
      gradient: "from-blue-900 to-blue-700"
    }
  ];

  const aboutMeData = {
    hobbies: [
      { name: "Drawing", icon: Palette },
      { name: "Gaming", icon: Gamepad2 },
      { name: "Working Out", icon: Dumbbell },
      { name: "Web Design", icon: Code }
    ],
    interests: [
      "Full-stack Development",
      "Web Design", 
      "Animation",
      "Music",
      "Video Game Design",
      "Entrepreneurship"
    ],
    favoriteSongs: [
      "Down by Jay Sean",
      "Down (w/o rap edit) by Jay Sean",
      "Down Chasing Pluto Remix by Jay Sean"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
      {/* Sticky Navigation Bar with scroll effect */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navbarScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="flex justify-between items-center">
            <a
              href="#intro"
              aria-label="Back to intro"
              className="group flex items-center transition-opacity duration-300 hover:opacity-85"
            >
              <img
                src="/ns-logo.png"
                alt="Nikash Shanbhag logo"
                className="h-24 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </a>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className={`transition-colors duration-300 ${
                activeSection === 'about' 
                  ? (navbarScrolled ? 'text-blue-600' : 'text-white') 
                  : (navbarScrolled ? 'text-blue-700/80 hover:text-blue-600' : 'text-white/80 hover:text-white')
              }`}>About</a>
              <a href="#education" className={`transition-colors duration-300 ${
                activeSection === 'education' 
                  ? (navbarScrolled ? 'text-blue-600' : 'text-white') 
                  : (navbarScrolled ? 'text-blue-700/80 hover:text-blue-600' : 'text-white/80 hover:text-white')
              }`}>Education</a>
              <a href="#skills" className={`transition-colors duration-300 ${
                activeSection === 'skills' 
                  ? (navbarScrolled ? 'text-blue-600' : 'text-white') 
                  : (navbarScrolled ? 'text-blue-700/80 hover:text-blue-600' : 'text-white/80 hover:text-white')
              }`}>Skills</a>
              <a href="#projects" className={`transition-colors duration-300 ${
                activeSection === 'projects' 
                  ? (navbarScrolled ? 'text-blue-600' : 'text-white') 
                  : (navbarScrolled ? 'text-blue-700/80 hover:text-blue-600' : 'text-white/80 hover:text-white')
              }`}>Projects</a>
              <a href="#experience" className={`transition-colors duration-300 ${
                activeSection === 'experience' 
                  ? (navbarScrolled ? 'text-blue-600' : 'text-white') 
                  : (navbarScrolled ? 'text-blue-700/80 hover:text-blue-600' : 'text-white/80 hover:text-white')
              }`}>Experience</a>
              <a href="#contact" className={`transition-colors duration-300 ${
                activeSection === 'contact' 
                  ? (navbarScrolled ? 'text-blue-600' : 'text-white') 
                  : (navbarScrolled ? 'text-blue-700/80 hover:text-blue-600' : 'text-white/80 hover:text-white')
              }`}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero / Intro */}
      <section id="intro" className="relative min-h-screen flex items-center overflow-hidden pt-20 scroll-mt-0">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/63ac8832-661a-4ccc-ae0a-847202e073e9.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/88 to-blue-800/75" />
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="max-w-3xl animate-fade-in">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200/90 mb-4">
              Web Design & Engineering
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] mb-6">
              Nikash Shanbhag
            </h1>

            <p className="text-xl md:text-2xl text-white/95 font-medium mb-6 max-w-2xl">
              Building and designing, whether that's apps, websites, or games (sometimes)
            </p>

            <p className="text-base md:text-lg text-blue-100/85 leading-relaxed max-w-2xl mb-10">
              Experience in full-stack development, AI integration, and modern web technologies.
              I focus on clean interfaces, reliable systems, and work that ships.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Button asChild className="gap-3 bg-blue-700/90 hover:bg-blue-800/90 backdrop-blur-sm border border-white/30 shadow-lg text-base px-6 py-3 text-white">
                <a href="mailto:ngshanbhag@scu.edu">
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </Button>
              <Button asChild className="gap-3 bg-blue-600/90 hover:bg-blue-700/90 backdrop-blur-sm border border-white/30 shadow-lg text-base px-6 py-3 text-white">
                <a href="https://www.linkedin.com/in/nikash-shanbhag-a05931250/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild className="gap-3 bg-white/95 hover:bg-white text-blue-800 backdrop-blur-sm border border-white/40 shadow-lg text-base px-6 py-3">
                <a href="https://github.com/nikashs26" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 text-blue-200/60 transition-colors hover:text-white"
          aria-label="Scroll to about section"
        >
          <span className="text-[10px] font-medium uppercase tracking-widest">Explore</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hobbies */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-blue-900">Hobbies</h3>
                <div className="space-y-4">
                  {aboutMeData.hobbies.map((hobby, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                      <hobby.icon className="w-5 h-5 text-blue-600" />
                      <span className="text-blue-900 font-medium">{hobby.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-blue-900">Interests</h3>
                <div className="space-y-3">
                  {aboutMeData.interests.map((interest, index) => (
                    <div key={index} className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                      <span className="text-blue-800 font-medium">{interest}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Favorite Songs */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-blue-900">Favorite Songs</h3>
                <div className="space-y-3">
                  {aboutMeData.favoriteSongs.map((song, index) => (
                    <div key={index} className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                      <span className="text-blue-800 font-medium">{song}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="relative py-16 md:py-20 px-4 md:px-8">
        <div className="relative max-w-5xl mx-auto">
          <header className="text-center mb-10 md:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 mb-2">
              Academic Background
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-3 gradient-text">Education</h2>
            <p className="text-base text-blue-800/65 max-w-xl mx-auto">
              Where I&apos;m studying and what I&apos;m learning
            </p>
          </header>

          {educationTimeline.map((entry) => {
            const year = entry.period.match(/\d{4}/)?.[0] ?? '';

            return (
              <article key={entry.school}>
                {/* Mobile */}
                <div className="md:hidden flex items-start gap-4 mb-5">
                  <div className={`edu-timeline-node shrink-0 ${entry.status === 'In Progress' ? 'timeline-glow' : ''}`}>
                    <img src={entry.logo} alt="" className="h-7 w-7 object-contain" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-blue-200 leading-none">{year}</span>
                    <time className="block mt-1 text-sm font-semibold text-blue-800">{entry.period}</time>
                    {entry.status === 'In Progress' && (
                      <span className="mt-1 block text-xs font-medium text-blue-600">{entry.status}</span>
                    )}
                  </div>
                </div>
                <div className="md:hidden">
                  <EducationEntryContent entry={entry} />
                </div>

                {/* Desktop — compact side-by-side timeline */}
                <div className="hidden md:grid md:grid-cols-[11rem_3rem_1fr] lg:grid-cols-[12rem_3.5rem_1fr] gap-x-4 lg:gap-x-6 items-start">
                  <div className="text-right pt-1">
                    <span className="text-4xl lg:text-5xl font-bold leading-none bg-gradient-to-br from-blue-300 to-blue-100 bg-clip-text text-transparent">
                      {year}
                    </span>
                    <time className="mt-2 block text-sm lg:text-base font-semibold text-blue-900 leading-snug">
                      {entry.period}
                    </time>
                    {entry.status === 'In Progress' && (
                      <span className="mt-2 flex items-center justify-end gap-1.5 text-xs font-semibold uppercase tracking-wide text-blue-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" aria-hidden="true" />
                        {entry.status}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col items-center pt-1">
                    <div className={`edu-timeline-node ${entry.status === 'In Progress' ? 'timeline-glow' : ''}`}>
                      <img
                        src={entry.logo}
                        alt={`${entry.school} logo`}
                        className="h-7 w-7 object-contain"
                      />
                    </div>
                    <div className="mt-2 w-px flex-1 min-h-[2rem] bg-gradient-to-b from-blue-300/70 to-transparent" aria-hidden="true" />
                  </div>

                  <div className="edu-content-accent border-l-0 md:border-l-2 md:border-blue-400/20 md:pl-6 lg:pl-8">
                    <EducationEntryContent entry={entry} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Skills Section - Simplified */}
      <section id="skills" className="py-20 px-4 bg-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Skills
            </h2>
            <p className="text-xl text-blue-800/70 max-w-2xl mx-auto leading-relaxed">
              A comprehensive toolkit of technologies and skills I use to build modern, scalable applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={category.title} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-900">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill}
                        variant="secondary" 
                        className="text-sm bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_0%,transparent_50%)]" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow relative overflow-hidden h-full bg-white/95 backdrop-blur-sm">
                {/* Finalist Badge for Peter Parks */}
                {project.title === "Peter Parks" && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="default" className="gap-1 bg-white text-blue-800 hover:bg-blue-50 font-semibold">
                      <Award className="w-3 h-3" />
                      Finalist
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Project Icon */}
                  {project.icon && (
                    <div className="flex justify-center mb-6">
                      <div className="w-28 h-28 group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={project.icon} 
                          alt={`${project.title} icon`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors text-center">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-blue-900/70 mb-4 text-center">{project.description}</p>
                    
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    
                    {/* Spacer to push button to bottom */}
                    <div className="flex-1"></div>
                    
                    <div className="mt-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full">
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                              {project.title}
                              {project.award && (
                                <Badge variant="default" className="gap-1">
                                  <Award className="w-3 h-3" />
                                  Finalist
                                </Badge>
                              )}
                            </DialogTitle>
                            <DialogDescription>
                              Detailed project information and features
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-medium mb-2">Project Description:</h4>
                              <p className="text-blue-900/80">{project.details}</p>
                            </div>
                            
                            {project.features && (
                              <div>
                                <h4 className="font-medium mb-2">Key Features:</h4>
                                <ul className="space-y-1">
                                  {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <Star className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-blue-900/80">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            <div>
                              <h4 className="font-medium mb-2">Technologies Used:</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                  <Badge key={tech} variant="secondary">{tech}</Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {project.github && (
                                <Button asChild variant="outline" size="sm" className="gap-2">
                                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4" />
                                    GitHub
                                  </a>
                                </Button>
                              )}
                              {project.live && (
                                <Button asChild size="sm" className="gap-2">
                                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4" />
                                    Live Demo
                                  </a>
                                </Button>
                              )}
                              {project.devpost && (
                                <Button asChild variant="outline" size="sm" className="gap-2">
                                  <a href={project.devpost} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4" />
                                    DevPost
                                  </a>
                                </Button>
                              )}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((job, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden bg-white border border-blue-100 shadow-sm">
                      <img 
                        src={job.logo} 
                        alt={`${job.company} logo`}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{job.company}</h3>
                      <p className="text-lg text-blue-600 mb-1">{job.role}</p>
                      <p className="text-sm text-blue-800/60 mb-2">{job.location}</p>
                      <div className="flex items-center gap-2 text-blue-800/60 mb-4">
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </div>
                      
                      <div className="space-y-4">
                        <ul className="space-y-2">
                          {job.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-blue-900/80">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div>
                          <h4 className="font-medium mb-2">Skills Developed:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-sm px-3 py-1 border-blue-200 text-blue-800">{skill}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Let's Connect
          </h2>
          
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-200 shadow-lg object-cover"
            />
          </div>
          
          <p className="text-lg text-blue-800/70 mb-8">
            I'm always interested in new opportunities, collaborations, and innovative projects!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-blue-700 text-white hover:bg-blue-800">
              <a href="mailto:ngshanbhag@scu.edu">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </Button>
            <Button asChild size="lg" className="gap-2 bg-blue-600 text-white hover:bg-blue-700">
              <a href="https://www.linkedin.com/in/nikash-shanbhag-a05931250/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-blue-300 text-blue-800 hover:bg-blue-50">
              <a href="https://github.com/nikashs26" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          className="fixed bottom-6 right-6 rounded-full w-12 h-12 shadow-lg z-50 bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default Index;

