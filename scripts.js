// Dados completos das histórias para exibir no modal
const stories = {
    story1: {
        title: "Superação: O Voo da Fênix",
        text: "Depois de perder tudo, ela transformou a dor em combustível. Cada fracasso era um novo degrau, cada 'não' uma oportunidade para reescrever sua história. Aos poucos, as cinzas de seu passado deram lugar a um par de asas robustas, prontas para alçar o voo mais alto que ela jamais imaginou. A lição era clara: a fênix não apenas ressurge, ela renasce mais forte do que antes. Hoje, sua jornada é um farol de esperança para todos que pensam em desistir. Ela é a prova viva de que a superação é a maior das vitórias."
    },
    story2: {
        title: "Mistério: O Relógio Que Parou o Tempo",
        text: "O antigo relógio na sala de estar não marcava as horas, ele as consumia. Quando o ponteiro parou à meia-noite, a cidade inteira mergulhou em um silêncio absoluto. Nenhum som de carros, nenhum vento, nenhuma voz. O tic-tac do meu próprio coração era o único ruído. Olhei pela janela e vi as pessoas petrificadas, congeladas no tempo. O relógio, que antes era uma relíquia, agora era uma maldição. E eu, o único consciente, estava preso no eterno instante em que o tempo se rompeu."
    },
    story3: {
        title: "Romance: Um Café Sob a Chuva",
        text: "O café esfriava na mesa enquanto a chuva caía lá fora, mas o calor no peito era de outro tipo. Ele, com um sorriso gentil; ela, com o olhar mais sereno. Um encontro inesperado que começou com um pedido de desculpas por esbarrar na porta. Ali, naquele instante, o mundo se resumia a nós dois, ao som da tempestade e à promessa silenciosa de um futuro juntos. Aquele café não era apenas uma bebida, mas o começo de uma história que nenhum de nós queria que acabasse."
    },
    story4: {
        title: "Fantasia: O Portal da Floresta Proibida",
        text: "Todos evitavam a floresta proibida, contada apenas em lendas. Mas o brilho azul no coração da mata era irresistível. Era um brilho que chamava, que prometia segredos esquecidos. Ao tocar na luz, a árvore se transformou em uma estrutura pulsante, revelando um portal para um reino de dragões e magia ancestral. De repente, a floresta não era mais proibida, mas a entrada para uma nova realidade, onde a coragem era a única moeda de troca e o destino aguardava a um passo de distância."
    },
    story5: {
        title: "Motivação: A Força Interior",
        text: "O sucesso não é um destino, mas uma jornada construída com perseverança e fé. A verdadeira força não está nos músculos, mas na mente. Quando todos duvidavam de seu potencial, ele usou a voz interior como guia, ignorando as críticas e focando no objetivo. Ele caiu, levantou, e a cada passo provava que a maior barreira a ser quebrada é sempre a nossa própria dúvida. Sua história é um lembrete de que a motivação vem de dentro e que a persistência é o motor que move montanhas."
    },
    story6: {
        title: "Terror: O Grito do Porão",
        text: "O porão sempre foi escuro e silencioso, um lugar para guardar tralhas e memórias. Mas na noite em que o grito ecoou, o silêncio se partiu. Não era um grito de dor, mas uma risada sádica e insana que subia pelas escadas. Eu sabia que estava sozinho em casa, mas o som dos passos subindo a escada, pesados e lentos, me diziam o contrário. A porta do porão, que eu jurava ter trancado, rangeu. O grito se aproximava, e o ar ficou frio. O terror não vinha do escuro, mas da certeza de que algo havia despertado lá embaixo."
    }
};

// Função para abrir a janela pop-up
function openStory(storyId) {
    const story = stories[storyId];
    if (story) {
        document.getElementById('modal-title').innerText = story.title;
        document.getElementById('modal-text').innerText = story.text;
        document.getElementById('modal-container').classList.add('show');
    }
}

// Função para fechar a janela pop-up
document.getElementById('modal-close').onclick = function() {
    document.getElementById('modal-container').classList.remove('show');
};

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal-container');
    if (event.target == modal) {
        modal.classList.remove('show');
    }
}