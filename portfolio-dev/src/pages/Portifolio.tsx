import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { Github, Mail, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "SunGuard IoT",
      description:
        "Sistema IoT para monitoramento de UV, temperatura e umidade com dashboard e notificações inteligentes.",
      stack: ["React", "Node.js", "MongoDB", "IoT"],
      github: "https://github.com/allisonrps/sunguard",
      demo: "#",
    },
    {
      title: "API Score Crédito",
      description:
        "API REST para cálculo de score de crédito com MySQL e Node.js, estruturada em controllers e routes.",
      stack: ["Node.js", "MySQL", "REST API"],
      github: "https://github.com/allisonrps/api-score",
      demo: "#",
    },
    {
      title: "Mobile Price Classification",
      description:
        "App mobile usando .NET MAUI para classificação de preços com backend Node e banco MySQL.",
      stack: [".NET MAUI", "Node.js", "MySQL"],
      github: "https://github.com/allisonrps/mobile-price-classification",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/70 backdrop-blur border-b border-yellow-500/20 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-yellow-400">Allison Dev</h1>

          <nav className="flex gap-6 text-sm">
            <a href="#sobre" className="hover:text-yellow-400 transition">
              Sobre mim
            </a>
            <a href="#stack" className="hover:text-yellow-400 transition">
              Stacks
            </a>
            <a href="#projetos" className="hover:text-yellow-400 transition">
              Projetos
            </a>
            <a href="#contato" className="hover:text-yellow-400 transition">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4"
        >
          Desenvolvedor Full Stack
        </motion.h2>

        <p className="text-gray-400 max-w-xl">
          Construo aplicações modernas, escaláveis e com foco em performance,
          experiência do usuário e arquitetura limpa.
        </p>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="max-w-5xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-bold mb-6 text-yellow-400">Sobre Mim</h3>

        <p className="text-gray-300 leading-relaxed">
          Desenvolvedor focado em aplicações web modernas, APIs escaláveis,
          soluções cloud e projetos IoT. Experiência com React, Node.js, .NET,
          bancos SQL e NoSQL e integração com sensores e hardware.
        </p>
      </section>

      {/* STACKS */}
      <section id="stack" className="bg-zinc-900 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10 text-yellow-400">Stacks</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {["React", "Node.js", ".NET", "MongoDB", "MySQL", "Azure"].map(
              (tech) => (
                <Card
                  key={tech}
                  className="bg-black border border-yellow-500/20 hover:border-yellow-400 transition"
                >
                  <CardContent className="p-6 text-center">
                    <p className="font-semibold">{tech}</p>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-bold mb-10 text-yellow-400">Projetos</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="bg-zinc-900 border border-yellow-500/20 hover:border-yellow-400 transition h-full">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h4>

                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      asChild
                      className="bg-yellow-500 hover:bg-yellow-400 text-black"
                    >
                      <a href={project.demo} target="_blank">
                        <ExternalLink size={16} /> Demo
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black"
                    >
                      <a href={project.github} target="_blank">
                        <Github size={16} /> GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-zinc-900 py-24 text-center">
        <h3 className="text-3xl font-bold mb-6 text-yellow-400">Contato</h3>

        <div className="flex justify-center gap-6">
          <a href="https://github.com/allisonrps" target="_blank">
            <Github className="hover:text-yellow-400 transition" size={28} />
          </a>

          <a href="mailto:allison_rps@hotmail.com">
            <Mail className="hover:text-yellow-400 transition" size={28} />
          </a>
        </div>
      </section>
    </div>
  );
}
