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