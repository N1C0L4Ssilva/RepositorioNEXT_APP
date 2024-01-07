import { AppProps } from 'next/app';
import { useEffect } from 'react';
import ObitDdsIni from "../pages/api/ObterDadosInicio"

const MyApp = ({ Component, pageProps }: AppProps) => {
  if (typeof window === 'undefined') {
    new ObitDdsIni().Iniciar()
    console.log('Lado do servidor iniciado');
  }
  useEffect(()=>{}, []);

  return <Component {...pageProps} />;
};

export default MyApp;