export class TarefaRepositoryLocalStorage {
    constructor() {
        this.LocalStorage = window.localStorage;
        this.tarefas = this.selecionarTodos();
    }
    gravar() {
        const tarefasJasonString = JSON.stringify(this.tarefas);
        this.LocalStorage.setItem("tarefas", tarefasJasonString);
    }
    inserir(registro) {
        this.tarefas.push(registro);
        this.gravar();
    }
    selecionarTodos() {
        const dados = this.LocalStorage.getItem("tarefas");
        if (!dados)
            return [];
        return JSON.parse(dados);
    }
}
