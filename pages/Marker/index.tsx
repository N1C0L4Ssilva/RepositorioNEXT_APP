import React, { useEffect, useState } from 'react';
import style from "./style.module.css"
import SearchBar from "../../components/search-bar"
import FooterBar from '../../components/footer-bar';
import Head from 'next/head';
import Link from 'next/link';
const Marker:React.FC=()=>{
    const [MARCADORES, setMARCADORES] = useState<string[]>(["."]);
    useEffect(() => {
        fetch("/api/Produto/?TYPEFIND=MARKER")
        .then(res => res.json())
        .then((v)=>{setMARCADORES(v)})
    },[])
    return(
        <div>
            <Head><title>Catalogo Marcadores</title></Head>
            <SearchBar/>
            <div className={style.Catalogo}>
                <div className={style.MarkerCatalogo}>
                    <span className={style.TextoMarcador}> MARCADORES </span>
                    <div>
                    {MARCADORES.map((I, index) => (
                        <div key={index} className={style.card_mark}>
                        <img src="../../public/NoItem.png" alt="" />
                        <span className={style.TextoSeNaoImg}></span>
                        <span className={style.Titulo}>{I}</span>
                        <Link href={`/Catalogo?MARKER=${I}`}>Ver Produtos</Link>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <FooterBar/>
        </div>
    );
}
export default Marker