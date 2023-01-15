import { styled, Typography,Grid,Box } from "@mui/material"
import React from "react"
import Cube from "../../assets/cube.png"
import PlaneImage from "../../assets/Work.png"
import { motion } from "framer-motion"

const Title = styled(Typography)(({theme})=>({
  color:"white",
  fontWeight:"515",
}))
const ContentTitle = styled(Grid)(({theme})=>({
  background :theme.palette.background.paper,
  padding:"6px 8px 4px 8px",
  clipPath:"polygon(99.78% 108.33%, -0.88% 113.89%, -0.88% -11.12%, 91.23% -13.89%)",
}))

const Triangle=styled(Box)({
  height:"35px",
  width:"31px",
  background:"#B712A5",
  clipPath:"polygon(80.64% 47.94%, 1.39% 88.89%, 3.67% 0.24%, 78.25% 44.23%)"
})


export function ObjectifSection(){
  return(
    <>
    <Box sx={{marginTop:"40px"}} >
    <Grid container >
      <Grid xs={12} md={7} sx={{zIndex:"99"}}   >
        <Box>
        <ContentTitle
        sx={{width:{xs:"100vw",sm:"380px"},marginLeft:{xs:"0",sm:"4px"}, marginBottom:"16px"}}
            container>
            <Grid xs={10}>
            <Title sx={{fontSize:{xs:"16px",sm:"20px"}, paddingTop:"4px"}}>
              OBJECTIFS
            </Title>          
            </Grid>
            <Grid xs={2}>
              <img style={{width:"auto",height:"25px"}} src={Cube} alt=''/>
            </Grid>
        </ContentTitle> 
        <Box className="content-Objectif" p={2}>
          <Grid container sx={{marginBottom:"10px"}}>
            <Grid xs={2} sm={1.3}>
              <Triangle/>
            </Grid>
            <Grid xs={9}>
              <Title sx={{marginTop:"5px",fontSize:{xs:"16px",sm:"20px"}}}>
                INNOVER
              </Title>
            </Grid>
          </Grid>
          <Grid container sx={{marginBottom:"10px"}}>
            <Grid xs={2} sm={1.3}>
              <Triangle/>
            </Grid>
            <Grid xs={9}>
              <Title sx={{marginTop:"5px",fontSize:{xs:"16px",sm:"20px"}}}>
                DÉVELOPPER
              </Title>
            </Grid>
          </Grid>
          <Grid container sx={{marginBottom:"10px"}}>
            <Grid xs={2} sm={1.3}>
              <Triangle/>
            </Grid>
            <Grid xs={9}>
              <Title sx={{marginTop:"5px",fontSize:{xs:"16px",sm:"20px"}}}>
                ÉCHANGER
              </Title>
            </Grid>
          </Grid>
          <Grid container sx={{marginBottom:"10px"}}>
            <Grid xs={2} sm={1.3}>
              <Triangle/>
            </Grid>
            <Grid xs={9}>
              <Title sx={{marginTop:"5px",fontSize:{xs:"16px",sm:"20px"}}}>
                ORIENTER
              </Title>
            </Grid>
          </Grid>
          <Grid container sx={{marginBottom:"10px"}}>
            <Grid xs={2} sm={1.3}>
              <Triangle/>
            </Grid>
            <Grid xs={9}>
              <Title sx={{marginTop:"5px",fontSize:{xs:"16px",sm:"20px"}}}>
                INITIER
              </Title>
            </Grid>
          </Grid>
          <Grid container sx={{marginBottom:"10px"}}>
            <Grid xs={2} sm={1.3}>
              <Triangle/>
            </Grid>
            <Grid xs={9}>
              <Title sx={{marginTop:"5px",fontSize:{xs:"16px",sm:"20px"}}}>
                RECRUTER
              </Title>
            </Grid>
          </Grid>
          <Grid container sx={{marginBottom:"10px"}}>
            <Grid xs={2} sm={1.3}>
              <Triangle/>
            </Grid>
            <Grid xs={9}>
              <Title sx={{marginTop:"5px",fontSize:{xs:"16px",sm:"20px"}}}>
                RÉSEAUTER
              </Title>
            </Grid>
          </Grid>
        </Box>
        </Box>       
      </Grid>
      <Grid xs={0} md={4} sx={{zIndex:"1"}}>
        <Box component={motion.img}  sx={{marginLeft:"-165px",width:"50vw",height:"auto",paddingLeft:"-127px",marginTop:"116px",display:{xs:"none",md:"inline-block"}}} src={PlaneImage} alt=""/>
      </Grid>
    </Grid>

    </Box>


    </>
  )
}