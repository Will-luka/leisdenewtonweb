// ========================
// Script para Leis de Newton
// ========================

// Inicialização quando o DOM está pronto
document.addEventListener('DOMContentLoaded', function() { // Aguarda o carregamento completo do documento HTML
    console.log('🔬 Aula de Leis de Newton carregada!'); // Exibe mensagem no console indicando que a página foi carregada
    initializeTheme(); // Carrega o tema salvo ou padrão
    initializeInercia(); // Inicializa a simulação da 1ª Lei (Inércia)
    initializeCalculadoraForca(); // Inicializa a calculadora da 2ª Lei (Força)
    initializeAcaoReacao(); // Inicializa a simulação da 3ª Lei (Ação-Reação)
    initializeExercicios(); // Inicializa os botões de mostrar/esconder respostas dos exercícios
});

// ========================
// 1ª Lei - Inércia
// ========================
function initializeInercia() { // Define a função que configura a simulação de inércia
    const btnInercia = document.getElementById('btn-inercia'); // Obtém o botão com ID 'btn-inercia'
    const objeto = document.getElementById('objeto-inercia'); // Obtém o elemento visual do objeto (círculo)
    const resultado = document.getElementById('resultado-inercia'); // Obtém o elemento onde mostrar o resultado
    
    if (!btnInercia || !objeto || !resultado) return; // Se algum elemento não existir, sai da função
    
    btnInercia.addEventListener('click', function() { // Quando o botão for clicado, executa a função
        // Simular movimento do objeto
        objeto.style.left = '80%'; // Move o objeto para 80% da esquerda (simula movimento)
        
        resultado.innerHTML = '✅ O objeto permaneceu em movimento! Quando nada o freia, ele continua se movendo - isso é a INÉRCIA.'; // Exibe explicação de inércia
        resultado.style.background = '#d4edda'; // Define a cor de fundo verde para sucesso
        resultado.style.borderLeft = '4px solid #28a745'; // Adiciona borda esquerda verde
        
        // Resetar após 3 segundos
        setTimeout(() => { // Aguarda 3000 milissegundos (3 segundos)
            objeto.style.left = '20px'; // Retorna o objeto à posição inicial
            resultado.innerHTML = ''; // Limpa o texto de resultado
        }, 3000); // Define o tempo de espera em 3 segundos
    });
}

// ========================
// 2ª Lei - Calculadora de Força
// ========================
function initializeCalculadoraForca() { // Define a função que configura a calculadora de força
    const btnCalcula = document.getElementById('btn-calcula-forca'); // Obtém o botão de calcular
    const massaInput = document.getElementById('massa'); // Obtém o campo de entrada de massa
    const aceleracaoInput = document.getElementById('aceleracao'); // Obtém o campo de entrada de aceleração
    const valorForca = document.getElementById('valor-forca'); // Obtém o elemento que mostra o valor da força
    const resultadoForca = document.getElementById('resultado-forca'); // Obtém o elemento de resultado
    
    if (!btnCalcula || !massaInput || !aceleracaoInput || !valorForca) return; // Se algum elemento não existir, sai da função
    
    btnCalcula.addEventListener('click', function() { // Quando o botão for clicado, executa a função
        const massa = parseFloat(massaInput.value); // Converte o valor de massa para número decimal
        const aceleração = parseFloat(aceleracaoInput.value); // Converte o valor de aceleração para número decimal
        
        if (massa <= 0 || aceleração <= 0) { // Se massa ou aceleração forem menores ou iguais a zero
            valorForca.textContent = 'Erro'; // Mostra mensagem de erro
            resultadoForca.style.background = '#f8d7da'; // Define cor de fundo vermelha para erro
            resultadoForca.style.borderLeft = '4px solid #dc3545'; // Adiciona borda esquerda vermelha
            return; // Sai da função
        }
        
        // F = m × a
        const forca = massa * aceleração; // Calcula a força multiplicando massa por aceleração
        valorForca.textContent = forca.toFixed(2); // Mostra o resultado com 2 casas decimais
        
        resultadoForca.style.background = '#d4edda'; // Define cor de fundo verde para sucesso
        resultadoForca.style.borderLeft = '4px solid #28a745'; // Adiciona borda esquerda verde
        
        // Mostrar animação
        btnCalcula.textContent = 'Calculado! ✓'; // Muda o texto do botão para feedback visual
        setTimeout(() => { // Aguarda 2 segundos
            btnCalcula.textContent = 'Calcular Força'; // Retorna o texto original do botão
        }, 2000); // Define o tempo de espera em 2 segundos
    });
}

