import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
import { Github, Mail, ExternalLink, Linkedin, ChevronDown  } from "lucide-react";

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
        "API REST para cálculo de score de crédito com MySQL e Node.js.",
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
    <div className="min-h-screen bg-black text-white font-light">

      {/* HEADER MODERNO */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl backdrop-blur-xl bg-zinc-900/10 border border-yellow-400/10 rounded-2xl shadow-lg z-50">
        <div className="px-8 py-4 flex justify-between items-center">

          <h1 className="text-lg font-semibold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            Allison.dev
          </h1>

          <nav className="flex gap-8 text-sm text-gray-300">
            <a href="#sobre" className="hover:text-yellow-400 transition">
              Sobre
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


{/* HERO + APRESENTAÇÃO */}
<section className="pt-40 pb-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

  <div>

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
    >

      <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
        Allison Rodrigues
      </span>

      <br />

      Desenvolvedor Full Stack

    </motion.h2>


    <p className="text-gray-400 mb-8 leading-relaxed">

      Desenvolvedor Full Stack focado em aplicações modernas, APIs
      escaláveis e soluções cloud. Experiência com React, Node.js e .NET,
      trabalhando com bancos SQL e NoSQL e integrações com APIs.

    </p>


    {/* BOTÕES CONTATO */}

    <div className="flex flex-wrap gap-4 mb-8">

      <a
        href="https://github.com/allisonrps"
        target="_blank"
        className="px-6 py-3 rounded-xl bg-zinc-900/70 backdrop-blur border border-white/10 flex gap-2 items-center hover:border-yellow-400 hover:scale-105 transition"
      >
        <Github size={18} />
        GitHub
      </a>


      <a
        href="https://linkedin.com"
        target="_blank"
        className="px-6 py-3 rounded-xl bg-zinc-900/70 backdrop-blur border border-white/10 flex gap-2 items-center hover:border-yellow-400 hover:scale-105 transition"
      >
        LinkedIn
      </a>


      <a
        href="mailto:allison_rps@hotmail.com"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold flex gap-2 items-center hover:scale-105 transition"
      >
        <Mail size={18} />
        Email
      </a>


      <a
 href="/cv.pdf"
 target="_blank"
 className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold flex gap-2 items-center hover:scale-105 transition"
>
Baixar CV
</a>

    </div>


    {/* FORMAÇÃO */}

    <div className="text-sm text-gray-400 space-y-2">

      <p>🎓 Desenvolvimento de Software Multiplataforma</p>

      <p>📜 Certificação Microsoft AZ-900 (em andamento)</p>

      <p>📜 MongoDB Data Modeling</p>

      <p>🌎 Inglês B1 (TOEIC)</p>

    </div>

  </div>


  {/* FOTO */}

  <div className="flex justify-center">

    <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-zinc-800 border border-yellow-400/20 flex items-center justify-center text-gray-500">

      Sua Foto

    </div>

  </div>

</section>



      {/* SOBRE */}
      <section id="sobre" className="max-w-5xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
          Sobre Mim
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Desenvolvedor com experiência em aplicações web modernas, APIs REST,
          cloud computing e integração com dispositivos IoT. Possuo projetos
          completos com frontend, backend e banco de dados.
          
          Busco oportunidade como desenvolvedor júnior onde possa aplicar
          conhecimentos em React, Node.js e .NET e evoluir tecnicamente.
        </p>
      </section>


{/* STACKS */}
<section id="stack" className="py-28">

  <div className="max-w-6xl mx-auto px-6 text-center">

    <h3 className="text-3xl font-bold mb-16">

      <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">
        Stacks
      </span>

    </h3>

    <div className="flex flex-wrap justify-center items-center gap-12 text-gray-400">

      {/* React */}
      <div className="flex flex-col items-center gap-3 hover:scale-110 transition">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          className="w-12"
        />
        <span className="text-sm">React</span>
      </div>

      {/* Node */}
      <div className="flex flex-col items-center gap-3 hover:scale-110 transition">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          className="w-12"
        />
        <span className="text-sm">Node.js</span>
      </div>

      {/* .NET */}
      <div className="flex flex-col items-center gap-3 hover:scale-110 transition">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
          className="w-12"
        />
        <span className="text-sm">.NET</span>
      </div>

      {/* Azure */}
      <div className="flex flex-col items-center gap-3 hover:scale-110 transition">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
          className="w-12"
        />
        <span className="text-sm">Azure</span>
      </div>

      {/* Mongo */}
      <div className="flex flex-col items-center gap-3 hover:scale-110 transition">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          className="w-12"
        />
        <span className="text-sm">MongoDB</span>
      </div>

      {/* MySQL */}
      <div className="flex flex-col items-center gap-3 hover:scale-110 transition">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          className="w-12"
        />
        <span className="text-sm">MySQL</span>
      </div>

      {/* Docker */}
      <div className="flex flex-col items-center gap-3 hover:scale-110 transition">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          className="w-12"
        />
        <span className="text-sm">Docker</span>
      </div>

      {/* Git */}
      <div className="flex flex-col items-center gap-3 hover:scale-110 transition">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          className="w-12"
        />
        <span className="text-sm">Git</span>
      </div>

    </div>

  </div>

</section>

{/* PROJETOS */}
<section id="projetos" className="py-28">

  <div className="max-w-5xl mx-auto px-6">

    <h3 className="text-3xl font-bold mb-16 text-center">

      <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">
        Projetos
      </span>

    </h3>

    <div className="space-y-6">

      {projects.map((project, index) => {

        const [open, setOpen] = useState(false);

        return (

          <motion.div
            key={index}
            layout
            className="bg-zinc-900/60 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-yellow-400/40 transition"
          >

            {/* Header clicável */}

            <div
              onClick={() => setOpen(!open)}
              className="flex justify-between items-center cursor-pointer"
            >

              <div>

                <h4 className="text-xl font-semibold">

                  {project.title}

                </h4>

                <p className="text-gray-400 text-sm mt-1">

                  {project.description}

                </p>

              </div>

              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-yellow-400"
              >

                <ChevronDown />

              </motion.div>

            </div>


            {/* Conteúdo animado */}

            <AnimatePresence>

              {open && (

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >

                  <div className="mt-6 space-y-6">

                    <div className="flex flex-wrap gap-2">

                      {project.stack.map((tech) => (

                        <span
                          key={tech}
                          className="text-xs bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full"
                        >

                          {tech}

                        </span>

                      ))}

                    </div>


                    <div className="flex gap-4">

                      <a
                        href={project.github}
                        target="_blank"
                        className="px-5 py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold flex gap-2 items-center hover:scale-105 transition"
                      >

                        <Github size={16} />

                        Código

                      </a>


                      <a
                        href={project.demo}
                        target="_blank"
                        className="px-5 py-2 rounded-xl border border-yellow-400 text-yellow-400 flex gap-2 items-center hover:bg-yellow-400 hover:text-black transition"
                      >

                        <ExternalLink size={16} />

                        Demo

                      </a>

                    </div>

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

          </motion.div>

        );

      })}

    </div>

  </div>

</section>


{/* CONTATO */}
<section id="contato" className="py-28 bg-zinc-900/50 backdrop-blur">

  <div className="max-w-4xl mx-auto px-6 text-center">


    <div className="mt-14 text-gray-500 text-sm">

      © {new Date().getFullYear()} Allison Dev

    </div>

  </div>

</section>


    </div>
  );
}
