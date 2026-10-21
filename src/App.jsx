import { useMemo, useState } from "react";
import {
  Calendar,
  Check,
  Clock,
  Flame,
  MapPin,
  Menu,
  Phone,
  ShoppingBag,
  Star,
  Users,
  X,
} from "lucide-react";

const menuCategories = [
  "All",
  "Starters",
  "Chef's Specials",
  "Main Course",
  "Desserts",
  "Beverages",
];

const dishes = [
  {
    name: "Charred Burrata",
    description: "Heirloom tomato, basil oil, grilled sourdough, aged balsamic.",
    category: "Starters",
    price: 895,
    vegetarian: true,
    tags: ["Bestseller", "Seasonal"],
    image:
      "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Wild Mushroom Velouté",
    description: "Forest mushrooms, truffle cream, toasted hazelnut, chive.",
    category: "Starters",
    price: 740,
    vegetarian: true,
    tags: ["Guest Favourite"],
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Tandoori Lobster",
    description: "Coastal lobster, Kashmiri chilli butter, lime, smoked tomato.",
    category: "Chef's Specials",
    price: 2450,
    vegetarian: false,
    tags: ["Chef's Pick", "Signature"],
    image:
      "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Miso-Glazed Aubergine",
    description: "White miso, sesame crunch, pickled cucumber, warm jasmine rice.",
    category: "Chef's Specials",
    price: 1280,
    vegetarian: true,
    tags: ["Chef's Pick", "Plant Based"],
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Slow-Braised Short Rib",
    description: "48-hour braise, silky pomme purée, red wine jus, baby carrots.",
    category: "Main Course",
    price: 1890,
    vegetarian: false,
    tags: ["Bestseller"],
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Saffron Gnocchi",
    description: "Hand-rolled potato gnocchi, parmesan, sage, brown butter.",
    category: "Main Course",
    price: 1420,
    vegetarian: true,
    tags: ["House Made"],
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Dark Chocolate Crémeux",
    description: "70% cacao, salted caramel, cocoa nib tuile, vanilla bean.",
    category: "Desserts",
    price: 680,
    vegetarian: true,
    tags: ["Bestseller"],
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Rose & Pistachio Kulfi",
    description: "Slow-reduced milk, Iranian pistachio, rose petals, saffron.",
    category: "Desserts",
    price: 590,
    vegetarian: true,
    tags: ["Signature"],
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "House Botanical Tonic",
    description: "Juniper, citrus peel, garden herbs, house-made tonic water.",
    category: "Beverages",
    price: 480,
    vegetarian: true,
    tags: ["Zero Proof"],
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=1000&q=85",
  },
];

const navigation = [
  { label: "Our Story", href: "#story" },
  { label: "The Menu", href: "#menu" },
  { label: "Reservations", href: "#reservations" },
  { label: "Find Us", href: "#location" },
];

