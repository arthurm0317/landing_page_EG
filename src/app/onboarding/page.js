"use client"

import Image from "next/image";
import styles from "../page.module.css";
import { useState, useEffect } from "react";
import { Flex, Box, Text, Button, Heading, Input, InputGroup, InputRightElement, IconButton, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"

export default function Onboarding() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    adminName: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Forçar modo escuro
    document.documentElement.style.setProperty('color-scheme', 'dark');
    document.documentElement.style.setProperty('background-color', '#000000');
    document.documentElement.style.setProperty('color', '#ffffff');
    
    document.body.style.setProperty('background-color', '#000000');
    document.body.style.setProperty('color', '#ffffff');
    
    document.documentElement.classList.add('force-dark-mode');
    document.body.classList.add('force-dark-mode');
    
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
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
      document.documentElement.classList.remove('force-dark-mode');
      document.body.classList.remove('force-dark-mode');
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Nome da empresa é obrigatório";
    }
    
    if (!formData.adminName.trim()) {
      newErrors.adminName = "Nome do admin é obrigatório";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    
    if (!formData.password) {
      newErrors.password = "Senha é obrigatória";
    } else if (formData.password.length < 6) {
      newErrors.password = "Senha deve ter no mínimo 6 caracteres";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.email.trim() || !formData.password.trim()) {
    alert('Preencha login e senha');
    return;
  }

  if (!validateForm()) {
    return;
  }

  console.log("Dados do formulário:", formData);

  const url = '/page-pagamento/';
  const features = 'popup=yes,toolbar=yes,menubar=yes,scrollbars=yes,resizable=yes,width=1000,height=800';

  const newWin = window.open(url, '_blank', features);
  if (newWin) {
    try {
      newWin.focus();
    } catch (err) {
      // ignore
    }
  } else {
    window.open(url, '_blank');
  }
};

  return (
    <div className={styles.page}>
      <main className={`${styles.main} ${styles.waveAnimation}`} style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 800\'%3E%3Cdefs%3E%3ClinearGradient id=\'grad1\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' style=\'stop-color:%23000;stop-opacity:1\' /%3E%3Cstop offset=\'100%25\' style=\'stop-color:%23000;stop-opacity:1\' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23grad1)\'/%3E%3Cpath d=\'M0,250 Q200,150 400,250 T800,250 T1200,250\' stroke=\'%234A90E2\' stroke-width=\'2\' fill=\'none\' opacity=\'0.7\'/%3E%3Cpath d=\'M0,275 Q200,375 400,275 T800,275 T1200,275\' stroke=\'%238B5CF6\' stroke-width=\'1.5\' fill=\'none\' opacity=\'0.6\'/%3E%3Cpath d=\'M0,300 Q200,400 400,300 T800,300 T1200,300\' stroke=\'%236B7FD7\' stroke-width=\'1.8\' fill=\'none\' opacity=\'0.6\'/%3E%3Cpath d=\'M0,325 Q200,225 400,325 T800,325 T1200,325\' stroke=\'%2306B6D4\' stroke-width=\'1.4\' fill=\'none\' opacity=\'0.5\'/%3E%3Cpath d=\'M0,350 Q200,250 400,350 T800,350 T1200,350\' stroke=\'%2388A2D4\' stroke-width=\'1.5\' fill=\'none\' opacity=\'0.5\'/%3E%3C/svg%3E")',
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
        
        <Box position="relative" zIndex={2} maxW="600px" mx="auto" px={6} w="100%">


          {/* Card Principal */}
          <Box 
            bg="rgba(255, 255, 255, 0.05)"
            backdropFilter="blur(10px)"
            border="1px solid rgba(255, 255, 255, 0.1)"
            borderRadius="2xl"
            p={{ base: 6, md: 10 }}
            boxShadow="0 20px 50px rgba(0, 0, 0, 0.5)"
          >
            {/* Header */}
            <Box textAlign="center" mb={8}>
              

            <Box display={"flex"} justifyContent={"center"}  mb={8}>
            <Image 
              src="/logo.png"
              alt="Effective Gain"
              width={200}
              height={70}
              style={{
                height: 'auto',
                maxHeight: '60px',
                marginBottom: '20px'
              }}
            />
          </Box>
              
              <Heading 
                as="h1" 
                size="xl" 
                color="white" 
                mb={3}
                fontWeight="bold"
              >
                Comece Agora
              </Heading>
              
              <Text color="gray.300" fontSize="lg">
                Crie sua conta e transforme seu negócio
              </Text>
            </Box>

            {/* Formulário */}
            <form onSubmit={handleSubmit}>
              <Flex direction="column" gap={6}>
                {/* Nome da Empresa */}
                <FormControl isInvalid={!!errors.companyName}>
                  <FormLabel color="white" fontWeight="medium" mb={2}>
                    Nome da Empresa
                  </FormLabel>
                  <InputGroup>
                    <Input
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Digite o nome da sua empresa"
                      size="lg"
                      bg="rgba(255, 255, 255, 0.05)"
                      border="1px solid rgba(255, 255, 255, 0.1)"
                      borderRadius="lg"
                      color="white"
                      _placeholder={{ color: 'gray.500' }}
                      _hover={{
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        bg: 'rgba(255, 255, 255, 0.08)'
                      }}
                      _focus={{
                        borderColor: 'blue.500',
                        bg: 'rgba(255, 255, 255, 0.08)',
                        boxShadow: '0 0 0 1px rgba(59, 130, 246, 0.5)'
                      }}
                    />
                    <Box position="absolute" right="12px" top="50%" transform="translateY(-50%)">
                      <i className="bi bi-building" style={{ fontSize: '20px', color: 'rgba(255, 255, 255, 0.5)' }}></i>
                    </Box>
                  </InputGroup>
                  {errors.companyName && (
                    <FormErrorMessage mt={2}>{errors.companyName}</FormErrorMessage>
                  )}
                </FormControl>

                {/* Nome do Admin */}
                <FormControl isInvalid={!!errors.adminName}>
                  <FormLabel color="white" fontWeight="medium" mb={2}>
                    Nome do Administrador
                  </FormLabel>
                  <InputGroup>
                    <Input
                      name="adminName"
                      value={formData.adminName}
                      onChange={handleChange}
                      placeholder="Digite seu nome completo"
                      size="lg"
                      bg="rgba(255, 255, 255, 0.05)"
                      border="1px solid rgba(255, 255, 255, 0.1)"
                      borderRadius="lg"
                      color="white"
                      _placeholder={{ color: 'gray.500' }}
                      _hover={{
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        bg: 'rgba(255, 255, 255, 0.08)'
                      }}
                      _focus={{
                        borderColor: 'blue.500',
                        bg: 'rgba(255, 255, 255, 0.08)',
                        boxShadow: '0 0 0 1px rgba(59, 130, 246, 0.5)'
                      }}
                    />
                    <Box position="absolute" right="12px" top="50%" transform="translateY(-50%)">
                      <i className="bi bi-person-fill" style={{ fontSize: '20px', color: 'rgba(255, 255, 255, 0.5)' }}></i>
                    </Box>
                  </InputGroup>
                  {errors.adminName && (
                    <FormErrorMessage mt={2}>{errors.adminName}</FormErrorMessage>
                  )}
                </FormControl>

                {/* Email */}
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel color="white" fontWeight="medium" mb={2}>
                    Email
                  </FormLabel>
                  <InputGroup>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      size="lg"
                      bg="rgba(255, 255, 255, 0.05)"
                      border="1px solid rgba(255, 255, 255, 0.1)"
                      borderRadius="lg"
                      color="white"
                      _placeholder={{ color: 'gray.500' }}
                      _hover={{
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        bg: 'rgba(255, 255, 255, 0.08)'
                      }}
                      _focus={{
                        borderColor: 'blue.500',
                        bg: 'rgba(255, 255, 255, 0.08)',
                        boxShadow: '0 0 0 1px rgba(59, 130, 246, 0.5)'
                      }}
                    />
                    <Box position="absolute" right="12px" top="50%" transform="translateY(-50%)">
                      <i className="bi bi-envelope-fill" style={{ fontSize: '20px', color: 'rgba(255, 255, 255, 0.5)' }}></i>
                    </Box>
                  </InputGroup>
                  {errors.email && (
                    <FormErrorMessage mt={2}>{errors.email}</FormErrorMessage>
                  )}
                </FormControl>

                {/* Senha */}
                <FormControl isInvalid={!!errors.password}>
                  <FormLabel color="white" fontWeight="medium" mb={2}>
                    Senha
                  </FormLabel>
                  <InputGroup>
                    <Input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Mínimo 6 caracteres"
                      size="lg"
                      bg="rgba(255, 255, 255, 0.05)"
                      border="1px solid rgba(255, 255, 255, 0.1)"
                      borderRadius="lg"
                      color="white"
                      _placeholder={{ color: 'gray.500' }}
                      _hover={{
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        bg: 'rgba(255, 255, 255, 0.08)'
                      }}
                      _focus={{
                        borderColor: 'blue.500',
                        bg: 'rgba(255, 255, 255, 0.08)',
                        boxShadow: '0 0 0 1px rgba(59, 130, 246, 0.5)'
                      }}
                    />
                    <InputRightElement width="4.5rem" top="50%" transform="translateY(-50%)">
                      <IconButton
                        h="1.75rem"
                        size="sm"
                        onClick={() => setShowPassword(!showPassword)}
                        bg="transparent"
                        _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
                        icon={showPassword ? <ViewOffIcon color="gray.400" /> : <ViewIcon color="gray.400" />}
                      />
                    </InputRightElement>
                  </InputGroup>
                  {errors.password && (
                    <FormErrorMessage mt={2}>{errors.password}</FormErrorMessage>
                  )}
                </FormControl>

                {/* Botão de Submit */}
                <Button
                  type="submit"
                  size="lg"
                  bg="blue.500"
                  color="white"
                  borderRadius="full"
                  py={6}
                  fontWeight="bold"
                  fontSize="lg"
                  w="100%"
                  mt={4}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
                    bg: 'blue.400'
                  }}
                  _active={{
                    transform: 'translateY(0)',
                  }}
                  transition="all 0.3s ease"
                >
                  Criar Conta e Começar
                  <i className="bi bi-arrow-right" style={{ marginLeft: '8px' }}></i>
                </Button>
              </Flex>
            </form>

            {/* Informações Adicionais */}
            <Box mt={8} pt={6} borderTop="1px solid rgba(255, 255, 255, 0.1)">
              <Flex direction="column" gap={4} align="center">
                <Flex align="center" gap={3} color="gray.400" fontSize="sm">
                  <i className="bi bi-shield-check" style={{ fontSize: '16px', color: 'green.400' }}></i>
                  <Text>Dados protegidos e seguros</Text>
                </Flex>
                <Flex align="center" gap={3} color="gray.400" fontSize="sm">
                  <i className="bi bi-clock" style={{ fontSize: '16px', color: 'blue.400' }}></i>
                  <Text>Configuração em poucos minutos</Text>
                </Flex>
                <Flex align="center" gap={3} color="gray.400" fontSize="sm">
                  <i className="bi bi-headset" style={{ fontSize: '16px', color: 'purple.400' }}></i>
                  <Text>Suporte especializado incluso</Text>
                </Flex>
              </Flex>
            </Box>
          </Box>

          {/* Link para Login */}
          <Box textAlign="center" mt={6}>
            <Text color="gray.400" fontSize="sm">
              Já tem uma conta?{" "}
              <Text as="span" color="blue.400" fontWeight="medium" cursor="pointer" _hover={{ color: 'blue.300', textDecoration: 'underline' }}>
                Fazer login
              </Text>
            </Text>
          </Box>
        </Box>
      </main>
    </div>
  );
}
