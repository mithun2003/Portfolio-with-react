import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./main.css";
const Main = () => {
  return (
    <>
      <Box className="home">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box marginLeft="15vw">
              <Box width="68%">
                <Typography className="domain">
                  Python FullStack Developer
                </Typography>
              </Box>
              <Box>
                <Typography className="name">
                  Mithun <br />
                  Thomas
                </Typography>
              </Box>
              <Box className="vertical-line" textAlign="left">
                <Typography className="para">
                  Self taught Python Django with react.js full stack developer
                  based in Kollam, Kerala, curious to learn more about
                  developing scalable distributed systems, loves problem solving
                  and cares about writing readable as well as maintainable code.
                </Typography>
                <Box className="icons">
                  <Grid container spacing={2}>
                    <Grid item>
                      <a href="https://www.linkedin.com/in/mithunthomas3897/" target="_blank" className="icon-link">
                        <LinkedInIcon style={{ fontSize: 30,color:'white' }} />
                      </a>
                    </Grid>
                    <Grid item>
                      <a href="https://www.instagram.com" target="_blank" className="icon-link">
                        <InstagramIcon style={{ fontSize: 30,color:'white' }} />
                      </a>
                    </Grid>
                    <Grid item>
                      <a href="https://www.github.com/mithun2003" target="_blank" className="icon-link">
                        <GitHubIcon style={{ fontSize: 30,color:'white' }} />
                      </a>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box className="image">
              <img
                src="https://ober.bslthemes.com/wp-content/uploads/2021/11/profile4.png"
                alt="Mithun Thomas"
              />
              <span className="circle">
                <svg
                  width="749px"
                  height="375px"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    fillRule="evenodd"
                    fill="#ff8059"
                    d="M749.000,0.000 C749.000,206.786 581.459,374.514 374.608,374.514 C167.758,374.514 -0.000,206.786 -0.000,0.000"
                  />
                </svg>
              </span>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Main;
