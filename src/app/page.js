"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Flex, Box, Text, Icon, Button } from "@chakra-ui/react"
import { rgba } from "framer-motion";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [chartType, setChartType] = useState('donut');
  const [kanbanData, setKanbanData] = useState({
    'Kanban 1': [
      { id: 1, name: 'Nome Exemplo 1', phone: '+55 (11) 1234-5678' },
      { id: 2, name: 'Nome Exemplo 2', phone: '+55 (11) 1234-5678' }
    ],
    'Kanban 2': [],
    'Kanban 3': []
  });
  const [draggedItem, setDraggedItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Forçar modo escuro
  useEffect(() => {
    // Força o fundo escuro no body e html
    document.documentElement.style.setProperty('color-scheme', 'dark');
    document.documentElement.style.setProperty('background-color', '#000000');
    document.documentElement.style.setProperty('color', '#ffffff');
    
    document.body.style.setProperty('background-color', '#000000');
    document.body.style.setProperty('color', '#ffffff');
    
    // Adiciona classe para forçar modo escuro
    document.documentElement.classList.add('force-dark-mode');
    document.body.classList.add('force-dark-mode');
    
    // Adiciona estilos CSS inline para garantir modo escuro
    const style = document.createElement('style');
    style.textContent = `
      :root {
        color-scheme: dark !important;
        background-color: #000000 !important;
        color: #ffffff !important;
      }
      
      html, body {
        background-color: #000000 !important;
        color: #ffffff !important;
        color-scheme: dark !important;
      }
      
      * {
        color-scheme: dark !important;
      }
      
      .force-dark-mode {
        background-color: #000000 !important;
        color: #ffffff !important;
        color-scheme: dark !important;
      }
      
      /* Força fundo escuro em todos os elementos */
      div, section, main, header, footer {
        background-color: inherit !important;
      }
      
      /* Garante que elementos com fundo transparente tenham fundo escuro */
      [style*="background-color: transparent"], 
      [style*="background: transparent"] {
        background-color: rgba(0, 0, 0, 0.8) !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      // Cleanup ao desmontar
      document.head.removeChild(style);
      document.documentElement.classList.remove('force-dark-mode');
      document.body.classList.remove('force-dark-mode');
    };
  }, []);

  const handleDragStart = (e, item, sourceColumn) => {
    setDraggedItem({ ...item, sourceColumn });
    e.dataTransfer.setData('text/plain', JSON.stringify({ ...item, sourceColumn }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, targetColumn) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    if (data) {
      const draggedItem = JSON.parse(data);
      if (draggedItem.sourceColumn !== targetColumn) {
        setKanbanData(prev => {
          const newData = { ...prev };
          // Remove from source column
          newData[draggedItem.sourceColumn] = newData[draggedItem.sourceColumn].filter(item => item.id !== draggedItem.id);
          // Add to target column
          newData[targetColumn] = [...newData[targetColumn], { id: draggedItem.id, name: draggedItem.name, phone: draggedItem.phone }];
          return newData;
        });
      }
    }
    setDraggedItem(null);
  };

  const renderKanban = () => {
    const columns = ['Kanban 1', 'Kanban 2', 'Kanban 3'];
    const colors = { 'Kanban 1': '#10B981', 'Kanban 2': '#3B82F6', 'Kanban 3': '#F59E0B' };
    
    return (
      <Box position="relative" w="900px" h="500px" mx="auto">
        <svg width="900" height="500" viewBox="0 0 900 500">
          {/* Background */}
          <rect width="900" height="500" fill="#1a1a1a" rx="12"/>
          
          {/* Columns */}
          {columns.map((column, index) => (
            <g key={column}>
              {/* Column background - cinza escuro (incluindo título) */}
              <rect 
                x={50 + index * 280} 
                y="20" 
                width="250" 
                height="460" 
                fill="#2d3748" 
                rx="8"
                stroke="#4a5568"
                strokeWidth="1"
              />
              
              {/* Colored top border - mais baixa e menor */}
              <rect 
                x={70 + index * 280} 
                y="35" 
                width="210" 
                height="3" 
                fill={colors[column]}
                rx="2"
              />
              
              {/* Column title */}
              <text 
                x={175 + index * 280} 
                y="65" 
                textAnchor="middle" 
                fill="white" 
                fontSize="16" 
                fontWeight="bold"
              >
                {column}
              </text>
              
              {/* Drop zone - área maior para melhor detecção */}
              <rect 
                x={45 + index * 280} 
                y="75" 
                width="260" 
                height="430" 
                fill="transparent"
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, column)}
                style={{ cursor: 'pointer' }}
              />
              
              {/* Cards */}
              {kanbanData[column].map((item, itemIndex) => (
                <g key={item.id}>
                  {/* Card background - cinza mais claro */}
                  <rect 
                    x={60 + index * 280} 
                    y={80 + itemIndex * 120} 
                    width="230" 
                    height="100" 
                    fill="#4a5568" 
                    rx="6"
                    stroke="#6b7280"
                    strokeWidth="1"
                  />
                  
                  {/* Colored top border for card */}
                  <rect 
                    x={60 + index * 280} 
                    y={80 + itemIndex * 120} 
                    width="230" 
                    height="3" 
                    fill={colors[column]}
                    rx="6"
                  />
                  
                  {/* Card content */}
                  <text 
                    x={75 + index * 280} 
                    y={105 + itemIndex * 120} 
                    fill="white" 
                    fontSize="12" 
                    fontWeight="bold"
                  >
                    {item.name}
                  </text>
                  
                  <text 
                    x={75 + index * 280} 
                    y={165 + itemIndex * 120} 
                    fill="white" 
                    fontSize="10"
                  >
                    {item.phone}
                  </text>
                  
                  {/* Drag handle - área muito maior para melhor detecção */}
                  <rect 
                    x={55 + index * 280} 
                    y={75 + itemIndex * 120} 
                    width="240" 
                    height="110" 
                    fill="transparent"
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, item, column)}
                    style={{ cursor: 'grab' }}
                  />
                </g>
              ))}
            </g>
          ))}
        </svg>
        
        {/* Instructions */}
        <Box position="absolute" bottom="-60px" left="0" right="0" textAlign="center">
          <Text color="gray.400" fontSize="sm">
            Arraste os cards entre as colunas para testar o drag and drop
          </Text>
        </Box>
      </Box>
    );
  };

  const renderChart = () => {
    switch(chartType) {
      case 'donut':
        return (
          <Box position="relative" w="300px" h="300px" mx="auto">
            <svg width="300" height="300" viewBox="0 0 300 300">
              {/* Gráfico de Donut - Vendas (Verde) - Metade esquerda */}
              <circle 
                cx="150" cy="150" r="120" 
                fill="none" 
                stroke="#10B981" 
                strokeWidth="40" 
                strokeDasharray="377" 
                strokeDashoffset="0" 
                transform="rotate(-90 150 150)"
                style={{
                  animation: 'chartAppear 0.8s ease-out'
                }}
              />
              
              {/* Gráfico de Donut - Perdas (Vermelho) - Metade direita */}
              <circle 
                cx="150" cy="150" r="120" 
                fill="none" 
                stroke="#EF4444" 
                strokeWidth="40" 
                strokeDasharray="377" 
                strokeDashoffset="0" 
                transform="rotate(90 150 150)"
                style={{
                  animation: 'chartAppear 0.8s ease-out 0.2s both'
                }}
              />
              
              {/* Centro do donut */}
              <circle cx="150" cy="150" r="80" fill="transparent"/>
              
              {/* Texto central */}
              <text x="150" y="140" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Total</text>
              <text x="150" y="160" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">100%</text>
            </svg>
            
            {/* Legenda */}

          </Box>
        );
      
      case 'vetorial':
        return (
          <Box position="relative" w="400px" h="300px" mx="auto">
            <svg width="400" height="300" viewBox="0 0 400 300">
              {/* Eixos */}
              <line x1="50" y1="250" x2="350" y2="250" stroke="#4A5568" strokeWidth="2"/>
              <line x1="50" y1="50" x2="50" y2="250" stroke="#4A5568" strokeWidth="2"/>
              
              {/* Linha Verde - Vendas (mais aleatória) */}
              <path 
                d="M50,180 L100,160 L150,200 L200,140 L250,180 L300,120 L350,160" 
                stroke="#10B981" 
                strokeWidth="3" 
                fill="none"
                style={{
                  animation: 'chartAppear 0.8s ease-out'
                }}
              />
              
              {/* Pontos na linha verde */}
              <circle cx="50" cy="180" r="4" fill="#10B981" style={{animation: 'pointAppear 0.6s ease-out 0.3s both'}}/>
              <circle cx="100" cy="160" r="4" fill="#10B981" style={{animation: 'pointAppear 0.6s ease-out 0.4s both'}}/>
              <circle cx="150" cy="200" r="4" fill="#10B981" style={{animation: 'pointAppear 0.6s ease-out 0.5s both'}}/>
              <circle cx="200" cy="140" r="4" fill="#10B981" style={{animation: 'pointAppear 0.6s ease-out 0.6s both'}}/>
              <circle cx="250" cy="180" r="4" fill="#10B981" style={{animation: 'pointAppear 0.6s ease-out 0.7s both'}}/>
              <circle cx="300" cy="120" r="4" fill="#10B981" style={{animation: 'pointAppear 0.6s ease-out 0.8s both'}}/>
              <circle cx="350" cy="160" r="4" fill="#10B981" style={{animation: 'pointAppear 0.6s ease-out 0.9s both'}}/>
              
              {/* Linha Vermelha - Perdas (mais aleatória) */}
              <path 
                d="M50,200 L100,220 L150,180 L200,240 L250,200 L300,220 L350,180" 
                stroke="#EF4444" 
                strokeWidth="3" 
                fill="none"
                style={{
                  animation: 'chartAppear 0.8s ease-out 0.2s both'
                }}
              />
              
              {/* Pontos na linha vermelha */}
              <circle cx="50" cy="200" r="4" fill="#EF4444" style={{animation: 'pointAppear 0.6s ease-out 0.5s both'}}/>
              <circle cx="100" cy="220" r="4" fill="#EF4444" style={{animation: 'pointAppear 0.6s ease-out 0.6s both'}}/>
              <circle cx="150" cy="180" r="4" fill="#EF4444" style={{animation: 'pointAppear 0.6s ease-out 0.7s both'}}/>
              <circle cx="200" cy="240" r="4" fill="#EF4444" style={{animation: 'pointAppear 0.6s ease-out 0.8s both'}}/>
              <circle cx="250" cy="200" r="4" fill="#EF4444" style={{animation: 'pointAppear 0.6s ease-out 0.9s both'}}/>
              <circle cx="300" cy="220" r="4" fill="#EF4444" style={{animation: 'pointAppear 0.6s ease-out 1.0s both'}}/>
              <circle cx="350" cy="180" r="4" fill="#EF4444" style={{animation: 'pointAppear 0.6s ease-out 1.1s both'}}/>
              
              {/* Labels dos eixos */}
              <text x="200" y="280" textAnchor="middle" fill="white" fontSize="12">Datas</text>
              <text x="25" y="150" textAnchor="middle" fill="white" fontSize="12" transform="rotate(-90 25 150)">Fechamentos</text>
              
              {/* Datas no eixo X */}
              <text x="50" y="270" textAnchor="middle" fill="white" fontSize="10">Jan</text>
              <text x="100" y="270" textAnchor="middle" fill="white" fontSize="10">Fev</text>
              <text x="150" y="270" textAnchor="middle" fill="white" fontSize="10">Mar</text>
              <text x="200" y="270" textAnchor="middle" fill="white" fontSize="10">Abr</text>
              <text x="250" y="270" textAnchor="middle" fill="white" fontSize="10">Mai</text>
              <text x="300" y="270" textAnchor="middle" fill="white" fontSize="10">Jun</text>
              <text x="350" y="270" textAnchor="middle" fill="white" fontSize="10">Jul</text>
              
              {/* Números no eixo Y */}
              <text x="40" y="255" textAnchor="end" fill="white" fontSize="10">0</text>
              <text x="40" y="205" textAnchor="end" fill="white" fontSize="10">10</text>
              <text x="40" y="155" textAnchor="end" fill="white" fontSize="10">20</text>
              <text x="40" y="105" textAnchor="end" fill="white" fontSize="10">30</text>
              <text x="40" y="55" textAnchor="end" fill="white" fontSize="10">40</text>
              
              {/* Título */}
              <text x="200" y="30" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                Vendas vs Perdas - 2024
              </text>
              
              {/* Legenda */}
              <rect x="10" y="10" width="120" height="50" fill="rgba(0,0,0,0.7)" rx="5"/>
              <text x="70" y="30" textAnchor="middle" fill="#10B981" fontSize="10" fontWeight="bold">Vendas</text>
              <text x="70" y="45" textAnchor="middle" fill="#EF4444" fontSize="10" fontWeight="bold">Perdas</text>
            </svg>
          </Box>
        );
      
      case 'barras':
        return (
          <Box position="relative" w="400px" h="300px" mx="auto">
            <svg width="400" height="300" viewBox="0 0 400 300">
              {/* Eixos */}
              <line x1="50" y1="250" x2="350" y2="250" stroke="#4A5568" strokeWidth="2"/>
              <line x1="50" y1="50" x2="50" y2="250" stroke="#4A5568" strokeWidth="2"/>
              
              {/* Barra Verde - Vendas */}
              <rect x="120" y="80" width="60" height="120" fill="#10B981" style={{animation: 'barAppear 0.6s ease-out'}}/>
              
              {/* Barra Vermelha - Perdas */}
              <rect x="220" y="160" width="60" height="40" fill="#EF4444" style={{animation: 'barAppear 0.6s ease-out 0.2s both'}}/>
              
              {/* Labels dos eixos */}
              <text x="200" y="280" textAnchor="middle" fill="white" fontSize="12">Categorias</text>
              <text x="25" y="150" textAnchor="middle" fill="white" fontSize="12" transform="rotate(-90 25 150)">Quantidade</text>
              
              {/* Labels das barras */}
              <text x="150" y="270" textAnchor="middle" fill="white" fontSize="12">Vendas</text>
              <text x="250" y="270" textAnchor="middle" fill="white" fontSize="12">Perdas</text>
              
              {/* Números no eixo Y */}
              <text x="40" y="255" textAnchor="end" fill="white" fontSize="10">0</text>
              <text x="40" y="205" textAnchor="end" fill="white" fontSize="10">25</text>
              <text x="40" y="155" textAnchor="end" fill="white" fontSize="10">50</text>
              <text x="40" y="105" textAnchor="end" fill="white" fontSize="10">75</text>
              <text x="40" y="55" textAnchor="end" fill="white" fontSize="10">100</text>
              
              {/* Valores nas barras */}
              <text x="150" y="70" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">75</text>
              <text x="250" y="150" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">25</text>
              
              {/* Título */}
              <text x="200" y="30" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                Vendas vs Perdas
              </text>
              
              {/* Legenda */}
              <rect x="10" y="10" width="120" height="50" fill="rgba(0,0,0,0.7)" rx="5"/>
              <text x="70" y="30" textAnchor="middle" fill="#10B981" fontSize="10" fontWeight="bold">Vendas</text>
              <text x="70" y="45" textAnchor="middle" fill="#EF4444" fontSize="10" fontWeight="bold">Perdas</text>
            </svg>
          </Box>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={styles.page}>
      <header className={`${styles.header} ${isScrolled ? styles.headerVisible : ''}`}>
        <div className={styles.headerContent}>
          <Image 
            src="/logo.png"
            alt="Effective Gain"
            width={150}
            height={50}
            style={{
              height: 'auto',
              maxHeight: '40px'
            }}
          />
          <nav className={styles.nav}>
            <a href="#home" className={styles.navLink}>Home</a>
            <a href="#sobre" className={styles.navLink}>Sobre</a>
            <a href="#servicos" className={styles.navLink}>Serviços</a>
            <a href="#contato" className={styles.navLink}>Contato</a>
          </nav>
        </div>
      </header>

                    <main className={`${styles.main} ${styles.waveAnimation}`} style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 800\'%3E%3Cdefs%3E%3ClinearGradient id=\'grad1\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' style=\'stop-color:%23000;stop-opacity:1\' /%3E%3Cstop offset=\'100%25\' style=\'stop-color:%23000;stop-opacity:1\' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23grad1)\'/%3E%3Cpath d=\'M0,250 Q200,150 400,250 T800,250 T1200,250\' stroke=\'%234A90E2\' stroke-width=\'2\' fill=\'none\' opacity=\'0.7\'/%3E%3Cpath d=\'M0,275 Q200,375 400,275 T800,275 T1200,275\' stroke=\'%238B5CF6\' stroke-width=\'1.5\' fill=\'none\' opacity=\'0.6\'/%3E%3Cpath d=\'M0,300 Q200,400 400,300 T800,300 T1200,300\' stroke=\'%236B7FD7\' stroke-width=\'1.8\' fill=\'none\' opacity=\'0.6\'/%3E%3Cpath d=\'M0,325 Q200,225 400,325 T800,325 T1200,325\' stroke=\'%2306B6D4\' stroke-width=\'1.4\' fill=\'none\' opacity=\'0.5\'/%3E%3Cpath d=\'M0,350 Q200,250 400,350 T800,350 T1200,350\' stroke=\'%2388A2D4\' stroke-width=\'1.5\' fill=\'none\' opacity=\'0.5\'/%3E%3Cpath d=\'M0,375 Q200,475 400,375 T800,375 T1200,375\' stroke=\'%23DC2626\' stroke-width=\'1.3\' fill=\'none\' opacity=\'0.4\'/%3E%3Cpath d=\'M0,400 Q200,500 400,400 T800,400 T1200,400\' stroke=\'%23A8B5D1\' stroke-width=\'1.3\' fill=\'none\' opacity=\'0.4\'/%3E%3Cpath d=\'M0,450 Q200,350 400,450 T800,450 T1200,450\' stroke=\'%23B8C5CE\' stroke-width=\'1.1\' fill=\'none\' opacity=\'0.3\'/%3E%3Cpath d=\'M0,500 Q200,600 400,500 T800,500 T1200,500\' stroke=\'%235A9FE2\' stroke-width=\'1.6\' fill=\'none\' opacity=\'0.6\'/%3E%3Cpath d=\'M0,550 Q200,450 400,550 T800,550 T1200,550\' stroke=\'%237A8FD7\' stroke-width=\'1.4\' fill=\'none\' opacity=\'0.4\'/%3E%3Cpath d=\'M0,600 Q200,700 400,600 T800,600 T1200,600\' stroke=\'%238A7FD7\' stroke-width=\'1.0\' fill=\'none\' opacity=\'0.3\'/%3E%3Cpath d=\'M0,625 Q200,525 400,625 T800,625 T1200,625\' stroke=\'%234A90E2\' stroke-width=\'1.2\' fill=\'none\' opacity=\'0.5\'/%3E%3Cpath d=\'M0,650 Q200,750 400,650 T800,650 T1200,650\' stroke=\'%236B7FD7\' stroke-width=\'1.3\' fill=\'none\' opacity=\'0.6\'/%3E%3Cpath d=\'M0,675 Q200,575 400,675 T800,675 T1200,675\' stroke=\'%2388A2D4\' stroke-width=\'1.1\' fill=\'none\' opacity=\'0.4\'/%3E%3Cpath d=\'M0,700 Q200,800 400,700 T800,700 T1200,700\' stroke=\'%235A9FE2\' stroke-width=\'1.4\' fill=\'none\' opacity=\'0.5\'/%3E%3Cpath d=\'M0,725 Q200,625 400,725 T800,725 T1200,725\' stroke=\'%237A8FD7\' stroke-width=\'1.0\' fill=\'none\' opacity=\'0.3\'/%3E%3C/svg%3E")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1
        }}></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Image 
            src="/logo.png"
            alt="Effective Gain"
            width={300}
            height={100}
            style={{
              height: 'auto',
              maxHeight: '80px',
              marginBottom: '20px'
            }}
          />
          <p className={styles.subtitle}>
            Transforme a forma como você faz negócios com nosso CRM, aumentando sua eficiência e produtividade.
          </p>
        </div>
      </main>

      <div className={`${styles.scrollIndicator} ${isScrolled ? styles.scrollIndicatorHidden : ''}`}>
        <div className={styles.scrollBall}>
          <div className={styles.scrollArrow}></div>
        </div>
      </div>

      <Flex 
        gap={6} 
        justify="center" 
        align="center" 
        wrap="wrap" 
        maxW="1200px" 
        mx="auto" 
        px={6}
        py={16}
      >
        <Box
          bg="rgba(255, 255, 255, 0.05)"
          backdropFilter="blur(10px)"
          border="1px solid rgba(255, 255, 255, 0.1)"
          borderRadius="xl"
          p={8}
          w="300px"
          h="220px"
          textAlign="center"
          transition="all 0.3s ease"
          _hover={{
            transform: "translateY(-5px)",
            borderColor: "rgba(255, 255, 255, 0.2)",
            bg: "rgba(255, 255, 255, 0.08)"
          }}
        >
          <Box
            w="60px"
            h="60px"
            bg="blue.500"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx="auto"
            mb={4}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-layout-kanban">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4 4l6 0" />
              <path d="M14 4l6 0" />
              <path d="M4 8m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
              <path d="M14 8m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
            </svg>
          </Box>
          <Text fontSize="xl" fontWeight="bold" color="white" mb={3}>
            Kanban
          </Text>
          <Text color="gray.300" lineHeight="1.6">
            Gerencie todos os seus clientes e vendas em um só lugar com ferramentas poderosas e intuitivas.
          </Text>
        </Box>

        <Box
          bg="rgba(255, 255, 255, 0.05)"
          backdropFilter="blur(10px)"
          border="1px solid rgba(255, 255, 255, 0.1)"
          borderRadius="xl"
          p={8}
          w="300px"
          h="220px"
          textAlign="center"
          transition="all 0.3s ease"
          _hover={{
            transform: "translateY(-5px)",
            borderColor: "rgba(255, 255, 255, 0.2)",
            bg: "rgba(255, 255, 255, 0.08)"
          }}
        >
          <Box
            w="60px"
            h="60px"
            bg="green.500"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx="auto"
            mb={4}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot-icon lucide-bot">
              <path d="M12 8V4H8"/>
              <rect width="16" height="12" x="4" y="8" rx="2"/>
              <path d="M2 14h2"/>
              <path d="M20 14h2"/>
              <path d="M15 13v2"/>
              <path d="M9 13v2"/>
            </svg>
          </Box>
          <Text fontSize="xl" fontWeight="bold" color="white" mb={3}>
            Automação Inteligente
          </Text>
          <Text color="gray.300" lineHeight="1.6">
            Automatize processos repetitivos e aumente sua produtividade com IA avançada.
          </Text>
        </Box>

        <Box
          bg="rgba(255, 255, 255, 0.05)"
          backdropFilter="blur(10px)"
          border="1px solid rgba(255, 255, 255, 0.1)"
          borderRadius="xl"
          p={8}
          w="300px"
          h="220px"
          textAlign="center"
          transition="all 0.3s ease"
          _hover={{
            transform: "translateY(-5px)",
            borderColor: "rgba(255, 255, 255, 0.2)",
            bg: "rgba(255, 255, 255, 0.08)"
          }}
        >
          <Box
            w="60px"
            h="60px"
            bg="purple.500"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx="auto"
            mb={4}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-report-search">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" />
              <path d="M18 12v-5a2 2 0 0 0 -2 -2h-2" />
              <path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
              <path d="M8 11h4" />
              <path d="M8 15h3" />
              <path d="M16.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
              <path d="M18.5 19.5l2.5 2.5" />
            </svg>
          </Box>
          <Text fontSize="xl" fontWeight="bold" color="white" mb={3}>
            Relatórios Avançados
          </Text>
          <Text color="gray.300" lineHeight="1.6">
            Acompanhe métricas importantes e tome decisões baseadas em dados reais.
          </Text>
        </Box>

        <Box
          bg="rgba(255, 255, 255, 0.05)"
          backdropFilter="blur(10px)"
          border="1px solid rgba(255, 255, 255, 0.1)"
          borderRadius="xl"
          p={8}
          w="300px"
          h="220px"
          textAlign="center"
          transition="all 0.3s ease"
          _hover={{
            transform: "translateY(-5px)",
            borderColor: "rgba(255, 255, 255, 0.2)",
            bg: "rgba(255, 255, 255, 0.08)"
          }}
        >
          <Box
            w="60px"
            h="60px"
            bg="orange.500"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx="auto"
            mb={4}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </Box>
          <Text fontSize="xl" fontWeight="bold" color="white" mb={3}>
            Analytics
          </Text>
          <Text color="gray.300" lineHeight="1.6">
            Visualize dados importantes e tome decisões baseadas em métricas reais.
          </Text>
        </Box>

        <Box
          bg="rgba(255, 255, 255, 0.05)"
          backdropFilter="blur(10px)"
          border="1px solid rgba(255, 255, 255, 0.1)"
          borderRadius="xl"
          p={8}
          w="300px"
          h="220px"
          textAlign="center"
          transition="all 0.3s ease"
          _hover={{
            transform: "translateY(-5px)",
            borderColor: "rgba(255, 255, 255, 0.2)",
            bg: "rgba(255, 255, 255, 0.08)"
          }}
        >
          <Box
            w="60px"
            h="60px"
            bg="teal.500"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx="auto"
            mb={4}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-webhook">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4.876 12.61a4 4 0 0 0 6.124 3.39 6 6 0 1 0 -6 -6" />
              <path d="M15 15.5a4 4 0 0 0 6 0v-4a4 4 0 0 0 -6 0" />
              <path d="M16.5 13.5a4 4 0 0 0 6 0v-4a4 4 0 0 0 -6 0" />
              <path d="M19.5 11.5a4 4 0 0 0 6 0v-4a4 4 0 0 0 -6 0" />
            </svg>
          </Box>
          <Text fontSize="xl" fontWeight="bold" color="white" mb={3}>
            Integração
          </Text>
          <Text color="gray.300" lineHeight="1.6">
            Conecte com outras ferramentas e sincronize dados automaticamente.
          </Text>
        </Box>

        <Box
          bg="rgba(255, 255, 255, 0.05)"
          backdropFilter="blur(10px)"
          border="1px solid rgba(255, 255, 255, 0.1)"
          borderRadius="xl"
          p={8}
          w="300px"
          h="220px"
          textAlign="center"
          transition="all 0.3s ease"
          _hover={{
            transform: "translateY(-5px)",
            borderColor: "rgba(255, 255, 255, 0.2)",
            bg: "rgba(255, 255, 255, 0.08)"
          }}
        >
          <Box
            w="60px"
            h="60px"
            bg="red.500"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx="auto"
            mb={4}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bell">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            </svg>
          </Box>
          <Text fontSize="xl" fontWeight="bold" color="white" mb={3}>
            Notificações
          </Text>
          <Text color="gray.300" lineHeight="1.6">
            Receba alertas importantes e mantenha-se informado sobre tudo.
          </Text>
        </Box>
      </Flex>

      <section id="sobre" className={styles.section} style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Formas geométricas de fundo - toda a seção */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="0"
          opacity="0.15"
        >
          <svg width="100%" height="100%" viewBox="0 0 1200 800" style={{ position: 'absolute' }}>
            {/* Círculos */}
            <circle cx="80" cy="60" r="35" fill="#6B7280" opacity="0.4"/>
            <circle cx="1150" cy="100" r="20" fill="#6B7280" opacity="0.3"/>
            <circle cx="120" cy="600" r="30" fill="#6B7280" opacity="0.35"/>
            <circle cx="1080" cy="550" r="25" fill="#6B7280" opacity="0.4"/>
            <circle cx="600" cy="80" r="15" fill="#6B7280" opacity="0.3"/>
            <circle cx="400" cy="700" r="20" fill="#6B7280" opacity="0.35"/>
            
            {/* Retângulos */}
            <rect x="30" y="180" width="50" height="35" fill="#6B7280" opacity="0.3" rx="6"/>
            <rect x="1050" y="250" width="70" height="45" fill="#6B7280" opacity="0.35" rx="8"/>
            <rect x="180" y="350" width="60" height="40" fill="#6B7280" opacity="0.3" rx="5"/>
            <rect x="900" y="450" width="55" height="30" fill="#6B7280" opacity="0.4" rx="7"/>
            <rect x="500" y="200" width="40" height="25" fill="#6B7280" opacity="0.3" rx="4"/>
            
            {/* Triângulos */}
            <polygon points="70,320 110,290 150,320" fill="#6B7280" opacity="0.4"/>
            <polygon points="950,120 990,90 1030,120" fill="#6B7280" opacity="0.35"/>
            <polygon points="280,80 320,50 360,80" fill="#6B7280" opacity="0.3"/>
            <polygon points="850,500 890,470 930,500" fill="#6B7280" opacity="0.4"/>
            <polygon points="450,650 490,620 530,650" fill="#6B7280" opacity="0.35"/>
            
            {/* Hexágonos */}
            <polygon points="350,60 390,60 410,90 390,120 350,120 330,90" fill="#6B7280" opacity="0.3"/>
            <polygon points="750,420 790,420 810,450 790,480 750,480 730,450" fill="#6B7280" opacity="0.35"/>
            <polygon points="650,300 690,300 710,330 690,360 650,360 630,330" fill="#6B7280" opacity="0.4"/>
            
            {/* Elipses */}
            <ellipse cx="550" cy="120" rx="45" ry="20" fill="#6B7280" opacity="0.3"/>
            <ellipse cx="750" cy="420" rx="35" ry="15" fill="#6B7280" opacity="0.4"/>
            <ellipse cx="300" cy="500" rx="40" ry="18" fill="#6B7280" opacity="0.35"/>
            
            {/* Linhas diagonais */}
            <line x1="40" y1="40" x2="140" y2="140" stroke="#6B7280" strokeWidth="2" opacity="0.3"/>
            <line x1="1060" y1="40" x2="1160" y2="140" stroke="#6B7280" strokeWidth="3" opacity="0.35"/>
            <line x1="90" y1="480" x2="190" y2="530" stroke="#6B7280" strokeWidth="2" opacity="0.3"/>
            <line x1="600" y1="100" x2="700" y2="150" stroke="#6B7280" strokeWidth="2" opacity="0.4"/>
            <line x1="400" y1="600" x2="500" y2="650" stroke="#6B7280" strokeWidth="3" opacity="0.35"/>
          </svg>
        </Box>
        
                  <Box maxW="1200px" mx="auto" mt={16} position="relative" zIndex="1">
            
            {/* Linha Heartbeat com gradiente */}
            <Box 
              w="100%" 
              h="4px" 
              mb={16}
              borderRadius="full"
              background="linear-gradient(90deg, #3B82F6 0%, #8B5CF6 50%, #4C1D95 100%)"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                background="linear-gradient(90deg, #60A5FA 0%, #A78BFA 50%, #7C3AED 100%)"
                animation="heartbeat 2s ease-in-out infinite"
                borderRadius="full"
              />
            </Box>
            
            {/* Layout em três colunas */}
            <Flex gap={20} mt={24} wrap="wrap" justify="center">
            {/* Coluna 1 - O Que Nos Torna Únicos */}
            <Box flex="1" minW="350px" maxW="400px">
              <Box 
                bg="rgba(255, 255, 255, 0.05)"
                backdropFilter="blur(10px)"
                border="1px solid rgba(255, 255, 255, 0.1)"
                borderRadius="xl"
                p={8}
                h="100%"
                display="flex"
                flexDirection="column"
              >
                <Text fontSize="2xl" fontWeight="bold" color="white" mb={8}>
                  O Que Nos Torna Únicos?
                </Text>
                <Flex direction="column" gap={4} flex="1">
                  <Flex align="flex-start" gap={4}>
                    <Box w="20px" h="20px" color="green.400" mt={1} flexShrink={0}>
                      <i className="bi bi-check-circle" style={{ fontSize: '20px' }}></i>
                    </Box>
                    <Text color="gray.300" fontSize="lg"><Text as="span" fontWeight="bold">Servidor individual por cliente</Text> (performance e segurança)</Text>
                  </Flex>
                  <Flex align="flex-start" gap={4}>
                    <Box w="20px" h="20px" color="green.400" mt={1} flexShrink={0}>
                      <i className="bi bi-check-circle" style={{ fontSize: '20px' }}></i>
                    </Box>
                    <Text color="gray.300" fontSize="lg"><Text as="span" fontWeight="bold">Foco no WhatsApp como canal principal de impacto</Text></Text>
                  </Flex>
                  <Flex align="flex-start" gap={4}>
                    <Box w="20px" h="20px" color="green.400" mt={1} flexShrink={0}>
                      <i className="bi bi-check-circle" style={{ fontSize: '20px' }}></i>
                    </Box>
                    <Text color="gray.300" fontSize="lg"><Text as="span" fontWeight="bold">Robôs treinados com linguagem humanizada e scripts personalizados</Text></Text>
                  </Flex>
                  <Flex align="flex-start" gap={4}>
                    <Box w="20px" h="20px" color="green.400" mt={1} flexShrink={0}>
                      <i className="bi bi-check-circle" style={{ fontSize: '20px' }}></i>
                    </Box>
                    <Text color="gray.300" fontSize="lg"><Text as="span" fontWeight="bold">Evolução progressiva conforme a maturidade digital do cliente</Text></Text>
                  </Flex>
                  <Flex align="flex-start" gap={4}>
                    <Box w="20px" h="20px" color="green.400" mt={1} flexShrink={0}>
                      <i className="bi bi-check-circle" style={{ fontSize: '20px' }}></i>
                    </Box>
                    <Text color="gray.300" fontSize="lg"><Text as="span" fontWeight="bold">Atendimento com suporte humano na implantação e adaptação</Text></Text>
                  </Flex>
                  <Flex align="flex-start" gap={4}>
                    <Box w="20px" h="20px" color="green.400" mt={1} flexShrink={0}>
                      <i className="bi bi-check-circle" style={{ fontSize: '20px' }}></i>
                    </Box>
                    <Text color="gray.300" fontSize="lg"><Text as="span" fontWeight="bold">CRM com IA integrada e servidor exclusivo</Text></Text>
                  </Flex>
                  <Flex align="flex-start" gap={4}>
                    <Box w="20px" h="20px" color="green.400" mt={1} flexShrink={0}>
                      <i className="bi bi-check-circle" style={{ fontSize: '20px' }}></i>
                    </Box>
                    <Text color="gray.300" fontSize="lg"><Text as="span" fontWeight="bold">Disparo automatizado de mensagens</Text></Text>
                  </Flex>
                  <Flex align="flex-start" gap={4}>
                    <Text color="gray.300" fontSize="lg"><Text as="span" fontWeight="bold">E muito mais!</Text></Text>
                  </Flex>
                </Flex>
              </Box>
            </Box>
            
            {/* Coluna 2 - Sobre Nós */}
            <Box flex="1" minW="350px" maxW="400px">
              <Box 
                bg="rgba(255, 255, 255, 0.05)"
                backdropFilter="blur(10px)"
                border="1px solid rgba(255, 255, 255, 0.1)"
                borderRadius="xl"
                p={8}
                h="100%"
                display="flex"
                flexDirection="column"
              >
                <Text fontSize={{ base: "md", md: "2xl" }} fontWeight="bold" color="white" mb={8}>
                  Sobre Nós
                </Text>
                <Flex direction="column" gap={4} flex="1">
                  <Text color="gray.300" fontSize={{ base: "10px", md: "lg" }} lineHeight="1.4" textAlign="justify">
                    Na Effective Gain, acreditamos que a Inteligência Artificial deve ser funcional, prática e adaptável, não um obstáculo. Criamos uma plataforma que automatiza o atendimento, organiza a rotina e oferece análises inteligentes, respeitando o ritmo de cada cliente.
                  </Text>
                  <Text color="gray.300" fontSize={{ base: "10px", md: "lg" }} lineHeight="1.4" textAlign="justify">
                    Com uma estrutura modular, você começa de forma simples e ativa novos recursos conforme sua empresa evolui como BI, avaliação de equipe e disparos segmentados.
                  </Text>
                  <Text color="blue.200" fontSize={{ base: "10px", md: "lg" }} fontWeight="bold" mt={4}>
                    Tecnologia acessível desde o início, poderosa com o tempo.
                  </Text>
                </Flex>
              </Box>
            </Box>

            {/* Coluna 3 - Nossa Missão */}
            <Box flex="1" minW="350px" maxW="400px">
              <Box 
                bg="rgba(255, 255, 255, 0.05)"
                backdropFilter="blur(10px)"
                border="1px solid rgba(255, 255, 255, 0.1)"
                borderRadius="xl"
                p={8}
                h="100%"
                display="flex"
                flexDirection="column"
              >
                <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold" color="white" mb={8}>
                  Nossa Missão
                </Text>
                <Flex direction="column" gap={4} flex="1">
                  <Box>
                    <Text color="gray.300" fontSize={{ base: "sm", md: "lg" }} fontWeight="bold" mb={2}>
                      Transformar a forma como empresas fazem negócios
                    </Text>
                    <Text color="gray.400" fontSize={{ base: "xs", md: "md" }}>
                      Democratizamos a tecnologia de IA para que empresas de todos os tamanhos possam se beneficiar de automação inteligente e atendimento personalizado.
                    </Text>
                  </Box>
                  <Box>
                    <Text color="gray.300" fontSize={{ base: "sm", md: "lg" }} fontWeight="bold" mb={2}>
                      Simplificar processos complexos
                    </Text>
                    <Text color="gray.400" fontSize={{ base: "xs", md: "md" }}>
                      Criamos soluções que são fáceis de usar desde o primeiro dia, mas que crescem junto com sua empresa.
                    </Text>
                  </Box>
                  <Box>
                    <Text color="gray.300" fontSize={{ base: "sm", md: "lg" }} fontWeight="bold" mb={2}>
                      Conectar pessoas e tecnologia
                    </Text>
                    <Text color="gray.400" fontSize={{ base: "xs", md: "md" }}>
                      Acreditamos que a melhor tecnologia é aquela que melhora a vida das pessoas, não a complica.
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </section>

      <Box py={{ base: 8, md: 16 }} textAlign="center" position="relative">
        <Box 
          w={{ base: "60px", md: "100px" }}
          h="2px" 
          bg="linear-gradient(90deg, transparent, #3B82F6, transparent)"
          mx="auto"
          mb={{ base: 4, md: 8 }}
          position="relative"
          mt="20px"
        >
          <Box
            position="absolute"
            top="-30px"
            left="50%"
            transform="translateX(-50%)"
            w={{ base: "30px", md: "40px" }}
            h={{ base: "30px", md: "40px" }}
            bg="rgba(59, 130, 246, 0.1)"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="2px solid rgba(59, 130, 246, 0.3)"
            animation="pulse 2s infinite"
          >
            <i className="bi bi-kanban" style={{ color: '#3B82F6', fontSize: { base: '16px', md: '20px' } }}></i>
          </Box>
        </Box>
        <Text color="gray.400" fontSize={{ base: "xs", md: "sm" }} fontStyle="italic" px={4}>
           Descubra nossas soluções inovadoras 
        </Text>
      </Box>

      <section id="servicos" className={styles.section}>
        <Box maxW="1200px" mx="auto" position="relative" zIndex="1">
          
          <Flex gap={{ base: 6, md: 12 }} wrap="wrap" justify="center" align="center">
            {/* Box do Kanban */}
            <Box 
              bg="rgba(255, 255, 255, 0.05)"
              backdropFilter="blur(10px)"
              border="1px solid rgba(255, 255, 255, 0.1)"
              borderRadius="xl"
              p={{ base: 4, md: 8 }}
              flex="1"
              minW={{ base: "100%", md: "500px" }}
              maxW={{ base: "100%", md: "600px" }}
            >
              <Flex gap={{ base: 4, md: 8 }} align="center" direction={{ base: "column", md: "row" }}>
                {/* Kanban Interativo */}
                <Box flex="1">
                  {renderKanban()}
                </Box>
                
                {/* Descrição do CRM */}
                <Box flex="1">
                  {/* Ícone acima do título */}
                  <Box textAlign="center" mb={4}>
                    <Box w="60px" h="60px" color="blue.400" mx="auto" display="flex" alignItems="center" justifyContent="center">
                      <i className="bi bi-kanban" style={{ fontSize: '40px' }}></i>
                    </Box>
                  </Box>
                  
                  <Text fontSize={{ base: "lg", md: "3xl" }} fontWeight="bold" color="white" mb={6} textAlign="center">
                    CRM - Com Kanban Fácil e Dinâmico
                  </Text>
                  
                  <Flex direction="column" gap={4}>
                    <Box>
                      <Text color="gray.300" fontSize="lg">
                        <Text as="span" fontWeight="bold">Interface Kanban Intuitiva</Text> - Gerencie seus clientes através de colunas visuais, arrastando e soltando cards ou por automação entre diferentes estágios do funil de vendas, além de importação automatica de dados e mais!.
                      </Text>
                    </Box>
                  </Flex>
                  
                  <Text color="blue.200" fontSize="lg" fontWeight="bold" mt={6} textAlign="center">
                    Transforme a forma como você gerencia seus clientes!
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </section>

      {/* Transição Criativa 2 */}
      <Box py={{ base: 8, md: 16 }} textAlign="center" position="relative">
        <Box position="relative" mb={{ base: 4, md: 8 }}>
          <Box 
            w={{ base: "60px", md: "100px" }}
            h="2px" 
            bg="linear-gradient(90deg, transparent, #10B981, transparent)"
            mx="auto"
            mt="20px"
          >
            <Box
              position="absolute"
              top="-30px"
              left="50%"
              transform="translateX(-50%)"
              w={{ base: "40px", md: "50px" }}
              h={{ base: "40px", md: "50px" }}
              bg="rgba(16, 185, 129, 0.1)"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="2px solid rgba(16, 185, 129, 0.3)"
              animation="bounce 2s infinite"
            >
              <i className="bi bi-graph-up-arrow" style={{ color: '#10B981', fontSize: { base: '18px', md: '24px' } }}></i>
            </Box>
          </Box>
        </Box>
        <Text color="gray.400" fontSize={{ base: "xs", md: "sm" }} fontStyle="italic" px={4}>
           Analytics que transformam dados em resultados 
        </Text>
      </Box>

      {/* Seção Analytics com Gráfico */}
      <section className={styles.section}>
        <Box maxW="1200px" mx="auto" position="relative" zIndex="1">
          <Flex gap={{ base: 6, md: 12 }} wrap="wrap" justify="center" align="center">
            {/* Box do Analytics */}
            <Box 
              bg="rgba(255, 255, 255, 0.05)"
              backdropFilter="blur(10px)"
              border="1px solid rgba(255, 255, 255, 0.1)"
              borderRadius="xl"
              p={{ base: 4, md: 8 }}
              flex="1"
              minW={{ base: "100%", md: "500px" }}
              maxW={{ base: "100%", md: "600px" }}
            >
              <Flex gap={{ base: 4, md: 8 }} align="center" direction={{ base: "column", md: "row" }}>
                {/* Texto sobre Analytics */}
                <Box flex="1">
                  {/* Ícone acima do título */}
                  <Box textAlign="center" mb={4}>
                    <Box w="60px" h="60px" color="purple.400" mx="auto" display="flex" alignItems="center" justifyContent="center">
                      <i className="bi bi-graph-up" style={{ fontSize: '40px' }}></i>
                    </Box>
                  </Box>
                  
                  <Text fontSize={{ base: "lg", md: "3xl" }} fontWeight="bold" color="white" mb={6} textAlign="center">
                    Analytics em Tempo Real
                  </Text>
                  
                  <Flex direction="column" gap={4}>
                    <Box>
                      <Text color="gray.300" fontSize="lg">
                        <Text as="span" fontWeight="bold">Métricas Inteligentes</Text> - Acompanhe ganhos e perdas em tempo real, visualize conversões, tempo médio de resposta e performance da equipe com dashboards interativos e relatórios automatizados.
                      </Text>
                    </Box>
                  </Flex>
                  
                  <Text color="purple.200" fontSize="lg" fontWeight="bold" mt={6} textAlign="center">
                    Tome decisões baseadas em dados reais!
                  </Text>
                </Box>

                {/* Gráfico */}
                <Box flex="1" textAlign="center">
                  {/* Botões de controle */}
                  <Flex justify="center" gap={4} mb={6}>
                    <Button
                      size="md"
                      variant={chartType === 'donut' ? 'solid' : 'outline'}
                      colorScheme="green"
                      onClick={() => setChartType('donut')}
                      borderRadius="full"
                      px={8}
                      py={3}
                      fontWeight="bold"
                      fontSize="lg"
                      _hover={{
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)',
                        bg: chartType === 'donut' ? 'green.500' : 'green.100',
                        color: chartType === 'donut' ? 'white' : 'green.700'
                      }}
                      _active={{
                        transform: 'translateY(-1px)',
                        boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
                      }}
                      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      bg={chartType === 'donut' ? 'green.500' : 'transparent'}
                      color={chartType === 'donut' ? 'white' : 'green.400'}
                      borderColor={chartType === 'donut' ? 'green.500' : 'green.400'}
                      borderWidth="2px"
                    >
                      <i className="bi bi-pie-chart" style={{ marginRight: '8px', fontSize: '16px' }}></i>
                      Donut
                    </Button>
                    <Button
                      size="md"
                      variant={chartType === 'vetorial' ? 'solid' : 'outline'}
                      colorScheme="purple"
                      onClick={() => setChartType('vetorial')}
                      borderRadius="full"
                      px={8}
                      py={3}
                      fontWeight="bold"
                      fontSize="lg"
                      _hover={{
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 25px rgba(139, 92, 246, 0.4)',
                        bg: chartType === 'vetorial' ? 'purple.500' : 'purple.100',
                        color: chartType === 'vetorial' ? 'white' : 'purple.700'
                      }}
                      _active={{
                        transform: 'translateY(-1px)',
                        boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
                      }}
                      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      bg={chartType === 'vetorial' ? 'purple.500' : 'transparent'}
                      color={chartType === 'vetorial' ? 'white' : 'purple.400'}
                      borderColor={chartType === 'vetorial' ? 'purple.500' : 'purple.400'}
                      borderWidth="2px"
                    >
                      <i className="bi bi-graph-up" style={{ marginRight: '8px', fontSize: '16px' }}></i>
                      Vetorial
                    </Button>
                    <Button
                      size="md"
                      variant={chartType === 'barras' ? 'solid' : 'outline'}
                      colorScheme="cyan"
                      onClick={() => setChartType('barras')}
                      borderRadius="full"
                      px={8}
                      py={3}
                      fontWeight="bold"
                      fontSize="lg"
                      _hover={{
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 25px rgba(6, 182, 212, 0.4)',
                        bg: chartType === 'barras' ? 'cyan.500' : 'cyan.100',
                        color: chartType === 'barras' ? 'white' : 'cyan.700'
                      }}
                      _active={{
                        transform: 'translateY(-1px)',
                        boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)'
                      }}
                      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      bg={chartType === 'barras' ? 'cyan.500' : 'transparent'}
                      color={chartType === 'barras' ? 'white' : 'cyan.400'}
                      borderColor={chartType === 'barras' ? 'cyan.500' : 'cyan.400'}
                      borderWidth="2px"
                    >
                      <i className="bi bi-bar-chart" style={{ marginRight: '8px', fontSize: '16px' }}></i>
                      Barras
                    </Button>
                  </Flex>
                  
                  {/* Container do gráfico */}
                  <Box 
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    minH="300px"
                  >
                    {renderChart()}
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </section>

      {/* Transição Criativa 1 */}
      <Box py={{ base: 8, md: 16 }} textAlign="center" position="relative">
        <Box 
          w={{ base: "60px", md: "100px" }}
          h="2px" 
          bg="linear-gradient(90deg, transparent, #8B5CF6, transparent)"
          mx="auto"
          mb={{ base: 4, md: 8 }}
          position="relative"
          mt="20px"
        >
                      <Box
              position="absolute"
              top="-30px"
              left="50%"
              transform="translateX(-50%)"
              w={{ base: "30px", md: "40px" }}
              h={{ base: "30px", md: "40px" }}
              bg="rgba(139, 92, 246, 0.1)"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="2px solid rgba(139, 92, 246, 0.3)"
              animation="pulse 2s infinite"
            >
              <i className="bi bi-chat-right" style={{ color: '#8B5CF6', fontSize: { base: '16px', md: '20px' } }}></i>
            </Box>
        </Box>
        <Text color="gray.400" fontSize={{ base: "xs", md: "sm" }} fontStyle="italic" px={4}>
           Descubra o poder da transformação digital 
        </Text>
      </Box>

            {/* Transição Criativa 3 */}
      <Box py={{ base: 8, md: 16 }} textAlign="center" position="relative">
        <Box position="relative" mb={{ base: 4, md: 8 }}>
          <Box 
            w={{ base: "80px", md: "120px" }}
            h={{ base: "80px", md: "120px" }}
            mx="auto"
            position="relative"
            animation="rotate 8s linear infinite"
          >
            <Box
              position="absolute"
              top="0"
              left="50%"
              transform="translateX(-50%)"
              w={{ base: "15px", md: "20px" }}
              h={{ base: "15px", md: "20px" }}
              bg="#3B82F6"
              borderRadius="full"
              animation="pulse 1.5s infinite"
            ></Box>
            <Box
              position="absolute"
              top="50%"
              right="0"
              transform="translateY(-50%)"
              w={{ base: "15px", md: "20px" }}
              h={{ base: "15px", md: "20px" }}
              bg="#8B5CF6"
              borderRadius="full"
              animation="pulse 1.5s infinite 0.5s"
            ></Box>
            <Box
              position="absolute"
              bottom="0"
              left="50%"
              transform="translateX(-50%)"
              w={{ base: "15px", md: "20px" }}
              h={{ base: "15px", md: "20px" }}
              bg="#10B981"
              borderRadius="full"
              animation="pulse 1.5s infinite 1s"
            ></Box>
            <Box
              position="absolute"
              top="50%"
              left="0"
              transform="translateY(-50%)"
              w={{ base: "15px", md: "20px" }}
              h={{ base: "15px", md: "20px" }}
              bg="#F59E0B"
              borderRadius="full"
              animation="pulse 1.5s infinite 1.5s"
            ></Box>
          </Box>
        </Box>
        <Text color="gray.400" fontSize={{ base: "xs", md: "sm" }} fontStyle="italic" px={4}>
           Pronto para revolucionar seu negócio? 
        </Text>
      </Box>

      {/* Seção Chat WhatsApp */}
      <section className={styles.section}>
        <Box maxW="1200px" mx="auto" position="relative" zIndex="1">
          <Flex gap={{ base: 6, md: 12 }} wrap="wrap" justify="center" align="center">
            {/* Box do Chat WhatsApp */}
            <Box 
              bg="rgba(255, 255, 255, 0.05)"
              backdropFilter="blur(10px)"
              border="1px solid rgba(255, 255, 255, 0.1)"
              borderRadius="xl"
              p={{ base: 4, md: 8 }}
              flex="1"
              minW={{ base: "100%", md: "500px" }}
              maxW={{ base: "100%", md: "600px" }}
            >
              <Flex gap={{ base: 4, md: 8 }} align="center" direction={{ base: "column", md: "row" }}>
                {/* Imagem do Chat WhatsApp */}
                <Box flex="1">
                  <Box 
                    w="100%" 
                    h="400px" 
                    bg="#1a1a1a"
                    borderRadius="xl"
                    position="relative"
                    overflow="hidden"
                    boxShadow="0 10px 30px rgba(0, 0, 0, 0.5)"
                  >
                    {/* Header do WhatsApp */}
                    <Box 
                      bg="#2d3748" 
                      p={4} 
                      display="flex" 
                      alignItems="center" 
                      gap={3}
                    >
                      <Box w="40px" h="40px"  borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                        <i className="bi bi-whatsapp-fill" style={{ fontSize: '20px', color: 'white' }}></i>
                      </Box>
                    </Box>
                    
                    {/* Mensagens do Chat */}
                    <Box p={4} h="320px" overflowY="auto" bg="#1a1a1a">
                      {/* Mensagem recebida */}
                      <Box mb={3} display="flex" justifyContent="flex-start">
                        <Box 
                          bg="#4a5568" 
                          p={3} 
                          borderRadius="md" 
                          maxW="70%"
                          position="relative"
                        >
                          <Text fontSize="sm" color="white">
                            Olá! Gostaria de saber mais sobre o CRM da Effective Gain
                          </Text>
                          <Text fontSize="xs" color="gray.400" mt={1}>14:32</Text>
                        </Box>
                      </Box>
                      
                      {/* Mensagem enviada */}
                      <Box mb={3} display="flex" justifyContent="flex-end">
                        <Box 
                          bg="#3B82F6" 
                          p={3} 
                          borderRadius="md" 
                          maxW="70%"
                          position="relative"
                        >
                          <Text fontSize="sm" color="white">
                            Claro! Nosso CRM oferece automação inteligente, analytics em tempo real e interface Kanban intuitiva. Quer que eu te mostre como funciona?
                          </Text>
                          <Text fontSize="xs" color="rgba(255, 255, 255, 0.7)" mt={1} textAlign="right">14:33</Text>
                        </Box>
                      </Box>
                      
                      {/* Mensagem recebida */}
                      <Box mb={3} display="flex" justifyContent="flex-start">
                        <Box 
                          bg="#4a5568" 
                          p={3} 
                          borderRadius="md" 
                          maxW="70%"
                          position="relative"
                        >
                          <Text fontSize="sm" color="white">
                            Sim, seria ótimo! Como funciona a automação?
                          </Text>
                          <Text fontSize="xs" color="gray.400" mt={1}>14:34</Text>
                        </Box>
                      </Box>
                      
                      {/* Mensagem enviada */}
                      <Box mb={3} display="flex" justifyContent="flex-end">
                        <Box 
                          bg="#3B82F6" 
                          p={3} 
                          borderRadius="md" 
                          maxW="70%"
                          position="relative"
                        >
                          <Text fontSize="sm" color="white">
                            A automação responde automaticamente aos clientes, Gera relatorio dos leads e dispara mensagens personalizadas. Tudo integrado ao WhatsApp!
                          </Text>
                          <Text fontSize="xs" color="rgba(255, 255, 255, 0.7)" mt={1} textAlign="right">14:35</Text>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                
                {/* Descrição do Chat */}
                <Box flex="1">
                  {/* Ícone acima do título */}
                  <Box textAlign="center" mb={4}>
                    <Box w="60px" h="60px" color="green.400" mx="auto" display="flex" alignItems="center" justifyContent="center">
                      <i className="bi bi-chat-dots" style={{ fontSize: '40px' }}></i>
                    </Box>
                  </Box>
                  
                  <Text fontSize={{ base: "lg", md: "3xl" }} fontWeight="bold" color="white" mb={6} textAlign="center">
                    Chat Automatizado WhatsApp
                  </Text>
                  
                  <Flex direction="column" gap={4}>
                    <Box>
                      <Text color="gray.300" fontSize={{ base: "sm", md: "lg" }} lineHeight="1.6">
                        <Text as="span" fontWeight="bold">Automação Inteligente</Text> - Responda automaticamente aos clientes, organize conversas e dispare mensagens personalizadas diretamente no WhatsApp, tudo integrado ao seu CRM.
                      </Text>
                    </Box>
                  </Flex>
                  
                  <Text color="green.200" fontSize={{ base: "sm", md: "lg" }} fontWeight="bold" mt={6} textAlign="center">
                    Transforme seu WhatsApp em uma ferramenta de vendas!
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </section>

     
      {/* Seção de Preço */}
      <section className={styles.section}>
        <Box maxW="1200px" mx="auto" position="relative" zIndex="1">
          <Flex justify="center">
            <Box 
              bg="rgba(255, 255, 255, 0.05)"
              backdropFilter="blur(10px)"
              border="1px solid rgba(255, 255, 255, 0.1)"
              borderRadius="xl"
              p={{ base: 8, md: 12 }}
              pb={{ base: 12, md: 16 }}
              maxW={{ base: "100%", md: "500px" }}
              textAlign="center"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-5px)",
                borderColor: "rgba(255, 255, 255, 0.2)",
                bg: "rgba(255, 255, 255, 0.08)"
              }}
            >
              {/* Ícone */}
              <Box w="80px" h="80px" bg="blue.500" borderRadius="full" display="flex" alignItems="center" justifyContent="center" mx="auto" mb={6}>
                <i className="bi bi-star-fill" style={{ fontSize: '40px', color: 'white' }}></i>
              </Box>
              
              {/* Título */}
              <Text fontSize={{ base: "lg", md: "3xl" }} fontWeight="bold" color="white" mb={4}>
                Transforme Seu Negócio Hoje!
              </Text>
              
              {/* Descrição */}
              <Text color="gray.300" fontSize={{ base: "sm", md: "lg" }} lineHeight="1.6" mb={6}>
                Descubra como o CRM da Effective Gain pode revolucionar sua gestão de clientes e aumentar suas vendas de forma inteligente e automatizada.
              </Text>
              
              {/* Preço */}
              <Box mb={6}>
                <Text fontSize={{ base: "xl", md: "4xl" }} fontWeight="bold" color="blue.400" mb={2}>
                  A partir de
                </Text>
                <Text fontSize={{ base: "2xl", md: "5xl" }} fontWeight="bold" color="white" mb={2}>
                  R$ 300
                </Text>
                <Text color="gray.400" fontSize={{ base: "xs", md: "lg" }}>
                  por mês
                </Text>
              </Box>
              
              {/* Lista de benefícios */}
              <Flex direction="column" gap={4} mb={16} align="center">
                <Flex align="center" gap={3} justify="center" w="100%" maxW="300px">
                  <Box w="24px" h="24px" color="green.400" flexShrink={0}>
                    <i className="bi bi-check-circle" style={{ fontSize: '24px' }}></i>
                  </Box>
                  <Text color="gray.300" fontSize="md">CRM Kanban Intuitivo</Text>
                </Flex>
                <Flex align="center" gap={3} justify="center" w="100%" maxW="300px">
                  <Box w="24px" h="24px" color="green.400" flexShrink={0}>
                    <i className="bi bi-check-circle" style={{ fontSize: '24px' }}></i>
                  </Box>
                  <Text color="gray.300" fontSize="md">Analytics em Tempo Real</Text>
                </Flex>
                <Flex align="center" gap={3} justify="center" w="100%" maxW="300px">
                  <Box w="24px" h="24px" color="green.400" flexShrink={0}>
                    <i className="bi bi-check-circle" style={{ fontSize: '24px' }}></i>
                  </Box>
                  <Text color="gray.300" fontSize="md">Automação Inteligente</Text>
                </Flex>
                <Flex align="center" gap={3} justify="center" w="100%" maxW="300px">
                  <Box w="24px" h="24px" color="green.400" flexShrink={0}>
                    <i className="bi bi-check-circle" style={{ fontSize: '24px' }}></i>
                  </Box>
                  <Text color="gray.300" fontSize="md">Suporte Personalizado</Text>
                </Flex>
              </Flex>
              
              {/* Botão */}
              <a 
                href="https://wa.me/553184606370?text=Olá,%20gostaria%20de%20saber%20mais"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#25D366',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
                }}
              >
                <i className="bi bi-whatsapp" style={{ marginRight: '8px' }}></i>
                Quero Saber Mais!
              </a>
              
              {/* Texto adicional */}
              <Text color="gray.400" fontSize="sm" mt={4}>
              
              </Text>
            </Box>
          </Flex>
        </Box>
      </section>

      <section id="contato" className={styles.section} style={{ marginBottom: 0, paddingBottom: 0 }}>
        <Box 
          bg="linear-gradient(135deg, #1e3a8a 0%, #1e40af 25%, #3b82f6 50%, #1d4ed8 75%, #1e3a8a 100%)"
          py={16}
          px={8}
          w="100vw"
          h="60vh"
          mt={16}
          ml="calc(-50vw + 50%)"
          mr="calc(-50vw + 50%)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          style={{ marginBottom: 0 }}
        >
          <Flex gap={8} justify="space-between" wrap="wrap" maxW="1200px" mx="auto" textAlign={"left"}>
            {/* Effective Gain - Esquerda */}
            <Box flex="1" minW="300px">
              <Image 
                src="/logo.png"
                alt="Effective Gain"
                width={200}
                height={70}
                style={{
                  height: 'auto',
                  maxHeight: '50px',
                  marginBottom: '16px'
                }}
              />

              <Text color="white" fontSize="lg" lineHeight="1.6">
                O CRM para melhorar o seu negócio
              </Text>
              
              {/* Botão Termos de Serviço */}
              <Button
                as="a"
                href="/termos-servico"
                size="sm"
                variant="outline"
                colorScheme="whiteAlpha"
                mt={4}
                borderRadius="full"
                px={6}
                py={2}
                fontWeight="medium"
                fontSize="sm"
                _hover={{
                  bg: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 15px rgba(255, 255, 255, 0.2)"
                }}
                transition="all 0.3s ease"
                borderColor="rgba(255, 255, 255, 0.3)"
                color="white"
              >
                Termos de Serviço
              </Button>
            </Box>

            {/* Site - Centro */}
            <Box flex="1" minW="300px">
              <Text fontSize="xl" fontWeight="bold" color="white" mb={6} textAlign="center">
                Site
              </Text>
              
              <Flex direction="column" gap={3} align="center">
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                  Home
                </a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                  Atualizações
                </a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                  Parceiros
                </a>
                <Flex align="center" gap={2}>
                  <Box w="16px" h="16px" color="white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </Box>
                  <a href="/politica-privacidade" style={{ color: 'white', textDecoration: 'none' }}>
                    Política de Privacidade
                  </a>
                </Flex>
              </Flex>
            </Box>

            {/* Contatos - Direita */}
            <Box flex="1" minW="300px">
              <Text fontSize="xl" fontWeight="bold" color="white" mb={6} textAlign="left">
                Contatos
              </Text>
              
              <Flex direction="column" gap={4} align="flex-start">
                <Flex align="flex-start" gap={4}>
                  <Box w="20px" h="20px" color="white" mt={1} flexShrink={0} display="flex" justifyContent="center">
                    <i className="bi bi-envelope" style={{ fontSize: '20px' }}></i>
                  </Box>
                  <a href="mailto:effectivegain@gmail.com?subject=Interesse&body=gostaria de saber mais sobre" style={{ color: 'white', textDecoration: 'none' }}>
                    Effectivegain@gmail.com
                  </a>
                </Flex>
                
                <Flex align="flex-start" gap={4}>
                  <Box w="20px" h="20px" color="white" mt={1} flexShrink={0} display="flex" justifyContent="center">
                    <i className="bi bi-whatsapp" style={{ fontSize: '20px' }}></i>
                  </Box>
                  <a href="https://wa.me/553184606370?text=Olá,%20gostaria%20de%20saber%20mais" style={{ color: 'white', textDecoration: 'none' }}>
                  +55 31 8460-6370
                  </a>
                </Flex>
                
                <Flex align="flex-start" gap={4}>
                  <Box w="20px" h="20px" color="white" mt={1} flexShrink={0} display="flex" justifyContent="center">
                    <i className="bi bi-instagram" style={{ fontSize: '20px' }}></i>
                  </Box>
                  <a href="https://www.instagram.com/effectivegainai" style={{ color: 'white', textDecoration: 'none' }}>
                    @effectivegainai
                  </a>
                </Flex>
                
                <Flex align="flex-start" gap={4}>
                  <Box w="20px" h="20px" color="white" mt={1} flexShrink={0} display="flex" justifyContent="center">
                    <i className="bi bi-geo-alt" style={{ fontSize: '20px' }}></i>
                  </Box>
                  <a href="https://share.google/4bvz6SpEuaXG06xrQ" style={{ color: 'white', textDecoration: 'none' }}>
                  Av. Raja Gabaglia, 2280, sala 502, Estoril, Belo Horizonte/MG
                  </a>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </section>
    </div>
  );
}
