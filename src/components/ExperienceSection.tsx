import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Web Development and Designing Intern",
    company: "OASIS Infobyte",
    period: "Sep – Oct 2026",
    points: [
      "Engineered a Pizza Delivery & Inventory Management application on the MERN stack (React.js, Node.js, Express.js, MongoDB), covering ordering, stock tracking, and admin workflows",
      "Built the React.js frontend and connected it to the Express.js backend and MongoDB database for menu and inventory data",
      "Integrated the Razorpay payment gateway for secure online payments and delivered the complete project within the internship",
      "Received the OASIS Infobyte Star Performer award and a Letter of Recommendation for the internship",
    ],
    projectLink: "https://pizza-delivery-system-beige.vercel.app/login",
    projectLabel: "View Internship Project — Pizza Delivery System",
  },
  {
    role: "Frontend Developer Intern",
    company: "NoviTech R&D Pvt Ltd",
    period: "Jan – Feb 2026",
    points: [
      "Developed the frontend of an e-commerce web application with React.js, HTML, CSS, and JavaScript, covering product listing, cart, and checkout screens",
      "Delivered a fully responsive UI that works consistently across mobile, tablet, and desktop",
      "Created reusable components and managed UI state for a smooth user flow",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "SkillSync",
    period: "Jan – Feb 2026",
    points: [
      "Converted Figma designs into reusable React components and responsive layouts, reducing duplicate UI code across pages",
      "Worked on real-time projects to improve user interface and responsiveness",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Ekhie Business Solutions",
    period: "Mar – Apr 2025",
    points: [
      "Recreated company web pages from Figma files as responsive components with HTML, CSS, JavaScript, and React.js, collaborating with the team on feedback to refine the user experience",
      "Gained practical experience in front-end development workflows",
    ],
  },
  {
    role: "UI/UX Designing Intern",
    company: "Industrial Design & Animation",
    period: "Jul – Aug 2025",
    points: [
      "Designed a Rent Management App in Figma, taking it from wireframes to interactive prototypes for mobile and desktop and iterating on usability feedback",
      "Conducted user research and created wireframes, prototypes, and design systems",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/3 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 h-1 shimmer-line rounded mb-10" />

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="md:pl-16 relative"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2, type: "spring" }}
                    className="absolute left-4 top-8 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/30 hidden md:block z-10"
                  />

                  <Card className="bg-card border-border card-interactive overflow-hidden relative group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors duration-300" />
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1 group-hover:bg-primary/20 transition-colors"
                        >
                          <Briefcase className="w-6 h-6 text-primary" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                            <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">{exp.period}</span>
                          </div>
                          <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                          <ul className="space-y-2">
                            {exp.points.map((point, j) => (
                              <motion.li
                                key={j}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 + j * 0.05 }}
                                className="text-muted-foreground text-sm flex items-start gap-2 hover:text-foreground transition-colors"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                {point}
                              </motion.li>
                            ))}
                          </ul>
                          {exp.projectLink && (
                            <a
                              href={exp.projectLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 mt-4 text-sm text-primary font-medium bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-full transition-colors"
                            >
                              {exp.projectLabel}
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
