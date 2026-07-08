// ========================
// Script para Leis de Newton
// ========================

// Inicialização quando o DOM está pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔬 Aula de Leis de Newton carregada!');
    initializeTheme();
    initializeInercia();
    initializeCalculadoraForca();
    initializeAcaoReacao();
    initializeExercicios();
});

// ========================
// 1ª Lei - Inércia
// ========================
function initializeInercia() {
    const btnInercia = document.getElementById('btn-inercia');
    const objeto = document.getElementById('objeto-inercia');
    const resultado = document.getElementById('resultado-inercia');
    
    if (!btnInercia || !objeto || !resultado) return;
    
    btnInercia.addEventListener('click', function() {
        // Simular movimento do objeto
        objeto.style.left = '80%';
        
        resultado.innerHTML = '✅ O objeto permaneceu em movimento! Quando nada o freia, ele continua se movendo - isso é a INÉRCIA.';
        resultado.style.background = '#d4edda';
        resultado.style.borderLeft = '4px solid #28a745';
        
        // Resetar após 3 segundos
        setTimeout(() => {
            objeto.style.left = '20px';
            resultado.innerHTML = '';
        }, 3000);
    });
}

// ========================
// 2ª Lei - Calculadora de Força
// ========================
function initializeCalculadoraForca() {
    const btnCalcula = document.getElementById('btn-calcula-forca');
    const massaInput = document.getElementById('massa');
    const aceleracaoInput = document.getElementById('aceleracao');
    const valorForca = document.getElementById('valor-forca');
    const resultadoForca = document.getElementById('resultado-forca');
    
    if (!btnCalcula || !massaInput || !aceleracaoInput || !valorForca) return;
    
    btnCalcula.addEventListener('click', function() {
        const massa = parseFloat(massaInput.value);
        const aceleração = parseFloat(aceleracaoInput.value);
        
        if (massa <= 0 || aceleração <= 0) {
            valorForca.textContent = 'Erro';
            resultadoForca.style.background = '#f8d7da';
            resultadoForca.style.borderLeft = '4px solid #dc3545';
            return;
        }
        
        // F = m × a
        const forca = massa * aceleração;
        valorForca.textContent = forca.toFixed(2);
        
        resultadoForca.style.background = '#d4edda';
        resultadoForca.style.borderLeft = '4px solid #28a745';
        
        // Mostrar animação
        btnCalcula.textContent = 'Calculado! ✓';
        setTimeout(() => {
            btnCalcula.textContent = 'Calcular Força';
        }, 2000);
    });
}

// ========================
// 3ª Lei - Ação-Reação
// ========================
function initializeAcaoReacao() {
    const btnAcaoReacao = document.getElementById('btn-acao-reacao');
    const objeto1 = document.getElementById('objeto1');
    const objeto2 = document.getElementById('objeto2');
    const forca1 = document.getElementById('forca1');
    const forca2 = document.getElementById('forca2');
    const resultado = document.getElementById('resultado-acao-reacao');
    
    if (!btnAcaoReacao) return;
    
    btnAcaoReacao.addEventListener('click', function() {
        // Mostrar forças de ação e reação
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
        
        // Movimento dos objetos
        objeto1.style.left = '20%';
        objeto2.style.right = '20%';
        
        resultado.innerHTML = '✅ Ação e Reação! Quando o objeto 1 empurra o objeto 2 (ação), o objeto 2 empurra o objeto 1 com mesma força mas sentido oposto (reação).';
        resultado.style.background = '#d4edda';
        resultado.style.borderLeft = '4px solid #28a745';
        
        // Resetar após 3 segundos
        setTimeout(() => {
            forca1.style.left = '0';
            forca1.innerHTML = '';
            forca2.style.right = '0';
            forca2.innerHTML = '';
            objeto1.style.left = '30%';
            objeto2.style.right = '30%';
            resultado.innerHTML = '';
        }, 3000);
    });
}

// ========================
// Exercícios - Toggle Respostas
// ========================
function initializeExercicios() {
    const botoesResposta = document.querySelectorAll('.btn-toggle-resposta');
    
    botoesResposta.forEach(btn => {
        btn.addEventListener('click', function() {
            const numExercicio = this.getAttribute('data-exercicio');
            const resposta = document.getElementById(`resposta-${numExercicio}`);
            
            if (resposta) {
                resposta.classList.toggle('show');
                
                // Mudar texto do botão
                if (resposta.classList.contains('show')) {
                    this.textContent = 'Esconder Resposta';
                    this.style.background = '#764ba2';
                } else {
                    this.textContent = 'Ver Resposta';
                    this.style.background = '#667eea';
                }
            }
        });
    });
}

// ========================
// Funções Utilitárias
// ========================

// Animação suave para elementos
function animateElement(element, property, startValue, endValue, duration) {
    const startTime = performance.now();
    
    function animate() {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        
        if (elapsed < duration) {
            const progress = elapsed / duration;
            const currentValue = startValue + (endValue - startValue) * progress;
            element.style[property] = currentValue;
            requestAnimationFrame(animate);
        } else {
            element.style[property] = endValue;
        }
    }
    
    requestAnimationFrame(animate);
}

// Mostrar mensagem de sucesso
function showSuccess(message, elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = message;
        element.style.background = '#d4edda';
        element.style.borderLeft = '4px solid #28a745';
    }
}

// Mostrar mensagem de erro
function showError(message, elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = message;
        element.style.background = '#f8d7da';
        element.style.borderLeft = '4px solid #dc3545';
    }
}

// ========================
// Efeitos Extras
// ========================

// Scroll suave entre seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efeito de highlight na seção ativa
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + 100;
    
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

// Confete quando responder exercício corretamente
function showConfete() {
    const confete = document.createElement('div');
    confete.style.position = 'fixed';
    confete.style.top = '50%';
    confete.style.left = '50%';
    confete.style.transform = 'translate(-50%, -50%)';
    confete.style.fontSize = '3em';
    confete.style.color = '#f5576c';
    confete.style.zIndex = '1000';
    confete.textContent = '🎉';
    confete.style.transition = 'all 1s ease';
    
    document.body.appendChild(confete);
    
    setTimeout(() => {
        confete.style.transform = 'translate(-50%, -150%)';
        confete.style.opacity = '0';
    }, 100);
    
    setTimeout(() => {
        confete.remove();
    }, 1100);
}

// ========================
// TEMA - Paleta de Cores
// ========================
function initializeTheme() {
    const btnTema = document.getElementById('btn-tema');
    
    if (!btnTema) return;
    
    // Recuperar tema salvo do localStorage
    const temaSalvo = localStorage.getItem('tema-newton') || 'tema-padrão';
    aplicarTema(temaSalvo);
    
    // Ciclar entre temas ao clicar
    const temas = ['tema-padrão', 'tema-claro', 'tema-roxo', 'tema-azul'];
    let indiceAtual = temas.indexOf(temaSalvo);
    
    btnTema.addEventListener('click', function() {
        indiceAtual = (indiceAtual + 1) % temas.length;
        const novoTema = temas[indiceAtual];
        aplicarTema(novoTema);
        localStorage.setItem('tema-newton', novoTema);
        
        // Feedback visual
        btnTema.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            btnTema.style.transform = 'rotate(0deg)';
        }, 500);
    });
}

function aplicarTema(tema) {
    const body = document.body;
    
    // Remover todas as classes de tema
    body.classList.remove('tema-padrão', 'tema-claro', 'tema-roxo', 'tema-azul');
    
    // Adicionar novo tema
    body.classList.add(tema);
}
