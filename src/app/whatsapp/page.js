"use client";

import { Box, Text, Flex, Container, Heading, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function WhatsappPage() {
  return (
    <Box minH="100vh" bg="#0b0f1a" color="white" display="flex" flexDirection="column">
      {/* Header */}
      <Box 
        bg="rgba(255, 255, 255, 0.05)"
        backdropFilter="blur(10px)"
        borderBottom="1px solid rgba(255, 255, 255, 0.1)"
        position="sticky"
        top="0"
        zIndex="1000"
        flexShrink={0}
      >
        <Container maxW="1200px" py={4}>
          <Flex justify="space-between" align="center">
            <Link href="/">
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
            </Link>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
              <Text fontSize="lg" fontWeight="bold" _hover={{ color: 'blue.300' }}>
                ← Voltar ao Início
              </Text>
            </Link>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Box flex="1" display="flex" alignItems="center" justifyContent="center">
        <Container maxW="900px" py={16}>
          <VStack spacing={10} align="stretch">
            <Box textAlign="center">
              <Heading as="h1" size="2xl" color="white" mb={8}>
                WhatsApp API Oficial
              </Heading>
              <Text color="gray.300" fontSize="lg" lineHeight="1.8">
                A API oficial do WhatsApp, disponibilizada pela Meta, é o canal corporativo mais seguro para conectar sua empresa ao aplicativo de mensagens. 
                Ao operar com credenciais verificadas, sua marca mantém estabilidade, reduz o risco de bloqueios e oferece respostas automatizadas ou humanas com total conformidade e registro.
              </Text>
              <Text color="gray.300" fontSize="lg" lineHeight="1.8" mt={6}>
                Utilizar o canal oficial amplia a credibilidade do negócio, habilita recursos como múltiplos atendentes e webhooks confiáveis, e garante políticas rigorosas de proteção de dados. 
                É a maneira mais profissional de escalar atendimento, mantendo a experiência do cliente alinhada aos padrões da Meta.
              </Text>
            </Box>

            <Box textAlign="center">
              <Heading as="h2" size="lg" color="white" mb={6}>
                Tutorial para Remoção de Número Meta
              </Heading>
              <Text color="gray.300" fontSize="lg" lineHeight="1.8" mb={4}>
                1. Acesse a aba de conexões: dentro do painel, localize a seção “Conexões”, onde estão listadas todas as integrações disponíveis do sistema.
              </Text>
              <Box my={8} display="flex" justifyContent="center">
                <Image 
                  src="/whatsapp/excluirwpp.png"
                  alt="Exemplo da tela de conexões da API oficial"
                  width={1000}
                  height={500}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                />
              </Box>
              <Text color="gray.300" fontSize="lg" lineHeight="1.8">
                2. Selecione a conexão WhatsApp Cloud API: encontre a integração correspondente e clique no ícone de lixeira. Será exibida a lista com todos os números oficiais vinculados. 
                Escolha o número desejado e confirme a exclusão definitiva. Importante: ao remover o número, o sistema desconecta imediatamente a linha e apaga todos os dados relacionados a ela. 
                Essa ação é irreversível e os registros não poderão ser recuperados posteriormente.
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}

