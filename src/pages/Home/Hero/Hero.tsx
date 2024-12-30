import {Button, Container, Grid, styled, Typography} from "@mui/material";
import React from "react";
import Avatar from "../../../assets/images/perfil.jpg";

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';


const Hero = () => {

  const StyledImg = styled('img')(() => ({
    width: "100%",
    borderRadius: "50%"
  }));


  const StyledHero = styled('div')(() => ({
    backgroundColor: 'black',
    height: "100vh"
  }));

    return (
      <>
           <StyledHero>
          <Container maxWidth="lg">
          <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
      <StyledImg src={Avatar} alt="perfil" />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography color="primary" variant="h1" textAlign="center">Angelo Marcos</Typography>
        <Typography color="primary"  variant="h2" textAlign="center">I´m Software Engineer</Typography>
        
        <Grid container display="flex" justifyContent="center">
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <Button><FileDownloadIcon/>Download CV</Button>
            </Grid>
            <Grid item xs={12} md={4} display="flex" justifyContent="center"> 
            <Button><EmailIcon/>Contact me</Button>
        </Grid>
        </Grid>
        
        
      </Grid>
      
    </Grid>
      
    </Container>
          </StyledHero>

      </>
    )
  }
  
  export default Hero