import React from "react";
import { useMediaQuery, useTheme, Box } from "@mui/material";
import { motion, useViewportScroll } from "framer-motion";
import { useState } from "react";
import NavDrawer from "./drawer";
import { useDimensions } from "./drawer/use-dimensions";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo_digitex.png";
import "./Nav.css";

const navStyles = {
  display: "flex",
  position: "fixed",
  alignItems: "center",
  justifyContent: "space-between",
  height: "6rem",
  width: "98vw",
  left: "0",
  zIndex: 9,
};

export function Navigation() {
  const theme = useTheme();
  const { scrollY } = useViewportScroll();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const containerRef = React.useRef(null);
  const { height } = useDimensions(containerRef);
  const navigate = useNavigate();
  const [path, setPath] = React.useState(window.location.pathname);
  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  const variants = {
    /** this is the "visible" key and it's correlating styles **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: { opacity: 0, y: -25 },
  };

  React.useEffect(() => {
    return scrollY.onChange(() => update());
  });

  React.useEffect(() => {
    setPath(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <motion.div
      className="nav"
      custom={height}
      ref={containerRef}
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      style={{
        ...navStyles,
        height: isMobile ? "4rem" : "5rem",
        width: "100vw",
        zIndex: "2000",
        background: "rgba(145, 235, 255, 0.65)",
        boxShadow: "3px 3px 3px #0000007a",
      }}>
      <div class="logo">
        <Box
          class={path === "/" ? "active" : "test"}
          onClick={() => navigate("/")}
          component={"img"}
          sx={{
            width: { xs: "250", sm: "125px" },
            height: "auto",
            alignItems: "center",
          }}
          src={Logo}
          alt=""
        />
      </div>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <NavDrawer />
      </Box>
      <ul>
        <li>
          <button
            class={path === "/" ? "active" : "test"}
            onClick={() => navigate("/")}>
            Accueil
          </button>
        </li>
        <li>
          <button
            class={path === `/Thematics` ? "active" : "test"}
            onClick={() => navigate(`/Thematics`)}>
            Thématique
          </button>
        </li>
        <li>
          <button
            class={path === `/Programme` ? "active" : "test"}
            onClick={() => navigate(`/Programme`)}>
            Programme
          </button>
        </li>
      </ul>
    </motion.div>
  );
}
