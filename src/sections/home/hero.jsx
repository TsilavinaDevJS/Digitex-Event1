import { Box, Grid, styled, Typography, useTheme } from "@mui/material";
import React from "react";
//import BG from "../../assets/Background.jpg"
import BG from "../../assets/back.jpg";
import { Space } from "../../config/space";
import Lieux from "../../assets/Lieux.svg";
import Vr from "../../assets/VR1.png";

const Title = styled(Typography)(({ theme }) => ({
  paddingTop: "12px",
  color: theme.palette.primary.contrastText,
}));
const BigTitle = styled(Typography)(({ theme }) => ({
  fontSize: "6rem",
  fontWeight: "516", //#ffd89b → #19547b #ff512f → #dd2476
  background: "-webkit-linear-gradient(45deg, #ff512f 30%, #dd2476 90%)",
  // background: "-webkit-linear-gradient(90deg, #FE6B8B 30%, #FF8E53 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

function dateDiff(staticDate, currentDate) {
  var diff = {};

  var tmp = staticDate - currentDate;
  tmp = Math.floor(tmp / 1000);
  diff.sec = tmp % 60;

  tmp = Math.floor((tmp - diff.sec) / 60);
  diff.min = tmp % 60;

  tmp = Math.floor((tmp - diff.min) / 60);
  diff.hour = tmp % 24;

  tmp = Math.floor((tmp - diff.hour) / 24);
  diff.day = tmp;

  if (diff.sec < 0) {
    diff.sec = 0;
    diff.min = 0;
    diff.hour = 0;
    diff.day = 0;
    return diff;
  } else {
    return diff;
  }
}

export default function HeroSection() {
  const theme = useTheme();
  const [currentDate, setCurrentDate] = React.useState(null);
  const [minuteur, setMinuteur] = React.useState("");
  const containerRef = React.useRef(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    const staticDate = new Date("2023-03-29T08:00:00");
    setCurrentDate(new Date());
    setMinuteur(dateDiff(staticDate, currentDate));
  }, [currentDate, minuteur]);

  React.useEffect(() => {
    setHeight(containerRef.current.offsetHeight + 20);
  }, [currentDate]);

  return (
    <>
      <Box sx={{ paddingTop: { xs: "0px", md: "0px" } }}>
        {/* <Box sx={{paddingTop:{xs:"66px",md:"82px"}}}> */}
        <Box>
          <Box sx={{ position: "absolute" }}>
            <Box
              component={"img"}
              src={BG}
              sx={{ width: "99.1vw", height: height, zIndex: "1" }}
              alt=""
            />
          </Box>
          <Box
            ref={containerRef}
            sx={{ zIndex: "99", position: "relative", padding: "4px" }}
          >
            <Grid container>
              <Grid
                xs={12}
                sm={2}
                sx={{
                  display: { xs: "none", md: "grid" },
                  padding: { xs: "0px 0 0 0", md: "110px 0px 0px 1.333vw" },
                }}
              >
                <Box
                  component={"img"}
                  src={Vr}
                  style={{
                    width: "20vw",
                    height: "auto",
                    position: "relative",
                    opacity: "0.8",
                  }}
                  alt=""
                />
              </Grid>
              <Grid
                xs={12}
                sm={6}
                sx={{
                  display: "grid",
                  padding: { xs: "80px 0 0 20px", md: "120px 0px 0px 4vw" },
                }}
              >
                <Title sx={{ display: "inline" }}>
                  <Box
                    component={"span"}
                    sx={{
                      fontSize: { xs: "2rem", md: "2.6rem" },
                      color: "#0040ff",
                      fontWeight: "516",
                    }}
                  >
                    Salon
                  </Box>
                  <Box
                    component={"span"}
                    sx={{
                      display: "block",
                      fontWeight: "516",
                      fontSize: { xs: "3rem", md: "6rem" },
                      marginTop: { xs: "-18px", md: "-30px" },
                      fontSize: "6rem",
                      fontWeight: "516",
                      background:
                        "-webkit-linear-gradient(45deg, #ff512f 30%, #dd2476 90%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    DIGITEX
                  </Box>
                  <Box
                    component={"span"}
                    sx={{
                      display: "block",
                      fontWeight: "516",
                      color: "#a43981",
                      fontSize: { xs: "1.2rem", md: "1.9vw", sm: "1.2rem" },
                      marginTop: { xs: "-18px", md: "-22px" },
                    }}
                  >
                    {" "}
                    Digitalisation-Technologie-Externalisation
                  </Box>
                  {/* <Box component={"span"} sx={{display:"block",fontWeight:"516",fontSize:{xs:"3rem",md:"4rem"},marginTop:{xs:"-18px",md:"-30px"}}}> 2023</Box>  */}
                </Title>
                <Typography
                  variant="h4"
                  sx={{
                    color: theme.palette.primary.contrastText,
                    float: "right",
                    fontSize: { xs: "2.25rem", md: "5vw" },
                    marginLeft: "50px",
                  }}
                >
                  <Box
                    component={"span"}
                    sx={{ display: "block", fontWeight: "521", color: "#fff" }}
                  >
                    Du{" "}
                    <Box
                      component={"span"}
                      sx={{
                        fontSize: "4rem",
                        fontWeight: "516",
                        background:
                          "-webkit-linear-gradient(45deg, 	#ffab00 30%, #a6001a 90%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      29
                    </Box>{" "}
                    au{" "}
                    <Box
                      component={"span"}
                      sx={{
                        fontSize: "4rem",
                        fontWeight: "516",
                        background:
                          "-webkit-linear-gradient(45deg, 	#ffab00 30%, #a6001a 90%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      31
                    </Box>
                  </Box>
                  <Box
                    component={"span"}
                    sx={{ color: "#0040ff", fontWeight: "521" }}
                  >
                    Mars 2023
                  </Box>
                </Typography>
                {/* <Typography variant="h6" sx={{color:theme.palette.primary.contrastText,fontSize:{xs:"1rem",md:"1.25rem"}}}>
                  "La transition numérique au coeur du développement"
                  </Typography> */}
                {/* <Typography variant="body1" sx={{color:theme.palette.primary.contrastText,position:"relative",top:"16px",left:"15px",width:"320px",fontSize:{xs:"0.8rem",md:"1rem"}}}>
                      Sous le parrainage du Ministère de la Poste et de la Transformation Digitale
                  </Typography> */}
              </Grid>
              <Grid
                xs={12}
                sm={2}
                sx={{
                  display: { xs: "grid", md: "none" },
                  padding: { xs: "0px 0 0 0", md: "110px 0px 0px 1.333vw" },
                }}
              ></Grid>
              <Grid
                xs={12}
                sm={4}
                sx={{
                  width: { xs: "50px", md: "600px" },
                  margin: { xs: "65px 0 0 0", md: "100px auto" },
                  padding: { xs: "0px 0px 0px 0px", md: "0px 0px 0px 0px" },
                }}
              >
                <Grid container>
                  <Grid
                    xs={12}
                    sx={{
                      padding: {
                        xs: "0px 20px 0px 0px",
                        md: "0px 30px 0px 0px",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        textAlign: "end",
                        color: "#171544",
                        fontWeight: "521",
                        fontSize: { xs: "1rem", md: "2.5rem" },
                      }}
                    >
                      "La transition numérique au coeur du développement"
                    </Typography>
                    {/* <Typography variant="h4" sx={{color:theme.palette.primary.contrastText,float:"right",fontSize:{xs:"2.25rem",md:"3.25rem"}}}>
                      <Box component={"span"}  sx={{display:"block",fontWeight:"521", color:"#96347c"}}>Du <Box component={"span"} sx={{color:"#0040ff"}}>29</Box> au <Box component={"span"} sx={{color:"#0040ff"}}>31</Box></Box>
                      <Box component={"span"}  sx={{float:"right", color:"#00a3ff",fontweight:"521"}}>Mars 2023</Box>
                    </Typography > */}
                  </Grid>
                  <Grid
                    xs={12}
                    sx={{
                      padding: {
                        xs: "0px 20px 0px 0px",
                        md: "0px 30px 0px 0px",
                      },
                      position: "relative",
                      top: { xs: "9px", md: "4vw" },
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "end",
                        color: theme.palette.primary.contrastText,
                        float: "right",
                        fontSize: { xs: "1.6rem", md: "2rem", sm: "1.8rem" },
                      }}
                    >
                      <Box
                        component={"span"}
                        sx={{
                          display: "block",
                          position: "relative",
                          fontWeight: "516",
                          background:
                            "-webkit-linear-gradient(45deg, #ff512f 30%, #dd2476 90%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Au{" "}
                      </Box>
                      <Box
                        component={"img"}
                        sx={{
                          width: { xs: "250", sm: "200px", md: "300px" },
                          height: "auto",
                          marginTop: "15px",
                        }}
                        src={Lieux}
                        alt=""
                      />
                      <Box
                        component={"span"}
                        sx={{
                          display: "block",
                          fontWeight: "516",
                          background:
                            "-webkit-linear-gradient(45deg, #ff512f 30%, #dd2476 90%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Andohatapenaka
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container sx={{ marginTop: { xs: "1rem", md: "0rem" } }}>
              <Grid xs={0} md={6}></Grid>
              <Grid xs={12} md={6}>
                <Grid container justifyContent={"center"}>
                  <Typography
                    sx={{
                      color: theme.palette.primary.contrastText,
                      fontWeight: "512",
                      display: "flex",
                      fontSize: { xs: "2.7rem", sm: "3rem" },
                    }}
                  >
                    <Box
                      component={"span"}
                      sx={{
                        background:
                          "-webkit-linear-gradient(45deg, 	#ffab00 30%, #a6001a 90%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {minuteur.day}
                      <Box
                        component={"span"}
                        sx={{
                          display: "block",
                          fontSize: "1rem",
                          textAlign: "center",
                        }}
                      >
                        Jours
                      </Box>
                    </Box>
                    <Space /> : <Space />
                    <Box
                      component={"span"}
                      sx={{
                        background:
                          "-webkit-linear-gradient(45deg, 	#ffab00 30%, #a6001a 90%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {minuteur.hour}
                      <Box
                        component={"span"}
                        sx={{
                          display: "block",
                          fontSize: "1rem",
                          textAlign: "center",
                        }}
                      >
                        Heurs
                      </Box>
                    </Box>
                    <Space /> : <Space />
                    <Box
                      component={"span"}
                      sx={{
                        background:
                          "-webkit-linear-gradient(45deg, 	#ffab00 30%, #a6001a 90%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {minuteur.min}
                      <Box
                        component={"span"}
                        sx={{
                          color: "white",
                          display: "block",
                          fontSize: "1rem",
                          textAlign: "center",
                        }}
                      >
                        Minute
                      </Box>
                    </Box>
                    {/* <Space/> : <Space/>
                      <Box component={'span'}>
                          {minuteur.sec} 
                        <Box component={"span"}  sx={{display:"block",fontSize:"1rem",textAlign:"center"}}>second</Box> 

                      </Box> */}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
