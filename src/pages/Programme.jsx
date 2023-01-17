import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import Date from "../assets/calendar.svg";
import { makeStyles } from "@material-ui/styles";

const Title = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: "512",
  fontFamily: " montsert",
}));
const ContentTitle = styled(Grid)(({ theme }) => ({
  background: theme.palette.background.paper,
}));

const BigTitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "516",
  background: "-webkit-linear-gradient(45deg, #ff512f 30%, #dd2476 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textAlign: "center",
}));

const useStyles = makeStyles({
  List: {
    color: "white",
  },
  ComponentList: {
    marginLeft: "22px",
    color: "white",
  },
});

export default function Programme() {
  const classes = useStyles();
  return (
    <Box
      sx={{
        paddingTop: { xs: "40px", md: "0px" },
        paddingBottom: { xs: "40px", md: "0" },
      }}>
      <Grid container>
        <Grid
          xs={12}
          sx={{
            display: "grid",
            padding: { xs: "80px 0 22px 0px", md: "120px 0px 0px 4vw" },
          }}>
          <BigTitle sx={{ fontSize: { xs: "8vw", sm: "4rem" } }}>
            Programme du salon
          </BigTitle>
        </Grid>
        <Grid
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <ContentTitle
            sx={{
              width: { xs: "100vw", sm: "85vw" },
              marginBottom: "16px",
              padding: "10px",
            }}
            container>
            <Grid
              xs={4.5}
              sm={3.5}
              lg={2.2}
              sx={{
                display: "inherit",
                borderRight: "1px solid #fff",
                alignItems: "center",
              }}>
              <Box xs={2}>
                <Box
                  component={"img"}
                  sx={{
                    width: { xs: "11vw", sm: "50px" },
                    height: { xs: "11vw", sm: "50px" },
                  }}
                  src={Date}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  marginLeft: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Title
                  component={"span"}
                  sx={{
                    fontSize: { xs: "3.5vw", sm: "20px" },
                    paddingBottom: "0",
                    lineHeight: "initial",
                  }}>
                  MECREDI
                  <br />
                  29 MARS
                </Title>
              </Box>
            </Grid>
            <Grid xs={7}>
              <Box component={"ul"}>
                <Box component={"li"} className={classes.ComponentList}>
                  <Typography
                    className={classes.List}
                    sx={{
                      fontSize: { xs: "3.2vw", sm: "1rem" },
                      fontWeight: "512",
                      marginBottom: "5px",
                      marginTop: "4px",
                    }}>
                    8H30 : La transformation digitale un levier de croissance
                    économique,
                  </Typography>
                </Box>
                <Box component={"li"} className={classes.ComponentList}>
                  <Typography
                    className={classes.List}
                    sx={{
                      fontSize: { xs: "3.2vw", sm: "1rem" },
                      fontWeight: "512",
                    }}>
                    10h : Fintech et Cryptomonnaie
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </ContentTitle>
        </Grid>
        <Grid
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <ContentTitle
            sx={{
              width: { xs: "100vw", sm: "85vw" },
              marginBottom: "16px",
              padding: "10px",
            }}
            container>
            <Grid
              xs={4.5}
              sm={3.5}
              lg={2.2}
              sx={{
                display: "inherit",
                borderRight: "1px solid #fff",
                alignItems: "center",
              }}>
              <Box xs={2}>
                <Box
                  component={"img"}
                  sx={{
                    width: { xs: "11vw", sm: "50px" },
                    height: { xs: "11vw", sm: "50px" },
                  }}
                  src={Date}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  marginLeft: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Title
                  component={"span"}
                  sx={{
                    fontSize: { xs: "3.5vw", sm: "20px" },
                    paddingBottom: "0",
                    lineHeight: "initial",
                  }}>
                  JEUDI
                  <br />
                  30 MARS
                </Title>
              </Box>
            </Grid>
            <Grid xs={7}>
              <Box component={"ul"}>
                <Box component={"li"} className={classes.ComponentList}>
                  <Typography
                    className={classes.List}
                    sx={{
                      fontSize: { xs: "3.2vw", sm: "1rem" },
                      fontWeight: "512",
                      marginBottom: "5px",
                      marginTop: "4px",
                    }}>
                    8H30-10h : Quelles formations pour les métiers dans la
                    digital?
                  </Typography>
                </Box>
                <Box component={"li"} className={classes.ComponentList}>
                  <Typography
                    className={classes.List}
                    sx={{
                      fontSize: { xs: "3.2vw", sm: "1rem" },
                      fontWeight: "512",
                    }}>
                    9h-12h : Pitcher votre projets et votre idées
                  </Typography>
                </Box>
                <Box component={"li"} className={classes.ComponentList}>
                  <Typography
                    className={classes.List}
                    sx={{
                      fontSize: { xs: "3.2vw", sm: "1rem" },
                      fontWeight: "512",
                    }}>
                    10h : Financer vos projects innovants
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </ContentTitle>
        </Grid>
        <Grid
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <ContentTitle
            sx={{
              width: { xs: "100vw", sm: "85vw" },
              marginBottom: "16px",
              padding: "10px",
            }}
            container>
            <Grid
              xs={4.5}
              sm={3.5}
              lg={2.2}
              sx={{
                display: "inherit",
                borderRight: "1px solid #fff",
                alignItems: "center",
              }}>
              <Box xs={2}>
                <Box
                  component={"img"}
                  sx={{
                    width: { xs: "11vw", sm: "50px" },
                    height: { xs: "11vw", sm: "50px" },
                  }}
                  src={Date}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  marginLeft: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Title
                  component={"span"}
                  sx={{
                    fontSize: { xs: "3.5vw", sm: "20px" },
                    paddingBottom: "0",
                    lineHeight: "initial",
                  }}>
                  VENDREDI
                  <br />
                  31 MARS
                </Title>
              </Box>
            </Grid>
            <Grid xs={7}>
              <Box component={"ul"}>
                <Box component={"li"} className={classes.ComponentList}>
                  <Typography
                    className={classes.List}
                    sx={{
                      fontSize: { xs: "3.2vw", sm: "1rem" },
                      fontWeight: "512",
                      marginBottom: "5px",
                      marginTop: "4px",
                    }}>
                    8H30 : L'entrepreunariat dans la tech,
                  </Typography>
                </Box>
                <Box component={"li"} className={classes.ComponentList}>
                  <Typography
                    className={classes.List}
                    sx={{
                      fontSize: { xs: "3.2vw", sm: "1rem" },
                      fontWeight: "512",
                    }}>
                    10h : La maîtrise du big data comme outils stratégique,
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </ContentTitle>
        </Grid>
      </Grid>
    </Box>
  );
}
