import { TarefaRepositoryLocalStorage } from "./tarefa.repositoriy.Local-storage.js";
class TarefaPaginaLisagem {
    constructor(repositorioTarefas) {
        this.repositorioTarefas = repositorioTarefas;
        this.configurarElementos();
        this.atualizarTabela();
    }
    configurarElementos() {
        this.tabela = document.getElementById("tabela");
    }
    atualizarTabela() {
        const tarefas = this.repositorioTarefas.selecionarTodos();
        let corpoTabela = this.tabela.getElementsByTagName("tbody")[0];
        tarefas.forEach(tarefa => {
            const novalinha = corpoTabela.insertRow();
            Object.values(tarefa).forEach((valor) => {
                const novaCelula = novalinha.insertCell();
                novaCelula.innerText = valor;
            });
        });
    }
}
new TarefaPaginaLisagem(new TarefaRepositoryLocalStorage());
