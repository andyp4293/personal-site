import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig, motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  ChevronRight,
  Code2,
  Download,
  Dumbbell,
  Github,
  GraduationCap,
  HeartPulse,
  Linkedin,
  Mail,
  MessageSquareText,
  MoveRight,
  PhoneCall,
  Rocket,
  SquareChartGantt,
  TerminalSquare,
  TrendingUp,
  Users,
} from "lucide-react";
import "./styles.css";

const links = {
  email: "mailto:andyp4293@gmail.com",
  linkedin: "https://www.linkedin.com/in/andyp4293/",
  github: "https://www.github.com/andyp4293",
  resume: "/Andy_Pham_Resume.pdf",
};

const metrics = [
  {
    value: "11",
    label: "businesses onboarded",
    detail: "Clientific launched with active in-person service operators and real customer data.",
  },
  {
    value: "49%",
    label: "appointments captured by AI",
    detail: "Voice and SMS automation handles booking, rescheduling, cancellations, and transfers.",
  },
  {
    value: "70k+",
    label: "students reached",
    detail: "ScarletWell brought personalized wellness resources into the myRutgers ecosystem.",
  },
  {
    value: "10+",
    label: "incidents resolved weekly",
    detail: "Same-day production support across multiple internal business applications.",
  },
];

const personalNotes = [
  {
    label: "Currently",
    title: "Software Engineer",
    detail: "Con Edison via Cognizant, supporting multiple internal business applications.",
    icon: Building2,
  },
  {
    label: "Building",
    title: "Clientific",
    detail: "Founder-led product for in-person service businesses.",
    icon: Rocket,
  },
  {
    label: "Background",
    title: "Rutgers ECE",
    detail: "Electrical & Computer Engineering, Honors Academy, Dean's List.",
    icon: GraduationCap,
  },
];

const experiences = [
  {
    company: "Con Edison via Cognizant",
    role: "Software Engineer",
    time: "Jul 2025 to Present",
    place: "Manhattan, NY",
    icon: Building2,
    accent: "grid",
    summary:
      "I work on internal business applications where production support, modernization, and reliability matter.",
    points: [
      "Migrated EHS Design Review from Angular 8 to Angular 21 for thousands of internal employees.",
      "Support and maintain 6-10 Azure-hosted internal business applications with same-day incident turnaround.",
      "Develop RESTful APIs with ASP.NET, .NET Core, and C# across enterprise utility systems.",
    ],
  },
  {
    company: "Clientific",
    role: "Founder & Software Engineer",
    time: "Feb 2026 to Present",
    place: "Remote",
    icon: Rocket,
    accent: "warm",
    summary:
      "Clientific grew out of my family's service-business background and the opportunity I saw in an underdeveloped operational space.",
    points: [
      "Built a full-stack SaaS platform for in-person service businesses across web and native iOS.",
      "Built bilingual voice and SMS reception using Vapi, GPT-4.1, and Twilio.",
      "Architected CRM, scheduling, check-in, referrals, analytics, Stripe Connect, and RevenueCat workflows.",
    ],
  },
  {
    company: "ScarletWell",
    role: "Software Engineer",
    time: "Oct 2024 to Sep 2025",
    place: "New Brunswick, NJ",
    icon: Users,
    accent: "green",
    summary:
      "ScarletWell brought mobile wellness software into a university environment with a large student audience.",
    points: [
      "Delivered a React Native and TypeScript wellness application for the myRutgers website.",
      "Helped students discover personalized resources at Rutgers scale.",
    ],
  },
  {
    company: "Bunchful Enterprise",
    role: "Full-Stack Software Engineering Intern",
    time: "Oct 2024 to Dec 2024",
    place: "New York, NY",
    icon: BriefcaseBusiness,
    accent: "blue",
    summary: "A focused web rebuild internship centered on usability, responsiveness, and navigation.",
    points: [
      "Rebuilt the company website with Next.js, React, Tailwind CSS, and Firebase.",
      "Improved functionality, user experience, responsiveness, and site navigation.",
    ],
  },
  {
    company: "DAQ Electronics",
    role: "Software Engineering Intern",
    time: "Sep 2024 to Nov 2024",
    place: "Piscataway, NJ",
    icon: BrainCircuit,
    accent: "violet",
    summary: "AI chatbot product work for customer support automation.",
    points: [
      "Developed a React.js support chatbot with OpenAI integration to automate common support workflows.",
      "Helped reduce support time by 40%.",
    ],
  },
  {
    company: "ECPAT",
    role: "Software Development Intern",
    time: "Jun 2023 to Aug 2023",
    place: "Piscataway, NJ",
    icon: BriefcaseBusiness,
    accent: "blue",
    summary: "Internal web tools and resource workflows for staff operations.",
    points: [
      "Developed responsive internal tools with HTML, CSS, and JavaScript to help staff log and track cases.",
      "Redesigned a resource portal with a modern UI, cutting content update time by 50%.",
    ],
  },
];

