import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import Img from "../assets/Thematique.png";
import ParameterCercle from "../assets/Creation/ParameterCercle.png";
import CaskCercle from "../assets/Creation/CaskCercle.png";
import Internet from "../assets/Creation/internet.png";
import Parameter from "../assets/Creation/Parameter2.png";
import Internet2 from "../assets/Creation/internet2.png";
import Statistique from "../assets/Creation/statistiqueMoney.png";
import Ecole from "../assets/Creation/Ecole.png";

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "515",
  background: "-webkit-linear-gradient(45deg, #ff512f 30%, #dd2476 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

const Para2 = styled(Typography)({
  color: "white",
  fontSize: "20px",
  fontWeight: "510",
});
const ComponentLogo = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: "100%",
}));

export default function Thématique() {
  return (
    <Box
      sx={{ paddingTop: { xs: "66px", md: "182px" }, paddingBottom: "100px" }}>
      <Grid
        container
        justifyContent={"center"}
        sx={{ display: { xs: "none", md: "flex" } }}>
        <Grid
          xs={5}
          sx={{
            display: "grid",
            justifyContent: "center",
            alignContent: "center",
          }}>
          <Box
            component={"img"}
            src={Img}
            sx={{ width: "345px", height: "auto" }}
            alt=""
          />
        </Grid>
        <Grid xs={5}>
          <Title sx={{ fontSize: "35px", marginBottom: "24px" }}>
            Univers thématiques
          </Title>
          <Grid container sx={{ marginBottom: "12px", alignItems: "center" }}>
            <Grid xs={2}>
              <ComponentLogo
                sx={{
                  width: "55px",
                  height: "55px",
                  display: "grid",
                  justifyContent: "center",
                  alignContent: "center",
                }}>
                <Box
                  component={"img"}
                  src={ParameterCercle}
                  sx={{ color: "white", width: "35px", height: "auto" }}
                />
              </ComponentLogo>
            </Grid>
            <Grid xs={9}>
              <Para2>Entreprises de Service Numérique,</Para2>
            </Grid>
          </Grid>
          <Grid container sx={{ marginBottom: "12px", alignItems: "center" }}>
            <Grid xs={2}>
              <ComponentLogo
                sx={{
                  width: "55px",
                  height: "55px",
                  display: "grid",
                  justifyContent: "center",
                  alignContent: "center",
                }}>
                <Box
                  component={"img"}
                  src={CaskCercle}
                  sx={{ color: "white", width: "35px", height: "auto" }}
                />
              </ComponentLogo>
            </Grid>
            <Grid xs={9}>
              <Para2>
                Les entreprises d'Outsoucing : Call Center,assistant...
              </Para2>
            </Grid>
          </Grid>
          <Grid container sx={{ marginBottom: "12px", alignItems: "center" }}>
            <Grid xs={2}>
              <ComponentLogo
                sx={{
                  width: "55px",
                  height: "55px",
                  display: "grid",
                  justifyContent: "center",
                  alignContent: "center",
                }}>
                <Box
                  component={"img"}
                  src={Internet}
                  sx={{ color: "white", width: "35px", height: "auto" }}
                />
              </ComponentLogo>
            </Grid>
            <Grid xs={9}>
              <Para2>Fournisseurs en téléphoniques et internet,</Para2>
            </Grid>
          </Grid>
          <Grid container sx={{ marginBottom: "12px", alignItems: "center" }}>
            <Grid xs={2}>
              <ComponentLogo
                sx={{
                  width: "55px",
                  height: "55px",
                  display: "grid",
                  justifyContent: "center",
                  alignContent: "center",
                }}>
                <Box
                  component={"img"}
                  src={Parameter}
                  sx={{ color: "white", width: "35px", height: "auto" }}
                />
              </ComponentLogo>
            </Grid>
            <Grid xs={9}>
              <Para2>Fourniseurs de matériels technologiques,</Para2>
            </Grid>
          </Grid>
          <Grid container sx={{ marginBottom: "12px", alignItems: "center" }}>
            <Grid xs={2}>
              <ComponentLogo
                sx={{
                  width: "55px",
                  height: "55px",
                  display: "grid",
                  justifyContent: "center",
                  alignContent: "center",
                }}>
                <Box
                  component={"img"}
                  src={Internet2}
                  sx={{ color: "white", width: "35px", height: "auto" }}
                />
              </ComponentLogo>
            </Grid>
            <Grid xs={9}>
              <Para2>
                Startup, fournisseurs d'application et de solutions numériques,
              </Para2>
            </Grid>
          </Grid>
          <Grid container sx={{ marginBottom: "12px", alignItems: "center" }}>
            <Grid xs={2}>
              <ComponentLogo
                sx={{
                  width: "55px",
                  height: "55px",
                  display: "grid",
                  justifyContent: "center",
                  alignContent: "center",
                }}>
                <Box
                  component={"img"}
                  src={Statistique}
                  sx={{ color: "white", width: "35px", height: "auto" }}
                />
              </ComponentLogo>
            </Grid>
            <Grid xs={9}>
              <Para2>Banques et Institutions financières,</Para2>
            </Grid>
          </Grid>
          <Grid container sx={{ marginBottom: "12px", alignItems: "center" }}>
            <Grid xs={2}>
              <ComponentLogo
                sx={{
                  width: "55px",
                  height: "55px",
                  display: "grid",
                  justifyContent: "center",
                  alignContent: "center",
                }}>
                <Box
                  component={"img"}
                  src={Ecole}
                  sx={{ color: "white", width: "35px", height: "auto" }}
                />
              </ComponentLogo>
            </Grid>
            <Grid xs={9}>
              <Para2>Ecoles, Universités et Formations diverses.</Para2>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        sx={{
          display: { xs: "flex", md: "none" },
          paddingLeft: "5px",
          marginTop: "12px",
        }}>
        <Grid
          xs={12}
          sx={{
            display: "grid",
            padding: { xs: "38px 0 0px 0px", md: "120px 0px 0px 4vw" },
          }}>
          <Title
            sx={{
              fontSize: "30px",
              marginBottom: "14px",
              textAlign: "center",
            }}>
            univers thématique
          </Title>
          <Grid container sx={{ marginBottom: "12px", alignItems: "center" }}>
            <Grid xs={2}>
              <ComponentLogo
                sx={{
                  width: "55px",
                  height: "55px",
                  display: "grid",
                  justifyContent: "center",
                  alignContent: "center",
                }}>
                <Box
                  component={"img"}
                  src={ParameterCercle}
                  sx={{ color: "white", width: "35px", height: "auto" }}
                />
              </ComponentLogo>
            </Grid>
            <Grid xs={9}>
              <Para2>Entreprises de Service Numérique,</Para2>
            </Grid>
          </Grid>
          <Grid container sx={{ marginBottom: "12px", alignItems: "center" }}>
            <Grid xs={2}>
              <ComponentLogo
                sx={{
                  width: "55px",
                  height: "55px",
                  display: "grid",
                  justifyContent: "center",
                  alignContent: "center",
                }}>
                <Box
                  component={"img"}
                  src={CaskCercle}
                  sx={{ color: "white", width: "35px", height: "auto" }}
                />
              </ComponentLogo>
            </Grid>
            <Grid xs={9}>
              <Para2>Entreprises d'Outsoucing : Call Center,assistant...</Para2>
            </Grid>
          </Grid>
          <Grid container sx={{ marginBottom: "12px", alignItems: "center" }}>
            <Grid xs={2}>
              <ComponentLogo
                sx={{
                  width: "55px",
                  height: "55px",
                  display: "grid",
                  justifyContent: "center",
                  alignContent: "center",
                }}>
                <Box
                  component={"img"}
                  src={Internet}
                  sx={{ color: "white", width: "35px", height: "auto" }}
                />
              </ComponentLogo>
            </Grid>
            <Grid xs={9}>
              <Para2>Fournisseurs en téléphoniques et internet,</Para2>
            </Grid>
          </Grid>

          <Grid container sx={{ marginBottom: "12px", alignItems: "center" }}>
            <Grid xs={2}>
              <ComponentLogo
                sx={{
                  width: "55px",
                  height: "55px",
                  display: "grid",
                  justifyContent: "center",
                  alignContent: "center",
                }}>
                <Box
                  component={"img"}
                  src={Parameter}
                  sx={{ color: "white", width: "35px", height: "auto" }}
                />
              </ComponentLogo>
            </Grid>
            <Grid xs={9}>
              <Para2>Fourniseurs de matériels technologiques,</Para2>
            </Grid>
          </Grid>
          <Grid container sx={{ marginBottom: "12px", alignItems: "center" }}>
            <Grid xs={2}>
              <ComponentLogo
                sx={{
                  width: "55px",
                  height: "55px",
                  display: "grid",
                  justifyContent: "center",
                  alignContent: "center",
                }}>
                <Box
                  component={"img"}
                  src={Internet2}
                  sx={{ color: "white", width: "35px", height: "auto" }}
                />
              </ComponentLogo>
            </Grid>
            <Grid xs={9}>
              <Para2>
                Startup, fournisseurs d'application et de solutions numériques,
              </Para2>
            </Grid>
          </Grid>
          <Grid container sx={{ marginBottom: "12px", alignItems: "center" }}>
            <Grid xs={2}>
              <ComponentLogo
                sx={{
                  width: "55px",
                  height: "55px",
                  display: "grid",
                  justifyContent: "center",
                  alignContent: "center",
                }}>
                <Box
                  component={"img"}
                  src={Statistique}
                  sx={{ color: "white", width: "35px", height: "auto" }}
                />
              </ComponentLogo>
            </Grid>
            <Grid xs={9}>
              <Para2>Banques et Institutions financières,</Para2>
            </Grid>
          </Grid>
          <Grid container sx={{ marginBottom: "12px", alignItems: "center" }}>
            <Grid xs={2}>
              <ComponentLogo
                sx={{
                  width: "55px",
                  height: "55px",
                  display: "grid",
                  justifyContent: "center",
                  alignContent: "center",
                }}>
                <Box
                  component={"img"}
                  src={Ecole}
                  sx={{ color: "white", width: "35px", height: "auto" }}
                />
              </ComponentLogo>
            </Grid>
            <Grid xs={9}>
              <Para2>Ecoles, universités et formation divers</Para2>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          sx={{
            display: "grid",
            justifyContent: "center",
            alignContent: "center",
            marginTop: "45px",
          }}>
          <Box
            component={"img"}
            src={Img}
            sx={{ width: "280px", height: "auto" }}
            alt=""
          />
        </Grid>
      </Grid>
    </Box>
  );
}
