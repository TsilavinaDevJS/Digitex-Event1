import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Box, Drawer } from "@mui/material";
import {Button,Grid} from "@mui/material"
import {Home} from "@mui/icons-material"
import { useNavigate } from "react-router-dom";
import { List } from "@mui/icons-material";
import Book from "../../../assets/Book.png"

const container = {
  hide: {
    x: 500,
  },
  show: {
    x: 0,
    transition: {
      staggerChildren: 0.1,
      stiffness: 80,
      damping: 50,
    },
  },
};

const item = {
  hide: {
    x: 500,
  },
  show: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const NavDrawer = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const navigate = useNavigate()

  return (
    <>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <MenuToggle toggle={() => toggleOpen()} />
        <Drawer open={isOpen}  anchor="right" onClose={() => toggleOpen()}>
          <Box
            variants={container}
            initial="hide"
            animate="show"
            sx={{ width: "calc(100vw - 60px)",background:"rgb(66, 12, 68)",height:{xs:"calc(100vh - 4rem)",md:"calc(100vh - 6rem)"},position:"relative",top:{xs:"4rem",md:"6rem"}}}
          >
            <Box my={2.2}>
            </Box>
            <motion.li variants={item} onClick={()=>{toggleOpen()}} style={{display:"flex",justifyContent:"center",padding:"0px 40px 0px 40px",marginBottom:"14px"}}>
              <Button variant="outlined" fullWidth onClick={()=>navigate('/')}>
                  <Grid container alignItems={"center"} justifyContent={"center"}>
                    <Grid xs={2}>
                      <Home/>
                    </Grid>
                    <Grid xs={6}>
                      Accueil
                    </Grid>
                  </Grid>
              </Button>
            </motion.li>
            <motion.li variants={item} onClick={()=>{toggleOpen()}} style={{display:"flex",justifyContent:"center",padding:"0px 40px 0px 40px",marginBottom:"14px"}}>
              <Button variant="outlined" fullWidth onClick={()=>navigate('/Thematics')}>
                  <Grid container alignItems={"center"} justifyContent={"center"}>
                    <Grid xs={2}>
                      <Box component={"img"} sx={{width:{xs:"25px",sm:"30px"},height:"auto",marginLeft:{xs:"-15px",sm:"0"}}} src={Book} alt=""/>
                    </Grid>
                    <Grid xs={6}>
                      Thématique
                    </Grid>
                  </Grid>
              </Button>
            </motion.li>
            <motion.li variants={item} onClick={()=>{toggleOpen()}} style={{display:"flex",justifyContent:"center",padding:"0px 40px 0px 40px",marginBottom:"14px"}}>
              <Button variant="outlined" fullWidth onClick={()=>navigate('/Programme')}>
                  <Grid container alignItems={"center"} justifyContent={"center"}>
                    <Grid xs={2}>
                      <List/>
                    </Grid>
                    <Grid xs={6}>
                      Programme
                    </Grid>
                  </Grid>
              </Button>
            </motion.li>
          </Box>
        </Drawer>
      </motion.div>
    </>
  );
};

export default NavDrawer;
