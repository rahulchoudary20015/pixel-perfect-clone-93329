import { Shield, Zap, Clock } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const FinalCTASection = () => {
  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="max-w-2xl mx-auto text-center">
        <span className="badge-success text-xs font-bold rounded-full px-3 py-1 mb-4 inline-block">🔥 LIMITED TIME OFFER</span>
        <p className="text-primary font-bold text-sm mb-2">96% OFF - ENDS SOON!</p>
        <h2 className="text-3xl md:text-4xl font-black mb-4">Don't Miss The Biggest Sale Of The Year!</h2>

        <div className="mb-4">
          <span className="text-price-strike text-xl mr-2">₹10,000</span>
          <span className="text-price text-5xl font-black">₹299</span>
          <span className="text-primary text-sm font-bold ml-2">🔥 Save ₹9,701 Today!</span>
        </div>
        <p className="text-muted-foreground mb-6">Get instant access to 27,700+ premium courses!</p>

        <div className="flex justify-center gap-6 mb-8">
          {[
            { icon: Shield, label: "Secure Platform" },
            { icon: Zap, label: "Instant Access" },
            { icon: Clock, label: "Lifetime Access" },
          ].map((b) => (
            <span key={b.label} className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <b.icon className="w-4 h-4 text-primary" /> {b.label}
            </span>
          ))}
        </div>

        <div className="mb-6">
          <p className="text-destructive font-bold text-sm mb-3">🚨 SALE ENDS SOON! 🚨</p>
          <CountdownTimer />
        </div>

        <p className="text-primary font-bold text-sm mb-4">⚡ LAST CHANCE TO SAVE ₹9,701! ⚡</p>
        <p className="text-xs text-muted-foreground mb-6">This exclusive ₹299 price expires when the sale ends!</p>

        <a
          href="#grab-deal"
          className="inline-block gradient-cta text-primary-foreground font-bold text-lg px-10 py-4 rounded-xl glow-primary hover:scale-105 transition-transform mb-4"
        >
          GET INSTANT ACCESS - ₹299
        </a>

        <p className="text-xs text-muted-foreground mb-8">
          ✓ Secure Payment • ✓ Instant Download • ✓ 50TB+ Content
        </p>

        {/* Support */}
        <div className="glass-card rounded-xl p-6 max-w-sm mx-auto">
          <p className="font-bold text-sm mb-1">📧 24/7 Email Support</p>
          <p className="text-xs text-muted-foreground mb-2">If anything goes wrong, email us at</p>
          <a href="mailto:support@example.com" className="text-primary text-sm font-semibold hover:underline">
            support@example.com
          </a>
          <p className="text-xs text-muted-foreground mt-1">We'll help you within 12 hours - guaranteed!</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
