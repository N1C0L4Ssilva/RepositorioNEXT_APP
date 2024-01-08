let PRODUTO:any=[
  {"DESCRCAO": "none","ESPECIFC": "Framboesa","IMG": "","MARCA": "ZIGGY","MARKADOR": "ESSENCIA","NOME": "7 Belo","QUANTIDADE": 15,"TAGS": "Doce","VALOR": "10","ID": "1"},
  {"DESCRCAO": "none","ESPECIFC": "Abacaxi","IMG": "","MARCA": "ZIGGY","MARKADOR": "ESSENCIA","NOME": "Abacaxi","QUANTIDADE": 6,"TAGS": "No Tag","VALOR": "10","ID": "2"},
  {"DESCRCAO": "none","ESPECIFC": "Açai","IMG": "","MARCA": "ZIGGY","MARKADOR": "ESSENCIA","NOME": "Açai","QUANTIDADE": 6,"TAGS": "Doce","VALOR": "10","ID": "3"},
  {"DESCRCAO": "none","ESPECIFC": "Banana","IMG": "","MARCA": "ZIGGY","MARKADOR": "ESSENCIA","NOME": "Banana","QUANTIDADE": 35,"TAGS": "No Tag","VALOR": "10","ID": "4"},
  {"DESCRCAO": "none","ESPECIFC": "Café","IMG": "","MARCA": "ZIGGY","MARKADOR": "ESSENCIA","NOME": "Café","QUANTIDADE": 11,"TAGS": "Doce","VALOR": "10","ID": "5"},
  {"DESCRCAO": "none","ESPECIFC": "Caju","IMG": "","MARCA": "ZIGGY","MARKADOR": "ESSENCIA","NOME": "Caju","QUANTIDADE": 11,"TAGS": "No Tag","VALOR": "10","ID": "6"},
  {"DESCRCAO": "none","ESPECIFC": "Cereja","IMG": "","MARCA": "ZIGGY","MARKADOR": "ESSENCIA","NOME": "Cereja","QUANTIDADE": 17,"TAGS": "Gelada/Doce","VALOR": "10","ID": "7"},
  {"DESCRCAO": "none","ESPECIFC": "Menta","IMG": "","MARCA": "ZIGGY","MARKADOR": "ESSENCIA","NOME": "Hapocalyx","QUANTIDADE": 9,"TAGS": "No Tag","VALOR": "10","ID": "8"},
  {"DESCRCAO": "none","ESPECIFC": "Iogurt","IMG": "","MARCA": "ZIGGY","MARKADOR": "ESSENCIA","NOME": "Iogurte","QUANTIDADE": 24,"TAGS": "No Tag","VALOR": "10","ID": "9"},
  {"DESCRCAO": "none","ESPECIFC": "Laranja Acerola","IMG": "","MARCA": "ZIGGY","MARKADOR": "ESSENCIA","NOME": "Laranjola","QUANTIDADE": 5,"TAGS": "No Tag","VALOR": "10","ID": "10"},
  {"DESCRCAO": "none","ESPECIFC": "Limão","IMG": "","MARCA": "ZIGGY","MARKADOR": "ESSENCIA","NOME": "Limão","QUANTIDADE": 14,"TAGS": "Gelada","VALOR": "10","ID": "11"},
  {"DESCRCAO": "none","ESPECIFC": "Maracuja","IMG": "","MARCA": "ZIGGY","MARKADOR": "ESSENCIA","NOME": "Maracuja","QUANTIDADE": 5,"TAGS": "Doce","VALOR": "10","ID": "12"},
  {"DESCRCAO": "none","ESPECIFC": "Melancia","IMG": "","MARCA": "ZIGGY","MARKADOR": "ESSENCIA","NOME": "Melancia","QUANTIDADE": 26,"TAGS": "No Tag","VALOR": "10","ID": "13"},
  {"DESCRCAO": "none","ESPECIFC": "Limão Morango","IMG": "","MARCA": "ZIGGY","MARKADOR": "ESSENCIA","NOME": "Red Lemonade","QUANTIDADE": 8,"TAGS": "No Tag","VALOR": "10","ID": "14"},
  {"DESCRCAO": "none","ESPECIFC": "Tangerina","IMG": "","MARCA": "ZIGGY","MARKADOR": "ESSENCIA","NOME": "Tangerina","QUANTIDADE": 0,"TAGS": "Gelada","VALOR": "10","ID": "15"},
  {"DESCRCAO": "none","ESPAECIFC": "none","IMG": "","MARCA": "ZIGGY","MARKADOR": "ESSENCIA","NOME": "Tropical","QUANTIDADE": 10,"TAGS": "No Tag","VALOR": "10","ID": "16"},
  {"DESCRCAO": "none","ESPECIFC": "Tut Fruit","IMG": "","MARCA": "ZIGGY","MARKADOR": "ESSENCIA","NOME": "Tut fruit","QUANTIDADE": 21,"TAGS": "Doce","VALOR": "10","ID": "17"},
  {"DESCRCAO": "none","ESPECIFC": "UVA","IMG": "","MARCA": "ZIGGY","MARKADOR": "ESSENCIA","NOME": "UVA","QUANTIDADE": 36,"TAGS": "Doce","VALOR": "10","ID": "18"}
];
let CARRINHO:any=[{}];
let ENDERECO:any=[{}];
let MOVIMENTACAO:any=[{}];
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