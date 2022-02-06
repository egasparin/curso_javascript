// Async/Await
/*
    Já um assync/await é uma forma de realizar a chamada de uma promise, tornando mais legivel ainda o código. Vale ressaltar que a promise continua sendo obrigatória, bem como a definição desta, com a modificação ocorrendo apenas na chamada da função, substituindo a estrutura '.then' por uma mais linear:

    let funcaoAssincrona = async () =>{
        // chama a primeira função e aguarda o retorno dela:
        await umaFunção(parametros);
        await outraFuncao(parametros);
    };

    // Executando a funcao assincrona;
    funcaoAssincrona();

    Também podemos tratar erros por meio do 'try-catch':
    let funcaoAssincrona = async () =>{
        try{
            await umaFunção(parametros);
            await outraFuncao(parametros);
        } catch(error) {
            console.error;
        }
    };

    // Executando a funcao assincrona;
    funcaoAssincrona();

    Abaixo é feita a solução por meio do async/await do problema anterior:
*/

const names = [{name: "Eduardo"}, {name: "Elaine"}];

const listaNomes = () => {
    setTimeout(() => {
        names.forEach((item, idx) => {
            console.log(item.name);
        });
    },1000);
};

const addName = (name)=>{

    // declara a estrutura da minha promise: 
    const minhaPromise = (resolve, reject) => {
        
        setTimeout(()=>{
            names.push({name});

            // se a inserção deu certo, chama o resolve();
            resolve();

        },2000);
    }

    // retorna o resultado da 'minhaPromise'
    return new Promise(minhaPromise);
};

// com a nova estrutura realizamos a criação da funcao assincrona
let assincrona = async () => {
    try{
        await addName('Emillie');
        await addName('Mimi');
        // como a função de imprimir nao tem promise, nao deve
        // ser precedida do 'await'
        listaNomes();
    } catch {
        console.error();
    }
};

// chamando a funçao assincrona;
assincrona();

// Promise
/*
    Uma promisse é diferente de uma callack, pois permite um melhor disposição vertical do código implementado, tornando mais legivel e assim mais facil de realizar manutenção. A estrutura de uma promisse pode ser representada como uma função com dois parametros, um 'reject' em caso de erro e um 'resolve' em caso de sucesso:

    let minhaPromisse = (resolve, reject) => {
        // declaração de variaveis e códigos;

        if(error) {
            reject(error);
        } else {
            resolve(result);
        }
    };

    // Assim a criação da promisse com base na estrutura declarada fica:

    let promise = new Promisse(minhaPromise);

    // A chamada da promise;

    promise
        .then(umaFunção);
        .then(outraFuncao);
        .catch(retornoEmCasoDeErro = () => {console.error});
        .finally(ultimaQueSeraExecutada = () => {
            console.log("Acabou");
        });

    Abaixo será utilizada a promise para resolver o problema anteriormente resolvido com callback.
*/  
/*
const names = [{name: "Eduardo"}, {name: "Elaine"}];

const listaNomes = () => {
    setTimeout(() => {
        names.forEach((item, idx) => {
            console.log(item.name);
        });
    },1000);
};

const addName = (name)=>{

    // declara a estrutura da minha promise: 
    const minhaPromise = (resolve, reject) => {
        
        setTimeout(()=>{
            names.push({name});

            // se a inserção deu certo, chama o resolve();
            resolve();

        },2000);
    }

    // retorna o resultado da 'minhaPromise'
    return new Promise(minhaPromise);
};

// com a nova estrutura realizamos a chamada da função
addName('Emillie')
    .then(listaNomes)
    .catch(console.error);
*/
/*
// Callbacks
const names = [{name: "Eduardo"}, {name: "Elaine"}];

const listaNomes = () => {
    setTimeout(() => {
        names.forEach((item, idx) => {
            console.log(item.name);
        });
    },1000);
};

const addName = (name, callback)=>{
    setTimeout(()=>{
        names.push({name});

        callback();
    },2000);
};

addName('Emillie', listaNomes);
*/
/* 
    O que esta acontecendo? basicamente ha duas funções, com diferentes tempos de execução, e por meio do uso de callback, a segunda função somente é executada quando a primeira realizar a chamada dela, por meio da instrução 'callback()'. Caso fosse chamada uma função na sequencia da outra, o javascript iria executar a impressão da lista de nomes primeiro do que a adição, pois essa ultima tem um tempo de resposta maior.
*/


function mudaTexto(){
    document.getElementById("id").innerHTML = "<b>Mudou o texto e adicionou negrito</b>";
}

// Declaraçao normal
function redText(elemento){
    elemento.innerHTML = "<b>Mudou o texto e adicionou negrito</b>";
}
// Declaração Arrow-Function
// let redText = (elemento) => { elemento.innerHTML = "<b>Mudou o texto e adicionou negrito</b>";}

/*
function horario(){
    var horario = new Date;
    let minutos = horario.getMinutes();
    seconds = horario.getSeconds();
	console.log("Horario atual: " + horario.getHours() +":" +("00" + horario.getMinutes()).slice(-2));	
}

function teste(){
    console.log("Horario: " +horario.getHours);
    // console.log("Minutos: " +minutos );
    console.log("Segundos: " +seconds );
}
*/