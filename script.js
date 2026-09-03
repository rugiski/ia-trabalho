const perguntas = [
    {
        enunciado: "Uma pessoa com deficiência visual precisa acessar um texto ou uma imagem na internet. Como a Inteligência Artificial pode ajudar nesse caso?",
        alternativas: [
            {
                texto: "Descrever imagens e transformar textos em informações acessíveis.",
                afirmacao: "A IA pode auxiliar na descrição de imagens, leitura de textos e identificação de elementos visuais, facilitando o acesso a conteúdos digitais."
            },
            {
                texto: "Fazer com que a pessoa não precise mais utilizar nenhuma tecnologia assistiva.",
                afirmacao: "A IA não deve substituir todas as tecnologias assistivas. Ela pode trabalhar em conjunto com leitores de tela e outros recursos para ampliar a acessibilidade."
            }
        ]
    },

    {
        enunciado: "Uma pessoa com deficiência auditiva está assistindo a uma aula ou vídeo sem legendas. De que forma a IA pode contribuir?",
        alternativas: [
            {
                texto: "Gerar legendas automaticamente a partir da fala.",
                afirmacao: "Ferramentas de IA podem reconhecer a fala e gerar legendas, ajudando pessoas com deficiência auditiva a acompanhar vídeos, aulas e reuniões."
            },
            {
                texto: "Retirar os sons do vídeo para tornar o conteúdo acessível.",
                afirmacao: "Remover o áudio não resolve o problema. Recursos como legendas e transcrições são mais adequados para tornar o conteúdo compreensível."
            }
        ]
    },

    {
        enunciado: "Uma pessoa tem dificuldades para se comunicar por meio da fala e precisa expressar suas ideias em uma conversa. Como a IA pode ajudar?",
        alternativas: [
            {
                texto: "Ajudar a transformar diferentes formas de comunicação em frases ou mensagens.",
                afirmacao: "A IA pode apoiar pessoas com dificuldades de comunicação ao auxiliar na construção de frases, prever palavras e adaptar mensagens às necessidades de cada pessoa."
            },
            {
                texto: "Falar sempre no lugar da pessoa, sem considerar o que ela deseja dizer.",
                afirmacao: "A tecnologia deve apoiar a comunicação, e não falar pela pessoa sem sua participação. A escolha e a intenção da pessoa devem continuar sendo respeitadas."
            }
        ]
    },

    {
        enunciado: "Em uma escola, uma atividade precisa ser adaptada para atender estudantes com diferentes necessidades. Como a IA pode contribuir para uma educação mais inclusiva?",
        alternativas: [
            {
                texto: "Sugerir adaptações de textos, atividades e formas de apresentar o conteúdo.",
                afirmacao: "A IA pode ajudar professores a criar materiais com diferentes níveis de complexidade, formatos e estratégias de aprendizagem, favorecendo a inclusão."
            },
            {
                texto: "Criar uma atividade totalmente diferente e retirar o estudante da atividade da turma.",
                afirmacao: "Separar o estudante não é necessariamente inclusão. A IA deve ajudar a adaptar o aprendizado, sempre que possível, para promover a participação junto aos demais."
            }
        ]
    },

    {
        enunciado: "Uma pessoa com deficiência física possui dificuldade para utilizar determinados controles de um computador. Como a IA e os comandos de voz podem ajudar?",
        alternativas: [
            {
                texto: "Permitir que algumas tarefas sejam realizadas por comandos de voz ou interfaces adaptadas.",
                afirmacao: "Comandos de voz e outras tecnologias assistivas podem reduzir barreiras motoras e permitir que a pessoa execute tarefas com mais autonomia."
            },
            {
                texto: "Determinar que a pessoa deve utilizar o computador somente com as mãos.",
                afirmacao: "Exigir uma única forma de interação pode criar barreiras. Tecnologias acessíveis devem oferecer alternativas adequadas às necessidades de cada usuário."
            }
        ]
    },

    {
        enunciado: "Ao utilizar IA para acessibilidade, qual atitude é mais importante para garantir um uso responsável e inclusivo?",
        alternativas: [
            {
                texto: "Usar a IA como ferramenta de apoio, respeitando a autonomia, a privacidade e as escolhas da pessoa.",
                afirmacao: "O uso responsável da IA deve ampliar a acessibilidade e a autonomia, respeitando a pessoa, seus dados, suas escolhas e suas necessidades."
            },
            {
                texto: "Deixar que a IA tome todas as decisões pela pessoa para facilitar sua rotina.",
                afirmacao: "A IA não deve retirar a autonomia das pessoas. Ela deve funcionar como apoio, permitindo que cada indivíduo continue participando das decisões sobre sua própria vida."
            }
        ]
    }
];

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixaderesultados");
const textoResultado = document.querySelector(".texto-resultado");

let perguntaAtual = 0;
let resultados = [];

function mostraPergunta() {
    if (perguntaAtual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const pergunta = perguntas[perguntaAtual];

    caixaPerguntas.innerHTML = `<p>${pergunta.enunciado}</p>`;
    caixaAlternativas.innerHTML = "";

    mostraAlternativas(pergunta.alternativas);
}

function mostraAlternativas(alternativas) {
    alternativas.forEach((alternativa) => {
        const botao = document.createElement("button");

        botao.classList.add("botao-alternativa");
        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            resultados.push(alternativa.afirmacao);
            perguntaAtual++;
            mostraPergunta();
        });

        caixaAlternativas.appendChild(botao);
    });
}

function mostraResultado() {
    caixaPerguntas.innerHTML = "";
    caixaAlternativas.innerHTML = "";

    caixaResultados.style.display = "block";

    let resultadoHTML = `
        <strong>O que suas escolhas mostram?</strong>
    `;

    resultados.forEach((afirmacao, indice) => {
        resultadoHTML += `
            <div class="resultado-item">
                <strong>Escolha ${indice + 1}:</strong>
                ${afirmacao}
            </div>
        `;
    });

    resultadoHTML += `
        <div class="resultado-final">
            A Inteligência Artificial pode ser uma importante ferramenta de apoio
            para aumentar a acessibilidade, a autonomia e a inclusão. Porém, ela
            deve ser utilizada de maneira responsável e ética, respeitando as
            necessidades, escolhas e direitos de cada pessoa. A IA deve ajudar,
            e não substituir a pessoa.
        </div>
    `;

    textoResultado.innerHTML = resultadoHTML;
}

mostraPergunta();
