import React, { useEffect } from 'react';
import style from "./style.module.css"
import SearchBar from "../../components/search-bar"
import FooterBar from '../../components/footer-bar';
import Head from 'next/head';
const Marker:React.FC=()=>{
    useEffect(() => {},[])
    return(
        <div>
            <Head>
                <title>MARKER</title>
            </Head>
            <SearchBar/>
            {/* <div class="Catalogo">
                <div class="MarkerCatalogo"> 
                    <span class="TextoMarcador"> MARCADORES </span>
                    <div>
                        <!-- <CardMarcadoresComponent></CardMarcadoresComponent> -->
                        <div *ngFor="let I of MARCADORES" class="card_mark">
                            <img src="../../assets/NoItem.png" alt="">
                            <span class="TextoSeNaoImg"></span>
                            <span class="Titulo">{{I}}</span>
                            <a (click)="Encaminhar(I)">Ver Produtos</a>
                        </div>
                    </div>
                </div>
            </div>
            <app-footer-bar></app-footer-bar> */}
            <FooterBar/>
        </div>
    );
} 
export default Marker