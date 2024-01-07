let PRODUTO:any=[];
let CARRINHO:any=[];
let ENDERECO:any=[];
let MOVIMENTACAO:any=[];
export default class Lista{
  public SetProduto(Valor:any){PRODUTO=Valor}
  public SetCarrinho(Valor:any){CARRINHO=Valor}
  public SetEndereco(Valor:any){ENDERECO=Valor}
  public SetMovimentacao(Valor:any){MOVIMENTACAO=Valor}

  public GetProduto(){return PRODUTO}
  public GetCarrinho(){return CARRINHO}
  public GetEndereco(){return ENDERECO}
  public GetMovimentacao(){return MOVIMENTACAO}
}
export const ListaCalled = new Lista();