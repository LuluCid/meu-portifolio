import { Moon, Sun } from "lucide-react";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  return (
    <nav style={{
      position: "fixed",
      top: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 9999, // Z-index bem alto para não sumir atrás do fundo
      backgroundColor: isDark ? "rgba(45, 27, 36, 0.7)" : "rgba(255, 255, 255, 0.4)",
      backdropFilter: "blur(12px)",
      padding: "10px 25px",
      borderRadius: "50px",
      border: isDark ? "1px solid #ff85a1" : "2px solid white",
      display: "flex",
      gap: "20px",
      alignItems: "center",
      boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.4)" : "0 8px 32px rgba(216, 141, 156, 0.1)",
      transition: "all 0.4s ease",
      width: "fit-content"
    }}>
      <a href="#home" className="nav-link" style={{ color: isDark ? "#fce7f3" : "#5c4044" }}>Início</a>
      <a href="#aboutme" className="nav-link" style={{ color: isDark ? "#fce7f3" : "#5c4044" }}>Sobre mim</a>
      <a href="#skils" className="nav-link" style={{ color: isDark ? "#fce7f3" : "#5c4044" }}>Skills</a>
      <a href="#projetos" className="nav-link" style={{ color: isDark ? "#fce7f3" : "#5c4044" }}>Projetos</a>
      <a href="#contato" className="nav-link" style={{ color: isDark ? "#fce7f3" : "#5c4044" }}>Contato</a>

      <button
        onClick={toggleTheme}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          color: isDark ? "#ff85a1" : "#b56576",
          padding: "5px"
        }}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </nav>
  );
}