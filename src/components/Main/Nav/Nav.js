import { BotaoMenu, NavContainer } from "./style"
import React from "react"

function Nav(){
    return(
        <>
            <NavContainer>
              <ul>
                  <BotaoMenu>Início</BotaoMenu>
                  <BotaoMenu>Em alta</BotaoMenu>
                  <BotaoMenu>Inscrições</BotaoMenu>
                  <hr></hr>
                  <BotaoMenu>Originais</BotaoMenu>
                  <BotaoMenu>Histórico</BotaoMenu>
              </ul>
            </NavContainer>
        </>
    )
}

export default Nav