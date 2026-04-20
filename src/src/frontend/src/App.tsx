import {
  ChevronDown,
  Clock,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

// ─── Scroll helper ──────────────────────────────────────────────────────────
const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

// ─── Fade-up animation variant ──────────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stagger: any = { show: { transition: { staggerChildren: 0.1 } } };

// ─── NAV LINKS ───────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Dining", id: "dining" },
  { label: "Menu", id: "menu" },
  { label: "Offers", id: "offers" },
  { label: "Gallery", id: "gallery" },
  { label: "Branches", id: "branches" },
  { label: "Decorations", id: "decorations" },
  { label: "Social", id: "social" },
  { label: "Reviews", id: "reviews" },
  { label: "Contact", id: "contact" },
];

// ─── MENU DATA ───────────────────────────────────────────────────────────────
// ─── REVIEWS DATA ────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    name: "Rakesh Malviya",
    rating: 5,
    date: "Jan 18, 2026",
    comment:
      "Bahut accha khana mila yahan. Paneer tikka bilkul fresh tha, aur service bhi fast thi. Mandsaur mein aisa restaurant chahiye tha. Zaroor aana chahiye!!",
  },
  {
    name: "Sunita Rathore",
    rating: 4,
    date: "Jan 25, 2026",
    comment:
      "Cheese grilled sandwich bachon ko bahut pasand aayi. Jagah bhi saaf suthra hai. Price thoda aur kam hota to aur bhi badhiya hota, but overall kaafi satisfying experience raha.",
  },
  {
    name: "Ankit Chouhan",
    rating: 5,
    date: "Feb 3, 2026",
    comment:
      "Masala chaap aur afghani chaap dono try kiye — dono zabardast the! Sweet corn soup bhi ghar jaisi thi. Mandsaur mein best veg option hai abhi.",
  },
  {
    name: "Pooja Dangi",
    rating: 4,
    date: "Feb 11, 2026",
    comment:
      "Dahi puri aur cafe special sandwich dono fresh the. Family ke saath weekend mein aana kaafi achha laga. Thoda wait karna pada par khana worth it tha.",
  },
  {
    name: "Nikhil Patidar",
    rating: 5,
    date: "Feb 19, 2026",
    comment:
      "Pehli baar gaya tha, mushroom tikka ne dil jeet liya. Manchow soup bhi garam garam mili. Staff bhi friendly hai. Doston ko zaroor recommend karunga!",
  },
  {
    name: "Kavita Sharma",
    rating: 4,
    date: "Feb 28, 2026",
    comment:
      "Pure veg restaurant jo genuinely tasty khana de — yahi toh chahiye tha. Crispy corn chaat ekdum khatarnak hai. Ek baar aaye aur dobara aane ka mann karne laga.",
  },
  {
    name: "Deepak Patidar",
    rating: 5,
    date: "Mar 5, 2026",
    comment:
      "Smiley mein khana khaya pehli baar — bilkul expectation se zyada nikla. Tandoori roti aur seekh kebab ka combination perfect tha. New collector road pe ek gem hai yeh jagah.",
  },
  {
    name: "Priya Verma",
    rating: 4,
    date: "Mar 10, 2026",
    comment:
      "Ghar jaisa swad milta hai yahan. Tomato soup aur grilled sandwich ka combo sardi mein bahut hi badiya laga. Sitting arrangement bhi comfortable hai.",
  },
];

