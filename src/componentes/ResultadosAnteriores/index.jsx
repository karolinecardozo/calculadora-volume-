import React from "react";
import Style from "./style.css"

export default function ResultadosAnteriores(props){
    return(
       <div className="container">
            
                <h2>Historico de calculos</h2>
                <ul className="listaResultados"> 
                    {props.resultados.map((resultado) => {
                        return (
                            <li className="resultado">
                                Comprimento {resultado.comprimento} cm <br/>
                                Altura {resultado.altura}cm <br/>
                                Largura {resultado.largura} cm <br/>
                                Volume Final {resultado.volume} <br/>
                            </li>
                        )
                    })}
                </ul>
            

        </div>
       
    ) 
}


//50 com X 100 alt X 30 larg -> 100 litros
        
