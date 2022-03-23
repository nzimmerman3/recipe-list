import React from "react";
import { AppBar, Container, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  let navigate = useNavigate();

  return (
    <div>
      <AppBar position="static" color="primary">
        <Container>
          <div className="footer">
            <div>
              <FacebookIcon
                className="footer-clickable footer-facebook"
                onClick={() => window.open("https://www.facebook.com/")}
              />
              <TwitterIcon
                className="footer-clickable footer-twitter"
                onClick={() => window.open("https://www.twitter.com/")}
              />
              <YouTubeIcon
                className="footer-clickable footer-youtube"
                onClick={() => window.open("https://www.youtube.com/")}
              />
              <InstagramIcon
                className="footer-clickable footer-instagram"
                onClick={() => window.open("https://www.instagram.com/")}
              />
              <PinterestIcon
                className="footer-clickable footer-pinterest"
                onClick={() => window.open("https://www.pinterest.com/")}
              />
            </div>
            <div>
              <Typography
                variant="h6"
                className="footer-title"
                onClick={() => navigate("/")}
              >
                My Recipes
              </Typography>
            </div>
            <div>
              <Typography>Copyright</Typography>
            </div>
          </div>
        </Container>
      </AppBar>
    </div>
  );
};

export default Footer;
