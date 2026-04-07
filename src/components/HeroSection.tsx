import { CheckCircle, Zap, Gift, Rocket } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 badge-success rounded-full px-5 py-2 text-sm font-medium mb-8 fade-in-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>👥 250K+ Already Joined!</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 fade-in-up fade-in-up-delay-1">
          The Ultimate Bundle of
        </h1>
        <p className="text-5xl md:text-7xl lg:text-8xl font-black text-price mb-2 fade-in-up fade-in-up-delay-2">
          27,700+
        </p>
        <p className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 fade-in-up fade-in-up-delay-2">
          Money Making Courses
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 fade-in-up fade-in-up-delay-3">
          Build <span className="text-primary font-semibold">Passive Income</span> &{" "}
          <span className="text-primary font-semibold">Financial Freedom</span> with the World's Largest Digital Library
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8 fade-in-up fade-in-up-delay-3">
          {[
            { icon: CheckCircle, title: "Lifetime Access", desc: "No expiration ever" },
            { icon: Zap, title: "No Subscriptions", desc: "One-time payment only" },
            { icon: Gift, title: "50TB+ Content", desc: "Massive library included" },
          ].map((f) => (
            <div key={f.title} className="glass-card rounded-xl p-4 text-left">
              <f.icon className="w-5 h-5 text-primary mb-2" />
              <p className="font-bold text-sm">{f.title}</p>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-6 fade-in-up fade-in-up-delay-4">
          {[
            { icon: Zap, label: "27,700+ Video Courses" },
            { icon: Gift, label: "Premium Content" },
            { icon: Rocket, label: "Instant Access" },
          ].map((t) => (
            <span key={t.label} className="inline-flex items-center gap-1.5 bg-secondary rounded-full px-4 py-2 text-sm font-medium">
              <t.icon className="w-4 h-4 text-primary" />
              {t.label}
            </span>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground mb-10">
          {["Instant Download", "Legal & Licensed", "24/7 Support", "Regular Updates"].map((b) => (
            <span key={b} className="flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-primary" /> {b}
            </span>
          ))}
        </div>

        {/* Pricing */}
        <div className="mb-6">
          <span className="text-price-strike text-2xl md:text-3xl mr-3">₹10,000</span>
          <span className="text-price text-6xl md:text-8xl font-black">₹299</span>
        </div>
        <p className="text-primary font-bold text-lg mb-6">🔥 97% OFF - You Save ₹9,701!</p>

        <a
          href="#grab-deal"
          className="inline-block gradient-cta text-primary-foreground font-bold text-lg md:text-xl px-10 py-4 rounded-xl glow-primary hover:scale-105 transition-transform"
        >
          GRAB THIS DEAL NOW - ₹299
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
