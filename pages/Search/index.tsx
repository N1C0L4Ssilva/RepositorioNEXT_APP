import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { stringify } from "querystring";

import style from "./style.module.css"

import SearchBar from "../../components/search-bar";
import FooterBar from "../../components/footer-bar";
import CardCatalogo from "../../components/card-catalogo";

const Search:React.FC=()=>{
    const router = useRouter();
    let valorRecebido: string|string[]| null|undefined=router.query.SEARCH || ""
    const [ITENS,setITENS]=useState<string[]>([])
    useEffect(() => {
        valorRecebido=router.query.SEARCH || ""
        if(valorRecebido){
        fetch(`/api/Produto?${stringify({
            TYPEFIND:"ITEM_BY_SEARCH",
            ITEM_BY_SEARCH:valorRecebido,})
        }`).then(v=>v.json()).then(v=>{
            console.log(v)
            let ItensSaveMoment:any[]=[]
            for(const i in v){
            if(!ItensSaveMoment.find((Test)=>{return Test.ID==`${v[i].MARKADOR}: ${v[i].MARCA}`})){
                ItensSaveMoment.push({
                ID:`${v[i].MARKADOR}: ${v[i].MARCA}`,
                ITENS:[]
                })
            }
            const LST=ItensSaveMoment.find((Test)=>{return Test.ID==`${v[i].MARKADOR}: ${v[i].MARCA}`})
            LST.ITENS.push(v[i])
            }
            setITENS(ItensSaveMoment)
        })
        }
    },[router.query])
    return(
        <div>
            <Head><title>Pesquisar {valorRecebido}</title></Head>
            <SearchBar/>
            <h3 className={style.h3}>Pesquisar por:{valorRecebido}</h3>
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
export default Search
