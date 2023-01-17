import {
  Box,
  Grid,
  Stack,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { Phone } from "@mui/icons-material";
import { Markunread } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Facebook } from "@mui/icons-material";
import "./footer.css";
import { Space } from "../../config/space";
import { LinkedIn } from "@mui/icons-material";

export default function Footer() {
  const [dataPromise, setReady] = React.useState(false);

  React.useEffect(() => {
    setInterval(() => {
      setReady(true);
    }, 1000);
  }, []);
  return (
    <>
      {dataPromise ? (
        <>
          <Box>
            <motion.footer>
              <Stack
                height={200}
                justifyContent="space-between"
                sx={{
                  backgroundColor: "#27215F",
                  position: "relative",
                  height: "auto",
                  paddingBottom: { xs: "0", md: "0" },
                }}>
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
                        color="white">
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
                        color="white">
                        <Phone /> <Space /> (+261) 32 02 442 38
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
                        color="white">
                        <Phone /> <Space /> (+261) 34 44 471 31
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          display: "flex",
                          alignItems: "center",
                          textAlign: { xs: "center", sm: "start" },
                          justifyContent: { xs: "center", sm: "start" },
                        }}
                        color="white">
                        <Markunread /> <Space /> infos@salon-digitex.mg
                      </Typography>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={6}
                      md={4}
                      sx={{ display: { xs: "none", md: "grid" } }}>
                      <Typography
                        sx={{
                          fontSize: "36px",
                          fontFamily: "initial",
                          fontWeight: "538",
                          marginBottom: "22px",
                          textAlign: { xs: "center", sm: "start" },
                        }}
                        color="white">
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
                        color="white">
                        <ArrowForwardIosIcon /> <Space /> À propos
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
                        color="white">
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
                        color="white">
                        <IconButton
                          href="https://web.facebook.com/profile.php?id=100089285295963&eav=AfYTTleUZcaThdDHdeOg2pHmo3la0KDbTAjfxkgzi7LYsZFqnKzlvu2wrnVTZ-77hT8&refid=12&__tn__=H&paipv=0"
                          target="_blank">
                          <Avatar>
                            <Facebook sx={{ color: "#B712A5" }} />
                          </Avatar>
                        </IconButton>
                        <Space /> <Space />
                        <IconButton
                          href="https://www.linkedin.com/company/digitexmadagascar/?fbclid=IwAR013SRKTr7_WjaUlHPFOA_j0y2mx72CQdBlFeWiprYxj7RpqrvsQ8lD7NI&original_referer=https%3A%2F%2Flm.facebook.com%2F"
                          target="_blank">
                          <Avatar>
                            <LinkedIn sx={{ color: "#B712A5" }} />
                          </Avatar>
                        </IconButton>
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      sx={{
                        borderTop: "1px solid #fff",
                        padding: "20px 20px 20px 0",
                        margin: "20px 50px 0px 50px",
                      }}>
                      <Grid
                        xs={12}
                        sm={12}
                        md={6}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            fontFamily: "montsert",
                            textAlign: { xs: "center", md: "center" },
                          }}
                          color="white">
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
                        }}>
                        <Typography
                          sx={{
                            fontSize: "18px",
                            fontFamily: "montsert",
                            fontWeight: "500",
                            textAlign: { xs: "center", md: "center" },
                          }}
                          color="white">
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
                        }}>
                        <button class={"button"}>CONTACTEZ-NOUS</button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
            </motion.footer>
          </Box>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
