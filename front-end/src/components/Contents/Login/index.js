import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

import { Box, Container, Typography, Stack, Avatar, TextField, Button, Link,} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SendIcon from "@mui/icons-material/Send";

import { API } from '../../../api/constant';

export default function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((state) => ({ ...state, [name]: value }));
  }
  
  async function loginCheck(){
    const url = `${API.USER.LOGIN}`;
    const options = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values),
    }
    const result = await fetch(url, options);
    const loginUserData = await result.json();
    if(result.status === 200){
      localStorage.setItem("loginUserData", JSON.stringify(loginUserData));
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }

  return(
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
              bgcolor: "primary.main",
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
            name="email"
            value={values.email}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            required
            id="outlined-password-input"
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            name="password"
            value={values.password}
            onChange={(e) => handleChange(e)}
          />
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            fullWidth
            sx={{ fontSize: 14 }}
            onClick={()=>loginCheck()}
          >SIGN IN</Button>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={12}
            sx={{ width: "100%" }}
          >
            <Link href="#" variant="body2">Forgot password?</Link>
            <Link href="#" variant="body2">Sign up now?</Link>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}