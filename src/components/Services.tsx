import { Zap, Shield, Globe } from "lucide-react";

const plans = [
  {
    icon: Zap,
    title: "Basic Plan",
    speed: "25 Mbps",
    price: "$49.99/mo",
    features: ["Unlimited data", "Free installation", "24/7 support"],
  },
  {
    icon: Shield,
    title: "Premium Plan",
    speed: "50 Mbps",
    price: "$79.99/mo",
    features: ["Priority data", "Free router upgrade", "Dedicated support"],
    popular: true,
  },
  {
    icon: Globe,
    title: "Business Plan",
    speed: "100 Mbps",
    price: "$129.99/mo",
    features: ["Unlimited priority data", "Static IP", "SLA guarantee"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        Our Plans
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Choose the perfect plan for your connectivity needs.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((p) => (
          <div
            key={p.title}
            className={`rounded-2xl p-8 border ${
              p.popular
                ? "border-primary bg-primary/5 ring-2 ring-primary/30"
                : "border-border bg-card"
            }`}
          >
            <p.icon className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-bold mb-1">{p.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Up to {p.speed}
            </p>
            <p className="text-3xl font-extrabold mb-6">{p.price}</p>
            <ul className="space-y-2 mb-8">
              {p.features.map((f) => (
                <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="/#contact"
              className={`block text-center py-3 rounded-lg font-semibold transition ${
                p.popular
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "border border-border hover:bg-secondary"
              }`}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
