import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ScanLine, FlaskConical, Cpu, ShieldCheck } from "lucide-react";

const FinalYearProjectSection = () => {
  return (
    <section id="final-year-project" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/3 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Final Year <span className="text-gradient">Project</span>
          </h2>
          <div className="w-16 h-1 shimmer-line rounded mb-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -6 }}
          >
            <Card className="bg-card border-border card-interactive overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 shimmer-line" />
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <ScanLine className="w-7 h-7 text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        Transformer-Based Static Code Analysis and Security Vulnerability Detection
                      </h3>
                      <span className="text-xs px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 font-medium border border-amber-500/30 whitespace-nowrap">
                        In Development
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                      A cybersecurity-focused project that aims to analyze source code and
                      identify potential security vulnerabilities using static code analysis
                      and transformer-based machine learning techniques. The prototype accepts
                      Python source code, analyzes potential security issues, and presents
                      vulnerability findings and an analysis score to help developers
                      understand insecure coding patterns.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      {[
                        {
                          icon: FlaskConical,
                          title: "Static Code Analysis",
                          desc: "Parses Python source code to flag insecure coding patterns before runtime",
                        },
                        {
                          icon: Cpu,
                          title: "Transformer-Based ML",
                          desc: "Applies transformer models to learn and score potential vulnerabilities",
                        },
                        {
                          icon: ShieldCheck,
                          title: "Security Analysis",
                          desc: "Presents findings with an analysis score to guide secure development",
                        },
                      ].map((item) => (
                        <div key={item.title} className="rounded-xl border border-border bg-background/50 p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <item.icon className="w-4 h-4 text-primary" />
                            <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "Python",
                        "FastAPI",
                        "Static Code Analysis",
                        "Transformer-Based Machine Learning",
                        "Source Code Vulnerability Detection",
                        "Security Analysis",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-muted-foreground italic mt-5">
                      Final-Year Academic Project — B.E. CSE (Cyber Security), Dhanalakshmi College of Engineering.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalYearProjectSection;
