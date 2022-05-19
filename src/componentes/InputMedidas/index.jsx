import { useState } from "react";
import './style.css';



export default function Input(props) {

    return (

        <div className="inputContainer">
            <label htmlFor="comprimento" className="titulo"> {props.titulo}</label>
            <input
            type='number'
            onChange={e => props.alteraValor(+e.target.value)}
            className="comprimento"
            placeholder="cm"
            required
            ></input>
        </div>
        
    );
    
}