import { IRepositorio } from "../shared/repositorio.interface";
import { IRepositorioSerializavel } from "../shared/repository-serializavel.interface";
import { Tarefa } from "./tarefa.model";

export class TarefaRepositoryLocalStorage implements IRepositorio<Tarefa>, IRepositorioSerializavel{
  private readonly LocalStorage:Storage;
  private readonly chaveLocal:string;
  private readonly tarefas:Tarefa[];
  
  constructor(){
    this.LocalStorage=window.localStorage;

    this.tarefas=this.selecionarTodos();
  }


  public gravar(): void {
    const tarefasJasonString =JSON.stringify(this.tarefas);

    this.LocalStorage.setItem("tarefas",tarefasJasonString);
  }
  
  public inserir(registro: Tarefa): void {
    this.tarefas.push(registro);
    this.gravar();
  }


  public selecionarTodos(): Tarefa[] {
    const dados = this.LocalStorage.getItem("tarefas");

    if(!dados)
      return[];
    
    return JSON.parse(dados);
  }

}