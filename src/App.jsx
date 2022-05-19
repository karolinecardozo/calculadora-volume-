import style from "./style.css";
import React, {useState} from "react";
import Botao from './componentes/Botao';
import Input from './componentes/InputMedidas';
import Resultado from './componentes/Resultado'
import ResultadosAnteriores from "./componentes/ResultadosAnteriores";
import imagem from "../src/assets/18860936_mzW6v.jpeg"

function App() {
  const [comprimento, setComprimento] = useState(0);
  const [altura, setAltura] = useState(0);
  const [largura, setLargura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [listaResultados, addResultado] = useState([]);
  const [visivel, setVisivel] = useState ('principal')


  return (
    <div>
      {visivel === 'principal'? (
      <div>
        <div className="titulo">
            <h1>Calcule o Volume do seu Aquario</h1>
        </div>

        <div className="container">
          <Input alteraValor={setComprimento} titulo='Comprimento'/>
          <Input alteraValor={setAltura} titulo='Altura'/>
          <Input alteraValor={setLargura} titulo='Largura'/>
          <Botao nome="Enviar" 
                comprimento={comprimento}
                altura={altura}
                largura={largura}
                alteraResultado={setResultado}
                atualizaListaResultados={addResultado} 
                resultadosAnteriores={listaResultados}
                />
          <Resultado resultado={resultado}/>
        </div>
        
        <div>
          <ResultadosAnteriores 
          resultados={listaResultados}
          key={resultado.id}
          />
        </div>

        <button className="novoBotao" onClick={() => setVisivel('secundario')}>Verificar</button>

      </div>
        ): 
        ( 
          <div>
            <h2>VERIFICANDO</h2>
            <img className="imagem" src={imagem} />
            <ResultadosAnteriores 
              resultados={listaResultados}
              key={resultado.id}/>
            <button className="novoBotao" onClick={() => setVisivel('principal')}>Voltar</button>
          </div>
      
        )}
    </div>
  )
}

export default App;
