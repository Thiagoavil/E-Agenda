import { IPaginaHTML } from "../shared/pagina.interface.js";
import { IPaginaListagem } from "../shared/pagina.list.interface.js";
import { IRepositorio } from "../shared/repositorio.interface.js";
import { Prioridade } from "./prioridade.enum.js";
import { Tarefa } from "./tarefa.model.js";
import { TarefaRepositoryLocalStorage } from "./tarefa.repositoriy.Local-storage.js";


class TarefaPaginaLisagem implements IPaginaHTML,IPaginaListagem{
 tabela:HTMLTableElement;
 
  constructor(private repositorioTarefas:IRepositorio<Tarefa>){
   
    this.configurarElementos();
    this.atualizarTabela();
  }
  
  configurarElementos(): void {
    this.tabela=document.getElementById("tabela") as HTMLTableElement;
  }

  atualizarTabela(): void {
    const tarefas = this.repositorioTarefas.selecionarTodos();

    let corpoTabela=this.tabela.getElementsByTagName("tbody")[0];

    tarefas.forEach(tarefa => {
      const novalinha = corpoTabela.insertRow();

      Object.values(tarefa).forEach((valor:any)=>{
        const novaCelula = novalinha.insertCell();

        novaCelula.innerText= valor;
      });
    })
  }
}

new TarefaPaginaLisagem(new TarefaRepositoryLocalStorage());