import { GradientText } from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { Bot, Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="relative container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Bot className="w-8 h-8 text-emerald-400" />
            <span className="text-muted-foreground">Customer Success Automations</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Customer Success with{" "}
            <GradientText>AI-Powered Automation</GradientText>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Streamline workflows, boost customer satisfaction, and drive growth with our intelligent automation platform.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="group">
              Get Started Free
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="secondary">
              Try Now
              <Sparkles className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 h-40 bottom-0" />
            <img
              src="src/assets/images/Leonardo_Phoenix_10_Create_a_futuristic_workflow_Template_card_1.jpg"
              alt="Platform Interface"
              className="rounded-lg shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}