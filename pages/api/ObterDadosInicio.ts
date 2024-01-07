import { ListaCalled } from "./Lista-Itens"
import { RandomCode } from "./Gerar-Codigo-Random"
import {getDatabase, child, onValue, ref, get, set, update, remove } from "firebase/database"
import {initializeApp} from 'firebase/app'
export default class{
  private RadCod:RandomCode=new RandomCode()
  private FireApp=initializeApp({
    apiKey: "AIzaSyDDWfRoi1WMnFxfiO2Inu1usm7xZfyD-A0",
    authDomain: "catalogo-5a57b.firebaseapp.com",
    projectId: "catalogo-5a57b",
    storageBucket: "catalogo-5a57b.appspot.com",
    messagingSenderId: "537589475837",
    appId: "1:537589475837:web:1f34b8de238429279a9194",
    measurementId: "G-L22BT0Q7KM"
  });
  private db=getDatabase()

  constructor(){}

  async Iniciar(){
    console.log("START CONNECTIONS")
    // START ListaCalledSs
    if (ListaCalled.GetCarrinho().length==0){
      await get(child(ref(this.db),"Carrinho")).then((V:any)=>{ListaCalled.SetCarrinho(V.val())})
    }
    if (ListaCalled.GetEndereco().length==0){
      await get(child(ref(this.db),"Endereco")).then((V:any)=>{ListaCalled.SetEndereco(V.val())})
    }
    if (ListaCalled.GetMovimentacao().length==0){
      await get(child(ref(this.db),"Movimentacao")).then((V:any)=>{ListaCalled.SetMovimentacao(V.val())})
    }
    if (ListaCalled.GetProduto().length==0){
      await get(child(ref(this.db),"Produto")).then((V:any)=>{ListaCalled.SetProduto(V.val())})
    }
  
    onValue(child(ref(this.db),"Carrinho"),(V)=>{ListaCalled.SetCarrinho(V.val())})
    onValue(child(ref(this.db),"Endereco"),(V)=>{ListaCalled.SetEndereco(V.val())})
    onValue(child(ref(this.db),"Movimentacao"),(V)=>{ListaCalled.SetMovimentacao(V.val())})
    onValue(child(ref(this.db),"Produto"),(V)=>{ListaCalled.SetProduto(V.val())})
  }
  DeleteID=(Colecao:string,ID:string)=>{
    remove(ref(this.db,Colecao+"/"+ID))
  }
    
  Update=(Colecao:string,ID:string,NovosDados:JSON)=>{
    update(ref(this.db,Colecao+"/"+ID),NovosDados)
  }
  
  Adicionar=(Colecao:string,Dados:any)=>{
    if(Colecao!=undefined){ 
      let local:any=[]
      if(Colecao=="Produto"){
        local=ListaCalled.GetProduto()
      }else if(Colecao=="Carrinho"){
        local=ListaCalled.GetCarrinho()
      }else if(Colecao=="Endereco"){
        local=ListaCalled.GetEndereco()
      }else if(Colecao=="Funcionario"){
        get(child(ref(this.db),"Funcionario")).then((V)=>{local=V.val()})
      }else if(Colecao=="Movimentacao"){
        local=ListaCalled.GetMovimentacao()
      }else if(Colecao=="Usuario"){
        get(child(ref(this.db),"Usuario")).then((V:any)=>{local=V.val()})
      }
      let Code:any=this.RadCod.Gerar()
      while(local.find((v:any)=>{v==Code})!=undefined){
        Code=this.RadCod.Gerar()
      }
      Dados.ID=Code
      set(ref(this.db,Colecao+"/"+Code),Dados)
    }
  }
}