import { Container, Typography, Box, Tooltip } from "@mui/material";
import { COLOR_3 } from "../assets/color";
import { motion } from "framer-motion";
import { LOGO_SKILLS } from "../data/commons";
import Reveal from "../components/Reveal";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <Reveal>
      <Container id="about">
        <Typography
          my={5}
          color={COLOR_3}
          variant="h3"
          fontWeight="bold"
          textAlign="center"
        >
          {t("about_me.section_title")}
        </Typography>
        <Typography variant="body2" fontSize={29}>
          {t("about_me.paragraph1")}
          <strong style={{ color: COLOR_3 }}>{t("about_me.skills")}</strong>
          {t("about_me.paragraph_continue")}
        </Typography>
        <Typography pt={4} variant="body2" fontSize={29}>
          {t("about_me.paragraph2")}
        </Typography>
        <Typography
          py={10}
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          color={COLOR_3}
        >
          {t("about_me.skillset_title")}
        </Typography>

        <Box overflow="hidden" width="100%" py={5}>
          <motion.div
            style={{ display: "flex", gap: "16px", whiteSpace: "nowrap" }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: LOGO_SKILLS.length * 2,
              ease: "linear",
            }}
          >
            {[...LOGO_SKILLS, ...LOGO_SKILLS].map((logo, index) => (
              <Tooltip
                key={index}
                title={<Typography fontSize="1.5em">{logo.tooltip}</Typography>}
              >
                <Box
                  component="img"
                  m={2}
                  src={logo.url}
                  alt={logo.alt}
                  width="100px"
                  height="100px"
                  sx={{ objectFit: "contain" }}
                />
              </Tooltip>
            ))}
          </motion.div>
        </Box>
      </Container>
    </Reveal>
  );
};

export default AboutMe;
