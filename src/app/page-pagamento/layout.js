'use client'

import { useEffect } from 'react';

export default function PagamentoLayout({ children }) {
  useEffect(() => {
    // Forçar tema claro na página de pagamento
    document.documentElement.style.setProperty('color-scheme', 'light');
    document.documentElement.style.setProperty('background-color', '#ffffff');
    document.documentElement.style.setProperty('color', '#000000');
    document.documentElement.setAttribute('data-theme', 'light');
    
    document.body.style.setProperty('background-color', '#ffffff');
    document.body.style.setProperty('color', '#000000');
    
    // Remover classe dark se existir
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark');
    
    return () => {
      // Restaurar ao sair da página (opcional)
      document.documentElement.style.removeProperty('color-scheme');
      document.documentElement.style.removeProperty('background-color');
      document.documentElement.style.removeProperty('color');
      document.body.style.removeProperty('background-color');
      document.body.style.removeProperty('color');
    };
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#ffffff', 
      color: '#000000',
      margin: 0,
      padding: 0
    }}>
      {children}
    </div>
  );
}
