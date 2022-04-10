import React from "react";

import {
  Box,
  Container,
  Typography,
  Stack,
  Avatar,
  TextField,
  Button,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SendIcon from "@mui/icons-material/Send";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login() {
  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: "100vh", width: "100%" }}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            py={6}
          >
            <Avatar
              sx={{
                bgcolor: "secondary.main",
                "&.MuiAvatar-root": {
                  fontSize: "30px",
                },
              }}
            >
              <LockOutlinedIcon fontSize="large" />
            </Avatar>
            <Typography variant="h3">Sign in</Typography>
            <TextField
              required
              fullWidth
              id="email"
              type="email"
              label="Email Address"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-password-input"
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
            />
            <Button
              variant="contained"
              color="secondary"
              endIcon={<SendIcon />}
              fullWidth
              sx={{ fontSize: 14 }}
            >
              SIGN IN
            </Button>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={12}
              sx={{ width: "100%" }}
            >
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Stack>
          </Stack>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
