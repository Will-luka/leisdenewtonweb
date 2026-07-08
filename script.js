document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeInercia();
    initializeCalculadoraForca();
    initializeAcaoReacao();
    initializeExercicios();
    setupSmoothScroll();
    setupSectionHighlight();
});

function initializeInercia() {
    const btnInercia = document.getElementById('btn-inercia');
    const objeto = document.getElementById('objeto-inercia');
    const resultado = document.getElementById('resultado-inercia');
    if (!btnInercia || !objeto || !resultado) return;

    btnInercia.addEventListener('click', function() {
        objeto.style.left = '80%';
        resultado.innerHTML = '✅ O objeto permaneceu em movimento! Quando nada o freia, ele continua se movendo — isso é a INÉRCIA.';
        resultado.style.background = '#d4edda';
        resultado.style.borderLeft = '4px solid #28a745';

        setTimeout(() => {
            objeto.style.left = '20px';
            resultado.innerHTML = '';
            resultado.style.background = '#2d0000';
            resultado.style.borderLeft = '4px solid #DC143C';
        }, 3000);
    });
}

function initializeCalculadoraForca() {
    const btnCalcula = document.getElementById('btn-calcula-forca');
    const massaInput = document.getElementById('massa');
    const aceleracaoInput = document.getElementById('aceleracao');
    const valorForca = document.getElementById('valor-forca');
    const resultadoForca = document.getElementById('resultado-forca');
    if (!btnCalcula || !massaInput || !aceleracaoInput || !valorForca || !resultadoForca) return;

    btnCalcula.addEventListener('click', function() {
        const massa = parseFloat(massaInput.value);
        const aceleracao = parseFloat(aceleracaoInput.value);

        if (!isFinite(massa) || !isFinite(aceleracao) || massa <= 0 || aceleracao <= 0) {
            valorForca.textContent = 'Erro';
            resultadoForca.style.background = '#f8d7da';
            resultadoForca.style.borderLeft = '4px solid #dc3545';
            return;
        }

        const forca = massa * aceleracao;
        valorForca.textContent = forca.toFixed(2);
        resultadoForca.style.background = '#d4edda';
        resultadoForca.style.borderLeft = '4px solid #28a745';

        btnCalcula.textContent = 'Calculado! ✓';
        setTimeout(() => {
            btnCalcula.textContent = 'Calcular Força';
        }, 2000);
    });
}

function initializeAcaoReacao() {
    const btnAcaoReacao = document.getElementById('btn-acao-reacao');
    const objeto1 = document.getElementById('objeto1');
    const objeto2 = document.getElementById('objeto2');
    const forca1 = document.getElementById('forca1');
    const forca2 = document.getElementById('forca2');
    const resultado = document.getElementById('resultado-acao-reacao');
    if (!btnAcaoReacao || !objeto1 || !objeto2 || !forca1 || !forca2 || !resultado) return;

    btnAcaoReacao.addEventListener('click', function() {
        forca1.style.left = '30%';
        forca1.innerHTML = '→';
        forca1.style.fontSize = '2em';

        forca2.style.right = '30%';
        forca2.innerHTML = '←';
        forca2.style.fontSize = '2em';

        objeto1.style.left = '20%';
        objeto2.style.right = '20%';

        resultado.innerHTML = '✅ Ação e Reação! As forças aparecem em pares, com mesma intensidade e sentidos opostos.';
        resultado.style.background = '#d4edda';
        resultado.style.borderLeft = '4px solid #28a745';

        setTimeout(() => {
            forca1.style.left = '0';
            forca1.innerHTML = '';
            forca2.style.right = '0';
            forca2.innerHTML = '';
            objeto1.style.left = '30%';
            objeto2.style.right = '30%';
            resultado.innerHTML = '';
            resultado.style.background = '#2d0000';
            resultado.style.borderLeft = '4px solid #DC143C';
        }, 3000);
    });
}

function initializeExercicios() {
    document.querySelectorAll('.btn-toggle-resposta').forEach(btn => {
        btn.addEventListener('click', function() {
            const num = this.getAttribute('data-exercicio');
            const resposta = document.getElementById(`resposta-${num}`);
            if (!resposta) return;

            const aberto = resposta.classList.toggle('show');
            this.textContent = aberto ? 'Esconder Resposta' : 'Ver Resposta';
            this.style.background = aberto ? '#764ba2' : '#DC143C';
            this.setAttribute('aria-expanded', String(aberto));
            resposta.setAttribute('aria-hidden', String(!aberto));
        });
    });
}
