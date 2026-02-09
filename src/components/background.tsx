import { useEffect, useState } from "react";

export default function Background({ isDark }: { isDark: boolean }) {
  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    // Mantemos as pétalas em ambos os modos, apenas ajustando a quantidade/estilo se quiser
    const newElements = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: Math.random() * 8 + 5, 
      delay: Math.random() * 5,
      size: Math.random() * 15 + 10, 
    }));
    setElements(newElements);
  }, []); // Não precisa recarregar ao mudar isDark, pois a animação é a mesma

  return (
    <div style={{ 
      position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden', pointerEvents: 'none',
      // MODO CLARO: Rosa Bebê | MODO ESCURO: Vinho/Rosa Profundo
      backgroundColor: isDark ? "#2d1b24" : "#fff5f7", 
      transition: "background-color 0.8s ease"
    }}>
      {elements.map((el) => (
        <div
          key={el.id}
          style={{
            position: 'absolute',
            left: `${el.left}%`,
            top: "-10%",
            // Pétalas Rosa Choque no modo escuro para brilhar no fundo vinho
            backgroundColor: isDark ? "#ff85a1" : "#FFB6C1", 
            width: `${el.size}px`,
            height: `${el.size * 1.2}px`,
            borderRadius: "100% 0% 100% 100%",
            opacity: isDark ? 0.4 : 0.7,
            animation: `float ${el.duration}s linear infinite`,
            animationDelay: `${el.delay}s`,
            filter: isDark ? "drop-shadow(0 0 5px rgba(255, 133, 161, 0.3))" : "none",
          }}
        />
      ))}
    </div>
  );
}