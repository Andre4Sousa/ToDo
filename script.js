const lista = document.querySelector("[data-list]");

const novaTarefa = document.querySelector("[data-form-button]");

const criarTarefa = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;
    console.log(valor);
}
//evento
novaTarefa.addEventListener('click', criarTarefa);

// criar uma nova tarefa 

