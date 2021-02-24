import React from 'react';


const Formulario = () => {
    
    return ( 

        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
                        className="col card text-white gb-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador de Canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre del Artista"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                            <label>Cancion</label>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                name="cancion"
                                                placeholder="Nombre cancion"
                                            />
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                    


                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Formulario;