const projects = [
  {
    name: "Clientific",
    eyebrow: "Service-business product",
    summary:
      "A product for in-person service businesses that brings scheduling, communication, automation, customer records, and daily operations into one cleaner workflow.",
    stack: ["Next.js", "React Native", "Expo", "PostgreSQL", "Stripe Connect", "Vapi", "Twilio"],
    signal: "Scheduling, communication, automation, and customer workflows",
  },
  {
    name: "PetPal",
    eyebrow: "Senior design",
    summary:
      "My Rutgers senior design project, a smart robotic petcare system that connected a mobile app to Raspberry Pi and Arduino hardware for monitoring, notifications, and remote automation.",
    stack: ["React Native", "TypeScript", "Python", "Raspberry Pi", "Firebase", "Arduino"],
    signal: "6th place across the Rutgers ECE department",
  },
  {
    name: "AestheticScore",
    eyebrow: "AI/ML project",
    summary:
      "An applied machine learning project with a PyTorch model trained on 5,500+ facial images, wrapped in a deployed web app for real-time predictions.",
    stack: ["Angular", "FastAPI", "PyTorch", "AWS EC2", "Python"],
    signal: "97% model accuracy on 5,500+ images",
  },
];

const skillGroups = [
  {
    title: "Product surfaces",
    icon: SquareChartGantt,
    items: ["React", "Next.js", "React Native", "Expo", "Angular", "HTML", "CSS"],
  },
  {
    title: "Systems and APIs",
    icon: TerminalSquare,
    items: ["Node.js", "Express", "ASP.NET", ".NET Core", "C#", "REST APIs", "SQL"],
  },
  {
    title: "AI and data",
    icon: BrainCircuit,
    items: ["GPT-4.1", "Vapi", "Twilio", "PyTorch", "Pandas", "NumPy", "FastAPI"],
  },
  {
    title: "Delivery",
    icon: Boxes,
    items: ["Azure", "AWS", "Firebase", "PostgreSQL", "Git", "Jest", "NUnit"],
  },
];

const beyondWorkSlots = [
  {
    title: "Health & Vitality",
    copy:
      "Strength training, nutrition, longevity, recovery, alternative health, and practices that support long-term resilience and quality of life.",
    tag: "Health research",
    icon: HeartPulse,
    image: "/media/life-stories.webp",
  },
  {
    title: "Markets & Personal Finance",
    copy:
      "Investing in stocks where I see opportunity, learning how money systems work, and building financial discipline over time.",
    tag: "Financial discipline",
    icon: TrendingUp,
    image: "/media/life-places.webp",
  },
  {
    title: "Depth & Consistency",
    copy:
      "I am drawn to pursuits that reward consistency and depth, whether that is training, health research, business, or technical systems.",
    tag: "Long-term standard",
    icon: Dumbbell,
    image: "/media/life-now.webp",
  },
];

function useReveal() {
  const reduceMotion = useReducedMotion();

  return {
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: reduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.22 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  };
}

