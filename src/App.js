import React,{Fragment, useState,useEffect} from 'react';
import axios from 'axios'
import Formulario from './Components/Formulario'
import Cancion from './Components/Cancion'




function App() {

  const [busquedaLetra,guardarBusquedaLetra]=useState({});
  const [letra , guardarLetra]=useState('');

  
    //consultar api
    useEffect(()=>{
    if(Object.keys(busquedaLetra).length===0) return;
    const consultarApi= async ()=>{
      const url=`https://api.lyrics.ovh/v1/${busquedaLetra.artista}/${busquedaLetra.cancion}`;
      const respuesta = await axios.get(url);
      guardarLetra(respuesta.data.lyrics)
    }
    consultarApi();
    
    }
    ,[busquedaLetra])
  


  return (
    <Fragment>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra}/>
      <div className="container mmt-5">
        <div className="row">
          <div className="col-md-6">
         
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
