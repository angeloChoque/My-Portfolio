import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { COLOR_3 } from "../assets/color";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const ContactMe = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    type: "",
    email: "",
    comment: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mpzvvqgy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus(t("status_messages.success"));
        setFormData({ fullName: "", type: "", email: "", comment: "" });
      } else {
        setStatus(t("status_messages.error"));
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus(t("status_messages.error"));
    }
  };

  return (
    <Container id={"contact"} component={"section"}>
      <Box p={3}>
        <Typography
          variant="h4"
          textAlign={"center"}
          fontWeight={"bold"}
          py={2}
          color={COLOR_3}
        >
          {t("contact.contact_title")}
        </Typography>
        <Typography variant="body2" component="h2" fontSize={20}>
          {t("contact.write_details")}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="fullName"
            name="fullName"
            label={t("contact.full_name")}
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.fullName}
            onChange={handleChange}
          />
          <TextField
            id="email"
            name="email"
            label={t("contact.email")}
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="type-label">{t("contact.type")}</InputLabel>
            <Select
              labelId="type-label"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              label="Type"
            >
              <MenuItem value={"bug"}>{t("contact.bug")}</MenuItem>
              <MenuItem value={"contact"}>{t("contact.contact")}</MenuItem>
              <MenuItem value={"comment"}>{t("contact.comment")}</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="comment"
            name="comment"
            label={t("contact.comment")}
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={formData.comment}
            onChange={handleChange}
          />
          <Stack>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 1 }}
            >
              {t("contact.send")}
            </Button>
          </Stack>
        </form>
        {status && (
          <Typography variant="body2" color="error">
            {status}
          </Typography>
        )}
      </Box>
      <Box display="flex" justifyContent="center" pb={2}>
        <IconButton href="https://github.com/angeloChoque" target="_blank">
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Box>
    </Container>
  );
};

export default ContactMe;
