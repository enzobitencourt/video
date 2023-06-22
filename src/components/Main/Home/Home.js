import Card from "../../Cards/Cards"
import { PainelVideo } from "./style"
import React from "react"

function Home(props){
    return(
        <>
        <PainelVideo>
            <Card titulo={"Titulo do vídeo"} link={"https://picsum.photos/400/400?a=1"} reproduz={props.reproduz}/>
            <Card titulo={"Titulo do vídeo1"} link={"https://picsum.photos/400/400?a=2"} reproduz={props.reproduz}/>
            <Card titulo={"Titulo do vídeo2"} link={"https://picsum.photos/400/400?a=3"} reproduz={props.reproduz}/>
            <Card titulo={"Titulo do vídeo3"} link={"https://picsum.photos/400/400?a=4"} reproduz={props.reproduz}/>
            <Card titulo={"Titulo do vídeo4"} link={"https://picsum.photos/400/400?a=5"} reproduz={props.reproduz}/>
            <Card titulo={"Titulo do vídeo5"} link={"https://picsum.photos/400/400?a=6"} reproduz={props.reproduz}/>
            <Card titulo={"Titulo do vídeo6"} link={"https://picsum.photos/400/400?a=7"} reproduz={props.reproduz}/>
            <Card titulo={"Titulo do vídeo7"} link={"https://picsum.photos/400/400?a=8"} reproduz={props.reproduz}/>
            <Card titulo={"Titulo do vídeo8"} link={"https://picsum.photos/400/400?a=9"} reproduz={props.reproduz}/>
            <Card titulo={"Titulo do vídeo9"} link={"https://picsum.photos/400/400?a=10"} reproduz={props.reproduz}/>
        </PainelVideo>

        </>
    )
}

export default Home