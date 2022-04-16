import React, { useState, useEffect } from "react";

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
import { useNavigate } from "react-router-dom";

import { isLogin } from "API/function";

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
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("loginState")) navigate("/");
  }, []);

  const [email, setEmail] = useState({
    errState: false,
    errMsg: "必須：メールアドレスを入力してください。",
  });

  const [password, setPassword] = useState({
    errState: false,
    errMsg: "必須：パスワードを入力してください。",
  });

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  function isCheck() {
    if (values.email === "" || values.password === "") {
      values.email === ""
        ? setEmail({ ...email, errState: true })
        : setEmail({ ...email, errState: false });
      values.password === ""
        ? setPassword({ ...password, errState: true })
        : setPassword({ ...password, errState: false });
      return false;
    }
    return true;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  async function handleSend() {
    if (!isCheck()) return;
    try {
      const result = await isLogin(values);
      if (!result) {
        throw new Error("入力情報に誤りがあります。");
      } else {
        localStorage.setItem("loginState", true);
        localStorage.setItem("loggingInUser", JSON.stringify(result));
        navigate("/");
      }
    } catch (err) {
      setEmail({ ...email, errState: true, errMsg: err.message });
      setPassword({ ...password, errState: true, errMsg: err.message });
    }
  }
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
              name="email"
              value={values.email}
              error={email.errState}
              helperText={email.errState ? email.errMsg : ""}
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
              error={password.errState}
              helperText={password.errState ? password.errMsg : ""}
              onChange={(e) => handleChange(e)}
            />
            <Button
              variant="contained"
              color="secondary"
              endIcon={<SendIcon />}
              fullWidth
              sx={{ fontSize: 14 }}
              onClick={() => handleSend()}
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