const AVATAR_COLORS = [
  "bg-green-100 text-green-700",
  "bg-green-200 text-green-800",
  "bg-blue-200 text-blue-800",
  "bg-rose-200 text-rose-800",
  "bg-green-200 text-green-800",
  "bg-teal-200 text-teal-800",
  "bg-orange-200 text-orange-800",
  "bg-indigo-200 text-indigo-800",
];

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const textColor = "text-white";
  const _mutedColor = "text-white/80";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-emerald-800/95 backdrop-blur-md shadow-lg border-b border-emerald-700"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 shrink-0 bg-white rounded-full p-1 overflow-hidden w-20 h-20"
        >
          <img
            src="/assets/uploads/image-1.png"
            alt="Smiley Home Restaurant Logo"
            className="h-full w-full object-contain"
          />
        </button>

        {/* Desktop nav links */}
        <div className="hidden xl:flex items-center gap-1 flex-1 justify-center">
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link.id}
              data-ocid="nav.link"
              onClick={() => scrollTo(link.id)}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg hover:bg-white/10 hover:text-amber-300 transition-colors ${textColor}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <a
            href="tel:+919981716485"
            className={`flex items-center gap-1.5 text-sm font-medium ${textColor} hover:opacity-80 transition-opacity`}
          >
            <Phone className="h-4 w-4" />
            +91 99817 16485
          </a>
          <a
            href="https://wa.me/919981716485"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.primary_button"
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
          >
            <SiWhatsapp className="h-4 w-4" />
            Order
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          data-ocid="nav.toggle"
          className={`xl:hidden p-2 rounded-lg ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-emerald-800/95 backdrop-blur-md border-b border-emerald-700"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  data-ocid="nav.link"
                  onPointerDown={(e) => {
                    e.preventDefault();
                    scrollTo(link.id);
                    setMobileOpen(false);
                  }}
                  style={{ touchAction: "manipulation" }}
                  className="text-left px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="border-t border-border mt-2 pt-2 flex flex-col gap-2">
                <a
                  href="tel:+919981716485"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  +91 99817 16485
                </a>
                <a
                  href="https://wa.me/919981716485"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="nav.primary_button"
                  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold w-fit"
                >
                  <SiWhatsapp className="h-4 w-4" />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function HeroSection() {
  const HERO_IMAGES = [
    "/assets/uploads/IMG_6278-4.jpeg",
    "/assets/uploads/IMG_1068-1.jpeg",
    "/assets/uploads/IMG_1063-2-2.jpeg",
    "/assets/uploads/IMG_1063-3-3.jpeg",
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => {
        setPrevSlide(prev);
        return (prev + 1) % HERO_IMAGES.length;
      });
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (idx: number) => {
    setPrevSlide(activeSlide);
    setActiveSlide(idx);
  };

  const DOTS = [
    { id: "d1", size: 6, top: "15%", left: "10%", anim: "float-1" },
    { id: "d2", size: 8, top: "25%", left: "80%", anim: "float-2" },
    { id: "d3", size: 4, top: "60%", left: "5%", anim: "float-3" },
    { id: "d4", size: 10, top: "70%", left: "88%", anim: "float-1" },
    { id: "d5", size: 5, top: "40%", left: "92%", anim: "float-2" },
    { id: "d6", size: 7, top: "80%", left: "20%", anim: "float-3" },
    { id: "d7", size: 4, top: "10%", left: "50%", anim: "float-1" },
    { id: "d8", size: 6, top: "50%", left: "70%", anim: "float-2" },
    { id: "d9", size: 8, top: "35%", left: "30%", anim: "float-3" },
    { id: "d10", size: 5, top: "65%", left: "55%", anim: "float-1" },
    { id: "d11", size: 9, top: "85%", left: "75%", anim: "float-2" },
    { id: "d12", size: 4, top: "20%", left: "65%", anim: "float-3" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Image slideshow background */}
      {HERO_IMAGES.map((src, i) => {
        const isActive = i === activeSlide;
        const isPrev = i === prevSlide;
        let transform = "translateX(100%)";
        if (isActive) transform = "translateX(0%)";
        else if (isPrev) transform = "translateX(-100%)";
        return (
          <div
            key={src}
            className="absolute inset-0"
            style={{
              opacity: isActive ? 1 : isPrev ? 0 : 0,
              transform,
              transition:
                "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
              zIndex: isActive ? 1 : isPrev ? 0 : 0,
            }}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover object-center"
              style={{
                animation: isActive
                  ? "ken-burns-dramatic 9s ease-in-out forwards"
                  : "none",
              }}
            />
          </div>
        );
      })}
      {/* Dark gradient overlay — bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80 z-[2]" />

      {/* Floating dots */}
      {DOTS.map((dot) => (
        <div
          key={dot.id}
          className={`absolute rounded-full bg-white/20 ${dot.anim} z-[3]`}
          style={{
            width: dot.size,
            height: dot.size,
            top: dot.top,
            left: dot.left,
          }}
        />
      ))}

      {/* Center content */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm mb-6"
        >
          🌿 First Boho Café in Mandsaur
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl sm:text-7xl font-bold text-white leading-tight mb-4"
        >
          Smiley Home Restaurant
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-amber-300 text-lg sm:text-xl font-medium mb-3"
        >
          100% Pure Vegetarian · Mandsaur, MP
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-white/80 text-base sm:text-lg max-w-xl mx-auto mb-8"
        >
          The first Boho Café in Mandsaur — cozy, authentic, and unforgettable
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            type="button"
            data-ocid="hero.primary_button"
            onClick={() => scrollTo("menu")}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold text-base transition-colors"
          >
            View Menu
          </button>
          <a
            href="https://wa.me/919981716485"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="hero.secondary_button"
            className="flex items-center justify-center gap-2 bg-green-400 hover:bg-green-500 text-white px-8 py-3 rounded-full font-semibold text-base transition-colors"
          >
            <SiWhatsapp className="h-5 w-5" />
            Order on WhatsApp
          </a>
        </motion.div>
      </motion.div>

      {/* Navigation dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2 items-center">
        {HERO_IMAGES.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300 rounded-full border-2 focus:outline-none"
            style={{
              width: i === activeSlide ? 24 : 10,
              height: 10,
              background:
                i === activeSlide ? "#F59E0B" : "rgba(255,255,255,0.45)",
              borderColor: i === activeSlide ? "#F59E0B" : "transparent",
            }}
          />
        ))}
      </div>

      {/* Bouncing chevron */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="h-8 w-8 text-white/60" />
      </motion.div>
    </section>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="section-warm py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-amber-600 uppercase tracking-widest text-sm font-semibold mb-3"
            >
              ✦ Our Story
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl lg:text-5xl font-bold text-emerald-700 mb-5 leading-tight"
            >
              A Café Born from <span className="text-gradient">Passion</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-base mb-4"
            >
              Welcome to Smiley Home Restaurant – the first Boho Cafe in
              Mandsaur.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-base mb-7"
            >
              We created this cafe to bring a cozy bohemian vibe where people
              can relax, celebrate, and enjoy delicious food. Our cafe is
              perfect for birthdays, anniversaries, surprise celebrations, and
              romantic dinners. Every corner of our space is designed to create
              memorable experiences.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-7">
              {[
                {
                  emoji: "🎂",
                  title: "Celebrations",
                  sub: "Birthdays & Anniversaries",
                },
                { emoji: "🌿", title: "100% Veg", sub: "Pure Vegetarian" },
                {
                  emoji: "✨",
                  title: "Boho Ambiance",
                  sub: "Unique Atmosphere",
                },
              ].map((chip) => (
                <div
                  key={chip.title}
                  className="bg-card border border-border rounded-2xl px-4 py-3 shadow-xs flex items-center gap-2"
                >
                  <span className="text-xl">{chip.emoji}</span>
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      {chip.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {chip.sub}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp}>
              <a
                href="https://wa.me/919981716485"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="about.primary_button"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                <SiWhatsapp className="h-5 w-5" />
                Order on WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Right: photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl border-4 border-green-300 shadow-warm-lg h-80 lg:h-[480px] overflow-hidden">
              <img
                src="/assets/uploads/IMG_6278-4.jpeg"
                alt="Smiley Home Restaurant"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 left-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-warm flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <div>
                <div className="font-semibold text-sm text-foreground">
                  Pure Veg
                </div>
                <div className="text-xs text-muted-foreground">
                  First Boho Experience in Mandsaur
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── DINING ──────────────────────────────────────────────────────────────────
function DiningSection() {
  const cards = [
    {
      icon: "🌿",
      title: "Open Air Rooftop Dining",
      desc: "Enjoy your meal under the open sky at our rooftop restaurant. Fresh air, beautiful ambiance, and delicious food — perfect for relaxed evenings with family and friends.",
      tags: ["Open Air", "Rooftop", "Evening Dining"],
      img: "/assets/uploads/WhatsApp-Image-2026-01-28-at-3.49.10-PM-2.jpeg",
      rotate: false,
    },
    {
      icon: "🏮",
      title: "Indoor Theme Dining",
      desc: "Immerse yourself in our beautifully themed indoor spaces. Boho-inspired décor, soft lighting, and a cozy atmosphere that makes every meal feel special.",
      tags: ["Boho Décor", "AC Seating", "Theme Lighting"],
      img: "/assets/uploads/IMG_2129-1.jpeg",
      rotate: true,
    },
    {
      icon: "🎂",
      title: "Private Celebration Dining",
      desc: "Make your special moments unforgettable with our private dining setups. Perfect for birthdays, anniversaries, and surprise parties with personalized decoration.",
      tags: ["Birthday", "Anniversary", "Private Setup"],
      img: "/assets/uploads/WhatsApp-Image-2026-01-28-at-3.49.09-PM-2--3.jpeg",
      rotate: false,
    },
  ];

  return (
    <section id="dining" className="section-warm py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeUp}
            className="text-emerald-700 uppercase tracking-widest text-sm font-semibold mb-3"
          >
            ✦ Dining Experiences
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl lg:text-5xl font-bold text-amber-600 mb-4"
          >
            Every Visit, A New Experience
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Discover our unique dining spaces — from open rooftop to cozy boho
            interiors
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              data-ocid={`dining.item.${i + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="bg-card border border-border rounded-3xl overflow-hidden shadow-xs hover:shadow-warm-lg transition-all hover:-translate-y-1"
            >
              {card.rotate ? (
                <div className="h-48 overflow-hidden flex items-center justify-center">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    style={{ transform: "rotate(90deg) scale(1.8)" }}
                  />
                </div>
              ) : (
                <div className="h-48 overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-5">
                <h3 className="font-display font-bold text-xl text-emerald-700 mb-2">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {card.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/919981716485?text=Hi!%20I'd%20like%20to%20book%20a%20dining%20experience%20at%20Smiley%20Home%20Restaurant."
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="dining.primary_button"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            📅 Book a Dining Experience
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── MENU ────────────────────────────────────────────────────────────────────
function MenuSection() {
  const menuSections = [
    {
      title: "Welcome Drinks",
      emoji: "🍹",
      image: "/assets/generated/menu-welcome-drinks.dim_600x400.jpg",
      items: [
        { name: "Mint Mojito", price: "₹150" },
        { name: "Watermelon Mojito", price: "₹160" },
        { name: "Iced Tea", price: "₹170" },
        { name: "Kiwi Mojito", price: "₹180" },
        { name: "Kala Khatta", price: "₹190" },
        { name: "Green Apple Mojito", price: "₹200" },
        { name: "Spicy Guava", price: "₹200" },
        { name: "Traditional", price: "₹250" },
        { name: "One More Time", price: "₹250" },
      ],
    },
    {
      title: "Cold Drink",
      emoji: "🥤",
      image: "/assets/generated/menu-cold-drinks.dim_600x400.jpg",
      items: [
        { name: "Coke", price: "₹60" },
        { name: "Thums Up", price: "₹60" },
        { name: "Sprite", price: "₹60" },
        { name: "Mazza", price: "₹60" },
        { name: "Butters Milk", price: null },
        { name: "Nimbu Pani", price: "₹60" },
        { name: "Lassi", price: "₹100" },
        { name: "Mineral Water", price: "₹20" },
      ],
    },
    {
      title: "Tea / Coffee",
      emoji: "☕",
      image: "/assets/generated/menu-tea-coffee.dim_600x400.jpg",
      items: [
        { name: "Tea", price: "₹50" },
        { name: "Black Tea", price: "₹60" },
        { name: "Lemon Tea", price: "₹70" },
        { name: "Hot Coffee", price: "₹100" },
        { name: "Black Coffee Hot", price: "₹120" },
        { name: "Black Cold Coffee", price: "₹150" },
        { name: "Cold Coffee with Ice Cream", price: "₹250" },
      ],
    },
    {
      title: "Shakes",
      emoji: "🥤",
      image: "/assets/generated/menu-shakes.dim_600x400.jpg",
      items: [
        { name: "KitKat Shake", price: "₹200" },
        { name: "Chocolate Shake", price: "₹200" },
        { name: "Oreo Shake", price: "₹200" },
        { name: "Banana Shake", price: "₹200" },
        { name: "Cold Pina Colada", price: "₹200" },
        { name: "Strawberry Colada", price: "₹200" },
        { name: "Peanut Punch", price: "₹200" },
        { name: "Nina Punch", price: "₹200" },
        { name: "Cold Coffee", price: "₹200" },
        { name: "Cold Coffee with Ice Cream", price: "₹300" },
      ],
    },
    {
      title: "Starters",
      emoji: "🍽",
      image: "/assets/generated/menu-starters.dim_600x400.jpg",
      items: [
        { name: "Pav Bhaji", price: "₹150" },
        { name: "Garlic Bread", price: "₹200" },
        { name: "Noodles", price: "₹200" },
        { name: "Hakka Noodles", price: "₹200" },
        { name: "Schezwan Noodles", price: "₹200" },
        { name: "Kolhapuri Noodles", price: "₹200" },
        { name: "Chowmein", price: "₹200" },
        { name: "Manchurian Dry", price: "₹200" },
        { name: "Manchurian Semi Gravy", price: "₹200" },
        { name: "Manchurian Gravy", price: "₹200" },
        { name: "Veg Maggi", price: "₹200" },
        { name: "Chinese Bhel", price: "₹250" },
        { name: "American Chopsuey", price: "₹250" },
        { name: "Paneer Chilli Dry", price: "₹300" },
        { name: "Paneer Chilli Gravy", price: "₹300" },
        { name: "Veg Crispy", price: "₹300" },
        { name: "Veg Crispy Corn", price: "₹300" },
        { name: "Veg Lollipop", price: "₹300" },
        { name: "Paneer 65", price: "₹350" },
        { name: "Paneer Tikka Dry", price: "₹350" },
        { name: "Hara Garlic Tikka", price: "₹350" },
      ],
    },
    {
      title: "Sandwich / Fries",
      emoji: "🥪",
      image: "/assets/generated/menu-sandwich-fries.dim_600x400.jpg",
      items: [
        { name: "Vegetable Cheese Sandwich", price: "₹200" },
        { name: "Cheese Sandwich", price: "₹250" },
        { name: "Double Cheese Sandwich", price: "₹300" },
        { name: "French Fries", price: "₹170" },
        { name: "Peri Peri Fries", price: "₹200" },
      ],
    },
    {
      title: "Pizza",
      emoji: "🍕",
      image: "/assets/generated/menu-pizza.dim_600x400.jpg",
      items: [
        { name: "Margherita Pizza (Large)", price: "₹300" },
        { name: "Corn Cheese Pizza (Large)", price: "₹300" },
        { name: "Exotic Vegetable Pizza (Large)", price: "₹350" },
        { name: "Spicy Tandoori Pizza (Large)", price: "₹350" },
        { name: "Mexican Pizza (Large)", price: "₹350" },
        { name: "Italian Pizza (Large)", price: "₹350" },
        { name: "Paneer Tikka Pizza (Large)", price: "₹380" },
      ],
    },
    {
      title: "Pasta",
      emoji: "🍝",
      image: "/assets/generated/menu-pasta.dim_600x400.jpg",
      items: [
        { name: "Red Pasta", price: "₹300" },
        { name: "White Sauce Pasta", price: "₹350" },
        { name: "Pink Sauce Pasta", price: "₹350" },
        { name: "Basil Pesto Pasta", price: "₹350" },
      ],
    },
    {
      title: "Sizzlers",
      emoji: "🔥",
      image: "/assets/generated/menu-sizzlers.dim_600x400.jpg",
      items: [
        { name: "Indian Sizzler", price: "₹550" },
        { name: "China Town", price: "₹550" },
        { name: "Mexican Sizzler", price: "₹600" },
      ],
    },
    {
      title: "Pakode",
      emoji: "🧆",
      image: "/assets/generated/menu-pakode.dim_600x400.jpg",
      items: [
        { name: "Veg Pakode", price: "₹200" },
        { name: "Corn Pakode", price: "₹250" },
        { name: "Paneer Pakode", price: "₹300" },
      ],
    },
    {
      title: "Chaat",
      emoji: "🥗",
      image: "/assets/generated/menu-chaat.dim_600x400.jpg",
      items: [
        { name: "Vegetable Chat", price: "₹300" },
        { name: "Vegetable Peanut Chat", price: "₹350" },
        { name: "Vegetable Paneer Chat", price: "₹400" },
        { name: "Vegetable Paneer Peanut Chat", price: "₹450" },
      ],
    },
    {
      title: "Paneer Main Course",
      emoji: "🧀",
      image: "/assets/generated/menu-paneer.dim_600x400.jpg",
      items: [
        { name: "Palak Paneer", price: "₹250" },
        { name: "Matar Paneer", price: "₹250" },
        { name: "Shahi Paneer", price: "₹250" },
        { name: "Kadai Paneer", price: "₹250" },
        { name: "Paneer Masala", price: "₹250" },
        { name: "Paneer Chatpata", price: "₹250" },
        { name: "Paneer Handi", price: "₹250" },
        { name: "Paneer Butter Masala", price: "₹290" },
        { name: "Paneer Lazeez", price: "₹300" },
        { name: "Paneer Tufani", price: "₹300" },
        { name: "Paneer Angara", price: "₹300" },
        { name: "Paneer Tikka Masala", price: "₹350" },
        { name: "Paneer Afghani Masala", price: "₹370" },
        { name: "Paneer Kali Mirch", price: "₹370" },
        { name: "Paneer Bhurji", price: "₹400" },
        { name: "Kaju Paneer", price: "₹350" },
        { name: "Kaju Curry", price: "₹400" },
        { name: "Kaju Cheese Curry", price: "₹450" },
      ],
    },
    {
      title: "Veg Main Course",
      emoji: "🍛",
      image: "/assets/generated/menu-veg-main.dim_600x400.jpg",
      items: [
        { name: "Aloo Matar Gobhi", price: "₹200" },
        { name: "Mix Veg", price: "₹200" },
        { name: "Aloo Methi", price: "₹200" },
        { name: "Jeera Aloo", price: "₹200" },
        { name: "Palak Garlic", price: "₹200" },
        { name: "Palak Corn", price: "₹200" },
        { name: "Aloo Palak", price: "₹200" },
        { name: "Matar Masala", price: "₹200" },
        { name: "Veg Hyderabadi", price: "₹250" },
        { name: "Chana Masala", price: "₹250" },
        { name: "Veg Kolhapuri", price: "₹250" },
        { name: "Veg Angara", price: "₹250" },
        { name: "Veg Kadai", price: "₹300" },
        { name: "Veg Handi", price: "₹300" },
        { name: "Veg Makhanwala", price: "₹320" },
        { name: "Veg Kofta", price: "₹350" },
        { name: "Malai Kofta (Sweet)", price: "₹350" },
        { name: "Methi Mutter Malai", price: "₹350" },
      ],
    },
    {
      title: "Breads",
      emoji: "🍞",
      image: "/assets/generated/menu-breads.dim_600x400.jpg",
      items: [
        { name: "Plain Tandoori Roti", price: "₹20" },
        { name: "Butter Tandoori Roti", price: "₹30" },
        { name: "Lachha Paratha", price: "₹60" },
        { name: "Kulcha", price: "₹60" },
        { name: "Plain Naan", price: "₹80" },
        { name: "Butter Naan", price: "₹90" },
        { name: "Garlic Naan", price: "₹100" },
        { name: "Cheese Naan", price: "₹130" },
        { name: "Cheese Garlic Naan", price: "₹150" },
        { name: "Cheese Chilli Naan", price: "₹150" },
      ],
    },
    {
      title: "Rice",
      emoji: "🍚",
      image: "/assets/generated/menu-rice.dim_600x400.jpg",
      items: [
        { name: "Plain Rice", price: "₹150" },
        { name: "Jeera Rice", price: "₹200" },
        { name: "Veg Pulao", price: "₹250" },
        { name: "Matar Pulao", price: "₹250" },
        { name: "Veg Biryani", price: "₹300" },
        { name: "Veg Hyderabadi Biryani", price: "₹350" },
        { name: "Veg Fry Rice", price: "₹350" },
        { name: "Schezwan Fry Rice", price: "₹400" },
        { name: "Singapore Fry Rice", price: "₹400" },
        { name: "Manchurian Fry Rice", price: "₹400" },
        { name: "Butter Khichdi", price: "₹300" },
        { name: "Kashmiri Pulao", price: "₹400" },
      ],
    },
    {
      title: "Dal",
      emoji: "🥣",
      image: "/assets/generated/menu-dal.dim_600x400.jpg",
      items: [
        { name: "Dal Fry", price: "₹200" },
        { name: "Dal Tadka", price: "₹200" },
        { name: "Dal Fry Butter", price: "₹200" },
        { name: "Dal Green Chilli", price: "₹200" },
        { name: "Dal Palak", price: "₹200" },
      ],
    },
    {
      title: "Papad",
      emoji: "🫓",
      image: "/assets/generated/menu-papad.dim_600x400.jpg",
      items: [
        { name: "Roasted Papad", price: "₹30" },
        { name: "Fry Papad", price: "₹40" },
        { name: "Masala Papad", price: "₹60" },
        { name: "Roasted Masala Papad", price: "₹60" },
        { name: "Cheese Masala Papad", price: "₹140" },
      ],
    },
    {
      title: "Raita",
      emoji: "🥗",
      image: "/assets/generated/menu-raita.dim_600x400.jpg",
      items: [
        { name: "Vegetable Raita", price: "₹250" },
        { name: "Boondi Raita", price: "₹250" },
        { name: "Pineapple Raita (Sweet)", price: "₹300" },
      ],
    },
    {
      title: "Dessert",
      emoji: "🍨",
      image: "/assets/generated/menu-dessert.dim_600x400.jpg",
      items: [
        { name: "Vanilla Ice Cream", price: "₹100" },
        { name: "Strawberry Ice Cream", price: "₹100" },
        { name: "Chocolate Ice Cream", price: "₹100" },
        { name: "Butterscotch Ice Cream", price: "₹100" },
        { name: "Vanilla Ice Cream with Gulab Jamun", price: "₹200" },
        { name: "Hot Pot Sundae", price: "₹250" },
        { name: "Ice Cream Fry", price: "₹300" },
        { name: "Brownie with Ice Cream", price: "₹300" },
      ],
    },
  ];

  const buffet450Items = [
    "Welcome Drinks",
    "2 Types Starters",
    "Paneer Sabzi",
    "Half Gravy Sabzi / Veg Sabzi",
    "Tandoori Roti / Naan / Lachha Paratha",
    "Boondi / Veg Raita",
    "Dal Tadka",
    "Jeera Rice",
    "Roasted Papad",
    "Green Salad",
    "Sweet (2 Types)",
  ];

  const buffet400Items = [
    "Welcome Drinks",
    "2 Types Starters",
    "Paneer Sabzi",
    "Half Gravy Sabzi / Veg Sabzi",
    "Tandoori Roti / Naan / Lachha Paratha",
    "Boondi / Veg Raita",
    "Dal Tadka",
    "Jeera Rice",
    "Roasted Papad",
    "Green Salad",
    "Sweet (1 Type)",
  ];

  const regularBuffetItems = [
    "5 Starters (Unlimited)",
    "Main Course (Unlimited)",
    "Paneer Sabji",
    "Half Gravy Sabji",
    "Dal Tadka",
    "Tandoori Roti",
    "Naan",
    "Lachha Paratha",
    "Jeera Rice",
    "Boondi / Veg Raita",
    "Roasted Papad",
    "Green Salad",
    "Sweet (1 Type)",
  ];

  const partyBuffet300Items = [
    "Paneer Sabji",
    "Half Gravy Sabji",
    "Dal Tadka",
    "Tandoori Roti",
    "Naan",
    "Lachha Paratha",
    "Jeera Rice",
    "Boondi / Veg Raita",
    "Roasted Papad",
    "Green Salad",
    "Sweet (1 Type)",
  ];

  const partyBuffet350Items = [
    "Welcome Drinks",
    "Starters (1 Type)",
    "Paneer Sabji",
    "Half Gravy Sabji",
    "Veg Sabji",
    "Tandoori Roti",
    "Naan",
    "Lachha Paratha",
    "Dal Tadka",
    "Jeera Rice",
    "Boondi / Veg Raita",
    "Roasted Papad",
    "Green Salad",
    "Sweet (1 Type)",
  ];

  // 0-18 = regular sections, 19 = Special Buffet
  const [activeIndex, setActiveIndex] = useState(0);

  const allTabs = [
    ...menuSections.map((s, i) => ({ label: `${s.emoji} ${s.title}`, idx: i })),
    { label: "🍱 Special Buffet", idx: 19 },
    { label: "🥘 Regular Buffet", idx: 20 },
    { label: "🎉 Party Buffet", idx: 21 },
  ];

  const isBuffet =
    activeIndex === 19 || activeIndex === 20 || activeIndex === 21;
  const activeSection = isBuffet ? null : menuSections[activeIndex];

  return (
    <section
      id="menu"
      style={{
        background:
          "linear-gradient(135deg, #f3e8ff 0%, #ede9fe 50%, #faf5ff 100%)",
      }}
      className="py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-10"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl lg:text-5xl font-bold text-purple-900 mb-3 drop-shadow"
          >
            Our Menu
          </motion.h2>
          <motion.p variants={fadeUp} className="text-purple-600 text-lg">
            Fresh, pure vegetarian food made with love
          </motion.p>
        </motion.div>

        {/* Category chooser pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {allTabs.map((tab) => (
              <button
                key={tab.idx}
                type="button"
                data-ocid="menu.tab"
                onClick={() => setActiveIndex(tab.idx)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeIndex === tab.idx
                    ? "bg-amber-400 text-purple-800 border-amber-400 shadow-lg scale-105"
                    : "bg-white text-purple-800 border-purple-200 hover:bg-purple-100 hover:border-purple-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active section card */}
        <AnimatePresence mode="wait">
          {!isBuffet && activeSection && (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="max-w-2xl mx-auto mb-10"
              data-ocid={`menu.item.${activeIndex + 1}`}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-purple-200">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={activeSection.image}
                    alt={activeSection.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-white font-display font-bold text-2xl drop-shadow-lg">
                      {activeSection.emoji} {activeSection.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  {activeSection.items.map((item, iIdx) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-sm text-gray-700 font-medium">
                          {item.name}
                        </span>
                        {item.price !== null ? (
                          <span className="text-sm font-bold text-purple-700 ml-4 shrink-0">
                            {item.price}
                          </span>
                        ) : (
                          <span className="text-xs text-amber-600 ml-4 shrink-0 italic">
                            Ask price
                          </span>
                        )}
                      </div>
                      {iIdx < activeSection.items.length - 1 && (
                        <div className="border-b border-purple-50" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {isBuffet && (
            <motion.div
              key={`buffet-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="max-w-3xl mx-auto mb-10"
              data-ocid={`menu.item.${activeIndex + 1}`}
            >
              {activeIndex === 19 && (
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-amber-200">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src="/assets/generated/menu-buffet.dim_600x400.jpg"
                      alt="Special Buffet"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <h3 className="text-white font-display font-bold text-2xl drop-shadow-lg">
                        🍱 Special Buffet
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="bg-amber-500 text-white text-lg font-bold px-3 py-1 rounded-full">
                            ₹450
                          </span>
                          <span className="text-gray-600 text-sm font-medium">
                            per person
                          </span>
                        </div>
                        <ul className="space-y-1.5">
                          {buffet450Items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <span className="text-amber-500 mt-0.5">✦</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="bg-purple-700 text-white text-lg font-bold px-3 py-1 rounded-full">
                            ₹400
                          </span>
                          <span className="text-gray-600 text-sm font-medium">
                            per person
                          </span>
                        </div>
                        <ul className="space-y-1.5">
                          {buffet400Items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <span className="text-purple-500 mt-0.5">✦</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeIndex === 20 && (
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-green-200">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src="/assets/generated/menu-buffet.dim_600x400.jpg"
                      alt="Regular Buffet"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <h3 className="text-white font-display font-bold text-2xl drop-shadow-lg">
                        🥘 Regular Buffet
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="max-w-sm mx-auto">
                      <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="bg-green-600 text-white text-lg font-bold px-3 py-1 rounded-full">
                            ₹300
                          </span>
                          <span className="text-gray-600 text-sm font-medium">
                            per person
                          </span>
                        </div>
                        <ul className="space-y-1.5">
                          {regularBuffetItems.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <span className="text-green-500 mt-0.5">✦</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeIndex === 21 && (
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-orange-200">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src="/assets/generated/menu-buffet.dim_600x400.jpg"
                      alt="Party Buffet"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <h3 className="text-white font-display font-bold text-2xl drop-shadow-lg">
                        🎉 Party Buffet
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="bg-orange-500 text-white text-lg font-bold px-3 py-1 rounded-full">
                            ₹300
                          </span>
                          <span className="text-gray-600 text-sm font-medium">
                            per person
                          </span>
                        </div>
                        <ul className="space-y-1.5">
                          {partyBuffet300Items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <span className="text-orange-500 mt-0.5">✦</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-rose-50 rounded-xl p-4 border border-rose-200">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="bg-rose-600 text-white text-lg font-bold px-3 py-1 rounded-full">
                            ₹350
                          </span>
                          <span className="text-gray-600 text-sm font-medium">
                            per person
                          </span>
                        </div>
                        <ul className="space-y-1.5">
                          {partyBuffet350Items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <span className="text-rose-500 mt-0.5">✦</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center">
          <a
            href="https://wa.me/919981716485"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="menu.primary_button"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            <SiWhatsapp className="h-5 w-5" />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── OFFERS ──────────────────────────────────────────────────────────────────
function OffersSection() {
  const offers = [
    {
      icon: "🍕",
      title: "Party Orders",
      badge: "Catering",
      badgeClass: "bg-blue-100 text-blue-700",
      borderClass: "border-blue-200",
      subtitle: "₹3,999 onward",
      desc: "Customized party platters and bulk catering for all events in Mandsaur. Starting at ₹3,999 per event.",
    },
    {
      icon: "🍽️",
      title: "Free Unlimited Food",
      badge: "Best Deal",
      badgeClass: "bg-green-100 text-green-700",
      borderClass: "border-green-200",
      subtitle: "Only ₹299 per person",
      desc: "Eat as much as you want — unlimited food for just ₹299 only! A full meal experience at the most affordable price in Mandsaur.",
    },
    {
      icon: "🎉",
      title: "Everyday New Offers",
      badge: "Daily Surprise",
      badgeClass: "bg-amber-100 text-amber-800",
      borderClass: "border-green-200",
      subtitle: "Fresh deals every day!",
      desc: "We bring new offers and discounts every single day. Visit us or call to know today's special deal. Don't miss out!",
    },
  ];

  return (
    <section id="offers" className="section-warm py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl lg:text-5xl font-bold text-emerald-700 mb-3"
          >
            Special Offers
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground">
            Exclusive deals just for our valued customers in Mandsaur
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              data-ocid={`offers.item.${i + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className={`relative bg-card border-2 ${offer.borderClass} rounded-3xl p-7 shadow-xs hover:shadow-warm transition-all hover:-translate-y-1`}
            >
              <div
                className={`absolute top-5 right-5 text-xs font-semibold px-3 py-1 rounded-full ${offer.badgeClass}`}
              >
                {offer.badge}
              </div>
              <div className="text-5xl mb-4">{offer.icon}</div>
              <h3 className="font-display text-2xl font-bold text-emerald-700 mb-1">
                {offer.title}
              </h3>
              <p className="text-emerald-700 font-semibold mb-3">
                {offer.subtitle}
              </p>
              <p className="text-muted-foreground text-sm">{offer.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="tel:+919981716485"
            data-ocid="offers.primary_button"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call to Know Today's Offer: +91 99817 16485
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── GALLERY ─────────────────────────────────────────────────────────────────
function GallerySection() {
  const photos = [
    {
      src: "/assets/uploads/IMG_6278-4.jpeg",
      alt: "Smiley Restaurant Entrance at Night",
      rotate: false,
    },
    {
      src: "/assets/uploads/IMG_1068-1.jpeg",
      alt: "Colorful Drinks",
      rotate: false,
    },
    {
      src: "/assets/uploads/IMG_1063-2-2.jpeg",
      alt: "Food Spread with Noodles",
      rotate: false,
    },
    {
      src: "/assets/uploads/IMG_1063-3-3.jpeg",
      alt: "Food Spread Noodles Angle 2",
      rotate: false,
    },
    {
      src: "/assets/uploads/IMG_2129-1.jpeg",
      alt: "Indoor Dining Full",
      rotate: true,
    },
    {
      src: "/assets/uploads/WhatsApp-Image-2026-01-28-at-3.49.10-PM-2.jpeg",
      alt: "Rooftop Terrace",
      rotate: false,
    },
    {
      src: "/assets/uploads/WhatsApp-Image-2026-01-28-at-3.49.09-PM-2--3.jpeg",
      alt: "Courtyard View",
      rotate: false,
    },
  ];

  return (
    <section id="gallery" className="section-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl lg:text-5xl font-bold text-amber-600 mb-3"
          >
            📸 Our Gallery
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground">
            Real photos from Smiley Home Restaurant, Mandsaur
          </motion.p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 mb-10">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="break-inside-avoid overflow-hidden rounded-xl shadow-md"
              style={{ transition: "transform 0.3s" }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                  ...(photo.rotate
                    ? { transform: "rotate(90deg) scale(1.5)" }
                    : {}),
                }}
                className="rounded-xl"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/smiley_home_mandsaur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="gallery.link"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            <SiInstagram className="h-5 w-5" />
            Follow us on Instagram @smiley_home_mandsaur to see the latest
            photos!
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── BRANCHES ────────────────────────────────────────────────────────────────
function BranchesSection() {
  const branches = [
    {
      icon: "🏠",
      name: "Second Home Mandsaur",
      city: "Mandsaur",
      address:
        "Nayapura Rd, near Maharana Pratap Bus Stand, ramtekri, Bhatrewas, Mandsaur, Madhya Pradesh 458001",
      phone: "+91 95757 98248",
      tel: "tel:+919575798248",
      whatsapp: "https://wa.me/919575798248",
      mapLink:
        "https://maps.google.com/?q=Second+Home+Restaurant+Mandsaur+Madhya+Pradesh",
      hours: "Mon–Sun: 11:00 AM – 11:00 PM",
      owner: "Er. Rakesh Mali",
      manager: "Govind Gurjar",
      features: [
        "Rajasthani Cuisine",
        "Dal Baati Churma",
        "Rajasthani Thali",
        "Rooftop Dining",
        "Celebration Setup",
        "Authentic Flavours",
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Second+Home+Restaurant+Mandsaur+Madhya+Pradesh&output=embed&z=15",
    },
    {
      icon: "🌿",
      name: "Second Home Neemuch",
      city: "Neemuch",
      address:
        "Neemuch City Rd, near Sundram Cinema, near by Sanwaliya Seth ji Temple, Neemuch, Madhya Pradesh 458441",
      phone: "+91 72258 98248",
      tel: "tel:+917225898248",
      whatsapp: "https://wa.me/917225898248",
      mapLink:
        "https://maps.google.com/?q=Second+Home+Neemuch+Madhya+Pradesh+458441",
      hours: "Mon–Sun: 11:00 AM – 11:00 PM",
      owner: "Er. Rakesh Mali",
      manager: "Govind Gurjar",
      features: [
        "Rajasthani Cuisine",
        "Dal Baati Churma",
        "Rajasthani Thali",
        "Dine In",
        "Takeaway",
        "Authentic Flavours",
      ],
      mapEmbed:
        "https://maps.google.com/maps?q=Second+Home+Neemuch+Madhya+Pradesh+458441&output=embed&z=15",
    },
  ];

  return (
    <section id="branches" className="section-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeUp}
            className="text-emerald-700 uppercase tracking-widest text-sm font-semibold mb-3"
          >
            ✦ Our Locations
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl lg:text-5xl font-bold text-teal-700 mb-3"
          >
            Visit Our Branches
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground">
            Two locations serving Mandsaur and Neemuch
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {branches.map((b, i) => (
            <motion.div
              key={b.name}
              data-ocid={`branches.item.${i + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-3xl overflow-hidden shadow-xs hover:shadow-warm transition-all"
            >
              <div className="h-48 bg-white border-b border-gray-100 flex items-center justify-center">
                <img
                  src="/assets/generated/second-home-logo-white-bg.PNG"
                  alt="Second Home Logo"
                  className="h-36 w-auto object-contain drop-shadow-md"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-teal-700 mb-1">
                  {b.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{b.city}</p>
                <div className="flex flex-col gap-1 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wide">
                      Owner:
                    </span>
                    <span className="text-sm font-semibold text-teal-700">
                      {(b as any).owner}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">
                      Manager:
                    </span>
                    <span className="text-sm font-semibold text-teal-700">
                      {(b as any).manager}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-teal-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{b.address}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-amber-500 shrink-0" />
                  <span className="text-sm text-foreground">{b.hours}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {b.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-medium"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mb-5">
                  <a
                    href={b.tel}
                    className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
                  >
                    <Phone className="h-4 w-4" /> Call
                  </a>
                  <a
                    href={b.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
                  >
                    <SiWhatsapp className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
                <iframe
                  src={b.mapEmbed}
                  className="w-full h-48 rounded-xl border border-border"
                  loading="lazy"
                  allowFullScreen
                  title={b.name}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── DECORATIONS ─────────────────────────────────────────────────────────────
function DecorationsSection() {
  return (
    <section id="decorations" className="section-warm py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-emerald-700 uppercase tracking-widest text-sm font-semibold mb-3"
          >
            ✦ Decoration Services
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl lg:text-5xl font-bold text-amber-600 mb-3"
          >
            Make Every Moment Special
          </motion.h2>
        </motion.div>

        {/* Photos Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border-2 border-amber-200 rounded-3xl p-8 mb-10 shadow-sm text-center"
        >
          <div className="text-4xl mb-4">🎀</div>
          <h3 className="font-display text-2xl font-bold text-amber-600 mb-4">
            Photos
          </h3>
          <p className="text-gray-700 text-base leading-relaxed max-w-2xl mx-auto mb-6">
            We support vast and reasonable varieties of decoration for most
            events — birthdays, anniversaries, proposals, baby showers, and
            more. Make your special moments truly unforgettable with our
            beautiful, customized setups. Click below to explore our full
            decoration collection with photos and prices.
          </p>
          <div className="relative inline-block mb-4">
            <span className="absolute inset-0 rounded-full animate-ping bg-amber-400 opacity-40 scale-110 pointer-events-none" />
            <a
              href="https://drive.google.com/file/d/1aEAazHQeI1DUjFQzcF5DNk5BRxkmFL3s/preview"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:scale-105"
              style={{
                animation: "attention-pulse 2s ease-in-out infinite",
                boxShadow: "0 0 24px 6px rgba(251,191,36,0.5)",
              }}
            >
              🎀 Please Click for Vast Decoration
            </a>
          </div>
          <p className="text-gray-700 text-sm font-medium mt-3">
            For order any decoration, please send screenshot to our chat:{" "}
            <a
              href="https://wa.me/919981716485"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-bold hover:underline"
            >
              WhatsApp: +91 9981716485
            </a>
          </p>
        </motion.div>

        {/* Videos Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card border-2 border-purple-200 rounded-3xl p-8 shadow-sm text-center"
        >
          <div className="text-4xl mb-4">🎬</div>
          <h3 className="font-display text-2xl font-bold text-purple-600 mb-4">
            Videos
          </h3>
          <p className="text-gray-500 text-base italic">
            Video Setups Coming Soon...
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── SOCIAL ──────────────────────────────────────────────────────────────────
function SocialSection() {
  const socials = [
    {
      Icon: SiInstagram,
      platform: "Instagram",
      handle: "@smiley_home_mandsaur",
      href: "https://www.instagram.com/smiley_home_mandsaur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      gradient: "from-green-500 to-pink-500",
      handleColor: "text-pink-600",
      btnClass: "bg-gradient-to-r from-green-500 to-pink-500 hover:opacity-90",
      desc: "Daily food photos, decor setups, and behind-the-scenes moments. Follow us to never miss an update!",
      cta: "Follow on Instagram",
    },
    {
      Icon: SiFacebook,
      platform: "Facebook",
      handle: "Smiley Home Restaurant",
      href: "https://www.facebook.com/share/17BCyQKC2H/",
      gradient: "from-blue-600 to-blue-400",
      handleColor: "text-blue-600",
      btnClass: "bg-blue-600 hover:bg-blue-700",
      desc: "Event updates, special offers, and community posts. Like our page for the latest news and deals!",
      cta: "Like on Facebook",
    },
    {
      Icon: SiWhatsapp,
      platform: "WhatsApp",
      handle: "+91 99817 16485",
      href: "https://wa.me/919981716485",
      gradient: "from-green-500 to-green-400",
      handleColor: "text-green-600",
      btnClass: "bg-green-500 hover:bg-green-600",
      desc: "Chat with us directly for orders, reservations, and decoration bookings. We respond instantly!",
      cta: "Chat on WhatsApp",
    },
  ];

  return (
    <section id="social" className="section-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeUp}
            className="text-emerald-700 uppercase tracking-widest text-sm font-semibold mb-3"
          >
            ✦ Stay Connected
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl lg:text-5xl font-bold text-emerald-700 mb-3"
          >
            Follow Us on Social Media
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground">
            Stay updated with our latest offers, events, and food photos
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {socials.map((s, i) => (
            <motion.div
              key={s.platform}
              data-ocid={`social.item.${i + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-3xl overflow-hidden shadow-xs hover:shadow-warm-lg transition-all hover:-translate-y-1"
            >
              <div
                className={`h-32 bg-gradient-to-br ${s.gradient} flex items-center justify-center`}
              >
                <s.Icon className="h-12 w-12 text-white" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-xl text-teal-700 mb-1">
                  {s.platform}
                </h3>
                <p className={`text-sm font-semibold ${s.handleColor} mb-3`}>
                  {s.handle}
                </p>
                <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 ${s.btnClass} text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all`}
                >
                  {s.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── REVIEWS ─────────────────────────────────────────────────────────────────
function ReviewsSection() {
  return (
    <section id="reviews" className="section-warm py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl lg:text-5xl font-bold text-emerald-700 mb-3"
          >
            ⭐ Customer Reviews
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground">
            What our happy customers say
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.slice(0, 5).map((review, i) => {
            const initials = review.name
              .split(" ")
              .map((n) => n[0])
              .join("");
            const colorClass = AVATAR_COLORS[i % AVATAR_COLORS.length];
            return (
              <motion.div
                key={review.name}
                data-ocid={`reviews.item.${i + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card border border-border rounded-2xl p-5 shadow-xs hover:shadow-warm transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${colorClass}`}
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      {review.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {review.date}
                    </div>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={
                        star <= review.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  {review.comment}
                </p>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <div className="relative inline-block">
            {/* Pulsing glow ring behind the button */}
            <span className="absolute inset-0 rounded-full animate-ping bg-amber-400 opacity-30 scale-110 pointer-events-none" />
            <a
              href="https://www.google.com/search?client=tablet-android-lenovo-rvo3&hs=YdtU&sca_esv=4e439cc8ed654093&sxsrf=ANbL-n4GBY6ZYs4rDSjmPVz-Gfx6PiMnmw:1774114552521&q=smiley+home+restaurant+mandsaur+reviews&uds=ALYpb_kZaRqzyF4xJu95rhlPO-1eyzOGRSjCD7EdlLlCTQS70WCrj_Q3K236aio7tG2xseeMoGUCJIuH3f8NA1IpicuV9aC6_NASiHa2zfKY9nMgOhylJMyWG9ymKmpsgHE7Gp44oo-caoJS4pm3tlfVmGULRUVqxdoEHw9RL-ZW-gh9n1qlRlbQrggFunhpLssE0CkgBAtCFkFVxbW6g08WsNlz676YGy7ipIB-80nHazC2gNWqaGtbObGCbvmb5ziIR2y3XkK_DTbcvd2SHv247vDcq9LL1I6M_0HCTqMf00mvsCqGLTC8h03Swnp6UwDm0PS1HErKidsFTmb9VBB1qU4U6DoBIxj8eeHaCs71BJDXDpZxIs7aYASiKND2-QSbZHF34psmJfX7KsdqTOsIK8zGSo7FJFQhNGobGQ1rn52R9RTpARcY2KRn5U4jO5Imj8RKmgy6wmF1kETxJH7n4c0JIPJRNQ&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVB8HVXsOwRn9x0sNsJfP2YwYrTY_WHi8f9fMxpYm41YsXWOG48bKFS_i_tEZPm_FmB25i1Pj241GE6mEQbKa-aU7WJP_UOiwI9lmgI8Q6AAJfocsw%3D%3D&sa=X&sqi=2&ved=2ahUKEwj9msbdw7GTAxWMs1YBHUZZBjgQk8gLegQIJRAB&ictx=1&stq=1&cs=0&lei=-Na-af2-H4zn2roPxrKZwAM#ebo=2"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="reviews.button"
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-400 hover:from-amber-500 hover:to-orange-600 text-white font-extrabold text-xl px-10 py-5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ring-4 ring-amber-300 ring-offset-2"
              style={{ animation: "attention-pulse 2s ease-in-out infinite" }}
            >
              ⭐ See What More People Say About Us on Google ⭐
            </a>
          </div>
          <style>{`
            @keyframes attention-pulse {
              0%, 100% { box-shadow: 0 0 20px 4px rgba(251,191,36,0.6), 0 0 40px 10px rgba(251,191,36,0.3); }
              50% { box-shadow: 0 0 35px 10px rgba(251,191,36,0.9), 0 0 70px 20px rgba(251,191,36,0.5); }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const nameRef = useRef<HTMLInputElement>(null);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`,
    );
    window.open(`https://wa.me/919981716485?text=${text}`, "_blank");
  };

  const infoItems = [
    {
      icon: "📍",
      label: "Address",
      value:
        "New Collector Road, Opposite D-Mart, Mandsaur, Madhya Pradesh 458001",
      href: "https://maps.google.com/?q=Smiley+Home+Restaurant+Mandsaur",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+91 99817 16485",
      href: "tel:+919981716485",
    },
    {
      icon: "💬",
      label: "WhatsApp",
      value: "Order on WhatsApp",
      href: "https://wa.me/919981716485",
    },
    {
      icon: "✉️",
      label: "Email",
      value: "smileyhomerestaurant@gmail.com",
      href: "mailto:smileyhomerestaurant@gmail.com",
    },
    {
      icon: "📸",
      label: "Instagram",
      value: "@smiley_home_mandsaur",
      href: "https://www.instagram.com/smiley_home_mandsaur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      icon: "🕐",
      label: "Hours",
      value: "Mon-Sun: 1:00 PM – 11:00 PM",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl lg:text-5xl font-bold text-teal-700 mb-3"
          >
            📍 Find Us & Contact
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground">
            Visit us in Mandsaur or reach out — we're always happy to hear from
            you!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {infoItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-card border border-border rounded-2xl p-4 shadow-xs"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="text-xs text-muted-foreground font-medium mb-0.5">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          data-ocid="contact.link"
                          className="text-sm text-foreground hover:text-teal-600 transition-colors font-medium"
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm text-foreground font-medium">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact form */}
            <div className="bg-card border border-border rounded-3xl p-6 shadow-xs">
              <h3 className="font-display text-xl font-bold text-teal-700 mb-5">
                Send Us a Message
              </h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    ref={nameRef}
                    data-ocid="contact.input"
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-teal-500/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    data-ocid="contact.input"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-teal-500/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    data-ocid="contact.textarea"
                    rows={4}
                    placeholder="Your message or order details..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    className="w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-teal-500/30 resize-none"
                  />
                </div>
                <button
                  type="button"
                  data-ocid="contact.submit_button"
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-semibold transition-colors"
                >
                  <SiWhatsapp className="h-5 w-5" />
                  Send via WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Smiley+Home+Restaurant+New+Collector+Road+Mandsaur+Madhya+Pradesh&output=embed&z=17"
              className="rounded-3xl overflow-hidden border-2 border-border shadow-warm-lg w-full min-h-[400px] h-[500px] lg:h-auto lg:min-h-full"
              loading="lazy"
              allowFullScreen
              title="Smiley Home Restaurant Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer style={{ background: "#064E3B" }} className="text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Center content */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🍽️</span>
            <span className="font-display text-2xl font-bold">
              Smiley Home Restaurant
            </span>
          </div>
          <p className="text-white/70 text-sm mb-1">
            The first Boho Café in Mandsaur
          </p>
          <p className="text-white/60 text-xs mb-4">
            100% Pure Vegetarian · Neemuch & Mandsaur, MP
          </p>
          <a
            href="tel:+919981716485"
            data-ocid="footer.link"
            className="text-[#22C55E] hover:text-amber-300 font-medium transition-colors mb-6"
          >
            📞 +91 99817 16485
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-5 mb-6">
            <a
              href="https://www.instagram.com/smiley_home_mandsaur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.link"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-pink-600 transition-colors"
            >
              <SiInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/share/17BCyQKC2H/"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.link"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition-colors"
            >
              <SiFacebook className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/919981716485"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.link"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-green-600 transition-colors"
            >
              <SiWhatsapp className="h-5 w-5" />
            </a>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-8">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.id}
                data-ocid="footer.link"
                onClick={() => scrollTo(link.id)}
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-sm">
            © {year} Smiley Home Restaurant, Mandsaur. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="footer.link"
            className="text-white/40 hover:text-white/70 text-xs transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <DiningSection />
        <MenuSection />
        <OffersSection />
        <GallerySection />
        <BranchesSection />
        <DecorationsSection />
        <SocialSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
