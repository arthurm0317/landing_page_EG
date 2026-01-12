"use client"

import { Box, Text, Flex, Container, Heading, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function TermosServico() {
  return (
    <Box minH="100vh" bg="#1a1a1a" color="white" display="flex" flexDirection="column">
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

      {/* Main Content - Centralizado */}
      <Box flex="1" display="flex" alignItems="center" justifyContent="center">
        <Container maxW="800px" py={16}>
          <VStack spacing={12} align="center">
            {/* Title */}
            <Box textAlign="center" mb={8}>
              <Heading as="h1" size="2xl" color="white" mb={4}>
                TERMOS DE SERVIÇO
              </Heading>
              <Text color="gray.400" fontSize="lg" mb={2}>
                CRM EFFECTIVE GAIN
              </Text>
              <Text color="gray.400" fontSize="md" mb={2}>
                Effective Gain Tecnologia Ltda.
              </Text>
              <Text color="gray.400" fontSize="md" mb={2}>
                CNPJ: 38.731.501/0001-10
              </Text>
              <Text color="gray.400" fontSize="md" mb={2}>
                Data de Vigência: 25 de julho de 2025
              </Text>
              <Text color="gray.400" fontSize="md">
                Versão: 1.0
              </Text>
            </Box>

            {/* Section 1: Definições */}
            <VStack spacing={8} align="center" w="100%">
              <Heading as="h2" size="xl" color="white" textAlign="center">
                1. DEFINIÇÕES E INTERPRETAÇÃO
              </Heading>
              
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  1.1 Definições
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Para os fins destes Termos de Serviço, as seguintes definições se aplicam:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>"Effective Gain"</strong>, "nós", "nos" ou "nossa" refere-se à Effective Gain Tecnologia
                  Ltda., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 38.731.501/0001-10,
                  com sede no Brasil.
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>"CRM"</strong> ou <strong>"Plataforma"</strong> refere-se ao sistema de gestão de relacionamento com
                  clientes desenvolvido e operado pela Effective Gain, incluindo todas as suas
                  funcionalidades, módulos e integrações.
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>"Usuário"</strong>, "você" ou "sua" refere-se à pessoa física ou jurídica que utiliza os serviços
                  da Plataforma CRM Effective Gain.
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>"Serviços"</strong> refere-se a todas as funcionalidades, recursos, ferramentas e serviços
                  disponibilizados através da Plataforma CRM Effective Gain.
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>"Conta"</strong> refere-se ao registro individual do Usuário na Plataforma, criado mediante
                  cadastro e autenticação.
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>"Dados do Cliente"</strong> refere-se a todas as informações, dados, arquivos, documentos e
                  conteúdos inseridos, carregados ou processados pelo Usuário através da Plataforma.
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>"Dados Pessoais"</strong> tem o significado atribuído pela Lei Geral de Proteção de Dados
                  Pessoais (Lei nº 13.709/2018 - LGPD).
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  1.2 Interpretação
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Estes Termos de Serviço devem ser interpretados de acordo com a legislação
                  brasileira, especialmente:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018)<br />
                  • Marco Civil da Internet (Lei nº 12.965/2014)<br />
                  • Código de Defesa do Consumidor (Lei nº 8.078/1990)<br />
                  • Código Civil Brasileiro (Lei nº 10.406/2002)
                </Text>
              </VStack>
            </VStack>

            {/* Section 2: Aceitação dos Termos */}
            <VStack spacing={8} align="center" w="100%">
              <Heading as="h2" size="xl" color="white" textAlign="center">
                2. ACEITAÇÃO DOS TERMOS
              </Heading>
              
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  2.1 Concordância
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Ao acessar, cadastrar-se ou utilizar a Plataforma CRM Effective Gain, você declara ter
                  lido, compreendido e concordado integralmente com estes Termos de Serviço e nossa
                  Política de Privacidade.
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  2.2 Capacidade Legal
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Você declara e garante que:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Possui capacidade legal plena para celebrar este acordo<br />
                  • Se pessoa jurídica, possui poderes adequados para vincular sua organização<br />
                  • Todas as informações fornecidas são verdadeiras, precisas e atualizadas<br />
                  • Cumprirá todas as leis e regulamentos aplicáveis
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  2.3 Aceite Eletrônico
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  O aceite destes termos pode ser realizado eletronicamente através de:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Marcação da caixa de seleção "Li e aceito os Termos de Serviço"<br />
                  • Clique no botão "Aceitar" ou similar<br />
                  • Uso continuado da Plataforma após notificação de alterações
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  2.4 Registro de Aceite
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Mantemos registros eletrônicos de todos os aceites, incluindo:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Data e hora do aceite<br />
                  • Endereço IP utilizado<br />
                  • Versão dos termos aceitos<br />
                  • Identificação do usuário
                </Text>
              </VStack>
            </VStack>

            {/* Section 3: Descrição dos Serviços */}
            <VStack spacing={8} align="center" w="100%">
              <Heading as="h2" size="xl" color="white" textAlign="center">
                3. DESCRIÇÃO DOS SERVIÇOS
              </Heading>
              
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  3.1 Funcionalidades Principais
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  A Plataforma CRM Effective Gain oferece as seguintes funcionalidades:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>a) Gestão de Relacionamento com Clientes:</strong><br />
                  • Cadastro e organização de contatos<br />
                  • Histórico de interações<br />
                  • Segmentação de clientes<br />
                  • Pipeline de vendas
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>b) Comunicação Multicanal:</strong><br />
                  • Integração com WhatsApp Business<br />
                  • Envio de emails marketing<br />
                  • SMS e mensagens automatizadas<br />
                  • Chat interno da equipe
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>c) Automação de Marketing:</strong><br />
                  • Campanhas automatizadas<br />
                  • Lembretes e follow-ups<br />
                  • Segmentação avançada<br />
                  • Análise de performance
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>d) Telefonia Integrada:</strong><br />
                  • Sistema VoIP<br />
                  • URA (Unidade de Resposta Audível)<br />
                  • Discador automático<br />
                  • Gravação de chamadas
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>e) Relatórios e Analytics:</strong><br />
                  • Dashboards personalizáveis<br />
                  • Relatórios de vendas<br />
                  • Métricas de performance<br />
                  • Análise de ROI
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>f) Integrações:</strong><br />
                  • Google Calendar<br />
                  • Redes sociais (Instagram, Facebook)<br />
                  • Sistemas de pagamento<br />
                  • APIs de terceiros
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  3.2 Disponibilidade
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Nos esforçamos para manter a Plataforma disponível 24 horas por dia, 7 dias por
                  semana. No entanto, podem ocorrer interrupções para:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Manutenção programada (com aviso prévio)<br />
                  • Atualizações de segurança<br />
                  • Correções de bugs críticos<br />
                  • Circunstâncias imprevistas
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  3.3 Atualizações
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Reservamo-nos o direito de:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Adicionar novas funcionalidades<br />
                  • Modificar recursos existentes<br />
                  • Descontinuar funcionalidades obsoletas<br />
                  • Realizar melhorias de performance e segurança
                </Text>
              </VStack>
            </VStack>

            {/* Section 4: Planos e Cobrança */}
            <VStack spacing={8} align="center" w="100%">
              <Heading as="h2" size="xl" color="white" textAlign="center">
                4. PLANOS E COBRANÇA
              </Heading>
              
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  4.1 Planos Disponíveis
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>a) Plano Trial (Gratuito):</strong><br />
                  • Duração: 30 dias<br />
                  • Funcionalidades limitadas<br />
                  • Até 50 contatos<br />
                  • Suporte por email
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>b) Plano Basic:</strong><br />
                  • Valor: R$ 99,90/mês<br />
                  • Até 500 contatos<br />
                  • Funcionalidades essenciais<br />
                  • Suporte prioritário
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>c) Plano Professional:</strong><br />
                  • Valor: R$ 299,90/mês<br />
                  • Contatos ilimitados<br />
                  • Telefonia integrada<br />
                  • Analytics avançado<br />
                  • Suporte telefônico
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>d) Plano Enterprise:</strong><br />
                  • Valor: R$ 999,90/mês<br />
                  • Recursos ilimitados<br />
                  • Customizações<br />
                  • Gerente de conta dedicado<br />
                  • SLA garantido
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  4.2 Cobrança
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Cobrança mensal antecipada<br />
                  • Renovação automática<br />
                  • Métodos aceitos: cartão de crédito, PIX, boleto bancário<br />
                  • Preços sujeitos a alteração com aviso prévio de 30 dias
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  4.3 Cancelamento
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Cancelamento a qualquer momento<br />
                  • Sem multa ou taxa de cancelamento<br />
                  • Acesso mantido até o final do período pago<br />
                  • Dados disponíveis para exportação por 30 dias após cancelamento
                </Text>
              </VStack>
            </VStack>

            {/* Section 5: Responsabilidades do Usuário */}
            <VStack spacing={8} align="center" w="100%">
              <Heading as="h2" size="xl" color="white" textAlign="center">
                5. RESPONSABILIDADES DO USUÁRIO
              </Heading>
              
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  5.1 Uso Adequado
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Você se compromete a:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Utilizar a Plataforma apenas para fins legítimos e legais<br />
                  • Fornecer informações precisas e atualizadas<br />
                  • Manter a confidencialidade de suas credenciais de acesso<br />
                  • Notificar imediatamente sobre uso não autorizado de sua conta<br />
                  • Respeitar os direitos de propriedade intelectual
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  5.2 Condutas Proibidas
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  É expressamente proibido:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Utilizar a Plataforma para atividades ilegais ou fraudulentas<br />
                  • Enviar spam, mensagens não solicitadas ou conteúdo ofensivo<br />
                  • Tentar acessar contas de outros usuários<br />
                  • Realizar engenharia reversa ou descompilar o software<br />
                  • Sobrecarregar os servidores com requisições excessivas<br />
                  • Violar direitos de terceiros<br />
                  • Disseminar malware ou códigos maliciosos
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  5.3 Conformidade Legal
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Você é responsável por:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Cumprir todas as leis aplicáveis em sua jurisdição<br />
                  • Obter consentimentos necessários para coleta de dados<br />
                  • Respeitar regulamentações de marketing digital<br />
                  • Manter conformidade com LGPD, GDPR e outras leis de privacidade<br />
                  • Cumprir regulamentações de telecomunicações (ANATEL)
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  5.4 Dados do Cliente
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Você declara e garante que:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Possui direitos legais sobre todos os dados inseridos<br />
                  • Obteve consentimentos necessários para processamento<br />
                  • Os dados não violam direitos de terceiros<br />
                  • Manterá backup independente de dados críticos
                </Text>
              </VStack>
            </VStack>

            {/* Section 6: Propriedade Intelectual */}
            <VStack spacing={8} align="center" w="100%">
              <Heading as="h2" size="xl" color="white" textAlign="center">
                6. PROPRIEDADE INTELECTUAL
              </Heading>
              
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  6.1 Propriedade da Effective Gain
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  A Plataforma CRM Effective Gain, incluindo mas não limitado a:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Código-fonte e arquitetura do software<br />
                  • Interface do usuário e design<br />
                  • Logotipos, marcas e identidade visual<br />
                  • Documentação e materiais de treinamento<br />
                  • Algoritmos e metodologias proprietárias
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  São de propriedade exclusiva da Effective Gain e protegidos por leis de propriedade
                  intelectual.
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  6.2 Licença de Uso
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Concedemos a você uma licença limitada, não exclusiva, não transferível e revogável
                  para:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Acessar e utilizar a Plataforma conforme estes termos<br />
                  • Baixar e utilizar aplicativos móveis em seus dispositivos<br />
                  • Acessar documentação e materiais de suporte
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  6.3 Propriedade dos Dados do Cliente
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Você mantém todos os direitos sobre seus Dados do Cliente. Concede-nos apenas uma
                  licença limitada para:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Processar e armazenar os dados conforme necessário para prestação dos serviços<br />
                  • Realizar backups e garantir a segurança dos dados<br />
                  • Gerar estatísticas agregadas e anônimas para melhoria dos serviços
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  6.4 Feedback e Sugestões
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Qualquer feedback, sugestão ou ideia fornecida sobre a Plataforma poderá ser
                  utilizada livremente pela Effective Gain sem qualquer obrigação de compensação.
                </Text>
              </VStack>
            </VStack>

            {/* Section 7: Privacidade e Proteção de Dados */}
            <VStack spacing={8} align="center" w="100%">
              <Heading as="h2" size="xl" color="white" textAlign="center">
                7. PRIVACIDADE E PROTEÇÃO DE DADOS
              </Heading>
              
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  7.1 Compromisso com a Privacidade
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  A Effective Gain está comprometida com a proteção da privacidade e dos dados
                  pessoais de seus usuários, em conformidade com:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Lei Geral de Proteção de Dados Pessoais (LGPD)<br />
                  • Regulamento Geral sobre a Proteção de Dados (GDPR)<br />
                  • Outras leis de privacidade aplicáveis
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  7.2 Política de Privacidade
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Nossa Política de Privacidade, disponível em <Link href="/politica-privacidade" style={{ color: '#3B82F6', textDecoration: 'underline' }}>/politica-privacidade</Link>, descreve detalhadamente:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Quais dados coletamos e por quê<br />
                  • Como utilizamos e protegemos seus dados<br />
                  • Com quem compartilhamos informações<br />
                  • Seus direitos sobre seus dados pessoais<br />
                  • Como exercer esses direitos
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  7.3 Processamento de Dados
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Ao utilizar nossos serviços, você consente com o processamento de seus dados
                  pessoais conforme descrito em nossa Política de Privacidade.
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  7.4 Transferência Internacional
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Seus dados podem ser transferidos e processados em países fora do Brasil, sempre
                  com garantias adequadas de proteção conforme exigido pela LGPD.
                </Text>
              </VStack>
            </VStack>

            {/* Section 8: Limitações de Responsabilidade */}
            <VStack spacing={8} align="center" w="100%">
              <Heading as="h2" size="xl" color="white" textAlign="center">
                8. LIMITAÇÕES DE RESPONSABILIDADE
              </Heading>
              
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  8.1 Limitações Gerais
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  A Effective Gain não será responsável por:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Danos indiretos, incidentais, especiais ou consequenciais<br />
                  • Perda de lucros, receitas, dados ou oportunidades de negócio<br />
                  • Interrupções temporárias do serviço<br />
                  • Ações de terceiros ou falhas de sistemas externos<br />
                  • Uso inadequado da Plataforma pelo usuário
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  8.2 Limitação Monetária
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Nossa responsabilidade total, independentemente da causa da ação, não excederá o
                  valor pago pelo usuário nos 12 meses anteriores ao evento que deu origem à
                  reclamação.
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  8.3 Força Maior
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Não seremos responsáveis por atrasos ou falhas decorrentes de:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Desastres naturais<br />
                  • Ações governamentais<br />
                  • Falhas de infraestrutura de internet<br />
                  • Ataques cibernéticos<br />
                  • Outras circunstâncias fora de nosso controle razoável
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  8.4 Isenção de Garantias
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  A Plataforma é fornecida "como está" e "conforme disponível", sem garantias
                  expressas ou implícitas de:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Funcionamento ininterrupto<br />
                  • Ausência de erros<br />
                  • Adequação a propósitos específicos<br />
                  • Não violação de direitos de terceiros
                </Text>
              </VStack>
            </VStack>

            {/* Section 9: Indenização */}
            <VStack spacing={8} align="center" w="100%">
              <Heading as="h2" size="xl" color="white" textAlign="center">
                9. INDENIZAÇÃO
              </Heading>
              
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  9.1 Obrigação de Indenizar
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Você concorda em indenizar, defender e isentar a Effective Gain, seus diretores,
                  funcionários, agentes e afiliados de quaisquer:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Reclamações de terceiros<br />
                  • Danos, perdas ou custos<br />
                  • Honorários advocatícios<br />
                  • Outras responsabilidades
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Decorrentes de:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Seu uso da Plataforma<br />
                  • Violação destes Termos<br />
                  • Violação de direitos de terceiros<br />
                  • Suas atividades comerciais
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  9.2 Processo de Indenização
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Em caso de reclamação:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Notificaremos você prontamente<br />
                  • Você assumirá a defesa com advogados qualificados<br />
                  • Cooperaremos razoavelmente na defesa<br />
                  • Você não fará acordos sem nosso consentimento
                </Text>
              </VStack>
            </VStack>

            {/* Section 10: Rescisão */}
            <VStack spacing={8} align="center" w="100%">
              <Heading as="h2" size="xl" color="white" textAlign="center">
                10. RESCISÃO
              </Heading>
              
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  10.1 Rescisão pelo Usuário
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Você pode rescindir este acordo a qualquer momento:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Cancelando sua assinatura através da Plataforma<br />
                  • Enviando solicitação por email para suporte@effectivegain.com<br />
                  • Sem necessidade de aviso prévio ou justificativa
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  10.2 Rescisão pela Effective Gain
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Podemos rescindir ou suspender sua conta imediatamente se:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Você violar estes Termos de Serviço<br />
                  • Houver atividade fraudulenta ou ilegal<br />
                  • Não efetuar pagamentos devidos<br />
                  • Usar a Plataforma de forma que prejudique outros usuários<br />
                  • Por qualquer outro motivo justificado
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  10.3 Efeitos da Rescisão
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Após a rescisão:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Seu acesso à Plataforma será imediatamente suspenso<br />
                  • Seus dados permanecerão disponíveis por 30 dias para exportação<br />
                  • Após 30 dias, os dados poderão ser permanentemente excluídos<br />
                  • Obrigações financeiras pendentes permanecerão devidas<br />
                  • Cláusulas que por natureza devem sobreviver continuarão válidas
                </Text>
              </VStack>
            </VStack>

            {/* Section 11: Alterações nos Termos */}
            <VStack spacing={8} align="center" w="100%">
              <Heading as="h2" size="xl" color="white" textAlign="center">
                11. ALTERAÇÕES NOS TERMOS
              </Heading>
              
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  11.1 Direito de Alteração
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento,
                  por motivos incluindo mas não limitados a:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Mudanças na legislação<br />
                  • Novas funcionalidades da Plataforma<br />
                  • Melhorias de segurança<br />
                  • Alterações em nosso modelo de negócios
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  11.2 Notificação de Alterações
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Alterações serão comunicadas através de:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Email para o endereço cadastrado<br />
                  • Notificação na Plataforma<br />
                  • Publicação em nosso website<br />
                  • Outros meios apropriados
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  11.3 Prazo para Aceite
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Alterações menores: efetivas imediatamente<br />
                  • Alterações substanciais: 30 dias de aviso prévio<br />
                  • Você pode cancelar sua conta se não concordar com as alterações<br />
                  • Uso continuado após o prazo constitui aceite das alterações
                </Text>
              </VStack>
            </VStack>

            {/* Section 12: Resolução de Disputas */}
            <VStack spacing={8} align="center" w="100%">
              <Heading as="h2" size="xl" color="white" textAlign="center">
                12. RESOLUÇÃO DE DISPUTAS
              </Heading>
              
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  12.1 Negociação Direta
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Encorajamos a resolução amigável de disputas através de:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Contato direto com nosso suporte<br />
                  • Negociação de boa-fé<br />
                  • Mediação quando apropriada
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  12.2 Jurisdição e Foro
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Este acordo é regido pelas leis brasileiras. Quaisquer disputas serão resolvidas no foro
                  da comarca onde está localizada a sede da Effective Gain, renunciando as partes a
                  qualquer outro, por mais privilegiado que seja.
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  12.3 Arbitragem (Opcional)
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  As partes podem optar por resolver disputas através de arbitragem, conforme
                  regulamento da Câmara de Arbitragem escolhida de comum acordo.
                </Text>
              </VStack>
            </VStack>

            {/* Section 13: Disposições Gerais */}
            <VStack spacing={8} align="center" w="100%">
              <Heading as="h2" size="xl" color="white" textAlign="center">
                13. DISPOSIÇÕES GERAIS
              </Heading>
              
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  13.1 Acordo Integral
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Estes Termos, juntamente com nossa Política de Privacidade, constituem o acordo
                  integral entre as partes, substituindo todos os acordos anteriores.
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  13.2 Independência das Cláusulas
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Se qualquer cláusula for considerada inválida ou inexequível, as demais
                  permanecerão em pleno vigor e efeito.
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  13.3 Renúncia
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  A não aplicação de qualquer direito não constituirá renúncia a esse direito.
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  13.4 Cessão
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Você não pode ceder seus direitos sem nosso consentimento prévio por escrito.
                  Podemos ceder nossos direitos a qualquer momento.
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  13.5 Relacionamento das Partes
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Nada neste acordo cria uma parceria, joint venture ou relação de agência entre as
                  partes.
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  13.6 Sobrevivência
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  As seguintes cláusulas sobreviverão à rescisão: Propriedade Intelectual, Limitações de
                  Responsabilidade, Indenização, Resolução de Disputas e Disposições Gerais.
                </Text>
              </VStack>
            </VStack>

            {/* Section 14: Informações de Contato */}
            <VStack spacing={8} align="center" w="100%">
              <Heading as="h2" size="xl" color="white" textAlign="center">
                14. INFORMAÇÕES DE CONTATO
              </Heading>
              
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  14.1 Dados da Empresa
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Effective Gain Tecnologia Ltda.<br />
                  • CNPJ: 38.731.501/0001-10<br />
                  • Endereço: Av. Raja Gabaglia, 2280, sala 502, Estoril, Belo Horizonte/MG<br />
                  • Email: contato@effectivegain.com<br />
                  • Telefone: +55 31 8460-6370<br />
                  • Website: https://effectivegain.com
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  14.2 Suporte Técnico
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Email: suporte@effectivegain.com<br />
                  • Horário: Segunda a sexta, 8h às 18h (horário de Brasília)<br />
                  • Chat online: Disponível na Plataforma
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  14.3 Questões Jurídicas
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Email: juridico@effectivegain.com<br />
                  • Assuntos: Questões contratuais, propriedade intelectual, compliance
                </Text>
              </VStack>

              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  14.4 Proteção de Dados
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • DPO (Data Protection Officer): dpo@effectivegain.com<br />
                  • Assuntos: Privacidade, LGPD, exercício de direitos sobre dados pessoais
                </Text>
              </VStack>
            </VStack>

            {/* Section 15: Declaração Final */}
            <VStack spacing={8} align="center" w="100%">
              <Heading as="h2" size="xl" color="white" textAlign="center">
                15. DECLARAÇÃO FINAL
              </Heading>
              
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.300" fontSize="md" textAlign="center" lineHeight="1.8">
                  Ao utilizar a Plataforma CRM Effective Gain, você reconhece que leu, compreendeu e
                  concorda em ficar vinculado a estes Termos de Serviço.
                </Text>
                <Text color="gray.400" fontSize="md" textAlign="center" mt={4}>
                  Data da última atualização: 25 de julho de 2025<br />
                  Versão: 1.0
                </Text>
                <Text color="gray.400" fontSize="md" textAlign="center" mt={2}>
                  © 2025 Effective Gain Tecnologia Ltda. Todos os direitos reservados.
                </Text>
              </VStack>
            </VStack>

            {/* Footer */}
            <Box textAlign="center" pt={8} borderTop="1px solid rgba(255, 255, 255, 0.1)">
              <Text color="gray.400" fontSize="sm">
                Para dúvidas sobre estes termos, entre em contato conosco através do WhatsApp ou email.
              </Text>
              <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
                <Text color="blue.300" fontSize="sm" mt={2} _hover={{ textDecoration: 'underline' }}>
                  ← Voltar ao Início
                </Text>
              </Link>
            </Box>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
} 