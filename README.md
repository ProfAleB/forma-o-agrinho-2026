# Projeto Estufa de Morangos - Agrinho 2026

Simulador interativo de uma estufa de morangos desenvolvido para o **Concurso Agrinho 2026**. O projeto demonstra como a tecnologia e o controle de clima são aliados da sustentabilidade no campo.

## 📋 Descrição do Projeto

Este é um site com tema agricultor/tecnologia que oferece:
- **Simulador de Estufa**: Controle interativo de temperatura, umidade do ar e do solo
- **Sistema de Status**: Análise em tempo real do ambiente da estufa
- **Navegação Multi-página**: Seções de Simulador, Sobre Nós e Concurso Agrinho
- **Design Responsivo**: Interface amigável e intuitiva

---

## 📁 Estrutura dos Arquivos

```
projeto/
├── index.html       # Estrutura HTML do site
├── style.css        # Estilos e layout
├── script.js        # Lógica interativa
├── README.md        # Este arquivo
└── imagens/         # Pasta com imagens do projeto
    └── Agrinho cortado 2026.png
```

---

## 💻 Código do Projeto

### 1. **index.html** - Estrutura da Página

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto Agro - Estufa e Agrinho</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="menu-topo">
        <button class="btn-menu ativo" onclick="mudarPagina('home')">Simulador</button>
        <button class="btn-menu" onclick="mudarPagina('sobre-nos')">Sobre Nós</button>
        <button class="btn-menu" onclick="mudarPagina('agrinho')">Concurso Agrinho</button>
    </nav>

    <div class="container">
        <section id="home" class="pagina">
            <header>
                <h1>Estufa de <span>Morangos</span></h1>
            </header>
            
            <main>
                <div class="info-destaque">
                    <p>Projeto desenvolvido como proposta para o <strong>Concurso Agrinho 2026</strong>. O objetivo deste simulador é demonstrar na prática como a tecnologia e o controle de clima são aliados da sustentabilidade no campo.</p>
                </div>

                <div class="controles">
                    <p class="instrucao-simulador">Ajuste os controles para encontrar o clima ideal para o cultivo:</p>
                    
                    <div class="controle-item">
                        <label for="temp">Temperatura: <span id="val-temp">20</span>°C</label>
                        <input type="range" id="temp" min="5" max="40" value="20">
                    </div>
                    <div class="controle-item">
                        <label for="umidade-ar">Umidade do Ar: <span id="val-umidade-ar">70</span>%</label>
                        <input type="range" id="umidade-ar" min="20" max="100" value="70">
                    </div>
                    <div class="controle-item">
                        <label for="umidade-solo">Umidade do Solo: <span id="val-umidade-solo">60</span>%</label>
                        <input type="range" id="umidade-solo" min="10" max="100" value="60">
                    </div>
                </div>

                <div id="painel-status" class="status-ideal">
                    <h2 id="texto-status">Ambiente Ideal!</h2>
                    <p id="detalhe-status">Os morangos estão crescendo saudáveis.</p>
                </div>

                <div class="info-rentabilidade">
                    <h3>A Força do Pequeno Produtor</h3>
                    <p>Uma pequena estufa de morangos suspensos (cerca de 100m²) pode abrigar até 1.000 plantas. Veja o potencial:</p>
                    <ul>
                        <li><strong>Produção Média:</strong> 1kg a 1,5kg por planta/safra.</li>
                        <li><strong>Preço de Venda:</strong> Entre R$ 20,00 e R$ 30,00 por quilo.</li>
                        <li><strong>Faturamento Bruto:</strong> Pode ultrapassar <strong>R$ 20.000,00</strong>!</li>
                    </ul>
                    <p>O uso da tecnologia (como os sensores simulados acima) evita perdas por pragas, economiza água e garante frutos com padrão de excelência, maximizando o lucro e preservando a natureza.</p>
                </div>
            </main>
        </section>

        <section id="sobre-nos" class="pagina oculto">
            <header>
                <h1>Sobre <span>Nós</span></h1>
            </header>
            <main class="conteudo-texto">
                <p>Somos estudantes e educadores apaixonados por tecnologia e sustentabilidade. Acreditamos que o futuro do agronegócio depende da inovação e do respeito ao meio ambiente.</p>
                <p>Este projeto foi desenvolvido durante nossa formação para demonstrar como o **HTML, CSS e JavaScript** podem ser usados para criar ferramentas que ajudam a entender o clima, a natureza e a produção de alimentos de forma interativa.</p>
                <h3>Nossa Missão</h3>
                <ul>
                    <li>Conectar tecnologia ao campo.</li>
                    <li>Incentivar o aprendizado prático.</li>
                    <li>Promover a agricultura sustentável.</li>
                </ul>
            </main>
        </section>

        <section id="agrinho" class="pagina oculto">
            <header>
                <h1>Concurso <span>Agrinho</span></h1>
            </header>
            <main class="conteudo-texto center">
                <img src="imagens/Agrinho cortado 2026.png" alt="Personagens do Programa Agrinho" class="imagem-agrinho">
                <p>O <strong>Programa Agrinho</strong> é a maior iniciativa de responsabilidade social do Sistema FAEP/SENAR-PR. Ele atua nas escolas públicas e particulares, levando informações sobre saúde, meio ambiente e cidadania para milhares de crianças e jovens.</p>
                <p>Através de projetos como este simulador, conectamos os valores do Agrinho (inovação, educação e campo) diretamente com as salas de aula de tecnologia, preparando os alunos para serem os transformadores do amanhã!</p>
            </main>
        </section>
    </div>

    <footer class="rodape">
        <p>Projeto desenvolvido para o concurso Agrinho 2026 pelo aluno José da Silva</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

