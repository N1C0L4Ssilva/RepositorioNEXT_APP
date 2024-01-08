import { NextApiRequest, NextApiResponse } from "next";
import {ListaCalled} from "./Lista-Itens";
import ObterDadosInicio from "./ObterDadosInicio";
new ObterDadosInicio().Iniciar();

export default async (req:NextApiRequest, res:NextApiResponse) => {
  switch (req.method) {
      case 'GET':
        if(req.query.TYPEFIND!=undefined){
          if(req.query.TYPEFIND=="MARKER"){
            const Valores:any[]=[]
            for(const i in ListaCalled.GetProduto()){
              const Ql=ListaCalled.GetProduto()[i]
              if(!Valores.includes(Ql["MARKADOR"])){
                Valores.push(Ql["MARKADOR"])
              }
            }
            return res.status(200).json(Valores)

          }else if(req.query.TYPEFIND=="ITEM_BY_MARKER"){
            const IBM=req.query.ITEM_BY_MARKER
            const Valores:any[]=[]
            for(const i in ListaCalled.GetProduto()){
              const Ql=ListaCalled.GetProduto()[i]
              if(Ql["MARKADOR"]==IBM && Ql["QUANTIDADE"]>0){
                Valores.push(Ql)
              }
            }
            return res.json(Valores)

         }else if(req.query.TYPEFIND=="ITEM_BY_SEARCH" && req.query.ITEM_BY_SEARCH!=undefined){
          if(typeof req.query.ITEM_BY_SEARCH=="string"){
            const IBS:string=req.query.ITEM_BY_SEARCH.toUpperCase()
            const Valores=[]
            for(const i in ListaCalled.GetProduto()){
              const Ql:any=ListaCalled.GetProduto()[i]
              if(Ql["NOME"].search(IBS)!=-1 && Ql["QUANTIDADE"]>0){
                Valores.push(Ql)
              }
            }
            return res.json(Valores)
          }
        }
        }else if(req.query.ID_PRODUTO!=undefined){
          res.status(200).json(ListaCalled.GetProduto().filter((Item:any)=>Item.ID==req.query.ID_PRODUTO))
        }else{
          res.status(200).json(ListaCalled.GetProduto())
        }
        break;
  
      case 'POST':
        // Lógica para lidar com o método POST
        res.status(200).json({ message: 'Método POST foi chamado' });
        break;
  
      case 'DELETE':
        // Lógica para lidar com o método DELETE
        res.status(200).json({ message: 'Método DELETE foi chamado' });
        break;
  
      case 'PUT':
        // Lógica para lidar com o método PUT
        res.status(200).json({ message: 'Método PUT foi chamado' });
        break;
  
      default:
        res.setHeader('Allow', ['GET', 'POST', 'DELETE', 'PUT']);
        res.status(405).end(`Método ${req.method} não permitido`);
      console.log(req.method);
      // const { name } = req.query;
      // res.status(200).json({ message: `Hello, ${name || 'Anonymous'}!` });
  }
};