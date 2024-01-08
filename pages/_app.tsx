import { AppProps } from 'next/app';
import { useEffect } from 'react';
import ObitDdsIni from "../pages/api/ObterDadosInicio"

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(()=>{}, []);

  return <Component {...pageProps} />;
};

export default MyApp;