// ========================
// 3ª Lei - Ação-Reação
// ========================
function initializeAcaoReacao() { // Define a função que configura a simulação de ação-reação
    const btnAcaoReacao = document.getElementById('btn-acao-reacao'); // Obtém o botão de simular ação-reação
    const objeto1 = document.getElementById('objeto1'); // Obtém o primeiro objeto visual
    const objeto2 = document.getElementById('objeto2'); // Obtém o segundo objeto visual
    const forca1 = document.getElementById('forca1'); // Obtém o elemento que mostra a seta de força 1
    const forca2 = document.getElementById('forca2'); // Obtém o elemento que mostra a seta de força 2
    const resultado = document.getElementById('resultado-acao-reacao'); // Obtém o elemento de resultado
    
    // Validar todos os elementos necessários
    if (!btnAcaoReacao || !objeto1 || !objeto2 || !forca1 || !forca2 || !resultado) { // Se algum elemento não existir
        console.warn('Elementos do simulador de ação-reação não encontrados'); // Exibe aviso no console
        return; // Sai da função
    }
    
    btnAcaoReacao.addEventListener('click', function() { // Quando o botão for clicado, executa a função
        // Mostrar forças de ação e reação
        forca1.style.left = '30%'; // Move a primeira seta para 30% da esquerda
        forca1.style.background = '#f5576c'; // Define a cor de fundo vermelha
        forca1.innerHTML = '→'; // Adiciona a seta apontando para a direita
        forca1.style.fontSize = '2em'; // Define o tamanho da fonte
        forca1.style.color = '#f5576c'; // Define a cor vermelha
        forca1.style.display = 'block'; // Torna o elemento visível
        
        forca2.style.right = '30%'; // Move a segunda seta para 30% da direita
        forca2.style.background = '#667eea'; // Define a cor de fundo azul
        forca2.innerHTML = '←'; // Adiciona a seta apontando para a esquerda
        forca2.style.fontSize = '2em'; // Define o tamanho da fonte
        forca2.style.color = '#667eea'; // Define a cor azul
        forca2.style.display = 'block'; // Torna o elemento visível
        
        // Movimento dos objetos
        objeto1.style.left = '20%'; // Move o primeiro objeto para 20% da esquerda
        objeto2.style.right = '20%'; // Move o segundo objeto para 20% da direita
        
        resultado.innerHTML = '✅ Ação e Reação! Quando o objeto 1 empurra o objeto 2 (ação), o objeto 2 empurra o objeto 1 com mesma força mas sentido oposto (reação).'; // Exibe explicação de ação-reação
        resultado.style.background = '#d4edda'; // Define cor de fundo verde para sucesso
        resultado.style.borderLeft = '4px solid #28a745'; // Adiciona borda esquerda verde
        resultado.style.display = 'block'; // Torna o elemento visível
        
        // Resetar após 3 segundos
        setTimeout(() => { // Aguarda 3 segundos
            forca1.style.left = '0'; // Retorna a primeira seta à posição inicial
            forca1.innerHTML = ''; // Remove a seta
            forca1.style.display = 'none'; // Esconde a seta
            forca2.style.right = '0'; // Retorna a segunda seta à posição inicial
            forca2.innerHTML = ''; // Remove a seta
            forca2.style.display = 'none'; // Esconde a seta
            objeto1.style.left = '30%'; // Retorna o primeiro objeto à posição inicial
            objeto2.style.right = '30%'; // Retorna o segundo objeto à posição inicial
            resultado.innerHTML = ''; // Limpa o texto de resultado
        }, 3000); // Define o tempo de espera em 3 segundos
    });
}

