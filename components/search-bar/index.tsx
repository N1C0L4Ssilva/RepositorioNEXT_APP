import { useEffect, useState } from "react";
import style from "./style.module.css"
import Link from "next/link";
import { useRouter } from "next/router";
const searchbar:React.FC=()=>{
    const router = useRouter();
    const [Search,SetSearch]=useState("")
    useEffect(() => {},[])
    const Pesquisar=()=>{
        router.push(`/Search?SEARCH=${Search}`)
    }
    return(
        <nav className={style.nav}>
            <div className={style.SearchBar}>
                <input value={Search} onChange={(Ev)=>{SetSearch(Ev.target.value)}} type="text"/>
                <div onClick={Pesquisar}></div>
            </div>
             <div className={style.Carrinho}>
                <input type="checkbox" name="" id=""/>
                <div></div>
            </div>
            <Link href="/Marker" className={style.Home}>
                    <div></div>
            </Link>
            <div className={style.BotoesConta}>
                <button>CONTA</button>
                <button>CARRINHO</button>
                <button>SAIR</button>
            </div>
        </nav>
    );
} 
export default searchbar