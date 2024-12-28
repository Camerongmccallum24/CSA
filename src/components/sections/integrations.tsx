import { Card } from "@/components/ui/card";
import { GradientText } from "@/components/ui/gradient-text";
import { 
  MessageSquare, 
  Mail, 
  Database, 
  LineChart,
  Calendar,
  FileText,
  Box,
  Users
} from "lucide-react";

const integrations = [
  { name: "Slack", icon: MessageSquare, category: "Communication" },
  { name: "Gmail", icon: Mail, category: "Email" },
  { name: "Salesforce", icon: Database, category: "CRM" },
  { name: "HubSpot", icon: LineChart, category: "Marketing" },
  { name: "Google Calendar", icon: Calendar, category: "Scheduling" },
  { name: "Zendesk", icon: FileText, category: "Support" },
  { name: "Jira", icon: Box, category: "Project Management" },
  { name: "Intercom", icon: Users, category: "Customer Engagement" },
];

export function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-black/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seamless <GradientText>Integrations</GradientText>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with your favorite tools and platforms
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {integrations.map((integration) => (
            <Card key={integration.name} className="p-6 bg-black/40 border-white/10 hover:border-emerald-400/50 transition-all group">
              <div className="flex flex-col items-center text-center">
                <integration.icon className="w-12 h-12 mb-4 text-muted-foreground group-hover:text-emerald-400 transition-colors" />
                <h3 className="font-semibold mb-1">{integration.name}</h3>
                <p className="text-sm text-muted-foreground">{integration.category}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}