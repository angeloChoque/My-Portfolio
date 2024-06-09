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
      <Container>
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
        <Stack spacing={3} pt={3} pb={5}>
          {PROYECTS.map((project, index) => (
            <Card
              key={index}
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                borderRadius: "16px",
              }}
            >
              <Grid container>
                <Grid item xs={6}>
                  <img
                    src={project.url}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "16px 5px 0 16px",
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      textAlign={"center"}
                      component="div"
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
                  <CardActions sx={{justifyContent:"right", mt:9}}>
                    <Button variant="contained" color="primary">
                      Github
                    </Button>
                    <Button variant="contained" color="primary">
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
