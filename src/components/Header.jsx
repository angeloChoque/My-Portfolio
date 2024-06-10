import {
  AppBar,
  Box,
  Slide,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { ITEM } from "../data/commons";
import MenuHeader from "./MenuHeader";
import { COLOR } from "../assets/color";
import PropTypes from "prop-types";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Header = () => {
  return (
    <HideOnScroll >
      <AppBar position={"sticky"}>
        <Toolbar>
          <Box flexGrow={1}>
            {/* <Typography 
          component={Link}
          fontSize={22} to="/">
            AngeloChoque
          </Typography> */}
          </Box>
          <Stack
            direction={"row"}
            spacing={5}
            alignItems={"center"}
            display={{ xs: "none", sm: "block" }}
          >
            {ITEM.map((item) => {
              return (
                <Tooltip key={item.title}>
                  <Typography
                    component={"a"}
                    href={item.path}
                    fontSize={20}
                    display={"inline-flex"}
                    alignItems={"center"}
                    color={COLOR}
                    sx={{
                      textShadow: "2px 2px 4px rgba(1,1,10,0.10)",
                      textDecoration: "none",
                    }}
                  >
                    {item.icon}
                    {item.title}
                  </Typography>
                </Tooltip>
              );
            })}
          </Stack>
          <MenuHeader />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
