import { Tarefa } from "./tarefa.model.js";
import { TarefaRepositoryLocalStorage } from "./tarefa.repositoriy.Local-storage.js";
class TarefaPaginaCadastro {
    constructor(repositorio) {
        this.repositorio = repositorio;
        this.configurarElementos();
    }
    gravarRegistros() {
        this.rdbPrioridade = document.querySelector('input[type="radio"]:checked');
        const prioridade = this.rdbPrioridade.value;
        const novaTarefa = new Tarefa(this.txtDescricao.value, prioridade);
        this.repositorio.inserir(novaTarefa);
        window.location.href = "tarefa.list.html";
    }
    configurarElementos() {
        this.txtDescricao = document.getElementById("txtDescricao");
        this.btnSalvar = document.getElementById("btnSalvar");
        this.btnSalvar.addEventListener("click", (_evt) => this.gravarRegistros());
    }
}
new TarefaPaginaCadastro(new TarefaRepositoryLocalStorage());
