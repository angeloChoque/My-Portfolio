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
import { PROYECTS } from "../data/commons";

const Projects = () => {
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
          My Projects
        </Typography>
        <Typography variant="body2" fontSize={25} textAlign={"center"}>
          Here are all my projects completed so far.
        </Typography>
        <Stack spacing={5} my={10}>
          {PROYECTS.map((project, index) => (
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
                      borderRadius: { xs: "16px 16px 0 0", sm: "16px 0 0 16px" },
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
                      {project.title}
                    </Typography>
                    <Box mt={1}>
                      <Typography variant="subtitle1">Description:</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </Box>
                    <Box mt={2}>
                      <Typography variant="subtitle1">
                        Frameworks & libraries:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.libraries}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "flex-end", mt: 8 }}>
                    <Button variant="contained" target="_blank" href={project.href_1} color="primary">
                      Github
                    </Button>
                    <Button variant="contained" target="_blank" href={project.href_2}  color="primary">
                      View
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
