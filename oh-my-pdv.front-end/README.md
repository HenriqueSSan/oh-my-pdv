# Oh My PDV
"Oh my PDV" é um simples sistema de gestão de ponto de vendas minimalista.

### Como rodar o front-end:

Para rodar o front-end é necessário ter `node` instalado em sua máquina, para isso siga os passoas abaixo:

##### 1. Primeiro passo:
**Instale primeiro as depedências da aplicação do front-end.**
```bash
npm i
```

##### 2. Segundo passo:
**Após o primeiro passo abra seu terminal e escreva o comando**
```bash
npm run build
```

##### 3. Terceiro passo:
**Após o primeiro passo abra seu terminal e escreva o comando**
```bash
npm run start
```

### Como rodar a camada de testes do front-end:

Para rodar os teste do front-end é necessário ter `node` instala em sua máquina:

```bash
npm run test
```

Observações para components dentro da pasta `UI`: **[Segmento] | [Component] [Descrição]**

Observações para `fluxos` de `formulários` ou `interações` em geral: **[Segmento] | [Fluxo] [Descrição]**

### Como implementar o Grafana Faro

Acrescente essas variáveis de ambiente no `.env` que você precisa criar:
```bash
GRAFANA_API_KEY=sua_api_key
GRAFANA_APP_ID=seu_identificador_do_aplicativo
GRAFANA_STACK_ID=seu_stack_id
GRAFANA_APP_NAME=seu_nome_do_aplicativo
GRAFANA_API=api_do_grafana
```

Caso esteja desejando fazer alterações nas configurações do Grafana Faro, vá para `./src/logger.tsx`.


### Tecnologias utilizadas atualmente:

- React.Js, TypeScript, React-Router, Vitest,Vite,Eslint,Prettier,TailwindCSS, React-Testing-Library, Axios, React-Query, Socket.Io.

### Informações adicionais:
- WAI-ARIA, W3C Web Standards 