import React from "react";

export default function Resultado(props){
    return (
        <>
            <h4>Volume final: </h4>
            <p> {props.resultado} litros</p>
        </>
    );
}