import React,{Fragment, useState,useEffect} from 'react';
import axios from 'axios'
import Formulario from './Components/Formulario'
import Cancion from './Components/Cancion'
import Info from './Components/Info'



function App() {

  const [busquedaLetra,guardarBusquedaLetra]=useState({});
  const [letra , guardarLetra]=useState('');
  const [info , guardarInfo]=useState({})

  
    //consultar api
    useEffect(()=>{
    if(Object.keys(busquedaLetra).length===0) return;
    const consultarApi= async ()=>{
      const url=`https://api.lyrics.ovh/v1/${busquedaLetra.artista}/${busquedaLetra.cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${busquedaLetra.artista}`;
      const [letra,informacion]= await Promise.all([
        axios(url),
        axios(url2)
      ]);
      guardarLetra(letra.data.lyrics)
      guardarInfo(informacion.data.artists[0])
    }
    consultarApi();
    
    }
    ,[busquedaLetra,info])
  


  return (
    <Fragment>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra}/>
      <div className="container mmt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info}/>
          </div>
          <div className="col-md-6">

            <Cancion letra={letra}/> 
          </div>
        </div>
      </div>
    </Fragment>
    
    
  );
}

export default App;
