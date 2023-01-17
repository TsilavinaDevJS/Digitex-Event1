import { styled, Typography, Grid, Box } from "@mui/material";
import React from "react";
import Pyramide from "../../assets/pyramide.png";
// import Fond from "../../assets/pngegg.png"

const ContentTitle = styled(Grid)(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: "6px 8px 4px 8px",
  clipPath:
    "polygon(99.78% 108.33%, -0.88% 113.89%, -0.88% -11.12%, 91.23% -13.89%)",
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: "515",
}));
const Para2 = styled(Typography)({
  color: "#f5f7f8 !important",
  fontSize: "15px",
  fontWeight: "510",
});

export function Presentation() {
  return (
    <>
      <Box sx={{ marginTop: "36px", zIndex: "99", position: "relative" }}>
        {/* <Box component={"img"} sx={{height:"auto",width:"100%",position:"absolute",zIndex:"1"}} src={Fond} alt=""/> */}
        <Box sx={{ zIndex: "99" }}>
          <ContentTitle
            sx={{
              width: { xs: "100vw", sm: "380px" },
              marginLeft: { xs: "0", sm: "4px" },
            }}
            container>
            <Grid xs={10}>
              <Title
                sx={{
                  fontSize: { xs: "16px", sm: "20px" },
                  paddingTop: "4px",
                }}>
                PRESENTATION DIGITEX
              </Title>
            </Grid>
            <Grid xs={2}>
              <img
                style={{ width: "auto", height: "25px" }}
                src={Pyramide}
                alt=""
              />
            </Grid>
          </ContentTitle>
          <Box p={2}>
            <Para2>
              A l'ére de l'entreprise digitale, l'innovation et l'accélération
              vers le numérique engagent les entreprises vers une évolution
              croissante. Plus que jamais, celle-ci doivent s'appuyer sur les
              nouvelles technologies pour rester pérennes dans un contexte
              incertain.
            </Para2>
            <br />
            <Para2>
              Parmi les pilliers sur lesquels reposent le pilotage de la
              performance de l'entreprise ainsi que sa digitalisation, l'ERP, le
              CRM, les solution d'E-Achat, la dématérialisation, la BI ainsi que
              la Data jouent un rôle stratégique.
            </Para2>
            <br />
            <Para2>
              Madagascar étant un pays à opportunités pour l'externalisation des
              fonctions et des services,
            </Para2>
            <Para2>
              Les nouvelles technologies prennent d'avantages de place dans la
              vie quotidienne dans le monde entier mais aussi dans notre pays,
            </Para2>
            <br />
            <Para2>
              C'est pourquoi ils seront à l'honneur de l'edition du Salon
              DIGITEX 2023, le 29 au 31 Mars 2023 prochains à partir de 09H00 au
              CANAL Olympia larivo Andohatapenaka.
            </Para2>
          </Box>
        </Box>
      </Box>
    </>
  );
}
