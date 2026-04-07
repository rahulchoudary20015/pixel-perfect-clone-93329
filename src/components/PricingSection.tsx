import { CheckCircle, Shield, CreditCard, Zap } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const includes = [
  "50TB Library of the World's Best Courses",
  "Instant Lifetime Access",
  "Full Download Access",
  "No Monthly Fees or Upsells",
  "Course Updates Weekly",
  "Supportive Community Access",
  "Resell Rights Included",
  "WordPress Themes & Plugins",
  "Shopify Themes (500+)",
  "Premium Tools & Resources",
];

const PricingSection = () => {
  return (
    <section id="grab-deal" className="py-16 px-4 bg-secondary/30">
      <div className="max-w-lg mx-auto">
        <div className="glass-card rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="gradient-bar p-1" />
          <div className="p-8 text-center">
            <span className="badge-success text-xs font-bold rounded-full px-3 py-1 mb-4 inline-block">97% OFF!</span>
            <p className="text-primary font-bold text-sm mb-2">🔥 LIMITED TIME OFFER 🔥</p>
            <h3 className="text-2xl font-black mb-1">Ultimate Course Bundle</h3>
            <p className="text-xs text-muted-foreground mb-4">Market Value: ₹1,00,00,000+</p>

            <div className="mb-2">
              <span className="text-price-strike text-xl mr-2">₹10,000</span>
              <span className="text-price text-5xl font-black">₹299</span>
            </div>
            <p className="text-primary text-sm font-semibold mb-6">You Save ₹9,701!</p>
            <p className="text-xs text-muted-foreground mb-6">⚡ One-time payment • Lifetime access • No hidden fees</p>

            {/* Includes */}
            <div className="text-left space-y-2.5 mb-8">
              {includes.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Countdown */}
            <div className="mb-6">
              <p className="text-destructive font-bold text-sm mb-3">🚨 SALE ENDS SOON! 🚨</p>
              <CountdownTimer />
              <p className="text-xs text-muted-foreground mt-2">Price goes back to ₹10,000 after sale ends!</p>
            </div>

            {/* CTA */}
            <a
              href="#grab-deal"
              className="block gradient-cta text-primary-foreground font-bold text-lg py-4 rounded-xl glow-primary hover:scale-105 transition-transform mb-4"
            >
              GET INSTANT ACCESS - ₹299
            </a>

            <p className="text-xs text-muted-foreground mb-4">
              ✓ SSL Secured • ✓ Instant Download • ✓ No Hidden Fees
            </p>

            <div className="flex justify-center gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> 256-bit Encryption</span>
              <span className="flex items-center gap-1"><CreditCard className="w-3.5 h-3.5" /> All Payment Methods</span>
              <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5" /> Instant Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
