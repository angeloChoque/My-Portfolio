import {
  AppBar,
  Button,
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
import { useTranslation } from "react-i18next";

function HideOnScroll(props) {
  const { children, window } = props;
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
  window: PropTypes.func,
};

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <HideOnScroll>
      <AppBar position={"sticky"}>
        <Toolbar>
          <Stack
            spacing={1}
            direction={"row"}
            flexGrow={1}
            sx={{
              "& .MuiButton-outlined": {
                color: "#ffffff",
                borderColor: "#ffffff",
              },
            }}
          >
            <Button onClick={() => changeLanguage("en")} variant="outlined">
              English
            </Button>
            <Button onClick={() => changeLanguage("es")} variant="outlined">
              Spanish
            </Button>
          </Stack>
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
                    {t(item.title)}
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
