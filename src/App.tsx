import Background from "./components/background";
import { useState } from "react";
import Navbar from "./components/navbar";
import ProjectCard from "./components/projectcard";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);

  const contactCardStyle = (isDark: boolean) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "15px 30px",
    borderRadius: "50px",
    backgroundColor: isDark ? "rgba(255, 133, 161, 0.15)" : "white",
    border: isDark ? "1px solid #ff85a1" : "2px solid white",
    color: isDark ? "#fce7f3" : "#b56576",
    fontWeight: "bold",
    boxShadow: isDark
      ? "0 0 15px rgba(255, 133, 161, 0.3)"
      : "0 8px 15px rgba(216, 141, 156, 0.1)",
    transition: "all 0.3s ease",
    textDecoration: "none",
    cursor: "pointer",
  });

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
            marginTop: "80px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            position: "relative",
          }}
        >
          {/* Wrapper para os ícones ficarem em volta da imagem */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "600px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* MOLDURA ORIGINAL (SEM ALTERAÇÃO DE TAMANHO) */}
            <div
              style={{
                position: "relative",
                width: "90%",
                maxWidth: "600px",
                height: "375px",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                overflow: "hidden",
              }}
            >
              <img
                src="/luana-anime.jpg"
                alt="Luana estilo anime"
                // className="image-animation"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* TEXTO ABAIXO DA IMAGEM */}
          <h1
            style={{
              fontSize: "3.5rem",
              color: "#b56576",
              fontWeight: "bold",
              marginTop: "-20px",
              marginBottom: "10px",
            }}
          >
            Luana Cid
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#8a8a8a",
              maxWidth: "500px",
              lineHeight: "1.6",
            }}
          >
            Analista e Desenvolvedora de Sistemas em formação.
          </p>
        </div>
        {/* SEÇÃO SOBRE MIM */}
        <section id="aboutme"></section>
        <section
          style={{
            marginTop: "40px",
            maxWidth: "700px",
            padding: "0 20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              backgroundColor: isDark
                ? "rgba(255, 255, 255, 0.03)"
                : "rgba(255, 255, 255, 0.5)",
              padding: "30px",
              borderRadius: "30px",
              border: isDark
                ? "1px solid #ff85a1"
                : "2px solid white",
              backdropFilter: "blur(10px)",
              boxShadow: isDark
                ? "none"
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
        {/* SEÇÃO DE SKILLS */}
        <section id="skils"></section>
        <section
          style={{
            marginTop: "120px",
            textAlign: "center",
            width: "100%",
            padding: "0 20px",
          }}
        >
          <h2
            style={{
              color: isDark ? "#ff85a1" : "#b56576",
              fontSize: "2.2rem",
              marginBottom: "40px",
            }}
          >
            Tecnologias & Ferramentas
          </h2>

          {/* Grid de Ícones */}
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
            {[
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
            ].map((skill) => (
              <div
                key={skill.name}
                className="skill-item"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    backgroundColor: isDark
                      ? "rgba(255,255,255,0.05)"
                      : "white",
                    padding: "15px",
                    borderRadius: "20px",
                    border: isDark ? "1px solid #ff85a1" : "2px solid white",
                    boxShadow: isDark
                      ? "0 0 15px rgba(255, 133, 161, 0.3)"
                      : "0 8px 15px rgba(216, 141, 156, 0.1)",
                    transition: "transform 0.3s ease",
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
                    color: isDark ? "#ff85a1" : "#b56576",
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
          style={{
            marginTop: "100px",
            paddingBottom: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h2
            style={{
              marginBottom: "40px",
              color: isDark ? "#ff85a1" : "#b56576",
              fontSize: "2rem",
            }}
          >
            Meus Projetos
          </h2>

          <div
            style={{
              display: "flex",
              gap: "30px",
              flexWrap: "wrap",
              justifyContent: "center",
              maxWidth: "1000px",
            }}
          >
            <ProjectCard
              isDark={isDark}
              title="Monitor de Estudos"
              description="Um sistema para organizar seus estudos para concurso."
              tags={["React", "NestJS", "TypeScript", "NodeJS"]}
            />
          </div>
        </section>
        {/* SEÇÃO DE CONTATO */}
        <section
          id="contato"
          style={{
            marginTop: "100px",
            paddingBottom: "150px",
            textAlign: "center",
            width: "100%",
            padding: "0 20px",
          }}
        >
          <h2
            style={{
              color: isDark ? "#ff85a1" : "#b56576",
              fontSize: "2.2rem",
              marginBottom: "20px",
            }}
          >
            Vamos conversar?
          </h2>

          <p
            style={{
              color: isDark ? "#d1d1d1" : "#8a8a8a",
              marginBottom: "40px",
              fontSize: "1.1rem",
            }}
          >
            Estou sempre aberta a novas oportunidades e trocas de conhecimento!
            ✨
          </p>
          <section id="contato"></section>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {/* LINK GITHUB */}
            <a
              href="https://github.com/LuluCid"
              target="_blank"
              className="contact-card"
            >
              <div style={contactCardStyle(isDark)}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  width="30"
                  style={{ filter: isDark ? "invert(1)" : "none" }}
                />
                <span>GitHub</span>
              </div>
            </a>

            {/* LINK LINKEDIN */}
            <a
              href="https://linkedin.com/in/luana-cid-77557322a"
              target="_blank"
              className="contact-card"
            >
              <div style={contactCardStyle(isDark)}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  width="30"
                />
                <span>LinkedIn</span>
              </div>
            </a>

            {/* E-MAIL */}
            <a href="mailto:luanacidsr@gmail.com" className="contact-card">
              <div style={contactCardStyle(isDark)}>
                <span style={{ fontSize: "24px" }}>📧</span>
                <span>E-mail</span>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
