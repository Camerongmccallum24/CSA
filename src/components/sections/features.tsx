import { Card } from "@/components/ui/card";
import { Brain, Workflow, BarChart3, Puzzle } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Leverage machine learning to predict customer needs and automate responses.",
  },
  {
    icon: Workflow,
    title: "Visual Workflow Builder",
    description: "Create complex automation workflows with our intuitive drag-and-drop interface.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track customer success metrics and generate actionable insights in real-time.",
  },
  {
    icon: Puzzle,
    title: "Seamless Integrations",
    description: "Connect with your existing tools and platforms for unified workflow automation.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-black/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to automate and optimize your customer success operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 bg-black/40 border-white/10 hover:border-white/20 transition-colors">
              <feature.icon className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}