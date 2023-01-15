import React from "react"
import { Box, Typography, useTheme } from "@mui/material"
import Wyrai from "../../assets/logo wyrai-1.png"



export function Organisateur(){
  const theme = useTheme()
  return (
    <Box mt={"5rem"} p={4} sx={{height:"150px",background:"#7284b7",alignItems: "center",display: "flex",justifyContent: "center"}}>
      <Typography variant="h4" sx={{color:theme.palette.primary.contrastText,fontWeight:"512",fontFamily:"initial",fontSize:{xs:"1.6rem",md:"1.8rem"}}}>
        Organisateur du salon :
      </Typography>
      <Box component={"img"} src={Wyrai} alt="" sx={{width:"200px",height:"auto",margin: "0 0 6px 0px"}}/>
                  
    </Box>
  )
}