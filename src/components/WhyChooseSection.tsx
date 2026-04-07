import { DollarSign, Clock, RefreshCw, Unlock, UserCheck, Download, ShoppingBag, Shield } from "lucide-react";

const features = [
  { icon: DollarSign, title: "Affordable Access", desc: "For just ₹299 TODAY ONLY, unlock premium content worth lakhs of rupees." },
  { icon: Clock, title: "Lifetime Learning", desc: "No expiry dates. Learn at your pace, whenever you want, forever." },
  { icon: RefreshCw, title: "Weekly Updates", desc: "Fresh content keeps coming in. You'll never fall behind the latest trends." },
  { icon: Unlock, title: "Total Freedom", desc: "Watch as much as you want. No limits. No restrictions. Complete access." },
  { icon: UserCheck, title: "No Experience Needed", desc: "Perfect for beginners and experts alike. Start from anywhere and grow." },
  { icon: Download, title: "Full Download Rights", desc: "Download everything to your device. Access offline anytime, anywhere." },
  { icon: ShoppingBag, title: "Resell Rights Included", desc: "Use, resell, or share content for your own business ventures." },
  { icon: Shield, title: "Secure & Reliable", desc: "We stand behind our content. Your success is our priority and commitment." },
];

const WhyChooseSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">✨ Why Choose Us</p>
        <h2 className="text-3xl md:text-4xl font-black mb-3">Why This Is a No-Brainer Investment</h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Everything you need to build multiple income streams and achieve financial freedom
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="glass-card rounded-xl p-5 text-left hover:border-primary/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-sm mb-1">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
