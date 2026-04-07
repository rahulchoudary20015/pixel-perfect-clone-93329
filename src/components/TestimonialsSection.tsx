import { CheckCircle } from "lucide-react";

const testimonials = [
  {
    initials: "RK",
    name: "Rahul Kumar",
    role: "E-commerce Entrepreneur",
    metric: "₹5L/month",
    time: "3 months",
    niche: "E-commerce",
    quote: "This bundle literally changed my life! I went from zero to ₹5 lakh/month in just 3 months using the dropshipping courses. Best investment ever!",
  },
  {
    initials: "PS",
    name: "Priya Sharma",
    role: "Freelance Designer",
    metric: "₹3L/month",
    time: "2 months",
    niche: "Freelancing",
    quote: "The design and marketing courses helped me land premium clients. I now earn ₹3 lakh/month as a freelancer. Absolutely worth it!",
  },
  {
    initials: "AV",
    name: "Amit Verma",
    role: "YouTube Creator",
    metric: "₹8L/month",
    time: "5 months",
    niche: "Content Creation",
    quote: "The YouTube growth strategies in this bundle helped me grow from 0 to 500K subscribers. My channel now generates ₹8 lakh/month!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Real Success Stories</p>
        <h2 className="text-3xl md:text-4xl font-black mb-3">From Struggling to Thriving Entrepreneurs</h2>
        <p className="text-muted-foreground mb-10">
          Join thousands who have already transformed their lives and built successful businesses
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card rounded-xl p-6 text-left">
              <div className="flex items-center gap-1 text-xs text-primary font-semibold mb-4">
                <CheckCircle className="w-3.5 h-3.5" /> VERIFIED
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-2 mb-4 flex-wrap">
                {[t.metric, t.time, t.niche].map((tag) => (
                  <span key={tag} className="badge-success text-xs rounded-full px-2.5 py-0.5">{tag}</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
