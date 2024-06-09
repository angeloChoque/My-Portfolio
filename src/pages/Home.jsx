import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { COLOR_2 } from "../assets/color";

const Home = () => {
  return (
    <Container>
      <Grid  container spacing={15}>
        <Grid item xs={12} md={6}>
        <motion.h1
            transition={{ duration: 0.6 }}
            animate={{ y: 105 }}
            style={{ fontSize: 50, color:COLOR_2}}
          >
            MY PORTFOLIO
          </motion.h1>
          <motion.h2
            transition={{ duration: 0.6 }}
            animate={{ y: 120 }}
            style={{ fontSize: 38, fontWeight: "normal" }}
          >
            Hello world👋🏻!
          </motion.h2>
          <motion.h2
            transition={{ duration: 0.5 }}
            animate={{ y: 90 }}
            style={{ fontSize: 38, fontWeight: "normal", alignItems: "center" }}
          >
            I am <strong style={{ color: COLOR_2 }}>Angelo Choque</strong>
          </motion.h2>
          <motion.h2
            transition={{ duration: 0.4 }}
            animate={{ y: 60 }}
            style={{ fontSize: 38, fontWeight: "normal" }}
          >
            and Im Fronted Developer
          </motion.h2>
        </Grid>
        <Grid item xs={12} md={6} mt={5} >
          <img src="/public/imagen.avif" style={{ maxWidth: "100%" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
