import { EntidadeBase } from "./Entidade.model";

export interface IRepositorio<T extends EntidadeBase>{

  inserir(registro : T):void;
  selecionarTodos():T[];
}