"use client"

import { Box, Text, Flex, Container, Heading, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function PoliticaPrivacidade() {
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
                Política de Privacidade
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

            {/* Section Titles */}
            <VStack spacing={8} align="center" w="100%">
              <Heading as="h2" size="xl" color="white" textAlign="center">
                1. Introdução e Compromisso
              </Heading>
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  1.1 Nosso Compromisso
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  A Effective Gain Tecnologia Ltda., inscrita no CNPJ 38.731.501/0001-10, está
                  comprometida com a proteção da privacidade e dos dados pessoais de todos os
                  usuários de nossa Plataforma CRM Effective Gain.
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos,
                  compartilhamos e protegemos suas informações pessoais, em total conformidade
                  com:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Lei Geral de Proteção de Dados Pessoais (LGPD) - Lei nº 13.709/2018
                  <br />
                  • Regulamento Geral sobre a Proteção de Dados (GDPR) - Regulamento (UE) 2016/679
                  <br />
                  • Marco Civil da Internet - Lei nº 12.965/2014
                  <br />
                  • Código de Defesa do Consumidor - Lei nº 8.078/1990
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  1.2 Aplicabilidade
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Esta política aplica-se a:
                  <br />
                  • Usuários da Plataforma CRM Effective Gain
                  <br />
                  • Visitantes de nosso website
                  <br />
                  • Contatos armazenados pelos usuários
                  <br />
                  • Qualquer pessoa cujos dados sejam processados através de nossos serviços
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  1.3 Controlador de Dados
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  A Effective Gain atua como Controlador de Dados para informações coletadas
                  diretamente dos usuários e como Operador de Dados para informações inseridas
                  pelos usuários sobre seus clientes.
                </Text>
              </VStack>

              <Heading as="h2" size="xl" color="white" textAlign="center">
                2. Definições Importantes
              </Heading>
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Para os fins desta Política de Privacidade, aplicam-se as seguintes definições:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>Dados Pessoais:</strong> Informação relacionada a pessoa natural identificada ou identificável.
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>Dados Pessoais Sensíveis:</strong> Dados sobre origem racial ou étnica, convicção religiosa, opinião política, filiação sindical, dados referentes à saúde ou à vida sexual, dados genéticos ou biométricos.
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>Titular dos Dados:</strong> Pessoa natural a quem se referem os dados pessoais.
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>Controlador:</strong> Pessoa natural ou jurídica que toma as decisões sobre o tratamento de dados pessoais.
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>Operador:</strong> Pessoa natural ou jurídica que realiza o tratamento de dados pessoais em nome do controlador.
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>Tratamento:</strong> Toda operação realizada com dados pessoais, como coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>Anonimização:</strong> Processo de remoção da possibilidade de associação, direta ou indireta, de um dado a um indivíduo.
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>Consentimento:</strong> Manifestação livre, informada e inequívoca pela qual o titular concorda com o tratamento de seus dados pessoais para finalidade determinada.
                </Text>
              </VStack>

              <Heading as="h2" size="xl" color="white" textAlign="center">
                3. Dados Coletados
              </Heading>
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  3.1 Dados Coletados Diretamente dos Usuários
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>a) Dados de Cadastro:</strong>
                  <br />
                  • Nome completo
                  <br />
                  • Endereço de email
                  <br />
                  • Telefone
                  <br />
                  • Nome da empresa
                  <br />
                  • Cargo/função
                  <br />
                  • Senha (armazenada de forma criptografada)
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>b) Dados de Pagamento:</strong>
                  <br />
                  • Informações de cartão de crédito (processadas por terceiros seguros)
                  <br />
                  • Dados de cobrança
                  <br />
                  • Histórico de transações
                  <br />
                  • Método de pagamento preferido
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>c) Dados de Uso:</strong>
                  <br />
                  • Logs de acesso e atividade
                  <br />
                  • Endereço IP
                  <br />
                  • Informações do dispositivo (tipo, sistema operacional, navegador)
                  <br />
                  • Localização geográfica aproximada
                  <br />
                  • Páginas visitadas e tempo de permanência
                  <br />
                  • Funcionalidades utilizadas
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>d) Dados de Comunicação:</strong>
                  <br />
                  • Mensagens enviadas através da plataforma
                  <br />
                  • Emails trocados com nosso suporte
                  <br />
                  • Gravações de chamadas (quando autorizado)
                  <br />
                  • Feedback e avaliações
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  3.2 Dados Inseridos pelos Usuários (Dados de Clientes)
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>a) Informações de Contatos:</strong>
                  <br />
                  • Nomes e dados de identificação
                  <br />
                  • Informações de contato (telefone, email, endereço)
                  <br />
                  • Dados profissionais
                  <br />
                  • Histórico de interações
                  <br />
                  • Preferências e interesses
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>b) Dados de Comunicação:</strong>
                  <br />
                  • Mensagens de WhatsApp, email e SMS
                  <br />
                  • Histórico de chamadas telefônicas
                  <br />
                  • Gravações de conversas (quando autorizado)
                  <br />
                  • Anexos e documentos compartilhados
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>c) Dados Comerciais:</strong>
                  <br />
                  • Histórico de compras
                  <br />
                  • Preferências de produtos/serviços
                  <br />
                  • Dados financeiros relacionados a transações
                  <br />
                  • Status no pipeline de vendas
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  3.3 Dados Coletados Automaticamente
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>a) Cookies e Tecnologias Similares:</strong>
                  <br />
                  • Cookies de sessão e persistentes
                  <br />
                  • Web beacons
                  <br />
                  • Pixels de rastreamento
                  <br />
                  • Local storage
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>b) Dados de Performance:</strong>
                  <br />
                  • Métricas de uso da plataforma
                  <br />
                  • Estatísticas de performance
                  <br />
                  • Relatórios de erros
                  <br />
                  • Dados de otimização
                </Text>
              </VStack>

              <Heading as="h2" size="xl" color="white" textAlign="center">
                4. Finalidades do Tratamento
              </Heading>
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  4.1 Finalidades Principais
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>a) Prestação dos Serviços:</strong>
                  <br />
                  • Criar e gerenciar contas de usuário
                  <br />
                  • Fornecer acesso à plataforma CRM
                  <br />
                  • Processar e executar funcionalidades solicitadas
                  <br />
                  • Sincronizar dados entre dispositivos
                  <br />
                  • Realizar integrações com serviços terceiros (Google Calendar, WhatsApp, etc.)
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>b) Comunicação:</strong>
                  <br />
                  • Enviar notificações sobre a conta e serviços
                  <br />
                  • Responder a solicitações de suporte
                  <br />
                  • Informar sobre atualizações e novos recursos
                  <br />
                  • Enviar comunicações de marketing (com consentimento)
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>c) Cobrança e Pagamentos:</strong>
                  <br />
                  • Processar pagamentos e cobranças
                  <br />
                  • Emitir faturas e recibos
                  <br />
                  • Gerenciar assinaturas e renovações
                  <br />
                  • Prevenir fraudes financeiras
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>d) Melhoria dos Serviços:</strong>
                  <br />
                  • Analisar padrões de uso
                  <br />
                  • Desenvolver novos recursos
                  <br />
                  • Otimizar performance da plataforma
                  <br />
                  • Realizar pesquisas de satisfação
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>e) Segurança:</strong>
                  <br />
                  • Proteger contra fraudes e abusos
                  <br />
                  • Detectar atividades suspeitas
                  <br />
                  • Manter logs de segurança
                  <br />
                  • Implementar controles de acesso
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>f) Conformidade Legal:</strong>
                  <br />
                  • Cumprir obrigações legais e regulatórias
                  <br />
                  • Responder a solicitações de autoridades
                  <br />
                  • Manter registros para auditoria
                  <br />
                  • Exercer direitos em processos legais
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  4.2 Base Legal para o Tratamento
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Processamos dados pessoais com base nas seguintes bases legais:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>a) Consentimento (Art. 7º, I, LGPD):</strong>
                  <br />
                  • Marketing direto
                  <br />
                  • Cookies não essenciais
                  <br />
                  • Compartilhamento com parceiros para finalidades específicas
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>b) Execução de Contrato (Art. 7º, V, LGPD):</strong>
                  <br />
                  • Prestação dos serviços contratados
                  <br />
                  • Processamento de pagamentos
                  <br />
                  • Suporte técnico
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>c) Legítimo Interesse (Art. 7º, IX, LGPD):</strong>
                  <br />
                  • Segurança da plataforma
                  <br />
                  • Prevenção de fraudes
                  <br />
                  • Melhoria dos serviços
                  <br />
                  • Marketing para clientes existentes
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>d) Cumprimento de Obrigação Legal (Art. 7º, II, LGPD):</strong>
                  <br />
                  • Retenção de dados fiscais
                  <br />
                  • Relatórios regulatórios
                  <br />
                  • Cooperação com autoridades
                </Text>
              </VStack>

              <Heading as="h2" size="xl" color="white" textAlign="center">
                5. Compartilhamento de Dados
              </Heading>
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  5.1 Quando Compartilhamos
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Compartilhamos dados pessoais apenas nas seguintes situações:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>a) Prestadores de Serviços:</strong>
                  <br />
                  • Provedores de infraestrutura em nuvem (AWS, Google Cloud)
                  <br />
                  • Processadores de pagamento (Stripe, PagarMe)
                  <br />
                  • Serviços de email (SendGrid, Mailgun)
                  <br />
                  • Ferramentas de analytics (Google Analytics)
                  <br />
                  • Suporte técnico e manutenção
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>b) Integrações Autorizadas:</strong>
                  <br />
                  • Google Calendar (com consentimento do usuário)
                  <br />
                  • WhatsApp Business API
                  <br />
                  • Redes sociais (Facebook, Instagram)
                  <br />
                  • Sistemas de terceiros via API
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>c) Obrigações Legais:</strong>
                  <br />
                  • Autoridades judiciais mediante ordem judicial
                  <br />
                  • Órgãos reguladores quando exigido por lei
                  <br />
                  • Autoridades fiscais conforme legislação
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>d) Proteção de Direitos:</strong>
                  <br />
                  • Defesa em processos legais
                  <br />
                  • Proteção contra fraudes
                  <br />
                  • Investigação de violações de termos
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  5.2 Garantias de Proteção
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Todos os terceiros com quem compartilhamos dados:
                  <br />
                  • Assinam acordos de confidencialidade
                  <br />
                  • Comprometem-se com padrões de segurança adequados
                  <br />
                  • Processam dados apenas conforme nossas instruções
                  <br />
                  • Implementam medidas técnicas e organizacionais apropriadas
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  5.3 Transferências Internacionais
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Alguns de nossos prestadores de serviços podem estar localizados fora do Brasil.
                  Nestes casos:
                  <br />
                  • Garantimos nível adequado de proteção
                  <br />
                  • Utilizamos cláusulas contratuais padrão
                  <br />
                  • Implementamos salvaguardas adicionais quando necessário
                  <br />
                  • Informamos sobre as transferências quando exigido
                </Text>
              </VStack>

              <Heading as="h2" size="xl" color="white" textAlign="center">
                6. Retenção de Dados
              </Heading>
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  6.1 Períodos de Retenção
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>a) Dados de Usuários Ativos:</strong>
                  <br />
                  • Mantidos enquanto a conta estiver ativa
                  <br />
                  • Dados de pagamento: conforme exigências fiscais (5 anos)
                  <br />
                  • Logs de segurança: 2 anos
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>b) Dados Após Cancelamento:</strong>
                  <br />
                  • Dados da conta: 30 dias para recuperação
                  <br />
                  • Dados de cobrança: conforme legislação fiscal
                  <br />
                  • Dados anonimizados: podem ser mantidos indefinidamente
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>c) Dados de Clientes dos Usuários:</strong>
                  <br />
                  • Controlados pelos usuários através da plataforma
                  <br />
                  • Excluídos quando solicitado pelo usuário
                  <br />
                  • Backup de segurança: 90 dias após exclusão
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  6.2 Critérios de Retenção
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Determinamos períodos de retenção baseados em:
                  <br />
                  • Finalidade original da coleta
                  <br />
                  • Obrigações legais e regulatórias
                  <br />
                  • Necessidades operacionais
                  <br />
                  • Solicitações dos titulares
                  <br />
                  • Riscos associados ao tratamento
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  6.3 Exclusão Automática
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Implementamos processos automatizados para:
                  <br />
                  • Excluir dados expirados
                  <br />
                  • Anonimizar informações antigas
                  <br />
                  • Limpar logs desnecessários
                  <br />
                  • Purgar backups antigos
                </Text>
              </VStack>

              <Heading as="h2" size="xl" color="white" textAlign="center">
                7. Direitos dos Titulares
              </Heading>
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  7.1 Seus Direitos (LGPD/GDPR)
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Você possui os seguintes direitos sobre seus dados pessoais:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>a) Direito de Acesso:</strong>
                  <br />
                  • Obter confirmação sobre o tratamento de seus dados
                  <br />
                  • Acessar seus dados pessoais
                  <br />
                  • Receber informações sobre finalidades e métodos de tratamento
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>b) Direito de Retificação:</strong>
                  <br />
                  • Corrigir dados incompletos, inexatos ou desatualizados
                  <br />
                  • Atualizar informações quando necessário
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>c) Direito de Exclusão:</strong>
                  <br />
                  • Solicitar a eliminação de dados pessoais
                  <br />
                  • "Direito ao esquecimento" em situações específicas
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>d) Direito de Portabilidade:</strong>
                  <br />
                  • Receber dados em formato estruturado e legível
                  <br />
                  • Transferir dados para outro controlador
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>e) Direito de Oposição:</strong>
                  <br />
                  • Opor-se ao tratamento baseado em legítimo interesse
                  <br />
                  • Cancelar comunicações de marketing
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>f) Direito de Limitação:</strong>
                  <br />
                  • Restringir o tratamento em situações específicas
                  <br />
                  • Bloquear processamento enquanto questões são resolvidas
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>g) Direito de Não Discriminação:</strong>
                  <br />
                  • Não sofrer discriminação por exercer seus direitos
                  <br />
                  • Manter acesso aos serviços essenciais
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  7.2 Como Exercer Seus Direitos
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Para exercer qualquer direito:
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>a) Portal do Usuário:</strong>
                  <br />
                  • Acesse sua conta na plataforma
                  <br />
                  • Utilize as ferramentas de privacidade disponíveis
                  <br />
                  • Baixe ou exclua dados diretamente
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>b) Contato Direto:</strong>
                  <br />
                  • Email: dpo@effectivegain.com
                  <br />
                  • Formulário online em nosso website
                  <br />
                  • Suporte através da plataforma
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>c) Informações Necessárias:</strong>
                  <br />
                  • Identificação clara do titular
                  <br />
                  • Especificação do direito a ser exercido
                  <br />
                  • Informações para localizar os dados
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  7.3 Prazos de Resposta
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  • Confirmação de recebimento: 72 horas
                  <br />
                  • Resposta completa: 15 dias úteis (LGPD) / 30 dias (GDPR)
                  <br />
                  • Situações complexas: Prazo pode ser estendido com justificativa
                </Text>
              </VStack>

              <Heading as="h2" size="xl" color="white" textAlign="center">
                8. Segurança dos Dados
              </Heading>
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  8.1 Medidas Técnicas
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>a) Criptografia:</strong>
                  <br />
                  • Dados em trânsito: TLS 1.3
                  <br />
                  • Dados em repouso: AES-256
                  <br />
                  • Senhas: Hash bcrypt com salt
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>b) Controles de Acesso:</strong>
                  <br />
                  • Autenticação multifator obrigatória
                  <br />
                  • Princípio do menor privilégio
                  <br />
                  • Revisões regulares de permissões
                  <br />
                  • Logs de acesso detalhados
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>c) Infraestrutura:</strong>
                  <br />
                  • Servidores em data centers certificados
                  <br />
                  • Firewalls e sistemas de detecção de intrusão
                  <br />
                  • Monitoramento 24/7
                  <br />
                  • Backups automatizados e criptografados
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>d) Desenvolvimento Seguro:</strong>
                  <br />
                  • Revisões de código de segurança
                  <br />
                  • Testes de penetração regulares
                  <br />
                  • Análise de vulnerabilidades
                  <br />
                  • Atualizações de segurança prioritárias
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  8.2 Medidas Organizacionais
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>a) Treinamento:</strong>
                  <br />
                  • Capacitação regular da equipe
                  <br />
                  • Conscientização sobre privacidade
                  <br />
                  • Procedimentos de resposta a incidentes
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>b) Políticas Internas:</strong>
                  <br />
                  • Política de segurança da informação
                  <br />
                  • Procedimentos de tratamento de dados
                  <br />
                  • Controles de acesso físico e lógico
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>c) Fornecedores:</strong>
                  <br />
                  • Due diligence de segurança
                  <br />
                  • Acordos de processamento de dados
                  <br />
                  • Monitoramento contínuo
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  8.3 Resposta a Incidentes
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Em caso de violação de dados:
                  <br />
                  • Detecção: Sistemas automatizados de monitoramento
                  <br />
                  • Contenção: Procedimentos imediatos de contenção
                  <br />
                  • Avaliação: Análise de impacto e riscos
                  <br />
                  • Notificação: Autoridades e titulares conforme exigido por lei
                  <br />
                  • Remediação: Medidas corretivas e preventivas
                </Text>
              </VStack>

              <Heading as="h2" size="xl" color="white" textAlign="center">
                9. Cookies e Tecnologias Similares
              </Heading>
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  9.1 O que são Cookies
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando
                  você visita nosso website ou utiliza nossa plataforma.
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  9.2 Tipos de Cookies Utilizados
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>a) Cookies Essenciais:</strong>
                  <br />
                  • Necessários para funcionamento básico
                  <br />
                  • Autenticação e segurança
                  <br />
                  • Não podem ser desabilitados
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>b) Cookies de Performance:</strong>
                  <br />
                  • Coletam informações sobre uso
                  <br />
                  • Ajudam a melhorar funcionalidades
                  <br />
                  • Dados agregados e anônimos
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>c) Cookies de Funcionalidade:</strong>
                  <br />
                  • Lembram preferências do usuário
                  <br />
                  • Personalizam experiência
                  <br />
                  • Facilitam uso da plataforma
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>d) Cookies de Marketing:</strong>
                  <br />
                  • Rastreiam atividades para publicidade
                  <br />
                  • Personalizam anúncios
                  <br />
                  • Medem eficácia de campanhas
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  9.3 Gerenciamento de Cookies
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Você pode:
                  <br />
                  • Configurar preferências através do banner de cookies
                  <br />
                  • Gerenciar cookies através das configurações do navegador
                  <br />
                  • Excluir cookies existentes
                  <br />
                  • Bloquear cookies futuros
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8" fontStyle="italic">
                  Nota: Desabilitar cookies essenciais pode afetar o funcionamento da plataforma.
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  9.4 Outras Tecnologias
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>a) Web Beacons:</strong>
                  <br />
                  • Pequenas imagens invisíveis
                  <br />
                  • Coletam informações sobre interação
                  <br />
                  • Utilizados em emails e páginas web
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  <strong>b) Local Storage:</strong>
                  <br />
                  • Armazenamento local no navegador
                  <br />
                  • Melhora performance da aplicação
                  <br />
                  • Pode ser limpo pelo usuário
                </Text>
              </VStack>

              <Heading as="h2" size="xl" color="white" textAlign="center">
                10. Menores de Idade
              </Heading>
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  10.1 Política Geral
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Nossa plataforma não é direcionada a menores de 18 anos. Não coletamos
                  intencionalmente dados pessoais de menores sem consentimento parental adequado.
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  10.2 Descoberta de Dados de Menores
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Se descobrirmos que coletamos dados de menores sem consentimento adequado:
                  <br />
                  • Excluiremos os dados imediatamente
                  <br />
                  • Notificaremos os responsáveis quando possível
                  <br />
                  • Implementaremos medidas preventivas adicionais
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  10.3 Responsabilidade dos Usuários
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Usuários que inserem dados de menores em nossa plataforma são responsáveis por:
                  <br />
                  • Obter consentimento parental adequado
                  <br />
                  • Garantir conformidade com leis aplicáveis
                  <br />
                  • Informar os menores sobre o tratamento de dados
                </Text>
              </VStack>

              <Heading as="h2" size="xl" color="white" textAlign="center">
                11. Alterações nesta Política
              </Heading>
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  11.1 Direito de Alteração
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Reservamo-nos o direito de alterar esta Política de Privacidade a qualquer momento
                  para:
                  <br />
                  • Refletir mudanças em nossas práticas
                  <br />
                  • Cumprir novas obrigações legais
                  <br />
                  • Melhorar clareza e transparência
                  <br />
                  • Adicionar novos recursos ou serviços
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  11.2 Notificação de Alterações
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Alterações serão comunicadas através de:
                  <br />
                  • Email para endereço cadastrado
                  <br />
                  • Notificação na plataforma
                  <br />
                  • Publicação em nosso website
                  <br />
                  • Banner de aviso quando aplicável
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  11.3 Alterações Substanciais
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Para mudanças que afetem significativamente seus direitos:
                  <br />
                  • Aviso prévio de 30 dias
                  <br />
                  • Solicitação de novo consentimento quando necessário
                  <br />
                  • Opção de cancelar conta se discordar
                </Text>
              </VStack>

              <Heading as="h2" size="xl" color="white" textAlign="center">
                12. Transferência de Negócios
              </Heading>
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Em caso de fusão, aquisição, venda de ativos ou reorganização empresarial:
                  <br />
                  • Dados pessoais podem ser transferidos
                  <br />
                  • Notificaremos sobre a transferência
                  <br />
                  • Nova entidade respeitará esta política
                  <br />
                  • Seus direitos permanecerão protegidos
                </Text>
              </VStack>

              <Heading as="h2" size="xl" color="white" textAlign="center">
                13. Jurisdição e Lei Aplicável
              </Heading>
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Esta Política de Privacidade é regida pelas leis brasileiras, especialmente:
                  <br />
                  • Lei Geral de Proteção de Dados Pessoais (LGPD)
                  <br />
                  • Marco Civil da Internet
                  <br />
                  • Código de Defesa do Consumidor
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Para usuários na União Europeia, aplicam-se também as disposições do GDPR.
                </Text>
              </VStack>

              <Heading as="h2" size="xl" color="white" textAlign="center">
                14. Contato e DPO
              </Heading>
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.400" fontSize="lg" textAlign="left">
                  14.1 Dados para Contato
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Effective Gain Tecnologia Ltda.
                  <br />
                  • CNPJ: 38.731.501/0001-10
                  <br />
                  • Endereço: [Endereço completo]
                  <br />
                  • Email geral: contato@effectivegain.com
                  <br />
                  • Website: https://effectivegain.com
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  14.2 Encarregado de Proteção de Dados (DPO)
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Para questões sobre privacidade e proteção de dados:
                  <br />
                  • Email: dpo@effectivegain.com
                  <br />
                  • Assuntos: Exercício de direitos, dúvidas sobre tratamento de dados, reclamações sobre privacidade
                </Text>
                <Text color="gray.400" fontSize="lg" textAlign="left" mt={4}>
                  14.3 Autoridade de Controle
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Você também pode entrar em contato com a Autoridade Nacional de Proteção de
                  Dados (ANPD):
                  <br />
                  • Website: https://www.gov.br/anpd/
                  <br />
                  • Email: atendimento@anpd.gov.br
                </Text>
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Para usuários na UE, contate a autoridade de proteção de dados de seu país.
                </Text>
              </VStack>

              <Heading as="h2" size="xl" color="white" textAlign="center">
                15. Declaração Final
              </Heading>
              <VStack spacing={4} align="stretch" w="100%">
                <Text color="gray.300" fontSize="md" textAlign="left" lineHeight="1.8">
                  Esta Política de Privacidade reflete nosso compromisso com a transparência e
                  proteção de seus dados pessoais. Encorajamos você a ler esta política regularmente e
                  entrar em contato conosco com qualquer dúvida.
                </Text>
                <Text color="gray.400" fontSize="md" textAlign="left" mt={4}>
                  Data da última atualização: 25 de julho de 2025
                  <br />
                  Versão: 1.0
                </Text>
              </VStack>

              {/* Footer */}
              <Box textAlign="center" pt={8}>
                <Text color="gray.400" fontSize="sm">
                  © 2025 Effective Gain Tecnologia Ltda. Todos os direitos reservados.
                </Text>
              </Box>
            </VStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
} 