import React,{useState,useEffect} from 'react';
import Error from './Error'


const Formulario = ({guardarBusquedaLetra}) => {

    const [busqueda,guardarBusqueda]=useState({cancion:'',artista:''})
    const [error , guardarError]=useState(false)

    const handleInputChange=e=>{
        guardarBusqueda({...busqueda,
            [e.target.name]:e.target.value

        })
    }

    const handleSubmit = e=>{
        e.preventDefault();
        if(artista===''||cancion==='')
        {
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarBusquedaLetra(busqueda)
             
    }


    const {artista ,cancion}=busqueda



    
    return ( 

 
        <div className="bg-info">
           
            <div className="container">
            {error? <Error mensaje="complete los todos los campos vacios"/> :null}
                <div className="row">
                    <form 
                         className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                         onSubmit={handleSubmit}
                    >
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
                                            onChange={handleInputChange}
                                            value={artista}                                            
                                            />
                                    </div>
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre Canción"
                                            onChange={handleInputChange}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
   
     );
}
 
export default Formulario;