function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame;
    let width = 0;
    let height = 0;
    let particles = [];

    const palette = [
      "rgba(235, 99, 55, 0.72)",
      "rgba(26, 152, 139, 0.68)",
      "rgba(72, 112, 202, 0.66)",
      "rgba(222, 167, 52, 0.62)",
    ];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = Array.from({ length: width < 700 ? 34 : 62 }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.22,
        r: 1.8 + Math.random() * 3.4,
        color: palette[index % palette.length],
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(width * 0.72, height * 0.3, 0, width * 0.72, height * 0.3, Math.max(width, height));
      gradient.addColorStop(0, "rgba(60, 222, 199, 0.24)");
      gradient.addColorStop(0.42, "rgba(245, 194, 78, 0.14)");
      gradient.addColorStop(1, "rgba(6, 15, 16, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((point, index) => {
        for (let j = index + 1; j < particles.length; j += 1) {
          const next = particles[j];
          const dx = point.x - next.x;
          const dy = point.y - next.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.strokeStyle = `rgba(244, 241, 222, ${0.13 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(next.x, next.y);
            ctx.stroke();
          }
        }
      });

      particles.forEach((point) => {
        ctx.fillStyle = point.color;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2);
        ctx.fill();

        if (!media.matches) {
          point.x += point.vx;
          point.y += point.vy;
          if (point.x < -20) point.x = width + 20;
          if (point.x > width + 20) point.x = -20;
          if (point.y < -20) point.y = height + 20;
          if (point.y > height + 20) point.y = -20;
        }
      });

      if (!media.matches) {
        animationFrame = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas className="hero-canvas" ref={canvasRef} aria-hidden="true" />;
}

function Nav() {
  const items = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Beyond Work", href: "#beyond-work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="site-nav">
      <a className="brand-mark" href="#top" aria-label="Andy Pham home">
        <span>AP</span>
      </a>
      <nav aria-label="Primary navigation">
        {items.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav-action" href={links.email}>
        <Mail size={17} aria-hidden="true" />
        <span>Contact</span>
      </a>
    </header>
  );
}

function PersonalCard() {
  return (
    <motion.div
      className="personal-card"
      initial={{ opacity: 0, x: 28, rotate: 1.5 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Andy Pham profile snapshot"
    >
      <div className="profile-topline">
        <div className="portrait-mark">
          <span>AP</span>
        </div>
        <div>
          <p>Andy Pham</p>
          <strong>Software Engineer & Founder</strong>
          <span>New York / New Jersey</span>
        </div>
      </div>
      <div className="profile-note">
        <MessageSquareText size={22} aria-hidden="true" />
        <p>
          I tend to take things seriously when they matter to me. I like practical problems, real constraints, and
          work that rewards resourcefulness, discipline, and follow-through.
        </p>
      </div>
      <div className="profile-list">
        {personalNotes.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title}>
              <Icon size={20} aria-hidden="true" />
              <div>
                <span>{item.label}</span>
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="profile-footer">
        <div>
          <CalendarCheck size={18} aria-hidden="true" />
          <span>Open to software engineering opportunities, business conversations, and useful projects.</span>
        </div>
        <a href={links.linkedin}>
          linkedin.com/in/andyp4293
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <HeroCanvas />
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Andy Pham / New York & New Jersey
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            Hi, I'm Andy Pham.
          </motion.h1>
          <motion.p
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            I'm a software engineer at Con Edison via Cognizant and the founder of Clientific. I build practical
            software across internal business applications, service-business operations, AI reception, mobile products,
            and the real workflows where good engineering has to hold up.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <a className="button button-primary" href="#about">
              <span>Meet Andy</span>
              <MoveRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href={links.linkedin}>
              <Linkedin size={18} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <a className="button button-secondary" href={links.resume}>
              <Download size={18} aria-hidden="true" />
              <span>Resume</span>
            </a>
          </motion.div>
          <motion.div
            className="hero-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.48 }}
          >
            <a href={links.linkedin}>
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a href={links.github}>
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a href={links.email}>
              <Mail size={18} aria-hidden="true" />
              Email
            </a>
          </motion.div>
        </div>
        <PersonalCard />
      </div>
      <motion.div
        className="hero-proof-strip"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <span>01</span>
          <strong>Con Edison via Cognizant</strong>
          <p>Internal business applications, production support, Azure-hosted systems, Angular modernization.</p>
        </div>
        <div>
          <span>02</span>
          <strong>Clientific founder</strong>
          <p>A founder-built product for in-person service businesses, shaped by family service-business roots.</p>
        </div>
        <div>
          <span>03</span>
          <strong>Product range</strong>
          <p>React Native, Next.js, .NET APIs, PyTorch, Firebase, AWS, Azure, and senior-design hardware work.</p>
        </div>
      </motion.div>
    </section>
  );
}

function AboutIntro() {
  const reveal = useReveal();

  return (
    <section className="section about-section" id="about">
      <motion.div className="about-layout" {...reveal}>
        <div className="about-nameplate">
          <p className="eyebrow">About Andy</p>
          <h2>Resourceful, disciplined, always building forward.</h2>
          <a href={links.linkedin}>
            View LinkedIn profile
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="about-copy">
          <p>
            I am resourceful, disciplined, and self-directed. I work hard, learn fast, and I am not comfortable staying
            stagnant. At Con Edison via Cognizant, that shows up through production support, modernization work, and
            backend/API development across multiple internal business applications.
          </p>
          <p>
            Clientific comes from a more personal place. My family has a background in service businesses, and I saw
            how many in-person operators still rely on outdated tools. I built it to make scheduling, communication,
            automation, and customer workflows easier to manage.
          </p>
          <div className="about-badges" aria-label="Andy Pham profile tags">
            <span>Rutgers ECE</span>
            <span>Founder</span>
            <span>Enterprise software</span>
            <span>Service-business products</span>
            <span>Mobile apps</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  const reveal = useReveal();

  return (
    <motion.div className="section-heading" {...reveal}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </motion.div>
  );
}

function ImpactLedger() {
  const reveal = useReveal();

  return (
    <section className="section impact-section" id="work">
      <SectionHeading eyebrow="Work at a glance" title="A few real things I can point to">
        Behind the intro is a mix of enterprise support work, founder-led product building, campus-scale mobile
        development, AI/ML projects, and hardware-connected software.
      </SectionHeading>
      <motion.div className="impact-ledger" {...reveal}>
        {metrics.map((metric, index) => (
          <motion.article
            className="impact-row"
            key={metric.label}
            whileHover={{ x: 8 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            <span className="impact-index">{String(index + 1).padStart(2, "0")}</span>
            <strong>{metric.value}</strong>
            <div>
              <h3>{metric.label}</h3>
              <p>{metric.detail}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function Flagship() {
  const reveal = useReveal();

  return (
    <section className="flagship-band">
      <div className="flagship-shell">
        <motion.div className="flagship-copy" {...reveal}>
          <p className="eyebrow">Founder project</p>
          <h2>Clientific is one of my most complete builds.</h2>
          <p>
            Clientific is a full-stack product for in-person service businesses. It brings together AI phone reception,
            SMS automation, CRM, scheduling, native iOS workflows, referrals, deals, staff calendars, and analytics,
            while forcing me to think through users, operations, automation, payments, mobile workflows, and everyday
            service-business constraints.
          </p>
          <div className="flagship-tags">
            {["GPT-4.1", "Vapi", "Twilio", "Next.js", "Expo", "Stripe Connect", "RevenueCat"].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </motion.div>
        <motion.div className="product-frame" {...reveal} transition={{ ...reveal.transition, delay: 0.08 }}>
          <div className="phone-rail" aria-label="Clientific product preview">
            <div className="phone-top">
              <span />
              <span />
            </div>
            <div className="call-card">
              <PhoneCall size={20} aria-hidden="true" />
              <div>
                <strong>Incoming call handled</strong>
                <span>Spanish / appointment request / 2:30 PM</span>
              </div>
            </div>
            <div className="booking-stack">
              <div>
                <span>Appointments via AI</span>
                <strong>49%</strong>
              </div>
              <div>
                <span>Self-serve + AI</span>
                <strong>63%</strong>
              </div>
            </div>
            <div className="timeline-mini">
              <span style={{ "--size": "64%" }} />
              <span style={{ "--size": "42%" }} />
              <span style={{ "--size": "78%" }} />
            </div>
          </div>
          <div className="dashboard-slice" aria-hidden="true">
            <div className="slice-header">
              <span>Service operations</span>
              <BadgeCheck size={17} />
            </div>
            <div className="slice-grid">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Experience() {
  const reveal = useReveal();

  return (
    <section className="section experience-section">
      <SectionHeading eyebrow="Where I've worked" title="The path so far">
        A hybrid view of the work: one plain-English line for the context, then the proof underneath.
      </SectionHeading>
      <div className="timeline">
        {experiences.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              className={`timeline-item accent-${item.accent}`}
              key={item.company}
              {...reveal}
              transition={{ ...reveal.transition, delay: index * 0.06 }}
            >
              <div className="timeline-pin">
                <Icon size={22} aria-hidden="true" />
              </div>
              <div className="timeline-body">
                <div className="timeline-top">
                  <div>
                    <p>{item.time}</p>
                    <h3>{item.company}</h3>
                    <span>{item.role}</span>
                  </div>
                  <small>{item.place}</small>
                </div>
                {item.summary && <p className="timeline-summary">{item.summary}</p>}
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function Projects() {
  const reveal = useReveal();

  return (
    <section className="section projects-section" id="projects">
      <SectionHeading eyebrow="Things I've built" title="A rounded portfolio, not just one lane">
        Commercial SaaS, hardware-connected mobile software, and applied machine learning, because the fun part is
        learning enough of the stack to make the whole thing real.
      </SectionHeading>
      <div className="project-showcase">
        {projects.map((project, index) => (
          <motion.article
            className={`project-panel project-${index + 1}`}
            key={project.name}
            {...reveal}
            transition={{ ...reveal.transition, delay: index * 0.07 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-visual" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <p className="project-eyebrow">{project.eyebrow}</p>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <div className="project-signal">
              <Code2 size={18} aria-hidden="true" />
              <span>{project.signal}</span>
            </div>
            <div className="stack-list">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const reveal = useReveal();

  return (
    <section className="skills-band" id="skills">
      <div className="skills-shell">
        <SectionHeading eyebrow="How I build" title="The toolkit I reach for">
          Frontend polish, backend systems, AI workflows, cloud delivery, testing discipline, and enough hardware
          curiosity to make software touch the real world.
        </SectionHeading>
        <div className="skill-board">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                className="skill-cluster"
                key={group.title}
                {...reveal}
                transition={{ ...reveal.transition, delay: index * 0.05 }}
              >
                <div className="cluster-title">
                  <Icon size={22} aria-hidden="true" />
                  <h3>{group.title}</h3>
                </div>
                <div>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BeyondWork() {
  const reveal = useReveal();

  return (
    <section className="section life-section" id="beyond-work">
      <SectionHeading eyebrow="Beyond Work" title="Interests that keep me grounded">
        The personal side is about health, financial discipline, and pursuits that reward consistency over time, not a
        separate lifestyle brand.
      </SectionHeading>
      <div className="life-grid">
        {beyondWorkSlots.map((slot, index) => {
          const Icon = slot.icon;
          return (
            <motion.article
              className="life-tile"
              key={slot.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: index * 0.08 }}
            >
              <img src={slot.image} alt="" loading="lazy" />
              <div className="life-tile-copy">
                <Icon size={24} aria-hidden="true" />
                <h3>{slot.title}</h3>
                <p>{slot.copy}</p>
                <span>{slot.tag}</span>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function Education() {
  const reveal = useReveal();

  return (
    <section className="education-band">
      <motion.div className="education-shell" {...reveal}>
        <GraduationCap size={28} aria-hidden="true" />
        <div>
          <p className="eyebrow">Education</p>
          <h2>Rutgers University</h2>
          <p>
            B.S. in Electrical & Computer Engineering, Engineering Honors Academy, Dean's List.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function Contact() {
  const reveal = useReveal();

  return (
    <section className="contact-section" id="contact">
      <motion.div className="contact-shell" {...reveal}>
        <p className="eyebrow">Contact</p>
        <h2>Say hi, compare ideas, or send an opportunity.</h2>
        <p>
          I'm open to software engineering opportunities, business conversations, and projects where I can learn,
          contribute, and build something useful.
        </p>
        <div className="contact-actions">
          <a className="button button-primary" href={links.email}>
            <Mail size={18} aria-hidden="true" />
            <span>Email Andy</span>
          </a>
          <a className="button button-secondary" href={links.linkedin}>
            <Linkedin size={18} aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <a className="button button-secondary" href={links.github}>
            <Github size={18} aria-hidden="true" />
            <span>GitHub</span>
          </a>
        </div>
      </motion.div>
      <footer>
        <span>Andy Pham</span>
        <a href="#top">
          Back to top
          <ChevronRight size={16} aria-hidden="true" />
        </a>
      </footer>
    </section>
  );
}

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    window.requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView();
    });
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <AboutIntro />
        <ImpactLedger />
        <Flagship />
        <Experience />
        <Projects />
        <Skills />
        <BeyondWork />
        <Education />
        <Contact />
      </main>
    </MotionConfig>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
