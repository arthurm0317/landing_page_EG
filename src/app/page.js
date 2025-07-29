"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Flex, Box, Text, Icon } from "@chakra-ui/react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.page}>
      <header className={`${styles.header} ${isScrolled ? styles.headerVisible : ''}`}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerLogo}>Effective Gain AI</h1>
          <nav className={styles.nav}>
            <a href="#home" className={styles.navLink}>Home</a>
            <a href="#sobre" className={styles.navLink}>Sobre</a>
            <a href="#servicos" className={styles.navLink}>Serviços</a>
            <a href="#contato" className={styles.navLink}>Contato</a>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.modernHeading}>
          Effective Gain
        </h1>
        <p className={styles.subtitle}>
          Transforme a forma como você faz negócios com nosso CRM, aumentando sua eficiência e produtividade.
        </p>
      </main>

      <div className={`${styles.scrollIndicator} ${isScrolled ? styles.scrollIndicatorHidden : ''}`}>
        <div className={styles.scrollBall}>
          <div className={styles.scrollArrow}></div>
        </div>
      </div>

      <Box textAlign="center" mb={12} px={6}>
        <Text fontSize="40px" fontWeight="bold" color="white" mb={4}>
          Nosso CRM oferece
        </Text>
        
      </Box>

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
            <svg  xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-kanban"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l6 0" /><path d="M14 4l6 0" /><path d="M4 8m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M14 8m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot-icon lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
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
            <svg  xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-report-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" /><path d="M18 12v-5a2 2 0 0 0 -2 -2h-2" /><path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M8 11h4" /><path d="M8 15h3" /><path d="M16.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" /><path d="M18.5 19.5l2.5 2.5" /></svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          </Box>
          <Text fontSize="xl" fontWeight="bold" color="white" mb={3}>
            Analytics
          </Text>
          <Text color="gray.300" lineHeight="1.6">
            Visualize dados em tempo real e identifique oportunidades de crescimento.
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
            <svg  xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-webhook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4.876 13.61a4 4 0 1 0 6.124 3.39h6" /><path d="M15.066 20.502a4 4 0 1 0 1.934 -7.502c-.706 0 -1.424 .179 -2 .5l-3 -5.5" /><path d="M16 8a4 4 0 1 0 -8 0c0 1.506 .77 2.818 2 3.5l-3 5.5" /></svg>
          </Box>
          <Text fontSize="xl" fontWeight="bold" color="white" mb={3}>
            Integração
          </Text>
          <Text color="gray.300" lineHeight="1.6">
            Conecte nossa ferramenta com outras por meio de webhooks e sincronize dados automaticamente.
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
            bg="pink.500"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx="auto"
            mb={4}
          >
            <svg  xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-bell"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
          </Box>
          <Text fontSize="xl" fontWeight="bold" color="white" mb={3}>
            Lembretes
          </Text>
          <Text color="gray.300" lineHeight="1.6">
            Crie lembretes e mensagens programadas para que no seu time e clientes não percam informações importantes.
          </Text>
        </Box>
      </Flex>

      <section id="sobre" className={styles.section}>
        <h2>Sobre Nós</h2>
        <p>Somos uma empresa focada em resultados e inovação.</p>
      </section>

      <section id="servicos" className={styles.section}>
        <h2>Nossos Serviços</h2>
        <p>Oferecemos soluções completas para seu negócio.</p>
      </section>

      <section id="contato" className={styles.section}>
        <h2>Entre em Contato</h2>
        <p>Estamos aqui para ajudar você a alcançar seus objetivos.</p>
      </section>
    </div>
  );
}
