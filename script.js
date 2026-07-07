// ========================
// Script para Leis de Newton
// ========================

// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔬 Aula de Leis de Newton carregada!'); // Mensagem no console para teste
    initializeTheme(); // Inicializa o sistema de temas
    initializeInercia(); // Inicializa a simulação da 1ª lei
    initializeCalculadoraForca(); // Inicializa a calculadora da 2ª lei
    initializeAcaoReacao(); // Inicializa a simulação da 3ª lei
    initializeExercicios(); // Inicializa os botões dos exercícios
});

// ========================
// 1ª Lei - Inércia
// ========================
function initializeInercia() {
    const btnInercia = document.getElementById('btn-inercia'); // Botão da simulação
    const objeto = document.getElementById('objeto-inercia'); // Objeto animado
    const resultado = document.getElementById('resultado-inercia'); // Área de resultado
    
    if (!btnInercia || !objeto || !resultado) return; // Se faltar algo, interrompe
    
    btnInercia.addEventListener('click', function() { // Evento de clique
        objeto.style.left = '80%'; // Move o objeto para simular movimento
        
        resultado.innerHTML = '✅ O objeto permaneceu em movimento! Quando nada o freia, ele continua se movendo - isso é a INÉRCIA.'; // Mensagem explicativa
        resultado.style.background = '#d4edda'; // Cor de sucesso
        resultado.style.borderLeft = '4px solid #28a745'; // Destaque lateral
        
        setTimeout(() => { // Aguarda 3 segundos para resetar
            objeto.style.left = '20px'; // Volta o objeto à posição inicial
            resultado.innerHTML = ''; // Limpa a mensagem
        }, 3000);
    });
}

// ========================
// 2ª Lei - Calculadora de Força
// ========================
function initializeCalculadoraForca() {
    const btnCalcula = document.getElementById('btn-calcula-forca'); // Botão de cálculo
    const massaInput = document.getElementById('massa'); // Campo de massa
    const aceleracaoInput = document.getElementById('aceleracao'); // Campo de aceleração
    const valorForca = document.getElementById('valor-forca'); // Onde o valor da força aparece
    const resultadoForca = document.getElementById('resultado-forca'); // Caixa de resultado
    
    if (!btnCalcula || !massaInput || !aceleracaoInput || !valorForca) return; // Validação
    
    btnCalcula.addEventListener('click', function() { // Ao clicar, calcula
        const massa = parseFloat(massaInput.value); // Converte massa para número
        const aceleracao = parseFloat(aceleracaoInput.value); // Converte aceleração para número
        
        if (massa <= 0 || aceleracao <= 0) { // Verifica valores inválidos
            valorForca.textContent = 'Erro'; // Exibe erro
            resultadoForca.style.background = '#f8d7da'; // Cor de erro
            resultadoForca.style.borderLeft = '4px solid #dc3545'; // Destaque de erro
            return; // Interrompe a execução
        }
        
        const forca = massa * aceleracao; // Aplica F = m · a
        valorForca.textContent = forca.toFixed(2); // Mostra o valor com 2 casas decimais
        
        resultadoForca.style.background = '#d4edda'; // Cor de sucesso
        resultadoForca.style.borderLeft = '4px solid #28a745'; // Destaque de sucesso
        
        btnCalcula.textContent = 'Calculado! ✓'; // Altera o texto do botão
        setTimeout(() => { // Restaura depois de 2 segundos
            btnCalcula.textContent = 'Calcular Força';
        }, 2000);
    });
}

// ========================
// 3ª Lei - Ação-Reação
// ========================
function initializeAcaoReacao() {
    const btnAcaoReacao = document.getElementById('btn-acao-reacao'); // Corrigido: sem acento no ID
    const objeto1 = document.getElementById('objeto1'); // Primeiro objeto
    const objeto2 = document.getElementById('objeto2'); // Segundo objeto
    const forca1 = document.getElementById('forca1'); // Seta 1
    const forca2 = document.getElementById('forca2'); // Seta 2
    const resultado = document.getElementById('resultado-acao-reacao'); // Resultado da simulação
    
    if (!btnAcaoReacao || !objeto1 || !objeto2 || !forca1 || !forca2 || !resultado) return; // Verifica elementos
    
    btnAcaoReacao.addEventListener('click', function() { // Clique para simular
        forca1.style.left = '30%'; // Posiciona a seta da ação
        forca1.style.background = '#f5576c'; // Cor da seta
        forca1.innerHTML = '→'; // Direção da seta
        forca1.style.fontSize = '2em'; // Tamanho da seta
        forca1.style.color = '#f5576c'; // Cor do símbolo
        
        forca2.style.right = '30%'; // Posiciona a seta da reação
        forca2.style.background = '#667eea'; // Cor da seta
        forca2.innerHTML = '←'; // Direção da seta
        forca2.style.fontSize = '2em'; // Tamanho da seta
        forca2.style.color = '#667eea'; // Cor do símbolo
        
        objeto1.style.left = '20%'; // Move o objeto 1
        objeto2.style.right = '20%'; // Move o objeto 2
        
        resultado.innerHTML = '✅ Ação e Reação! Quando o objeto 1 empurra o objeto 2 (ação), o objeto 2 empurra o objeto 1 com mesma força mas sentido oposto (reação).'; // Explica o conceito
        resultado.style.background = '#d4edda'; // Cor de sucesso
        resultado.style.borderLeft = '4px solid #28a745'; // Destaque
        
        setTimeout(() => { // Reseta depois de 3 segundos
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
    const botoesResposta = document.querySelectorAll('.btn-toggle-resposta'); // Seleciona todos os botões
    
    botoesResposta.forEach(btn => { // Para cada botão
        btn.addEventListener('click', function() { // Evento de clique
            const numExercicio = this.getAttribute('data-exercicio'); // Lê o número do exercício
            const resposta = document.getElementById(`resposta-${numExercicio}`); // Busca a resposta correspondente
            
            if (resposta) { // Se a resposta existir
                resposta.classList.toggle('show'); // Mostra/oculta a resposta
                
                if (resposta.classList.contains('show')) { // Se estiver visível
                    this.textContent = 'Esconder Resposta'; // Altera o texto do botão
                    this.style.background = '#764ba2'; // Muda a cor do botão
                } else { // Se estiver oculta
                    this.textContent = 'Ver Resposta'; // Restaura o texto
                    this.style.background = '#667eea'; // Restaura a cor
                }
            }
        });
    });
}

// ========================
// Funções Utilitárias
// ========================

// Animação suave de propriedades numéricas
function animateElement(element, property, startValue, endValue, duration) {
    const startTime = performance.now(); // Marca o instante inicial
    
    function animate() {
        const currentTime = performance.now(); // Pega o tempo atual
        const elapsed = currentTime - startTime; // Calcula o tempo decorrido
        
        if (elapsed < duration) { // Enquanto a animação não termina
            const progress = elapsed / duration; // Calcula o progresso
            const currentValue = startValue + (endValue - startValue) * progress; // Interpola valor
            element.style[property] = currentValue; // Aplica o valor calculado
            requestAnimationFrame(animate); // Continua a animação
        } else {
            element.style[property] = endValue; // Define o valor final
        }
    }
    
    requestAnimationFrame(animate); // Inicia a animação
}

// Mostra uma mensagem de sucesso em um elemento específico
function showSuccess(message, elementId) {
    const element = document.getElementById(elementId); // Seleciona o elemento
    if (element) {
        element.innerHTML = message; // Insere a mensagem
        element.style.background = '#d4edda'; // Fundo verde
        element.style.borderLeft 
