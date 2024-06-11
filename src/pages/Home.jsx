import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { COLOR_2 } from "../assets/color";
import { useTranslation } from "react-i18next";

const Home = () => {

  const { t } = useTranslation();


  return (
    <Container id={"home"} component={"section"}>
      <Grid  container  spacing={2}>
        <Grid component={"aside"} item xs={12} md={6}>
        <motion.h1
            transition={{ duration: 0.6 }}
            animate={{ y: 105 }}
            style={{ fontSize: 50, color:COLOR_2}}
          >
            {t("home.title_page")}
          </motion.h1>
          <motion.h2
            transition={{ duration: 0.6 }}
            animate={{ y: 120 }}
            style={{ fontSize: 38, fontWeight: "normal" }}
          >
            {t("home.hello_world")}
          </motion.h2>
          <motion.h2
            transition={{ duration: 0.5 }}
            animate={{ y: 90 }}
            style={{ fontSize: 38, fontWeight: "normal", alignItems: "center" }}
          >
            {t("home.introduction")}<strong style={{ color: COLOR_2 }}>{t("home.name")}</strong>
          </motion.h2>
          <motion.h2
            transition={{ duration: 0.4 }}
            animate={{ y: 60 }}
            style={{ fontSize: 38, fontWeight: "normal" }}
          >
            {t("home.job_title")}
          </motion.h2>
        </Grid>
        <Grid component={"figure"} item xs={12} md={6} mt={10} >
          <img src="/public/imagen.avif" style={{ maxWidth: "100%" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
