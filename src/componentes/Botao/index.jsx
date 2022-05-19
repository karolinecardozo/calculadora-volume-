import React from "react";
import Style from "./style.css"


export default function Botao (props) {
   function calculaResultado() {
      const novoResultado = calcular(props.comprimento, props.altura, props.largura)

      props.alteraResultado(novoResultado)

      const valoFixo = {
         comprimento: props.comprimento,
         altura: props.altura,
         largura: props.largura,
         volume: novoResultado

      }

      const resultadosAnteriores = props.resultadosAnteriores
      resultadosAnteriores.push(valoFixo)
      props.atualizaListaResultados(resultadosAnteriores)
   }

   function calcular(comprimento, altura, largura){
      const valorFinal = (comprimento * altura * largura) /1000
      return valorFinal
   }

   return (
   <button onClick={calculaResultado} 
   className="botao" > {props.nome } </button>
   );
}




