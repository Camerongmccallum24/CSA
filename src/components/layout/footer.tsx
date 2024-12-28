import { Bot } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Documentation", "API"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Community", "Contact", "DPA", "Privacy Policy", "Terms of Service"],
  Support: ["Help Center", "Status", "Security", "Roadmap", "FAQ"],
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50">
      <div className="container px-4 mx-auto py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Bot className="w-6 h-6 text-emerald-400" />
              <span className="font-semibold">CSA</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Empowering customer success teams with intelligent automation and data-driven insights.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Customer Success Automations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}