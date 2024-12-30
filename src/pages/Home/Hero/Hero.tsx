import {styled} from "@mui/material"
import React from "react";

const Hero = () => {

  const StyledHero = styled('div')(() => ({
    backgroundColor: 'black',
  }));
  

    return (
      <>
        
        <StyledHero>
          Ola

          </StyledHero>

      </>
    )
  }
  
  export default Hero
  