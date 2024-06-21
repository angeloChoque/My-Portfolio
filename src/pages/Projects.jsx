import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { COLOR_3 } from "../assets/color";
import Reveal from "../components/Reveal";
import { PROJECTS } from "../data/commons";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Reveal>
      <Container id={"projects"}>
        <Typography
          variant="h3"
          pt={5}
          pb={2}
          color={COLOR_3}
          fontWeight={"BOLD"}
          textAlign={"center"}
        >
          {t("projects.section_title")}
        </Typography>
        <Typography variant="body2" fontSize={25} textAlign={"center"}>
          {t("projects.section_subtitle")}
        </Typography>
        <Stack spacing={5} mt={10} mb={5}>
          {PROJECTS.map((project, index) => (
            <Card
              key={index}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                borderRadius: "16px",
              }}
            >
              <Grid container>
                <Grid item xs={12} md={6}>
                  <img
                    src={project.url}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: {
                        xs: "16px 16px 0 0",
                        sm: "16px 0 0 16px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      textAlign={"center"}
                      color={project.color}
                      fontWeight={"bold"}
                    >
                      {t(project.title)}
                    </Typography>
                    <Box mt={1}>
                      <Typography variant="subtitle1">
                        {t("projects.description_title")}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t(project.description)}
                      </Typography>
                    </Box>
                    <Box mt={2}>
                      <Typography variant="subtitle1">
                        {t("projects.libraries_title")}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t(project.libraries)}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "flex-end", mt: 8 }}>
                    <Button
                      variant="contained"
                      target="_blank"
                      href={project.href_1}
                      color="primary"
                    >
                      Github
                    </Button>
                    <Button
                      variant="contained"
                      target="_blank"
                      href={project.href_2}
                      color="primary"
                    >
                      {t("projects.view")}
                    </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </Card>
          ))}
        </Stack>
      </Container>
    </Reveal>
  );
};

export default Projects;
