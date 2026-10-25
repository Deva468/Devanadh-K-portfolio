import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Eye, GraduationCap, Briefcase, Code, Award } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-primary">Resume</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />

          <div className="flex flex-wrap gap-4 mb-10">
            <Button asChild size="lg">
              <a href="/Devanandh_K_Resume.pdf" download="Devanandh_K_Resume.pdf">
                <Download className="w-4 h-4 mr-2" /> Download Resume
              </a>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg">
                  <Eye className="w-4 h-4 mr-2" /> View Online
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] bg-card p-2">
                <DialogHeader className="px-2 pt-2">
                  <DialogTitle className="text-xl">Devanandh K — Resume</DialogTitle>
                </DialogHeader>
                <iframe
                  src="/Devanandh_K_Resume.pdf#toolbar=0"
                  title="Devanandh K — Resume"
                  className="w-full h-[70vh] rounded-lg bg-background"
                />
              </DialogContent>
            </Dialog>
          </div>

          {/* Summary cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: GraduationCap, title: "Education", desc: "B.E. CSE (Cyber Security)" },
              { icon: Briefcase, title: "Experience", desc: "5 Internships" },
              { icon: Code, title: "Skills", desc: "20+ Technologies" },
              { icon: Award, title: "Certifications", desc: "19+ Certificates" },
            ].map((item) => (
              <Card key={item.title} className="bg-card border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-5 text-center">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
