import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is this really worth ₹1,00,00,000+?",
    a: "Yes! The combined market value of all 27,700+ courses from premium creators exceeds ₹1 Crore. You're getting everything at a fraction of the cost.",
  },
  {
    q: "How do I access the content after purchase?",
    a: "You'll receive instant download access via Google Drive links right after payment. No waiting required!",
  },
  {
    q: "Are there any monthly fees or subscriptions?",
    a: "No! This is a one-time payment of ₹299. No recurring fees, no hidden charges, no upsells. Ever.",
  },
  {
    q: "Can I really resell this content?",
    a: "Yes! You get full resell rights included. You can use the content for your own business or resell it.",
  },
  {
    q: "Is this content updated regularly?",
    a: "Yes! We add new courses weekly to keep you ahead of the latest trends and strategies.",
  },
  {
    q: "Is this suitable for beginners?",
    a: "Absolutely! Whether you're a complete beginner or an expert, there's content for every level.",
  },
  {
    q: "Why is this so cheap? What's the catch?",
    a: "No catch! We believe everyone deserves access to quality education. This is a limited-time promotional offer.",
  },
  {
    q: "How quickly will I see results?",
    a: "Many students start seeing results within 30-90 days of implementing what they learn. Your results depend on your effort and consistency.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Got Questions? We Have Answers!</p>
        <h2 className="text-3xl md:text-4xl font-black mb-3">Frequently Asked Questions</h2>
        <p className="text-muted-foreground mb-10">Everything you need to know about our ultimate course bundle</p>

        <Accordion type="single" collapsible className="text-left">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-sm font-semibold hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
