import React from "react";
import { Grid, Typography, styled, Box } from "@mui/material";
import Main2 from "../../assets/Creation/main2.png";
import Statistique from "../../assets/Creation/Statistique.png";
import Parameter from "../../assets/Creation/Parameter.png";
import Conference from "../../assets/Creation/Conference.png";
import { Space } from "../../config/space";

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

export function EngagementSection() {
  return (
    <>
      <Box mt={"0rem"}>
        <ContentTitle
          sx={{
            width: { xs: "100vw", sm: "680px" },
            marginLeft: { xs: "0", sm: "4px" },
          }}
          container
        >
          <Title
            sx={{
              fontSize: { xs: "16px", sm: "20px" },
              paddingRight: { xs: "5px", sm: "0" },
              paddingTop: "4px",
            }}
          >
            DEVENEZ PARTICIPANT ET RÉSERVEZ VOTRE EMPLACEMENT
          </Title>
        </ContentTitle>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Grid container justifyContent={"center"} sx={{ paddingTop: "22px" }}>
            <Grid xs={5}>
              <Grid container>
                <Grid xs={3}>
                  <img src={Main2} width="120" hieght="120" alt="" />
                </Grid>
                <Grid xs={9}>
                  <Title sx={{ fontSize: { xs: "15px", sm: "1rem" } }}>
                    <Box
                      component={"span"}
                      sx={{
                        display: "block",
                        color: "orange",
                        fontSize: { xs: "20px", sm: "30px" },
                      }}
                    >
                      1/
                    </Box>
                    <Box component={"span"} style={{ color: "#B712A5" }}>
                      RENCONTREZ
                    </Box>
                    <Space /> un <Space />
                    <Box component={"span"} style={{ color: "#B712A5" }}>
                      PUBLIC QUALIFIÉ
                    </Box>
                    <Space /> : Des professionnels du secteurs, des acheteurs et
                    consommateurs potentiels, des investisseurs,
                  </Title>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={5}>
              <Grid container>
                <Grid xs={3}>
                  <img src={Statistique} width="120" hieght="120" alt="" />
                </Grid>
                <Grid xs={9}>
                  <Title sx={{ fontSize: { xs: "15px", sm: "1rem" } }}>
                    <Box
                      component={"span"}
                      sx={{
                        display: "block",
                        color: "orange",
                        fontSize: { xs: "20px", sm: "30px" },
                      }}
                    >
                      3/
                    </Box>
                    <Box component={"span"} style={{ color: "#B712A5" }}>
                      RENFORCER
                    </Box>
                    <Space /> votre notoriété et <Space />
                    <Box component={"span"} style={{ color: "#B712A5" }}>
                      DÉVELOPPER
                    </Box>
                    <Space /> votre activité
                  </Title>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container justifyContent={"center"} sx={{ paddingTop: "22px" }}>
            <Grid xs={5}>
              <Grid container>
                <Grid xs={3}>
                  <img src={Parameter} width="120" hieght="120" alt="" />
                </Grid>
                <Grid xs={9}>
                  <Title sx={{ fontSize: { xs: "15px", sm: "1rem" } }}>
                    <Box
                      component={"span"}
                      sx={{
                        display: "block",
                        color: "orange",
                        fontSize: { xs: "20px", sm: "30px" },
                      }}
                    >
                      2/
                    </Box>
                    <Box component={"span"} style={{ color: "#B712A5" }}>
                      Présenter
                    </Box>
                    <Space /> vos <Space />
                    <Box component={"span"} style={{ color: "#B712A5" }}>
                      PRODUITS
                    </Box>
                    , <Space />
                    <Box component={"span"} style={{ color: "#B712A5" }}>
                      SAVOIR-FAIRE
                    </Box>{" "}
                    <Space /> et <Space />
                    <Box component={"span"} style={{ color: "#B712A5" }}>
                      SERVICES
                    </Box>{" "}
                    <Space />
                    dans un cadre dynamique et stimulant
                  </Title>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={5}>
              <Grid container>
                <Grid xs={3}>
                  <img src={Conference} width="120" hieght="120" alt="" />
                </Grid>
                <Grid xs={9}>
                  <Title sx={{ fontSize: { xs: "15px", sm: "1rem" } }}>
                    <Box
                      component={"span"}
                      sx={{
                        display: "block",
                        color: "orange",
                        fontSize: { xs: "20px", sm: "30px" },
                      }}
                    >
                      4/
                    </Box>
                    <Box component={"span"} style={{ color: "#B712A5" }}>
                      RENCONTRES
                    </Box>
                    <Space /> et <Space />
                    <Box component={"span"} style={{ color: "#B712A5" }}>
                      PROFESSIONNELS
                    </Box>{" "}
                    <Space />
                    du secteur et développer votre réseau de prescripteurs
                  </Title>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        {/* responsive */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Grid container justifyContent={"center"} sx={{ paddingTop: "22px" }}>
            <Grid xs={12}>
              <Grid container justifyContent={"center"}>
                <Grid xs={4} sm={2}>
                  <img src={Main2} width="120" hieght="120" alt="" />
                </Grid>
                <Grid xs={8}>
                  <Title sx={{ fontSize: { xs: "15px", sm: "1rem" } }}>
                    <Box
                      component={"span"}
                      sx={{
                        display: "block",
                        color: "orange",
                        fontSize: { xs: "20px", sm: "30px" },
                      }}
                    >
                      1/
                    </Box>
                    <Box component={"span"} style={{ color: "#B712A5" }}>
                      RENCONTREZ
                    </Box>
                    <Space /> un <Space />
                    <Box component={"span"} style={{ color: "#B712A5" }}>
                      PUBLIC QUALIFIÉ
                    </Box>
                    <Space /> : <Space /> Des professionnels du secteurs, des
                    acheteurs et consommateurs potentiels, des investisseurs,
                  </Title>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12}>
              <Grid container justifyContent={"center"}>
                <Grid xs={4} sm={2}>
                  <img src={Parameter} width="120" hieght="120" alt="" />
                </Grid>
                <Grid xs={8}>
                  <Title sx={{ fontSize: { xs: "15px", sm: "1rem" } }}>
                    <Box
                      component={"span"}
                      sx={{
                        display: "block",
                        color: "orange",
                        fontSize: { xs: "20px", sm: "30px" },
                      }}
                    >
                      2/
                    </Box>
                    <Box component={"span"} style={{ color: "#B712A5" }}>
                      Présenter
                    </Box>
                    <Space /> vos <Space />
                    <Box component={"span"} style={{ color: "#B712A5" }}>
                      PRODUITS
                    </Box>
                    , <Space />
                    <Box component={"span"} style={{ color: "#B712A5" }}>
                      SAVOIR-FAIRE
                    </Box>{" "}
                    <Space /> et <Space />
                    <Box component={"span"} style={{ color: "#B712A5" }}>
                      SERVICES
                    </Box>{" "}
                    <Space />
                    dans un cadre dynamique et stimulant
                  </Title>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} sx={{ paddingTop: "22px" }}>
            <Grid xs={12}>
              <Grid container justifyContent={"center"}>
                <Grid xs={4} sm={2}>
                  <img src={Statistique} width="120" hieght="120" alt="" />
                </Grid>
                <Grid xs={8}>
                  <Title sx={{ fontSize: { xs: "15px", sm: "1rem" } }}>
                    <Box
                      component={"span"}
                      sx={{
                        display: "block",
                        color: "orange",
                        fontSize: { xs: "20px", sm: "30px" },
                      }}
                    >
                      3/
                    </Box>
                    <Box component={"span"} style={{ color: "#B712A5" }}>
                      RENFORCER
                    </Box>
                    <Space /> votre notoriété et <Space />
                    <Box component={"span"} style={{ color: "#B712A5" }}>
                      DÉVELOPPER
                    </Box>
                    <Space /> votre activité
                  </Title>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12}>
              <Grid
                container
                justifyContent={"center"}
                sx={{ marginTop: "20px" }}
              >
                <Grid xs={4} sm={2}>
                  <img src={Conference} width="120" hieght="120" alt="" />
                </Grid>
                <Grid xs={8}>
                  <Title sx={{ fontSize: { xs: "15px", sm: "1rem" } }}>
                    <Box
                      component={"span"}
                      sx={{
                        display: "block",
                        color: "orange",
                        fontSize: { xs: "20px", sm: "30px" },
                      }}
                    >
                      4/
                    </Box>
                    <Box component={"span"} style={{ color: "#B712A5" }}>
                      RENCONTRES
                    </Box>
                    <Space /> et <Space />
                    <Box component={"span"} style={{ color: "#B712A5" }}>
                      PROFESSIONNELS
                    </Box>{" "}
                    <Space />
                    du secteur et développer votre réseau de prescripteurs
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