// ========================
// Exercícios - Toggle Respostas
// ========================
function initializeExercicios() { // Define a função que configura os botões de respostas dos exercícios
    const botoesResposta = document.querySelectorAll('.btn-toggle-resposta'); // Obtém todos os botões de toggle de respostas
    
    botoesResposta.forEach(btn => { // Para cada botão encontrado
        btn.addEventListener('click', function() { // Quando o botão for clicado, executa a função
            const numExercicio = this.getAttribute('data-exercicio'); // Obtém o número do exercício do atributo data
            const resposta = document.getElementById(`resposta-${numExercicio}`); // Obtém o elemento de resposta correspondente
            
            if (resposta) { // Se o elemento de resposta existir
                resposta.classList.toggle('show'); // Alterna a classe 'show' para mostrar/esconder a resposta
                
                // Mudar texto do botão
                if (resposta.classList.contains('show')) { // Se a resposta agora está visível
                    this.textContent = 'Esconder Resposta'; // Muda o texto do botão para 'Esconder Resposta'
                    this.style.background = '#764ba2'; // Muda a cor de fundo para roxo
                } else { // Se a resposta agora está oculta
                    this.textContent = 'Ver Resposta'; // Muda o texto do botão para 'Ver Resposta'
                    this.style.background = '#667eea'; // Muda a cor de fundo para azul
                }
            }
        });
    });
}

// ========================
// Funções Utilitárias
// ========================

// Animação suave para elementos
function animateElement(element, property, startValue, endValue, duration) { // Define função de animação com 5 parâmetros
    const startTime = performance.now(); // Obtém o tempo inicial em milissegundos
    
    function animate() { // Define a função interna que faz a animação quadro por quadro
        const currentTime = performance.now(); // Obtém o tempo atual em milissegundos
        const elapsed = currentTime - startTime; // Calcula o tempo decorrido desde o início
        
        if (elapsed < duration) { // Se o tempo decorrido for menor que a duração total
            const progress = elapsed / duration; // Calcula o progresso (0 a 1) da animação
            const currentValue = startValue + (endValue - startValue) * progress; // Calcula o valor intermediário
            element.style[property] = currentValue; // Aplica o valor intermediário ao elemento
            requestAnimationFrame(animate); // Chama a próxima iteração da animação
        } else { // Se chegou ao fim da duração
            element.style[property] = endValue; // Define o valor final exato
        }
    }
    
    requestAnimationFrame(animate); // Inicia a animação
}

// Mostrar mensagem de sucesso
function showSuccess(message, elementId) { // Define função para mostrar mensagens de sucesso
    const element = document.getElementById(elementId); // Obtém o elemento pelo ID
    if (element) { // Se o elemento existir
        element.innerHTML = message; // Insere a mensagem no elemento
        element.style.background = '#d4edda'; // Define cor de fundo verde
        element.style.borderLeft = '4px solid #28a745'; // Adiciona borda esquerda verde
    }
}

// Mostrar mensagem de erro
function showError(message, elementId) { // Define função para mostrar mensagens de erro
    const element = document.getElementById(elementId); // Obtém o elemento pelo ID
    if (element) { // Se o elemento existir
        element.innerHTML = message; // Insere a mensagem no elemento
        element.style.background = '#f8d7da'; // Define cor de fundo vermelha
        element.style.borderLeft = '4px solid #dc3545'; // Adiciona borda esquerda vermelha
    }
}

// ========================
// Efeitos Extras
// ========================

// Scroll suave entre seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => { // Seleciona todos os links que começam com "#"
    anchor.addEventListener('click', function(e) { // Quando um link for clicado
        e.preventDefault(); // Previne o comportamento padrão do link
        const target = document.querySelector(this.getAttribute('href')); // Obtém o elemento alvo
        if (target) { // Se o elemento alvo existir
            target.scrollIntoView({ // Faz scroll até o elemento
                behavior: 'smooth', // Define animação suave
                block: 'start' // Alinha o elemento no topo da tela
            });
        }
    });
});

