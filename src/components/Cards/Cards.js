import { PrincipalContainer, Imagem1} from "./style"
import React from "react"

function Card(props){
    return(
        <>
        <PrincipalContainer onClick={props.reproduz}>
                <Imagem1 src={props.link} alt=""></Imagem1>
                <h4>{props.titulo}</h4>
        </PrincipalContainer>
        </>
    )}

export default Card