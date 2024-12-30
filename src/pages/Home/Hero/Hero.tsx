import {styled} from "@mui/material";
import React from "react";

import Avatar from "../../../assets/images/perfil.jpg";



const Hero = () => {

  const StyledImg = styled('img')(() => ({
    width: "30%",
    borderRadius: "50%"
  }));


  const StyledHero = styled('div')(() => ({
    backgroundColor: 'black',
  }));

    return (
      <>
      
        
        <StyledHero>
        <StyledImg src={Avatar} alt="perfil" />
          Ola
          </StyledHero>

      </>
    )
  }
  
  export default Hero