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
        forca1.style.background = '#f5576c';
        forca1.innerHTML = '→';
        forca1.style.fontSize = '2em';
        forca1.style.color = '#f5576c';

        forca2.style.right = '30%';
        forca2.style.background = '#667eea';
        forca2.innerHTML = '←';
        forca2.style.fontSize = '2em';
        forca2.style.color = '#667eea';

        objeto1.style.left = '20%';
        objeto2.style.right = '20%';

        resultado.innerHTML = '✅ Ação e Reação! Quando o objeto 1 empurra o objeto 2 (ação), o objeto 2 empurra o objeto 1 com mesma força mas sentido oposto (reação).';
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

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

function setupSectionHighlight() {
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;

            if (scrollPosition >= top && scrollPosition < top + height) {
                section.style.borderLeft = '5px solid #764ba2';
            } else {
                section.style.borderLeft = '5px solid #667eea';
            }
        });
    });
}

function initializeTheme() {
    const btnTema = document.getElementById('btn-tema');
    if (!btnTema) return;

    const temas = ['tema-padrao', 'tema-claro', 'tema-roxo', 'tema-azul'];
    const temaSalvo = localStorage.getItem('tema-newton') || 'tema-padrao';

    aplicarTema(temaSalvo);

    let indiceAtual = Math.max(0, temas.indexOf(temaSalvo));

    btnTema.addEventListener('click', function() {
        indiceAtual = (indiceAtual + 1) % temas.length;
        const novoTema = temas[indiceAtual];
        aplicarTema(novoTema);
        localStorage.setItem('tema-newton', novoTema);

        btnTema.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            btnTema.style.transform = 'rotate(0deg)';
        }, 500);
    });
}

function aplicarTema(tema) {
    document.body.classList.remove('tema-padrao', 'tema-claro', 'tema-roxo', 'tema-azul');
    document.body.classList.add(tema);
}
