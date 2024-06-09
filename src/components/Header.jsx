import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import { ITEM } from "../data/item";
import MenuHeader from "./MenuHeader";
import { Link } from "react-router-dom";
import { COLOR } from "../assets/color";

const Header = () => {
  return (
    <AppBar
      position={"sticky"}
    >
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
              <Typography
                key={item.title}
                component={Link}
                to={item.path}
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
            );
          })}
        </Stack>
        <MenuHeader />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
