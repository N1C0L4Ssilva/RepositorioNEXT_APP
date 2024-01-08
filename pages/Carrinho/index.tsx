import style from "./style.module.css"
import SearchBar from "../../components/search-bar";
import FooterBar from "../../components/footer-bar";
import Head from "next/head";
const CarrinhoS:React.FC=()=>{
    return(
        <div>
            <Head><title>Catalogo Marcadores</title></Head>
            <SearchBar/>
            <div></div>
            <FooterBar/>
        </div>
    );
} 
export default CarrinhoS