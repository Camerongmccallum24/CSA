import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GradientText } from "@/components/ui/gradient-text";

const plans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small teams getting started with automation",
    features: [
      "Up to 1,000 automated actions/month",
      "Basic workflow templates",
      "Email support",
      "Core integrations",
    ],
  },
  {
    name: "Professional",
    price: "$149",
    description: "Ideal for growing businesses with advanced needs",
    features: [
      "Up to 10,000 automated actions/month",
      "Advanced AI capabilities",
      "Priority support",
      "Custom workflow builder",
      "Advanced analytics",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited automated actions",
      "Custom AI model training",
      "24/7 dedicated support",
      "Custom integrations",
      "Advanced security features",
      "SLA guarantees",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <GradientText>Transparent</GradientText> Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your team's automation needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={`p-8 bg-black/40 border-white/10 ${plan.popular ? 'ring-2 ring-emerald-400' : ''}`}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={plan.popular ? "default" : "secondary"}>
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}