---

### 2. **style.css** - Estilos e Layout

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #ebafc3;
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
}

/* Menu de Navegação */
.menu-topo {
    background-color: #2e7d32;
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: center;
    gap: 15px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    margin-bottom: 20px;
}

.btn-menu {
    background-color: transparent;
    color: white;
    border: 2px solid transparent;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: 0.3s;
}

.btn-menu:hover {
    background-color: #1b5e20;
}

.btn-menu.ativo {
    border-bottom: 3px solid #f57f17; 
}

/* Container Principal */
.container {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    max-width: 650px;
    width: 90%;
    margin-bottom: 40px;
}

.oculto {
    display: none !important;
}

header h1 {
    color: #2e7d32;
    text-align: center;
    margin-bottom: 20px;
}

header h1 span {
    color: #e53935;
}

/* Novas Seções (Destaque Agrinho e Rentabilidade) */
.info-destaque {
    background-color: #fff3e0;
    padding: 15px;
    border-left: 5px solid #ff9800;
    border-radius: 4px;
    margin-bottom: 25px;
    color: #555;
    font-size: 15px;
    line-height: 1.5;
}

.info-rentabilidade {
    background-color: #e8f5e9;
    padding: 20px;
    border-radius: 8px;
    margin-top: 30px;
    border: 1px solid #c8e6c9;
}

.info-rentabilidade h3 {
    color: #2e7d32;
    margin-bottom: 15px;
}

.info-rentabilidade ul {
    margin: 10px 0 15px 20px;
    color: #444;
}

.info-rentabilidade ul li {
    margin-bottom: 5px;
}

.info-rentabilidade p {
    color: #555;
    line-height: 1.5;
    font-size: 14px;
}

/* Controles do Simulador */
.instrucao-simulador {
    text-align: center;
    color: #666;
    margin-bottom: 20px;
    font-style: italic;
}

.controles {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 25px;
}

.controle-item label {
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
    color: #444;
}

.controle-item label span {
    color: #e53935;
}

input[type="range"] {
    width: 100%;
    cursor: pointer;
}

#painel-status {
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    transition: 0.4s;
}

.status-ideal {
    background-color: #e8f5e9;
    color: #2e7d32;
    border: 2px solid #4caf50;
}

.status-alerta {
    background-color: #ffebee;
    color: #c62828;
    border: 2px solid #ef5350;
}

/* Estilos dos Textos (Sobre e Agrinho) */
.conteudo-texto p {
    margin-bottom: 15px;
    line-height: 1.6;
    color: #444;
}

.conteudo-texto h3 {
    color: #2e7d32;
    margin: 20px 0 10px 0;
}

.conteudo-texto ul {
    margin-left: 20px;
    color: #444;
}

.conteudo-texto ul li {
    margin-bottom: 8px;
}

.center {
    text-align: center;
}