// Efeito de highlight na seção ativa
window.addEventListener('scroll', function() { // Quando a página sofrer scroll
    const sections = document.querySelectorAll('.section'); // Obtém todas as seções
    const scrollPosition = window.scrollY + 100; // Calcula a posição do scroll + offset de 100px
    
    sections.forEach(section => { // Para cada seção
        const top = section.offsetTop; // Obtém a posição do topo da seção
        const height = section.offsetHeight; // Obtém a altura da seção
        
        if (scrollPosition >= top && scrollPosition < top + height) { // Se está dentro da seção visível
            section.style.borderLeft = '5px solid #764ba2'; // Muda a borda para roxo (seção ativa)
        } else { // Se não está na seção visível
            section.style.borderLeft = '5px solid #667eea'; // Muda a borda para azul (seção inativa)
        }
    });
});

// Confete quando responder exercício corretamente
function showConfete() { // Define função para mostrar animação de confete
    const confete = document.createElement('div'); // Cria um novo elemento div
    confete.style.position = 'fixed'; // Define posicionamento fixo
    confete.style.top = '50%'; // Posiciona no meio verticalmente
    confete.style.left = '50%'; // Posiciona no meio horizontalmente
    confete.style.transform = 'translate(-50%, -50%)'; // Centraliza o elemento
    confete.style.fontSize = '3em'; // Define tamanho grande da fonte
    confete.style.color = '#f5576c'; // Define cor vermelha
    confete.style.zIndex = '1000'; // Coloca acima de outros elementos
    confete.textContent = '🎉'; // Adiciona emoji de confete
    confete.style.transition = 'all 1s ease'; // Define transição suave de 1 segundo
    
    document.body.appendChild(confete); // Adiciona o confete ao corpo da página
    
    setTimeout(() => { // Aguarda 100 milissegundos
        confete.style.transform = 'translate(-50%, -150%)'; // Move o confete para cima
        confete.style.opacity = '0'; // Deixa o confete transparente
    }, 100);
    
    setTimeout(() => { // Aguarda 1100 milissegundos
        confete.remove(); // Remove o confete da página
    }, 1100);
}

// ========================
// TEMA - Paleta de Cores
// ========================
function initializeTheme() { // Define a função que configura o sistema de temas
    const btnTema = document.getElementById('btn-tema'); // Obtém o botão de trocar tema
    
    if (!btnTema) return; // Se o botão não existir, sai da função
    
    // Recuperar tema salvo do localStorage
    const temaSalvo = localStorage.getItem('tema-newton') || 'tema-padrão'; // Obtém o tema salvo ou usa padrão
    aplicarTema(temaSalvo); // Aplica o tema salvo
    
    // Ciclar entre temas ao clicar
    const temas = ['tema-padrão', 'tema-claro', 'tema-roxo', 'tema-azul']; // Define lista de temas disponíveis
    let indiceAtual = temas.indexOf(temaSalvo); // Encontra o índice do tema atual
    
    btnTema.addEventListener('click', function() { // Quando o botão for clicado
        indiceAtual = (indiceAtual + 1) % temas.length; // Avança para o próximo tema (volta ao primeiro após o último)
        const novoTema = temas[indiceAtual]; // Obtém o novo tema
        aplicarTema(novoTema); // Aplica o novo tema
        localStorage.setItem('tema-newton', novoTema); // Salva o novo tema no localStorage
        
        // Feedback visual
        btnTema.style.transform = 'rotate(360deg)'; // Rotaciona o botão 360 graus
        setTimeout(() => { // Aguarda 500 milissegundos
            btnTema.style.transform = 'rotate(0deg)'; // Retorna o botão à rotação normal
        }, 500);
    });
}

function aplicarTema(tema) { // Define função que aplica o tema ao corpo da página
    const body = document.body; // Obtém o elemento body
    
    // Remover todas as classes de tema
    body.classList.remove('tema-padrão', 'tema-claro', 'tema-roxo', 'tema-azul'); // Remove todas as classes de tema
    
    // Adicionar novo tema
    body.classList.add(tema); // Adiciona a classe do novo tema
}
