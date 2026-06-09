# GS- Cross Plataform

# Central de Monitoramento de Missões Espaciais - App Cross-Platform

## a) Sobre o Projeto
Este projeto é um aplicativo mobile desenvolvido em **React Native + Expo** que simula uma central de monitoramento de missões espaciais de alta tecnologia. O objetivo do app é fornecer uma interface de controle para visualizar e ajustar parâmetros críticos de sobrevivência e navegação da nave, como Energia, Oxigênio, Estabilidade Orbital e Comunicação.
A interface foi construída utilizando uma paleta de cores "Deep Space Cyberpunk", focada na usabilidade e no rápido reconhecimento de alertas visuais (sistemas críticos ficam vermelhos, sistemas estáveis ficam cianos).


## b) Integrantes do Grupo
Luize Martinês RM 564016
Lívia dos Santos RM562967
Guilherme Willians RM565319

## c) Como Rodar o Projeto

**Clone o repositório:**
  ```bash
  git clone (https://github.com/luize1903/gs--cross)]

**Passo a Passo:**
1. Clone este repositório:
   \`\`\`bash
   git clone https://github.com/seu-usuario/fiap-cpad-cp1-smart-campus.git
   \`\`\`
2. Navegue até a pasta do projeto:
   \`\`\`bash
   cd fiap-cpad-cp1-smart-campus
   \`\`\`
3. Instale as dependências:
   \`\`\`bash
   npm install
   \`\`\`
4. Inicie o servidor de desenvolvimento:
   \`\`\`bash
   npx expo start
   \`\`\`
5. Abra o aplicativo **Expo Go** no seu celular e escaneie o QR Code exibido no terminal.

---

## d) Funcionalidades e Requisitos Atendidos


- **Dashboards Dinâmicos:** Exibição em tempo real de dados de sensores (Energia, O2, Estabilidade e Comunicação) com feedback visual de cores.
- **Alertas Automáticos:** Sistema de `Alert` nativo disparado automaticamente caso os sistemas vitais (Energia, Oxigênio ou Estabilidade) caiam para menos de 20%.
- **Formulários com Validação:** Tela de calibração que impede a entrada de dados inválidos (como letras em campos numéricos, campos em branco ou valores fora da faixa de 0 a 100).
- **Roteamento:** Navegação fluida entre o Painel Central e o Terminal de Recalibração utilizando o **Expo Router**.
- **Gerenciamento de Estado Global:** Uso da **Context API** (`MissionContext`) para compartilhar os dados dos sensores instantaneamente entre todas as telas do app.
- **Persistência Local:** Integração com **AsyncStorage** para salvar os níveis dos parâmetros no dispositivo, garantindo que a missão não perca dados caso o app seja fechado e reaberto.

## e) Tecnologias Utilizadas

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [Expo Router](https://docs.expo.dev/router/introduction/) (Navegação)
* [Context API](https://react.dev/learn/passing-data-deeply-with-context) (Gerenciamento de Estado)
* [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/) (Persistência de Dados)
