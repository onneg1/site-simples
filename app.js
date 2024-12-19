'use strict'
// \/ \/ \/ \/ \/
//O JavaScript tenta ser 
//amigável e ele tenta fazer 
//com que o código funcione e forneça uma solução, 
//mesmo que o resultado venha a ser um erro.
//Para combater essas deficiências, 
//você pode ativar o modo estrito, 
//que reduz erros silenciosos, melhora o desempenho, 
//fornece mais avisos e menos recursos não seguros.
 const switcher = document.querySelector('.btn');
// document.querySelector chama a referencia para o botão.
//a referencia é obtida para que eu possa add o manipulador
//de eventos.

// listener = vc tem um "amigo" que so faz algo quando voce pede
//esse é o 'ouvinte' = listener, espera um comando, e quando
//eu digo: faça isso, ele faz.

//switcher(alternador):como um interrputor de luz, ele troca
//o 'ligado' para o 'desligado', tema escuro, tema claro.

//addEventListener: é como se voce dissesse para o seu "amigo"
//ouvinte, listener: "fique esperando até eu clicar (click) em 
//um botao, quando eu clicar, faça isso."

//a function que é chamada é a document.body (o corpo HTML)
// classList (acessa todas as listas de classes associado
//elemento body), toggle ( que é um botão ligar/desligar),
// como o light-theme esta ativado por padrão, o dark-theme
// é ativadi/desativado, conforme ativação/desativação
//do toggle/função.

// apos, variavel className criada, para que 
// o codigo vá lá no body e faça uma leitura na class ativa,
// vendo que está na light, ele deixa o botao com name 'dark'
// vendo que está na dark, botao com name 'light'
switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme') 
    var className = document.body.className;
    if (className == "light-theme"){
        this.textContent = "Dark";
    } 
    else {
        this.textContent = "Light";
    } 
});
