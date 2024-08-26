const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Qual é a melhor msc do paiva?",
    alternativas: [
        {
            texto:"Givenchy",
            afirmacao: "Excelente gosto"
        },
        {
        texto:"Magnata",
        afirmacao: "É, até q vai"
        }
    ]
},

{
    enunciado: "Carro ou moto?",
    alternativas: [
        {

        texto: "Carro",
        afirmacao: "Ent vc é 308"
        },
        {
        texto:"Moto",
        afirmacao: "Ent vc é 244"
        }
    ]
},

{
    enunciado: "Qual tipo de msc vc prefere?",
    alternativas: [
        {
        texto:"Funk",
        afirmacao: "Manda mt, bom gosto"
        },
        {
        texto:"Pop",
        afirmacao: "Vc queima ou não queima?"
        }
    ]
}

]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return; 
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}
function mostraResultado(){
caixaPerguntas.textContent = "Suas ações mudam o mundo!";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}

mostraPergunta();