const formatPrice = (price) =>
  `₹${new Intl.NumberFormat("en-IN").format(price)}`;

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reservationSubmitted, setReservationSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [reservationName, setReservationName] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [guestCount, setGuestCount] = useState("2");

  const visibleDishes = useMemo(
    () =>
      activeCategory === "All"
        ? dishes
        : dishes.filter((dish) => dish.category === activeCategory),
    [activeCategory],
  );

  const minDate = useMemo(() => {
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    return today.toISOString().slice(0, 10);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleReservationSubmit = (event) => {
    event.preventDefault();
    setReservationSubmitted(true);
  };

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    setNewsletterSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-stone-950 text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="border-b border-stone-800/80 bg-stone-950 px-5 py-2.5 text-xs tracking-wide text-stone-400 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 sm:justify-start">
            <span className="inline-flex items-center gap-2">
              <Clock size={13} className="text-amber-500" />
              Tue–Sun, 12:00 PM – 11:00 PM
            </span>
            <span className="hidden text-stone-700 sm:inline">•</span>
            <a
              href="https://maps.google.com/?q=The+Sable+Room+Mumbai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-amber-400"
            >
              <MapPin size={13} className="text-amber-500" />
              Bandra West, Mumbai
            </a>
          </div>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 transition-colors hover:text-amber-400"
          >
            <Phone size={13} className="text-amber-500" />
            +91 98765 43210
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-stone-800/70 bg-stone-950/85 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        >
          <a
            href="#top"
            onClick={closeMobileMenu}
            className="group flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/60 text-lg font-serif text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-stone-950">
              S
            </span>
            <span>
              <span className="block font-serif text-lg leading-none tracking-[0.16em]">
                THE SABLE ROOM
              </span>
              <span className="mt-1 block text-[9px] uppercase tracking-[0.35em] text-stone-500">
                Dining, reimagined
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-stone-400 transition-colors hover:text-amber-400"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#reservations"
              className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-stone-950 transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/10"
            >
              Book a Table
            </a>
          </div>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-full border border-stone-700 p-2.5 text-stone-200 transition-colors hover:border-amber-500 hover:text-amber-400 md:hidden"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-stone-800 bg-stone-950/95 px-5 py-5 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="rounded-lg px-3 py-3 text-stone-300 transition-colors hover:bg-stone-900 hover:text-amber-400"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#reservations"
                onClick={closeMobileMenu}
                className="mt-2 rounded-full bg-amber-500 px-5 py-3 text-center text-sm font-semibold text-stone-950 transition-colors hover:bg-amber-400"
              >
                Book a Table
              </a>
            </div>
          </div>
        )}
      </header>

      <section
        id="top"
        className="relative isolate flex min-h-[680px] items-center border-b border-stone-800/60 sm:min-h-[750px]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=90')",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/25"
        />
        <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-stone-950/50 px-4 py-2 text-xs font-medium tracking-wide text-amber-300 backdrop-blur-md">
              <Star size={14} fill="currentColor" />
              Rated 4.9/5 by 1,200+ guests
            </div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400 sm:text-sm">
              A little extraordinary, every day
            </p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[1.08] tracking-tight text-stone-50 sm:text-6xl md:text-7xl lg:text-8xl">
              An evening
              <br />
              <span className="italic text-amber-400">worth</span> lingering
              over.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
              Thoughtful Indian soul, modern technique, and ingredients with a
              story. Find your place at the table in the heart of Bandra.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#reservations"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-stone-950 transition-all hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20"
              >
                <Calendar size={17} />
                Book a Table
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full border border-stone-500/70 bg-stone-950/30 px-7 py-3.5 text-sm font-semibold text-stone-100 backdrop-blur-sm transition-all hover:border-amber-400 hover:text-amber-300"
              >
                Explore the Menu
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-5 hidden items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-stone-400 sm:flex sm:right-8">
          <span className="h-px w-12 bg-amber-500/70" />
          Made for memorable moments
        </div>
      </section>

      <section id="story" className="border-b border-stone-800/70 bg-stone-900/45">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 sm:grid-cols-4 sm:px-8 sm:py-12">
          {[
            { value: "12", label: "Years of craft" },
            { value: "24", label: "Signature creations" },
            { value: "4.9", label: "Google rating" },
            { value: "98%", label: "Guest satisfaction" },
          ].map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="font-serif text-3xl text-amber-400 sm:text-4xl">
                {metric.value}
                {metric.value === "4.9" && (
                  <span className="ml-1 text-sm text-amber-500">★</span>
                )}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-stone-500 sm:text-xs">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="bg-stone-950 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-500">
              From our kitchen
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
              A menu with a point of view
            </h2>
            <p className="mt-5 leading-7 text-stone-400">
              Seasonal produce, patient technique, and a little unexpected
              magic. Made fresh, meant to be shared.
            </p>
          </div>

          <div
            className="mt-10 flex gap-2 overflow-x-auto pb-3 sm:mt-12 sm:justify-center"
            role="tablist"
            aria-label="Menu categories"
          >
            {menuCategories.map((category) => {
              const selected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-all sm:px-5 sm:text-sm ${
                    selected
                      ? "border-amber-500 bg-amber-500 text-stone-950"
                      : "border-stone-800 bg-stone-900/50 text-stone-400 hover:border-stone-600 hover:text-stone-100"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleDishes.map((dish) => {
              const orderText = `Hello The Sable Room! I'd like to order ${dish.name} (${formatPrice(dish.price)}).`;
              const orderUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
                orderText,
              )}`;
              return (
                <article
                  key={dish.name}
                  className="group overflow-hidden rounded-2xl border border-stone-800 bg-stone-900/60 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-black/30"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                    <span
                      className={`absolute left-4 top-4 h-3.5 w-3.5 rounded-sm border ${
                        dish.vegetarian
                          ? "border-emerald-500"
                          : "border-rose-500"
                      } bg-stone-950/80`}
                      aria-label={dish.vegetarian ? "Vegetarian" : "Non-vegetarian"}
                    >
                      <span
                        className={`mx-auto mt-[3px] block h-1.5 w-1.5 rounded-full ${
                          dish.vegetarian ? "bg-emerald-500" : "bg-rose-500"
                        }`}
                      />
                    </span>
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {dish.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-stone-950/60 px-3 py-1 text-[10px] font-medium text-stone-100 backdrop-blur-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-amber-500">
                          {dish.category}
                        </p>
                        <h3 className="mt-2 font-serif text-2xl text-stone-100">
                          {dish.name}
                        </h3>
                      </div>
                      <p className="pt-1 font-medium text-amber-300">
                        {formatPrice(dish.price)}
                      </p>
                    </div>
                    <p className="mt-3 min-h-12 text-sm leading-6 text-stone-400">
                      {dish.description}
                    </p>
                    <a
                      href={orderUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-700 px-4 py-2.5 text-sm font-medium text-stone-200 transition-colors hover:border-amber-500 hover:bg-amber-500 hover:text-stone-950"
                    >
                      <ShoppingBag size={16} />
                      Quick Order
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="mt-7 text-center text-xs text-stone-500">
            Please let our team know about allergies or dietary preferences when
            ordering.
          </p>
        </div>
      </section>

      <section
        id="reservations"
        className="relative border-y border-stone-800/70 bg-stone-900/50 px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_50%,rgba(245,158,11,0.07),transparent_40%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-500">
              Your table is waiting
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Make room for
              <br />
              <span className="italic text-amber-400">something special.</span>
            </h2>
            <p className="mt-6 max-w-md leading-7 text-stone-400">
              Join us for a long lunch, an intimate dinner, or a reason to
              celebrate. Reserve in a few quick steps.
            </p>
            <div className="mt-8 space-y-4 text-sm text-stone-300">
              <p className="flex items-center gap-3">
                <Clock size={17} className="text-amber-500" />
                Tuesday – Sunday, 12 PM – 11 PM
              </p>
              <p className="flex items-center gap-3">
                <Users size={17} className="text-amber-500" />
                Tables for 1–10 guests
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-800 bg-stone-950/80 p-5 shadow-2xl shadow-black/20 sm:p-8">
            {reservationSubmitted ? (
              <div
                role="status"
                aria-live="polite"
                className="flex min-h-[390px] animate-[fadeInUp_0.45s_ease-out_both] flex-col items-center justify-center text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400">
                  <Check size={30} />
                </span>
                <h3 className="mt-6 font-serif text-3xl">
                  Thank you, {reservationName.split(" ")[0]}.
                </h3>
                <p className="mt-3 max-w-sm leading-7 text-stone-400">
                  Your request for {guestCount} {guestCount === "1" ? "guest" : "guests"} on{" "}
                  {reservationDate} at {reservationTime} is in. Our team will
                  confirm shortly on WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setReservationSubmitted(false)}
                  className="mt-7 text-sm font-medium text-amber-400 transition-colors hover:text-amber-300"
                >
                  Make another reservation
                </button>
              </div>
            ) : (
              <>
                <div className="mb-7">
                  <h3 className="font-serif text-2xl">Reserve your table</h3>
                  <p className="mt-2 text-sm text-stone-500">
                    We’ll be in touch to confirm your booking.
                  </p>
                </div>
                <form onSubmit={handleReservationSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="reservation-name"
                      className="mb-2 block text-xs font-medium text-stone-300"
                    >
                      Full Name
                    </label>
                    <input
                      id="reservation-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      minLength={2}
                      value={reservationName}
                      onChange={(event) => setReservationName(event.target.value)}
                      placeholder="How should we address you?"
                      className="w-full rounded-xl border border-stone-800 bg-stone-900 px-4 py-3 text-sm text-stone-100 outline-none transition-colors placeholder:text-stone-600 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="reservation-phone"
                      className="mb-2 block text-xs font-medium text-stone-300"
                    >
                      WhatsApp Number
                    </label>
                    <input
                      id="reservation-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="[+0-9() -]{8,20}"
                      title="Enter a valid phone number with 8 to 20 characters."
                      required
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-stone-800 bg-stone-900 px-4 py-3 text-sm text-stone-100 outline-none transition-colors placeholder:text-stone-600 focus:border-amber-500"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="reservation-date"
                        className="mb-2 block text-xs font-medium text-stone-300"
                      >
                        Date
                      </label>
                      <input
                        id="reservation-date"
                        name="date"
                        type="date"
                        min={minDate}
                        required
                        value={reservationDate}
                        onChange={(event) => setReservationDate(event.target.value)}
                        className="w-full rounded-xl border border-stone-800 bg-stone-900 px-4 py-3 text-sm text-stone-100 outline-none transition-colors focus:border-amber-500 [color-scheme:dark]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="reservation-time"
                        className="mb-2 block text-xs font-medium text-stone-300"
                      >
                        Time Slot
                      </label>
                      <select
                        id="reservation-time"
                        name="time"
                        required
                        value={reservationTime}
                        onChange={(event) => setReservationTime(event.target.value)}
                        className="w-full rounded-xl border border-stone-800 bg-stone-900 px-4 py-3 text-sm text-stone-100 outline-none transition-colors focus:border-amber-500"
                      >
                        <option value="" disabled>
                          Select a time
                        </option>
                        {[
                          "12:00 PM",
                          "1:00 PM",
                          "2:00 PM",
                          "6:00 PM",
                          "7:00 PM",
                          "8:00 PM",
                          "9:00 PM",
                          "10:00 PM",
                        ].map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="reservation-guests"
                      className="mb-2 block text-xs font-medium text-stone-300"
                    >
                      Number of Guests
                    </label>
                    <select
                      id="reservation-guests"
                      name="guests"
                      value={guestCount}
                      onChange={(event) => setGuestCount(event.target.value)}
                      className="w-full rounded-xl border border-stone-800 bg-stone-900 px-4 py-3 text-sm text-stone-100 outline-none transition-colors focus:border-amber-500"
                    >
                      {Array.from({ length: 10 }, (_, index) => index + 1).map(
                        (count) => (
                          <option key={count} value={count}>
                            {count} {count === 1 ? "guest" : "guests"}
                          </option>
                        ),
                      )}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="reservation-requests"
                      className="mb-2 block text-xs font-medium text-stone-300"
                    >
                      Special Requests{" "}
                      <span className="text-stone-600">(optional)</span>
                    </label>
                    <textarea
                      id="reservation-requests"
                      name="requests"
                      rows={3}
                      maxLength={500}
                      placeholder="Dietary needs, celebrations, or anything we should know?"
                      className="w-full resize-y rounded-xl border border-stone-800 bg-stone-900 px-4 py-3 text-sm text-stone-100 outline-none transition-colors placeholder:text-stone-600 focus:border-amber-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 text-sm font-semibold text-stone-950 transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/10"
                  >
                    <Calendar size={17} />
                    Request a Reservation
                  </button>
                  <p className="text-center text-[11px] leading-5 text-stone-600">
                    Reservation requests are subject to confirmation by our
                    team.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section id="location" className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-stone-800 bg-stone-900/60 lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-[440px]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85"
              alt="Warm, intimate dining room at The Sable Room"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-stone-950/55 px-4 py-2 text-xs text-stone-100 backdrop-blur-md">
              An intimate space for every occasion
            </span>
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-500">
              Come find us
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              A corner of calm
              <br />
              in the city.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-stone-400">
              Tucked along a leafy Bandra lane, just moments from the sea. Come
              for the food; stay a little longer for the feeling.
            </p>
            <div className="mt-8 grid gap-6 border-y border-stone-800 py-6 sm:grid-cols-2">
              <div>
                <p className="flex items-center gap-2 text-sm font-medium text-stone-200">
                  <Clock size={16} className="text-amber-500" />
                  Opening Hours
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-500">
                  Tue–Sun · 12:00 PM–3:00 PM
                  <br />
                  Dinner · 6:00 PM–11:00 PM
                  <br />
                  Monday · Closed
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-sm font-medium text-stone-200">
                  <MapPin size={16} className="text-amber-500" />
                  The Details
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-500">
                  Valet parking available
                  <br />
                  Smart casual dress
                  <br />
                  Bandra West, Mumbai
                </p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=The+Sable+Room+Bandra+West+Mumbai"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-stone-700 px-5 py-3 text-sm font-medium text-stone-200 transition-all hover:border-amber-500 hover:text-amber-400"
            >
              <MapPin size={16} />
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-800 bg-stone-950 px-5 pb-8 pt-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-stone-800 pb-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a href="#top" className="inline-flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/60 font-serif text-lg text-amber-400">
                  S
                </span>
                <span className="font-serif tracking-[0.16em]">
                  THE SABLE ROOM
                </span>
              </a>
              <p className="mt-4 max-w-sm text-sm leading-6 text-stone-500">
                Thoughtful dining for the moments worth remembering. Made with
                care in Bandra, Mumbai.
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="rounded-full border border-stone-800 px-4 py-2 text-xs text-stone-400 transition-colors hover:border-amber-500 hover:text-amber-400"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="rounded-full border border-stone-800 px-4 py-2 text-xs text-stone-400 transition-colors hover:border-amber-500 hover:text-amber-400"
                >
                  Facebook
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-200">
                Explore
              </h3>
              <div className="mt-4 flex flex-col items-start gap-3">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-stone-500 transition-colors hover:text-amber-400"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-200">
                A note from our kitchen
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-500">
                Seasonal menus, new stories, and the occasional invitation.
              </p>
              {newsletterSubmitted ? (
                <p
                  role="status"
                  aria-live="polite"
                  className="mt-4 flex items-center gap-2 text-sm text-amber-400"
                >
                  <Check size={16} />
                  You’re on the list. See you soon.
                </p>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="mt-4 flex gap-2"
                >
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Your email address"
                    className="min-w-0 flex-1 rounded-full border border-stone-800 bg-stone-900 px-4 py-2.5 text-sm text-stone-100 outline-none transition-colors placeholder:text-stone-600 focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-stone-950 transition-colors hover:bg-amber-400"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-stone-600 sm:flex-row">
            <p>© {new Date().getFullYear()} The Sable Room. All rights reserved.</p>
            <p className="inline-flex items-center gap-1">
              Made for good taste <Flame size={13} className="text-amber-500" />
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
