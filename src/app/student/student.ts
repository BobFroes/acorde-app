export interface IStudent {
  id: number
  nome: string
  cpf: string
  bairro: string
  cidade: string
  telefone: string
}

export enum Status {
  Ativos = 'Ativos',
  Inativos = 'Inativos',
  Todos = 'Todos',
}
