import {
  Container,
  Tooltip,
  Typography,
  Grid,
  IconButton,
  Box,
} from "@mui/material";
import { COLOR_3 } from "../assets/color";
import { motion } from "framer-motion";
import { LOGO_SKILLS } from "../data/commons";
import Reveal from "../components/Reveal";
import GitHubIcon from "@mui/icons-material/GitHub";
const AboutMe = () => {
  return (
    <Reveal>
      <Container id={"about"}>
        <Typography
          my={5}
          color={COLOR_3}
          variant="h3"
          fontWeight={"BOLD"}
          textAlign={"center"}
        >
          More About Me
        </Typography>
        <Typography variant="body2" fontSize={29}>
          I&apos;m a passionate frontend developer with solid experience in{" "}
          <strong style={{ color: COLOR_3 }}>
            React, HTML, CSS, and JavaScript
          </strong>
          . My main goal is to create exceptional user experiences that exceed
          expectations. I love tackling new challenges and am constantly seeking
          ways to improve and learn.
        </Typography>
        <Typography pt={4} variant="body2" fontSize={29}>
          My commitment to excellence is reflected in every project I work on,
          always striving to offer innovative and efficient solutions. I&apos;m
          dedicated to making a positive impact on users&apos; lives through my
          work, and I&apos;m excited about the opportunities the future may
          bring.
        </Typography>
        <Typography
          py={10}
          variant="h4"
          textAlign={"center"}
          fontWeight={"bold"}
          color={COLOR_3}
        >
          PROFESSIONAL SKILLSET
        </Typography>
        <Grid container mb={4} spacing={2} justifyContent="center">
          {LOGO_SKILLS.map((logo) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={logo.alt}>
              <Tooltip title={logo.tooltip}>
                <motion.div
                  style={{ width: "100%", textAlign: "center" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img src={logo.url} alt={logo.alt} style={{ width: "50%" }} />
                </motion.div>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
        <Typography
          py={2}
          variant="h4"
          textAlign={"center"}
          fontWeight={"bold"}
          color={COLOR_3}
        >
          CONTACT ME
        </Typography>
        <Box display="flex" justifyContent="center" pb={2}>
          <IconButton
            href="https://github.com/angeloChoque"
            target="_blank"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Reveal>
  );
};

export default AboutMe;
