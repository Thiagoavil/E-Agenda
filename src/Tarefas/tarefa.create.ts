import { IPaginaFormulario } from "../shared/pagina.create.interface.js";
import { IPaginaHTML } from "../shared/pagina.interface.js";
import { IRepositorio } from "../shared/repositorio.interface.js";
import { Prioridade } from "./prioridade.enum.js";
import { Tarefa } from "./tarefa.model.js";
import { TarefaRepositoryLocalStorage } from "./tarefa.repositoriy.Local-storage.js";

class TarefaPaginaCadastro implements IPaginaHTML,IPaginaFormulario{
  private txtDescricao:HTMLInputElement;
  private rdbPrioridade : HTMLInputElement;
  private btnSalvar:HTMLButtonElement;


  constructor(private repositorio:IRepositorio<Tarefa>){
    
    this.configurarElementos();
  }
  
  
  gravarRegistros(): void {
    this.rdbPrioridade = document.querySelector('input[type="radio"]:checked') as HTMLInputElement;

    const prioridade = this.rdbPrioridade.value as Prioridade;

    const novaTarefa = new Tarefa(this.txtDescricao.value,prioridade)

    this.repositorio.inserir(novaTarefa);

    window.location.href = "tarefa.list.html";
  }


  configurarElementos(): void {
    this.txtDescricao = document.getElementById("txtDescricao") as HTMLInputElement;
    this.btnSalvar= document.getElementById("btnSalvar") as HTMLButtonElement;

    this.btnSalvar.addEventListener("click",(_evt)=> this.gravarRegistros());
  }
  
}

new TarefaPaginaCadastro(new TarefaRepositoryLocalStorage());