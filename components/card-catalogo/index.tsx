import style from "./style.module.css"
interface CardCatalogoProps {
    Nom: string;
    Dec: string;
    Val: string;
    Tag: string;
    ID: string;
  }
const cardcatalogo:React.FC<CardCatalogoProps>=({Nom, Dec, Val, Tag, ID })=>{
  const ArrumaValor=(Val:string)=>{
    if(!Val.includes(",")){
      Val+=",00"
    }else{
      const Splt=Val.split(",")
      if(Splt[1].length==1){
        Val+="0"
      }
    }
    return Val
  }
  return(
    <div className={style.Card}>
      <img src="" alt=""/>
        <div>
          <div className={style.UnicBar}>{Nom}</div>
          <div className={style.UnicBar}>{Tag}</div>
          <div className={style.UnicBar}>{Dec}</div>
          <div className={style.Vlr}>
            <div>{ArrumaValor(Val)}</div>
            <button>ADD</button>
          </div>
        </div>
    </div>
  );
} 
export default cardcatalogo

/* SCRIPT
export class CardCatalogoComponent {

  private Service:ConectDBService=new ConectDBService()
  private storage: Storage;

  constructor(){
    this.storage=window.localStorage;
  }
  AdicionarCarrinho(ID:string){
    const ID_USER=this.storage.getItem("skmyrshPHaqT")
    if(ID_USER!="" && ID_USER!=undefined && ID!=null){
      console.log(ID)
      this.Service.POST(`Carrinho/?${
        new URLSearchParams({
          ID_USUARIO:ID_USER,
          ID_PRODUTO:ID
        }).toString()}`)
    }
  }
  ArrumaValor(Val:string){
    if(!Val.includes(",")){
      Val+=",00"
    }else{
      const Splt=Val.split(",")
      if(Splt[2].length==1){
        Val+="0"
      }else{
        console.log("JÁ TEM ','")
      }
    }
    return Val
  }
}

*/