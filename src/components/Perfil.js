import React, {useState, useEffect, useState} from "react";

const Perfil =() =>{
    // contador de likes
    const [contadorLikes, setContadorLikes] = useState(0)
    
    const handleContador = () =>{
        setContadorLikes(contadorLikes+1)
    }
    return(
        <>
        <h1>Estoy en perfil</h1>
        <button type="button" onClick={handleContador}>Sumar Like</button>
        <p>Conteo de Likes: {contadorLikes}</p>
        </>
        
    )
}
export default Perfil