import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import classes from "../mainNavigation/Footer.module.css";

const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: "#1a237e",
  color: "#fff",
  padding: theme.spacing(6, 0),
  position: "sticky",
  bottom: 0,
  width: "100%",
  //   zIndex: 1000,
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: "#fff",
  margin: theme.spacing(0, 1),
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.2)",
    color: "#90caf9",
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: "#fff",
  textDecoration: "none",
  transition: "color 0.2s",
  "&:hover": {
    color: "#90caf9",
  },
}));

const Footer = () => {
  const [email, setEmail] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubscribe = () => {
    if (email) {
      console.log("Subscribed with email:", email);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              За Нас
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Ние сме ангажирани да предоставяме изключителни услуги и решения
              на нашите ценни бягания.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Бързи линкове
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <FooterLink
                href="/начало"
                onClick={scrollToTop}
                aria-label="Navigate to Home"
              >
                Начало
              </FooterLink>
              <FooterLink
                href="/за насс"
                onClick={scrollToTop}
                aria-label="Navigate to Products"
              >
                За нас
              </FooterLink>
              <FooterLink
                href="/резултати"
                onClick={scrollToTop}
                aria-label="Navigate to Contact"
              >
                Резултати
              </FooterLink>
              <FooterLink
                href="/джаджи"
                onClick={scrollToTop}
                aria-label="Navigate to Contact"
              >
                Джаджи
              </FooterLink>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Информация за контакти
            </Typography>
            <Typography variant="body2" component="div">
              <Box mb={1}>ул. Незабравка Ибраимоваа 78</Box>
              <Box mb={1}>България, Шумен 9700</Box>
              <Box mb={1}>Телефон: +1 234 567 8900</Box>
              <Box>Имейл: info@example.com</Box>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Булетин
            </Typography>
            <Box component="form" noValidate>
              <TextField
                fullWidth
                size="small"
                placeholder="напиши своя имеил"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 1,
                  input: { color: "#fff" },
                }}
                aria-label="Newsletter subscription email input"
              />
              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "#90caf9",
                  "&:hover": { backgroundColor: "#42a5f5" },
                }}
                onClick={handleSubscribe}
                aria-label="Subscribe to newsletter"
              >
                Абонирай се
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" align={isMobile ? "center" : "left"}>
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </Typography>

          <Box>
            <SocialIcon
              aria-label="Visit our FaceBook page"
              onClick={() =>
                window.open("https://www.facebook.com/groups/118564220164455")
              }
            >
              <FaFacebook />
            </SocialIcon>
            <SocialIcon
              aria-label="Visit our Twitter page"
              onClick={() => window.open("https://x.com/tweeter?lang=bg")}
            >
              <FaTwitter />
            </SocialIcon>
            <SocialIcon
              aria-label="Visit our Instagram page"
              onClick={() =>
                window.open("https://www.instagram.com/shumenearlyrunners/")
              }
            >
              <FaInstagram />
            </SocialIcon>
            <SocialIcon
              aria-label="Visit our LinkedIn page"
              onClick={() => window.open("https://www.linkedin.com/feed/")}
            >
              <FaLinkedin />
            </SocialIcon>
          </Box>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
