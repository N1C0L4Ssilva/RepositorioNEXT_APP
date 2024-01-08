import { useRouter } from "next/router";
import style from "./style.module.css"
import Head from "next/head";
import { stringify } from "querystring";

import SearchBar from "../../components/search-bar";
import FooterBar from "../../components/footer-bar";
import CardCatalogo from "../../components/card-catalogo";
import { useEffect, useState } from "react";

const CatalogoItens:React.FC=()=>{
  const router = useRouter();
  const {MARKER}=router.query
  let valorRecebido: string|string[]| null|undefined=router.query.MARKER
  const [ITENS,setITENS]=useState<string[]>([])
  useEffect(() => {
    valorRecebido=router.query.MARKER
    if(valorRecebido){
      fetch(`/api/Produto?${stringify({
        TYPEFIND:'ITEM_BY_MARKER',
        ITEM_BY_MARKER:valorRecebido})
      }`).then(v=>v.json()).then(v=>{
        console.log(v)
        let ItensSaveMoment:any[]=[]
        for(const i in v){
          if(!ItensSaveMoment.find((Test)=>{return Test.ID==v[i].MARCA})){
            ItensSaveMoment.push({
              ID:v[i].MARCA,
              ITENS:[]
            })
          }
          const LST=ItensSaveMoment.find((Test)=>{return Test.ID==v[i].MARCA})
          LST.ITENS.push(v[i])
        }
        setITENS(ItensSaveMoment)
      })
    }
  },[])
  return(
    <div>
      <Head><title>Catalogo de {valorRecebido}</title></Head>
      <SearchBar/>
      <h3 className={style.h3}>{valorRecebido}</h3>
      {ITENS.map((Mrk:any)=>(
        <section key={Mrk.ID} className={style.Result}>
          <h3 className={style.h3}>{Mrk.ID}</h3>
          <div className={style.Catalogo}>
            {Mrk.ITENS.map((I:any)=>(
              <CardCatalogo
                key={I.ID}
                Nom={I.NOME}
                Dec={I.DESCRICAO}
                Val={I.VALOR}
                Tag={I.TAGS}
                ID={I.ID}/>
            ))}
          </div>
        </section>
      ))}
      <FooterBar/>
    </div>
  );
}
interface CatalogoProps {marker: string | null;}
export async function getServerSideProps(context:any): Promise<{ props: CatalogoProps }> {
  const { query } = context;
  const marker: string | null = query.MARKER || null;

  return {
    props: {
      marker,
    },
  };
}
export default CatalogoItens