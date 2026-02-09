'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const [isCadastroOpen, setIsCadastroOpen] = useState(false); // Controle do submenu

 const cadastros = [
  { name: 'Instituições', path: '/instituicoes', icon: '🏛️' },
  { name: 'Matérias', path: '/materias', icon: '📚' },
  { name: 'Tópicos', path: '/topicos', icon: '📌' },
  { name: 'Editais', path: '/editais', icon: '📜' }, // Nova tela adicionada aqui!
];

  return (
    <aside className="fixed left-4 top-1/2 -translate-y-1/2 w-20 hover:w-64 h-[80vh] bg-white/30 backdrop-blur-lg border border-white/20 rounded-3xl transition-all duration-500 group z-50 overflow-hidden shadow-2xl">
      <div className="flex flex-col h-full py-8 px-4">
        <div className="mb-10 text-center text-2xl group-hover:scale-110 transition-transform">🌸</div>
        
        <nav className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#FFDAB9]/50 text-[#8B4513]">
            <span className="text-xl">🏠</span>
            <span className="font-serif font-medium opacity-0 group-hover:opacity-100 transition-opacity">Início</span>
          </Link>

          {/* Menu Cadastro com Subitens */}
          <div className="flex flex-col">
            <button 
              onClick={() => setIsCadastroOpen(!isCadastroOpen)}
              className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#FFDAB9]/50 text-[#8B4513] transition-all"
            >
              <span className="text-xl">📝</span>
              <span className="font-serif font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Cadastro {isCadastroOpen ? '▴' : '▾'}
              </span>
            </button>

            {/* Submenu (Só aparece se o menu de Cadastro estiver aberto) */}
            <div className={`flex flex-col gap-2 ml-4 mt-2 overflow-hidden transition-all ${isCadastroOpen ? 'max-h-40' : 'max-h-0'}`}>
              {cadastros.map((sub) => (
                <Link 
                  key={sub.path} 
                  href={sub.path}
                  className={`flex items-center gap-3 p-2 rounded-xl text-sm transition-all ${
                    pathname === sub.path ? 'bg-[#F08080] text-white' : 'text-[#8B4513] hover:text-[#F08080]'
                  }`}
                >
                  <span>{sub.icon}</span>
                  <span className="opacity-0 group-hover:opacity-100">{sub.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="mt-auto text-center opacity-0 group-hover:opacity-100 text-[#CD5C5C] text-xs font-serif">
          Monitor de estudos V1
        </div>
      </div>
    </aside>
  );
}