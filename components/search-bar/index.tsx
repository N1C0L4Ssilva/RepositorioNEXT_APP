import { useEffect } from "react";
import style from "./style.module.css"
import Link from "next/link";
const searchbar:React.FC=()=>{
    useEffect(() => {},[])
    return(
        <nav className={style.nav}>
            <div className={style.SearchBar}>
                <input id="InputSearch" type="text"/>
                <div></div>
            </div>
            <Link href="" className={style.Carrinho}>
                <input type="checkbox" name="" id=""/>
                <div></div>
            </Link>
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