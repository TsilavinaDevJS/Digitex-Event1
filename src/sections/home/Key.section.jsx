import React from "react";
import { styled, Typography, Grid, Box } from "@mui/material";
import Cube from "../../assets/cube.png";
import Stand from "../../assets/food-stand.png";
import Book from "../../assets/CapyBook.png";
import Location from "../../assets/location.png";
import GroupsPersonal from "../../assets/GroupePersonal.png";
import ConferenceImage from "../../assets/conference.png";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

const ColorFleche = "yellow";

const Title = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: "515",
}));
const ContentTitle = styled(Grid)(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: "6px 8px 4px 8px",
  clipPath:
    "polygon(99.78% 108.33%, -0.88% 113.89%, -0.88% -11.12%, 91.23% -13.89%)",
}));

const ComponentLogo = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: "100%",
  width: { xs: "125px", md: "9.77vw" },
  height: { xs: "65px", md: "9.77vw" },
}));

function ExpandMoreCode() {
  return (
    <>
      <Grid container sx={{ width: "50px" }}>
        <Grid xs={12} sx={{ justifyContent: "center", display: "grid" }}>
          <ExpandMore
            sx={{
              color: ColorFleche,
              width: { xs: "73px" },
              height: { xs: "54px" },
            }}
          />
        </Grid>
        <Grid
          xs={12}
          sx={{
            display: "grid",
            justifyContent: "center",
            alignContent: "flex-start",
          }}>
          <ExpandMore
            sx={{
              color: ColorFleche,
              width: { xs: "73px" },
              height: { xs: "54px" },
              marginTop: "-63px",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

function ExpandLessCode() {
  return (
    <>
      <Grid container sx={{ width: "50px" }}>
        <Grid xs={12} sx={{ justifyContent: "center", display: "grid" }}>
          <ExpandLess
            sx={{
              color: ColorFleche,
              width: { xs: "73px" },
              height: { xs: "54px" },
            }}
          />
        </Grid>
        <Grid
          xs={12}
          sx={{
            display: "grid",
            justifyContent: "center",
            alignContent: "flex-start",
          }}>
          <ExpandLess
            sx={{
              color: ColorFleche,
              width: { xs: "73px" },
              height: { xs: "54px" },
              marginTop: "-63px",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export function KeyNumbers() {
  return (
    <>
      <Box sx={{ marginTop: "30px" }}>
        <ContentTitle
          sx={{
            width: { xs: "100vw", sm: "380px" },
            marginLeft: { xs: "0", sm: "4px" },
          }}
          container>
          <Grid xs={10}>
            <Title
              sx={{ fontSize: { xs: "16px", sm: "20px" }, paddingTop: "4px" }}>
              LES CHIFFRES CLÉS
            </Title>
          </Grid>
          <Grid xs={2}>
            <img style={{ width: "auto", height: "25px" }} src={Cube} alt="" />
          </Grid>
        </ContentTitle>
        <Box sx={{ paddingTop: "33px" }}>
          <Grid container justifyContent={"center"}>
            <Grid item xs={2.15} sx={{ marginRight: "4px" }}>
              <Grid container>
                <Grid
                  xs={12}
                  sx={{ display: "grid", justifyContent: "center" }}>
                  <ComponentLogo
                    sx={{
                      width: { xs: "17vw", sm: "9.77vw" },
                      height: { xs: "17vw", sm: "9.77vw" },
                      display: "grid",
                      justifyContent: "center",
                      alignContent: "center",
                    }}>
                    <Box
                      component="img"
                      src={Stand}
                      sx={{
                        width: { xs: "10vw", sm: "40px", md: "65px" },
                        height: "auto",
                      }}
                      alt=""
                    />
                  </ComponentLogo>
                </Grid>
                <Grid
                  xs={12}
                  sx={{ display: "grid", justifyContent: "center" }}>
                  <ExpandMoreCode />
                </Grid>
                <Grid
                  xs={12}
                  sx={{ display: "grid", justifyContent: "center" }}>
                  <Title
                    sx={{
                      textAlign: "center",
                      borderBottom: `4px solid ${ColorFleche}`,
                      fontSize: { xs: "10px", md: "1.56vw" },
                    }}>
                    <span style={{ color: "#B712A5" }}>+ 50 </span>
                    STANDS
                  </Title>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2.15} sx={{ marginRight: "4px" }}>
              <Grid container>
                <Grid
                  xs={12}
                  sx={{ display: "grid", justifyContent: "center" }}>
                  <Title
                    sx={{
                      textAlign: "center",
                      borderBottom: `4px solid ${ColorFleche}`,
                      fontSize: { xs: "10px", md: "1.56vw" },
                    }}>
                    <span style={{ color: "#B712A5" }}>+ 5000 </span>
                    VISITEURS ATTENDUS
                  </Title>
                </Grid>
                <Grid
                  xs={12}
                  sx={{ display: "grid", justifyContent: "center" }}>
                  <ExpandLessCode />
                </Grid>
                <Grid
                  xs={12}
                  sx={{ display: "grid", justifyContent: "center" }}>
                  <ComponentLogo
                    sx={{
                      width: { xs: "17vw", sm: "9.77vw" },
                      height: { xs: "17vw", sm: "9.77vw" },
                      display: "grid",
                      justifyContent: "center",
                      alignContent: "center",
                    }}>
                    <Box
                      component="img"
                      src={GroupsPersonal}
                      sx={{
                        width: { xs: "10vw", sm: "40px", md: "65px" },
                        height: "auto",
                      }}
                      alt=""
                    />
                  </ComponentLogo>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2.15} sx={{ marginRight: "4px" }}>
              <Grid container>
                <Grid
                  xs={12}
                  sx={{ display: "grid", justifyContent: "center" }}>
                  <ComponentLogo
                    sx={{
                      width: { xs: "17vw", sm: "9.77vw" },
                      height: { xs: "17vw", sm: "9.77vw" },
                      display: "grid",
                      justifyContent: "center",
                      alignContent: "center",
                    }}>
                    <Box
                      component="img"
                      src={Book}
                      sx={{
                        width: { xs: "10vw", sm: "40px", md: "65px" },
                        height: "auto",
                      }}
                      alt=""
                    />
                  </ComponentLogo>
                </Grid>
                <Grid
                  xs={12}
                  sx={{ display: "grid", justifyContent: "center" }}>
                  <ExpandMoreCode />
                </Grid>
                <Grid
                  xs={12}
                  sx={{ display: "grid", justifyContent: "center" }}>
                  <Title
                    sx={{
                      textAlign: "center",
                      borderBottom: `4px solid ${ColorFleche}`,
                      fontSize: { xs: "10px", md: "1.56vw" },
                    }}>
                    <span style={{ color: "#B712A5" }}>+ 7 </span>
                    UNIVERS THÉMATIQUES
                  </Title>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2.15} sx={{ marginRight: "4px" }}>
              <Grid container>
                <Grid
                  xs={12}
                  sx={{ display: "grid", justifyContent: "center" }}>
                  <Title
                    sx={{
                      textAlign: "center",
                      borderBottom: `4px solid ${ColorFleche}`,
                      fontSize: { xs: "10px", md: "1.56vw" },
                    }}>
                    <span style={{ color: "#B712A5" }}>+ 10 </span>
                    CONFÉRENCES
                  </Title>
                </Grid>
                <Grid
                  xs={12}
                  sx={{ display: "grid", justifyContent: "center" }}>
                  <ExpandLessCode />
                </Grid>
                <Grid
                  xs={12}
                  sx={{ display: "grid", justifyContent: "center" }}>
                  <ComponentLogo
                    sx={{
                      width: { xs: "17vw", sm: "9.77vw" },
                      height: { xs: "17vw", sm: "9.77vw" },
                      display: "grid",
                      justifyContent: "center",
                      alignContent: "center",
                    }}>
                    <Box
                      component="img"
                      src={ConferenceImage}
                      sx={{
                        width: { xs: "10vw", sm: "40px", md: "65px" },
                        height: "auto",
                      }}
                      alt=""
                    />
                  </ComponentLogo>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2.15} sx={{ marginRight: "4px" }}>
              <Grid container>
                <Grid
                  xs={12}
                  sx={{ display: "grid", justifyContent: "center" }}>
                  <ComponentLogo
                    sx={{
                      width: { xs: "17vw", sm: "9.77vw" },
                      height: { xs: "17vw", sm: "9.77vw" },
                      display: "grid",
                      justifyContent: "center",
                      alignContent: "center",
                    }}>
                    <Box
                      component="img"
                      src={Location}
                      sx={{
                        width: { xs: "10vw", sm: "40px", md: "65px" },
                        height: "auto",
                      }}
                      alt=""
                    />
                  </ComponentLogo>
                </Grid>
                <Grid
                  xs={12}
                  sx={{ display: "grid", justifyContent: "center" }}>
                  <ExpandMoreCode />
                </Grid>
                <Grid
                  xs={12}
                  sx={{ display: "grid", justifyContent: "center" }}>
                  <Title
                    sx={{
                      textAlign: "center",
                      borderBottom: `4px solid ${ColorFleche}`,
                      fontSize: { xs: "10px", md: "1.56vw" },
                    }}>
                    <span style={{ color: "#B712A5" }}>+ 1000 </span>
                    m2 DE SURFACE COUVERTE
                  </Title>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
