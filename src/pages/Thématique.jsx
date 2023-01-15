import React from "react"
import { Box,Grid,styled,Typography } from "@mui/material"
import Img from "../assets/Thematique.png"
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos"
import Setting from "@mui/icons-material/Settings"
import { Call } from "@mui/icons-material"
import { Language } from "@mui/icons-material"

const Title = styled(Typography)(({theme})=>({
  color:"#0c0553",
  fontWeight:"515",
}))


const Para2 = styled(Typography)({
  color:"white",
  fontSize:"20px",
  fontWeight:"510",
  
})
const ComponentLogo=styled(Box)(({theme})=>({
  background:theme.palette.background.paper,
  borderRadius:"100%",
}))

export default function Thématique(){
  return(
    <Box sx={{paddingTop:{xs:"66px",md:"182px"},paddingBottom:"100px"}}>
      <Grid container justifyContent={"center"} sx={{display:{xs:"none",md:"flex"}}}>
        <Grid xs={5}>
          <Box component={"img"} src={Img} sx={{width:"345px",height:"auto"}} alt=""/>
        </Grid>
        <Grid xs={5}>
          <Title sx={{fontSize:"35px",marginBottom:"24px"}}>
            Univers thématiques : 
          </Title>
        <Grid container sx={{marginBottom:"12px",alignItems:"center"}} >
          <Grid xs={2}>
            <ComponentLogo sx={{width:"45px",height:"45px",display:"grid",justifyContent:"center",alignContent:"center"}}>
              <Setting sx={{color:"white",width:"25px",height:"auto"}}/>
            </ComponentLogo>
          </Grid>
          <Grid xs={9}>
            <Para2>
              Les entreprises de Service Numérique 
            </Para2>
          </Grid>
        </Grid>
        <Grid container sx={{marginBottom:"12px",alignItems:"center"}} >
          <Grid xs={2}>
            <ComponentLogo sx={{width:"45px",height:"45px",display:"grid",justifyContent:"center",alignContent:"center"}}>
              <Call sx={{color:"white",width:"25px",height:"auto"}}/>
            </ComponentLogo>
          </Grid>
          <Grid xs={9}>
            <Para2 >
              Les entreprises d'Outsoucing : Call Center,assistant...
            </Para2>
          </Grid>
        </Grid>
        <Grid container sx={{marginBottom:"12px",alignItems:"center"}} >
          <Grid xs={2}>
            <ComponentLogo sx={{width:"45px",height:"45px",display:"grid",justifyContent:"center",alignContent:"center"}}>
              <Language sx={{color:"white",width:"25px",height:"auto"}}/>
            </ComponentLogo>
          </Grid>
          <Grid xs={9}>
            <Para2 >
              Les fournisseurs téléphoniques et internet
            </Para2>
          </Grid>
        </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} sx={{display:{xs:"flex",md:"none"},paddingLeft:"5px",marginTop:"12px"}}>
        <Grid xs={12}>
          <Title sx={{fontSize:"30px",marginBottom:"24px"}}>
            univers thématique : 
          </Title>
        <Grid container sx={{marginBottom:"12px",alignItems:"center"}} >
          <Grid xs={2}>
            <ComponentLogo sx={{width:"45px",height:"45px",display:"grid",justifyContent:"center",alignContent:"center"}}>
              <Setting sx={{color:"white",width:"25px",height:"auto"}}/>
            </ComponentLogo>
          </Grid>
          <Grid xs={9}>
            <Para2>
              Les entreprises des Services Numérique 
            </Para2>
          </Grid>
        </Grid>
        <Grid container sx={{marginBottom:"12px",alignItems:"center"}} >
          <Grid xs={2}>
            <ComponentLogo sx={{width:"45px",height:"45px",display:"grid",justifyContent:"center",alignContent:"center"}}>
              <Call sx={{color:"white",width:"25px",height:"auto"}}/>
            </ComponentLogo>
          </Grid>
          <Grid xs={9}>
            <Para2 >
              Les entreprises d'Outsoucing : Call Center,assistanat...
            </Para2>
          </Grid>
        </Grid>
        <Grid container sx={{marginBottom:"12px",alignItems:"center"}} >
          <Grid xs={2}>
            <ComponentLogo sx={{width:"45px",height:"45px",display:"grid",justifyContent:"center",alignContent:"center"}}>
              <Language sx={{color:"white",width:"25px",height:"auto"}}/>
            </ComponentLogo>
          </Grid>
          <Grid xs={9}>
            <Para2 >
              Les fournisseur téléphonique et internet
            </Para2>
          </Grid>
        </Grid>
        </Grid>
        <Grid xs={12} justifyContent={"center"}>
          <Box component={"img"} src={Img} sx={{width:"345px",height:"auto"}} alt=""/>
        </Grid>
      </Grid>
    </Box>
  )
}