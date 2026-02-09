interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    isDark: boolean;
  }
  
  export default function ProjectCard({ title, description, tags, isDark }: ProjectProps) {
    return (
      <div style={{
        // No escuro: Vinho Profundo semi-transparente | No claro: Branco translúcido
        backgroundColor: isDark ? "rgba(61, 37, 49, 0.8)" : "rgba(255, 255, 255, 0.8)",
        borderRadius: "24px",
        padding: "25px",
        width: "300px",
        // Borda rosa vibrante no modo escuro
        border: isDark ? "2px solid #ff85a1" : "3px solid white", 
        boxShadow: isDark 
          ? "0 10px 30px rgba(255, 133, 161, 0.15)" // Brilho rosa suave à noite
          : "0 10px 20px rgba(216, 141, 156, 0.1)",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        backdropFilter: "blur(8px)",
        cursor: "pointer",
        color: isDark ? "#fce7f3" : "#5c4044"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-12px) scale(1.02)";
        if(isDark) e.currentTarget.style.boxShadow = "0 15px 40px rgba(255, 133, 161, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = isDark 
          ? "0 10px 30px rgba(255, 133, 161, 0.15)" 
          : "0 10px 20px rgba(216, 141, 156, 0.1)";
      }}
      >
        <h3 style={{ 
          margin: 0, 
          color: isDark ? "#ff85a1" : "#b56576",
          fontSize: "1.3rem" 
        }}>
          {title}
        </h3>
        
        <p style={{ 
          fontSize: "0.95rem", 
          lineHeight: "1.5", 
          opacity: isDark ? 0.9 : 0.8 
        }}>
          {description}
        </p>
        
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "auto" }}>
          {tags.map(tag => (
            <span key={tag} style={{
              fontSize: "0.75rem",
              padding: "5px 12px",
              borderRadius: "100px",
              // Tags escuras com texto rosa no Dark Mode
              backgroundColor: isDark ? "rgba(255, 133, 161, 0.1)" : "#fce7f3",
              color: isDark ? "#ff85a1" : "#b56576",
              border: isDark ? "1px solid rgba(255, 133, 161, 0.3)" : "none",
              fontWeight: "600"
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  }