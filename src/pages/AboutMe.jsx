import { Container, Stack, Tooltip, Typography } from "@mui/material";
import { COLOR_3 } from "../assets/color";
import { motion } from "framer-motion";
import { LOGO_SKILLS } from "../data/commons";
import Reveal from "../components/Reveal";

const AboutMe = () => {
  return (
    <Reveal>
      <Container>
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
          Im a passionate frontend developer with solid experience in{" "}
          <strong style={{ color: COLOR_3 }}>
            React, HTML, CSS, and JavaScript
          </strong>
          . My main goal is to create exceptional user experiences that exceed
          expectations. I love tackling new challenges and am constantly seeking
          ways to improve and learn.
        </Typography>
        <Typography pt={4} variant="body2" fontSize={29}>
          My commitment to excellence is reflected in every project I work on,
          always striving to offer innovative and efficient solutions. Im
          dedicated to making a positive impact on users lives through my work,
          and Im excited about the opportunities the future may bring.
        </Typography>

        <Typography
          py={5}
          variant="h4"
          textAlign={"center"}
          fontWeight={"bold"}
          color={COLOR_3}
        >
          PROFESIONAL SKILLSET
        </Typography>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          spacing={5}
        >
          {LOGO_SKILLS.map((logo) => (
            <Tooltip
            key={logo.alt}
            title={logo.tooltip}
            >
              <motion.div
                style={{ width: "12%" }}
                whileHover={{ scale: 1.1 }}
              >
                <img src={logo.url} alt={logo.alt} style={{ width: "100%" }} />
              </motion.div>
            </Tooltip>
          ))}
        </Stack>
      </Container>
    </Reveal>
  );
};

export default AboutMe;
