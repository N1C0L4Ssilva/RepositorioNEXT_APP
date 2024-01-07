import { useEffect } from "react";
import style from "./style.module.css"
const searchbar:React.FC=()=>{
    useEffect(() => {},[])
    return(
        <nav className={style.nav}>
            <div className={style.SearchBar}>
                <input id="InputSearch" type="text"/>
                <div></div>
            </div>
             <div className={style.Carrinho}>
                <input type="checkbox" name="" id=""/>
                <div></div>
            </div>
            <a href="" className={style.Home}>
                <div></div>
            </a>
            <div className={style.BotoesConta}>
                <button>CONTA</button>
                <button>CARRINHO</button>
                <button>SAIR</button>
            </div>
        </nav>
    );
} 
export default searchbar