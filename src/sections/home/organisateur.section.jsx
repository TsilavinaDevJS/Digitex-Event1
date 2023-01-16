import React from "react";
import { Box, Typography, useTheme, Grid } from "@mui/material";
import Wyrai from "../../assets/logo wyrai-1.png";

export function Organisateur() {
  const theme = useTheme();
  return (
    <Box
      mt={"5rem"}
      p={4}
      sx={{
        background: "#7284b7"
      }}
    >
      <Grid container justifyContent={"center"}>
        <Grid xs={12} md={4.5}>
          <Typography
            variant="h4"
            sx={{
              color: theme.palette.primary.contrastText,
              fontWeight: "512",
              fontFamily: "initial",
              fontSize: { xs: "1.6rem", md: "1.8rem" },
            }}
          >
            Organisateur du salon :
          </Typography>
          <Box
            component={"img"}
            src={Wyrai}
            alt=""
            sx={{ width: "200px", height: "auto", margin: "0 0 6px 0px" }}
          />
        </Grid>
        <Grid xs={12} md={5} sx={{marginTop:"12px"}}>
          <Typography color="white">
            WYRAI-EVENT, Créateur d'événement et Prestataire professionnels et
            équipés. <br />
            Notre expertise se porte sur l'organisation de salon, foire, team
            building, conférence, séminaire, forum divers.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
