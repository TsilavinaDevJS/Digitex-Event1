import { Box, Grid, Stack, Avatar, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { Phone } from "@mui/icons-material";
import { Markunread } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Facebook } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import "./footer.css";
import { Space } from "../../config/space";

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hide: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};
export default function Footer() {
  const viewportConfig = {
    once: true,
    margin: "320px",
  };
  return (
    <Box>
      <motion.footer>
        <Stack
          height={200}
          justifyContent="space-between"
          sx={{
            backgroundColor: "#27215F",
            // overflow: "hidden",
            position: "relative",
            //width: "100vw",
            // left: 10,
            // right: 10,
            // height: "80vh",
            height: "auto",
            paddingBottom: { xs: "0", md: "0" },
          }}
        >
          <Box p={2} sx={{ paddingTop: "42px" }}>
            <Grid container>
              <Grid xs={12} sm={6} md={4} sx={{ paddingLeft: "3vw" }}>
                <Typography
                  sx={{
                    fontSize: "36px",
                    fontFamily: "initial",
                    fontWeight: "538",
                    marginBottom: "22px",
                    textAlign: { xs: "center", sm: "start" },
                  }}
                  color="white"
                >
                  Contact
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                    textAlign: { xs: "center", sm: "start" },
                    justifyContent: { xs: "center", sm: "start" },
                  }}
                  color="white"
                >
                  <Phone /> <Space/> (+261) 32 02 442 38
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                    textAlign: { xs: "center", sm: "start" },
                    justifyContent: { xs: "center", sm: "start" },
                  }}
                  color="white"
                >
                  <Phone /> <Space/> (+261) 34 44 471 31
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                    textAlign: { xs: "center", sm: "start" },
                    justifyContent: { xs: "center", sm: "start" },
                  }}
                  color="white"
                >
                  <Markunread /> <Space/> salon.digitex2022@gmail.com
                </Typography>
              </Grid>
              <Grid
                xs={12}
                sm={6}
                md={4}
                sx={{ display: { xs: "none", md: "grid" } }}
              >
                <Typography
                  sx={{
                    fontSize: "36px",
                    fontFamily: "initial",
                    fontWeight: "538",
                    marginBottom: "22px",
                    textAlign: { xs: "center", sm: "start" },
                  }}
                  color="white"
                >
                  Infos Pratique
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                    textAlign: { xs: "center", sm: "start" },
                    justifyContent: { xs: "center", sm: "start" },
                  }}
                  color="white"
                >
                  <ArrowForwardIosIcon /> <Space/> À propos
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} md={4}>
                <Typography
                  sx={{
                    fontSize: "36px",
                    fontFamily: "initial",
                    fontWeight: "538",
                    marginBottom: "22px",
                    textAlign: { xs: "center", md: "start" },
                  }}
                  color="white"
                >
                  Nous suivre
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                    textAlign: { xs: "center", md: "start" },
                    justifyContent: { xs: "center", md: "start" },
                  }}
                  color="white"
                >
                  <Avatar>
                    <Facebook sx={{ color: "#B712A5" }} />
                  </Avatar>
                  <Space/> <Space/>
                  <Avatar>
                    <Twitter sx={{ color: "#B712A5" }} />
                  </Avatar>
                </Typography>
              </Grid>
              <Grid
                container
                sx={{
                  borderTop: "1px solid #fff",
                  padding: "20px 20px 20px 0",
                  margin: "20px 50px 0px 50px",
                }}
              >
                <Grid
                  xs={12}
                  sm={12}
                  md={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontFamily: "montsert",
                      textAlign: { xs: "center", md: "center" },
                    }}
                    color="white"
                  >
                    © Copyright 2023 - Salon DIGITEX | All Rights Reserved
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  sm={12}
                  md={3}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontFamily: "montsert",
                      fontWeight: "500",
                      textAlign: { xs: "center", md: "center" },
                    }}
                    color="white"
                  >
                    Plus de renseignements ?
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  sm={12}
                  md={3}
                  sx={{
                    fontFamily: "montsert",
                    display: "grid",
                    justifyContent: "center",
                  }}
                >
                  <button class={"button"}>CONTACTEZ-NOUS</button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </motion.footer>
    </Box>
  );
}
