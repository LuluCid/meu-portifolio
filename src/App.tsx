import Background from "./components/background";
import { useState, useMemo } from "react";
import Navbar from "./components/navbar";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, FileText } from "lucide-react";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(!isDark);

  const info = {
    name: "Luana Cid",
    role: "Analista e Desenvolvedora de Sistemas em Foprmação",
    status: "Disponível para novos projetos",
    email: "luanacidsr@gmail.com",
    github: "https://github.com/LuluCid",
    linkedin: "https://linkedin.com/in/luana-cid-77557322a",
  };

  const projects = [
    {
      title: "Monitor de Estudos",
      type: "Full Stack",
      tags: ["React", "Node.js", "PostgreSQL"],
      img: "https://placehold.co/600x400/2A1B20/FFC2D1?text=Em+Desenvolvimento",
      status: "in_progress",
    },
  ];

  const skills = [
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "PHP", icon: "php" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Node.js", icon: "nodejs" },
    { name: "NestJS", icon: "nestjs" },
    { name: "Tailwind", icon: "tailwindcss" },
    { name: "SQL Server", icon: "microsoftsqlserver" },
    { name: "Git", icon: "git" },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
  ];
  // (useMemo evita re-render desnecessário)
  const theme = useMemo(
    () =>
      isDark
        ? {
          bg: "#1A0F12",
          textPrimary: "#fff",
          textSecondary: "#ff85a1",
          accent: "#ff85a1",
          accentGlow: "rgba(255, 133, 161, 0.3)",
          cardBg: "rgba(45, 27, 36, 0.7)",
          border: "#ff85a1",
          description: "#d1d1d1",
        }
        : {
          bg: "#FFF9FA",
          textPrimary: "#5c4044",
          textSecondary: "#b56576",
          accent: "#b56576",
          accentGlow: "rgba(255, 133, 161, 0.5)",
          cardBg: "rgba(255, 255, 255, 0.5)",
          border: "rgba(255, 133, 161, 0.25)",
          description: "#8a8a8a",
        },
    [isDark],
  );

  return (
    <div style={{ transition: "all 0.5s ease" }}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* O Background agora recebe o isDark para trocar pétalas por chuva/raios */}
      <Background isDark={isDark} />

      <main
        id="home"
        style={{
          paddingTop: "120px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* CONTAINER DA IMAGEM CENTRALIZADA */}
        <div
          style={{
            // marginTop: "60px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            position: "relative",
            minHeight: "100dvh",
            paddingBottom: "20px",
          }}
        >
          {/* STATUS ACIMA DA IMAGEM */}
          <div
            style={{
              backgroundColor: theme.accentGlow,
              border: `1px solid ${theme.accent}`,
              borderRadius: "50px",
              padding: "6px 20px",
              marginBottom: "30px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: theme.accent,
                borderRadius: "50%",
              }}
            />
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: "bold",
                color: theme.accent,
              }}
            >
              DISPONÍVEL PARA NOVOS PROJETOS
            </span>
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "600px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* SUA IMAGEM (SEM MOLDURA) */}
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "45%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "450px",
                  height: "450px",
                  background: `radial-gradient(circle, ${theme.accentGlow} 0%, transparent 70%)`,
                  filter: "blur(20px)",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "375px",
                  height: "440px",
                }}
              >
                <img
                  src="/luana-anime.png"
                  alt="Luana Cid"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>


          <h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              color: theme.textPrimary,
              fontWeight: "800",
              marginTop: "-60px",
              marginBottom: "0px",
              letterSpacing: "-2px",
              textShadow: isDark
                ? `0 0 10px ${theme.accent}, 0 0 20px rgba(255, 133, 161, 0.4)`
                : `0 0 10px rgba(181, 101, 118, 0.3)`,
              transition: "all 0.4s ease-in-out",
            }}
          >
            Luana Cid
          </h1>
          <p
            style={{
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              color: theme.textSecondary,
              marginTop: "-5px",
            }}
          >
            Analista e Desenvolvedora de Sistemas em formação.
          </p>

          {/* LINK PARA O CURRÍCULO */}
          <a
            href="/Currículo-Luana-Cid.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              marginTop: "30px",
              borderRadius: "50px",
              backgroundColor: theme.accentGlow,
              border: `1px solid ${theme.accent}`,
              color: theme.accent,
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.accent;
              e.currentTarget.style.color = isDark ? "#1A0F12" : "#FFF";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.accentGlow;
              e.currentTarget.style.color = theme.accent;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <FileText size={18} /> Ver Currículo
          </a>
        </div>
        {/* SEÇÃO SOBRE MIM */}
        <section id="aboutme"></section>
        <section
          style={{
            marginTop: "35px",
            maxWidth: "700px",
            padding: "0 20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              backgroundColor: theme.cardBg,
              padding: "30px",
              borderRadius: "30px",
              border: `1px solid ${theme.border}`,
              backdropFilter: "blur(10px)",
              boxShadow: isDark
                ? "rgba(255, 133, 161, 0.25) 0px 4px 15px"
                : "0 10px 20px rgba(216, 141, 156, 0.05)",
            }}
          >
            <h2
              style={{
                fontSize: "1.8rem",
                color: isDark ? "#ff85a1" : "#b56576",
                marginBottom: "20px",
              }}
            >
              Sobre mim
            </h2>

            <p
              style={{
                lineHeight: "1.8",
                fontSize: "1.1rem",
                color: isDark ? "#d1d1d1" : "#6d5b5e",
              }}
            >
              Olá! Eu sou a <strong>Luana</strong> 🌷, estudante de Análise e
              Desenvolvimento de Sistemas e apaixonada por transformar lógica em
              experiências. <br />
              <br />
              Sou uma desenvolvedora Full Stack que encontra sua verdadeira
              felicidade no Backend! 🛠️ Tenho uma paixão especial por{" "}
              <strong>Bancos de Dados</strong> e por entender como cada
              engrenagem de um sistema se conecta. ⚙️💎
              <br />
              <br />
              Entre uma query e outra, sigo focada nos meus estudos de ADS e na
              minha jornada profissional. Acredito que a tecnologia pode ser
              poderosa e, ao mesmo tempo, feita com muito carinho! 👩‍💻✨
            </p>
          </div>
        </section>
        {/* SKILLS */}
        <section
          id="skills"
          style={{ padding: "80px 20px", width: "100%", textAlign: "center" }}
        >
          <h2
            style={{
              color: theme.accent,
              fontSize: "2.2rem",
              marginBottom: "40px",
            }}
          >
            Tecnologias & Ferramentas
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "25px",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-item"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget.querySelector("div");
                  if (target) {
                    target.style.backgroundColor = isDark
                      ? "rgba(255, 133, 161, 0.2)"
                      : "#fff";
                    target.style.transform = "translateY(-8px)";
                  }
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget.querySelector("div");
                  if (target) {
                    target.style.backgroundColor = isDark
                      ? "rgba(255, 255, 255, 0.05)"
                      : "white";
                    target.style.transform = "translateY(0)";
                  }
                }}
              >
                <div
                  style={{
                    backgroundColor: isDark
                      ? "rgba(255, 255, 255, 0.05)"
                      : "white",
                    padding: "15px",
                    borderRadius: "20px",
                    border: isDark
                      ? `1px solid ${theme.accent}`
                      : `2px solid ${theme.border}`,
                    transition: "all 0.3s ease",
                  }}
                >
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                    alt={skill.name}
                    style={{ width: "45px", height: "45px" }}
                  />
                </div>
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    color: theme.accent,
                  }}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>
        {/* SEÇÃO DE PROJETOS */}
        <section
          id="projetos"
          style={{ padding: "96px 24px", transition: "all 0.5s ease" }}
        >
          {/* GRID DE PROJETOS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "48px",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "clamp(2rem, 4vw, 2.5rem)",
                    marginBottom: "8px",
                    color: theme.accent,
                    fontWeight: "bold",
                  }}
                >
                  Projetos
                </h2>
              </div>
              <a
                href={info.github}
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  color: theme.accent,
                  textDecoration: "none",
                }}
              >
                Ver GitHub <ArrowRight size={16} />
              </a>
            </div>
            {projects.map((proj, idx) => {
              // Lógica para identificar se o projeto está em andamento
              const isWorking = proj.status === 'in_progress';

              return (
                <div
                  key={idx}
                  className="project-card"
                  style={{
                    backgroundColor: isDark ? "#1A0F12" : "#FFF",
                    borderRadius: "24px",
                    overflow: "hidden",
                    border: `1px solid ${theme.border}`,
                    display: "flex",
                    flexDirection: "column",
                    transition:
                      "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    boxShadow: isDark
                      ? "0 10px 30px rgba(0,0,0,0.5)"
                      : "0 10px 30px rgba(181, 101, 118, 0.1)",
                    opacity: isWorking ? 0.9 : 1,
                  }}
                >
                  {/* CONTAINER DA IMAGEM COM BADGE DE STATUS */}
                  <div
                    style={{
                      height: "208px",
                      overflow: "hidden",
                      position: "relative",
                      backgroundColor: isDark ? "#2A1B20" : "#f5f5f5",
                    }}
                  >
                    {isWorking ? (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "rgba(0,0,0,0.3)",
                          zIndex: 5,
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: theme.accent,
                            color: isDark ? "#1A0F12" : "#FFF",
                            padding: "8px 16px",
                            borderRadius: "50px",
                            fontWeight: "bold",
                            fontSize: "0.9rem",
                          }}
                        >
                          EM ANDAMENTO 🛠️
                        </span>
                      </div>
                    ) : (
                      <img
                        src={proj.img}
                        alt={proj.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}

                    <div
                      style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        zIndex: 10,
                        backgroundColor: "rgba(0,0,0,0.7)",
                        backdropFilter: "blur(4px)",
                        padding: "4px 12px",
                        borderRadius: "100px",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        color: "#FFF",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {proj.type}
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "24px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        marginBottom: "12px",
                        color: isDark ? "#FFF" : "#5c4044",
                      }}
                    >
                      {proj.title}
                    </h3>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                        marginBottom: "24px",
                      }}
                    >
                      {proj.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: "0.75rem",
                            padding: "4px 10px",
                            borderRadius: "6px",
                            border: `1px solid ${theme.border}`,
                            color: isDark ? "#FFF" : "#5c4044",
                            fontWeight: "500",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* BOTÕES DE AÇÃO - DESATIVADOS SE EM ANDAMENTO */}
                    <div
                      style={{
                        marginTop: "auto",
                        display: "flex",
                        gap: "12px",
                        paddingTop: "16px",
                        borderTop: `1px solid ${theme.border}`,
                      }}
                    >
                      <button
                        disabled={isWorking}
                        style={{
                          flex: 1,
                          padding: "10px",
                          borderRadius: "12px",
                          background: "none",
                          border: "none",
                          color: isWorking
                            ? "#888"
                            : isDark
                              ? "#FFF"
                              : "#5c4044",
                          fontWeight: "bold",
                          fontSize: "0.875rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                          cursor: isWorking ? "not-allowed" : "pointer",
                        }}
                      >
                        <Github size={18} /> Código
                      </button>

                      <button
                        disabled={isWorking}
                        style={{
                          flex: 1,
                          padding: "10px",
                          borderRadius: "12px",
                          backgroundColor: isWorking ? "#ccc" : theme.accent,
                          color: isWorking
                            ? "#666"
                            : isDark
                              ? "#1A0F12"
                              : "#FFF",
                          fontWeight: "bold",
                          fontSize: "0.875rem",
                          border: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                          cursor: isWorking ? "not-allowed" : "pointer",
                          boxShadow: isWorking
                            ? "none"
                            : `0 4px 15px ${theme.accentGlow}`,
                        }}
                      >
                        <ExternalLink size={18} /> Demo
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SEÇÃO DE CONTATO - IGUAL À IMAGEM */}
        <section
          id="contato"
          style={{
            padding: "96px 24px",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          {/* Brilho de fundo (Aura centralizada) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.2,
              pointerEvents: "none",
              background: `radial-gradient(circle at center, ${theme.accent}, transparent 70%)`,
              zIndex: 0,
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 10,
              maxWidth: "768px",
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: "bold",
                lineHeight: "1.2",
                marginBottom: "24px",
                color: theme.textPrimary,
              }}
            >
              Vamos criar algo <br />
              <span style={{ fontStyle: "italic", fontWeight: "300" }}>
                memorável
              </span>{" "}
              juntos?
            </h2>

            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                marginBottom: "40px",
                opacity: 0.8,
                color: theme.textSecondary,
                maxWidth: "500px",
                marginInline: "auto",
              }}
            >
              Estou pronta para transformar desafios em código elegante. Envie
              um e-mail e vamos conversar.
            </p>

            {/* BOTÃO DE E-MAIL PRINCIPAL */}
            <a
              href={`mailto:luanacidsr@gmail.com`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "20px 40px",
                borderRadius: "100px",
                fontSize: "1.1rem",
                fontWeight: "bold",
                textDecoration: "none",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                backgroundColor: theme.accent,
                color: isDark ? "#1A0F12" : "#FFF",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
              }}
            >
              <Mail size={22} /> luanacidsr@gmail.com
            </a>

            {/* ÍCONES SOCIAIS MINIMALISTAS */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "32px",
                marginTop: "64px",
              }}
            >
              {[
                {
                  Icon: Linkedin,
                  url: "https://linkedin.com/in/luana-cid-77557322a",
                },
                { Icon: Github, url: "https://github.com/LuluCid" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  style={{
                    padding: "12px",
                    borderRadius: "50%",
                    border: `1px solid ${theme.border}`,
                    color: theme.textSecondary,
                    display: "flex",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <social.Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer
          style={{
            padding: "32px 0",
            textAlign: "center",
            borderTop: `1px solid ${theme.border}`,
            fontSize: "0.875rem",
            opacity: 0.6,
            color: theme.textSecondary,
          }}
        >
          <p>© 2026 Luana Cid • Desenvolvido com React & Paixão</p>
        </footer>
      </main>
    </div>
  );
}
