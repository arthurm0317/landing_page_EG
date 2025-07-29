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
            📊
          </Box>
          <Text fontSize="xl" fontWeight="bold" color="white" mb={3}>
            Gestão Completa
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
            🚀
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
            📈
          </Box>
          <Text fontSize="xl" fontWeight="bold" color="white" mb={3}>
            Relatórios Avançados
          </Text>
          <Text color="gray.300" lineHeight="1.6">
            Acompanhe métricas importantes e tome decisões baseadas em dados reais.
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
