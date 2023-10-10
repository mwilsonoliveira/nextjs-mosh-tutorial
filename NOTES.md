## Anotações

- uma aplicação Next.js é renderizada no servidor (server side rendering - SSR).
- quanto mais renderização no servidor, melhor performance no cliente.
- deixamos expostos para o cliente apenas pequenas ações, ou pequenos componentes.
- o Next.js possui seu próprio sistema de roteamento, não sendo necessária a instalação de um react-router-dom ou qualquer outra ferramenta de roteamento
- Links são funções de roteamento que fazem o papel do Anchor (ou "a") do HTML, com a vantagem de não renderizarem todo o conteúdo da página novamente.
- a pasta components que fica dentro de app, continua sendo criada e executada no servidor.
- porém, podemos escrever um componente inteiramente no lado do cliente, colocando a diretiva "use client" no começo dele.
- quando toda a lógica de fetch de dados está no cliente, existem vários problemas como um bundle muito grande, problemas de segurança e principalmente uma ida e volta extra ao servidor, porque depois de baixar o HTML são buscados os dados. O Next.js vem para resolver essa viagem extra ao servidor.
- cache é um local para onde fica mais fácil trazer os dados que não seja solicitando diretamente ao servidor.
- com o Next.js é possível personalizar a forma como os dados são solicitados ao servidor, setando parâmetros como o tempo de espera até que os dados sejam solicitados novamente.
- ferramentas como o axios não possuem cache.
- ao desabilitar o cache na requisição, os dados são mostrados dinamicamente após cada execução da requisição. Ao habilitá-lo os dados são mostrados de forma estática.
- PostCSS transforma as classes de CSS em classes com nome auto-gerado.
- o Next.js usa o PostCSS para que as classes não entrem em conflito caso possuam o mesmo nome.
- tailwind é um framework css que permite que você insira as classes diretamente nos elementos jsx ou tsx. E o ideal é que você faça isso pois, apesar de "ficar feio", ele evita que você tenha que procurar por código ao excluir ou mudar a estrutura dos seus componentes e isso é uma grande vantagem!
- daisyUI é como um bootstrap feito para o tailwind. Ele permite que ao invés de você digitar centenas de classes para montar um elemento estilizado em tailwind, ele já têm vários elementos prontos para você criar as suas interfaces.