.imagem-agrinho {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* Rodapé */
.rodape {
    background-color: #dcedc8;
    width: 100%;
    padding: 20px;
    text-align: center;
    color: #666;
    font-size: 13px;
    margin-top: auto;
}
```

---

### 3. **script.js** - Lógica Interativa

```javascript
/* LÓGICA DE NAVEGAÇÃO ENTRE AS PÁGINAS */
function mudarPagina(idPagina) {
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(pagina => {
        pagina.classList.add('oculto');
    });

    const botoes = document.querySelectorAll('.btn-menu');
    botoes.forEach(botao => {
        botao.classList.remove('ativo');
    });

    document.getElementById(idPagina).classList.remove('oculto');
    event.target.classList.add('ativo');
}

/* LÓGICA DO SIMULADOR DA ESTUFA */
const inputTemp = document.getElementById('temp');
const inputUmidadeAr = document.getElementById('umidade-ar');
const inputUmidadeSolo = document.getElementById('umidade-solo');

const valTemp = document.getElementById('val-temp');
const valUmidadeAr = document.getElementById('val-umidade-ar');
const valUmidadeSolo = document.getElementById('val-umidade-solo');

const painelStatus = document.getElementById('painel-status');
const textoStatus = document.getElementById('texto-status');
const detalheStatus = document.getElementById('detalhe-status');

function analisarEstufa() {
    const temp = parseInt(inputTemp.value);
    const umidAr = parseInt(inputUmidadeAr.value);
    const umidSolo = parseInt(inputUmidadeSolo.value);

    valTemp.innerText = temp;
    valUmidadeAr.innerText = umidAr;
    valUmidadeSolo.innerText = umidSolo;

    let tempIdeal = temp >= 15 && temp <= 25;
    let umidArIdeal = umidAr >= 60 && umidAr <= 80;
    let umidSoloIdeal = umidSolo >= 50 && umidSolo <= 70;

    if (tempIdeal && umidArIdeal && umidSoloIdeal) {
        painelStatus.className = 'status-ideal';
        textoStatus.innerText = 'Ambiente Ideal!';
        detalheStatus.innerText = 'Excelente gestão! Suas plantas têm o clima perfeito.';
    } else {
        painelStatus.className = 'status-alerta';
        textoStatus.innerText = 'Alerta no Cultivo!';
        
        let problemas = [];
        if (!tempIdeal) problemas.push('Temperatura');
        if (!umidArIdeal) problemas.push('Umidade do Ar');
        if (!umidSoloIdeal) problemas.push('Umidade do Solo');

        detalheStatus.innerText = 'Atenção aos parâmetros: ' + problemas.join(', ') + '.';
    }
}

inputTemp.addEventListener('input', analisarEstufa);
inputUmidadeAr.addEventListener('input', analisarEstufa);
inputUmidadeSolo.addEventListener('input', analisarEstufa);

analisarEstufa();
```

---

## 🚀 Como Usar

1. **Clone ou copie todos os arquivos** para uma pasta em seu computador
2. **Certifique-se de que a pasta `imagens/` contém o arquivo** `Agrinho cortado 2026.png`
3. **Abra o arquivo `index.html`** no seu navegador web
4. **Interaja com o simulador:**
   - Use os sliders para ajustar temperatura, umidade do ar e umidade do solo
   - Observe o status da estufa em tempo real
   - Navegue entre as abas usando os botões do menu

---

## 🎓 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página
- **CSS3**: Estilos e design responsivo
- **JavaScript Vanilla**: Lógica interativa e manipulação do DOM

---

## 📚 Funções Principais

| Função | Descrição |
|--------|-----------|
| `mudarPagina()` | Alterna entre as seções do site (Simulador, Sobre Nós, Agrinho) |
| `analisarEstufa()` | Analisa os parâmetros da estufa e retorna o status |

---

## 🌱 Conceito do Simulador

O simulador monitora **3 parâmetros principais**:

| Parâmetro | Faixa Ideal | Função |
|-----------|------------|--------|
| **Temperatura** | 15°C - 25°C | Controla o crescimento das plantas |
| **Umidade do Ar** | 60% - 80% | Previne doenças fúngicas |
| **Umidade do Solo** | 50% - 70% | Garante nutrição adequada |

Quando todos os parâmetros estão na faixa ideal, o ambiente está perfeito para o cultivo de morangos! 🍓

---

## 👥 Créditos

Projeto desenvolvido para a formação para o **Concurso Agrinho 2026** pelo professor **Alexandre Boeing**

---

## 📝 Licença

Este projeto está sob a licença [Código da licença está no arquivo LICENSE]
