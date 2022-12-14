export type DataHoraFormatos =
  "HH:mm" |
  "HH:mm:ss" |
  "dd/MM/yyyy" |
  "yyyy-MM-dd" |
  'yyyy-MM-dd HH:mm' |
  'dd/MM/yyyy HH:mm' |
  'yyyy-MM-dd HH:mm:ss' |
  'dd/MM/yyyy HH:mm:ss';

/* Parte do Login */
export interface LoginTypes {
  email: string;
  senha: string;
}

export interface UsuarioLogadoTypes {
  id: string;
  nome: string;
}

/* Parte do Usuario */
export interface UsuarioTypes {
  nome: string;
  email: string;
  senha: string;
}

export interface UsuarioDadosTypes extends UsuarioTypes {
  id: string;
  codigo: string;
  data_cadastro: string;
  data_modificacao_cadastro: string;
}

/* Parte do Cliente */
export interface ClienteTypes {
  email: string;
  senha: string;
  confirmacao_senha: string;
  nome: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  telefone: string;
  id: string,
  data_cadastro: string;
  data_modificacao_cadastro: string;
  empresaId: string;
}

/* Parte da Refeicao */
// export interface RefeicaoBaseTypes {
//   nome: string;
//   preco: number;
// }

// export interface RefeicaoTypes extends RefeicaoBaseTypes {
//   ingredientes: IngredientesTypes[];
//   descricao: string;
// }

// export interface ListaRefeicaoTypes extends RefeicaoBaseTypes {
//   id: string;
// }

export interface ProdutoCardapioBaseType {
  id: number | string;
  foto_miniatura: FotoTypes;
  nome: string;
  tipo: string;
  preco: number | string;
  ativo: boolean;
  favorito: boolean;
}

export interface ProdutoCardapioType extends ProdutoCardapioBaseType {
  fotos_galeria: FotoTypes[];
  codigo: string;
  descricao: string;
  quantidade: number;
  unidade_quantidade: string;
  ingredientes: IngredientesTypes[];
  ingredientes_removiveis: IngredientesTypes[];
  ingredientes_opcionais: IngredientesTypes[];
  data_cadastro: Date;
  data_modificacao_cadastro: Date;
  empresaId: number | string;
}

export interface FotoTypes {
  id: number | string;
  url: string;
  nome: string;
}

export interface IngredientesTypes {
  id: number | string;
  nome: string;
  quantidade: number;
  quantidade_unidade: string;
  removivel: boolean;
  opcional: boolean;
  preco: number;
}
