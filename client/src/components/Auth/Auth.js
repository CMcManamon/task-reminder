import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
  Icon,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSignup = true;

  const handleSubmit = () => {};

  const handleChange = () => {};

  const googleSuccess = async (res) => {
    const decoded = jwtDecode(res.credential);
    try {
      const user = {
        name: decoded.name,
        picture: decoded.picture,
        id: decoded.sub, // sub attribute is a unique identifier
      };

      dispatch({ type: "AUTH", data: user });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = async (error) => {
    console.log(error);
    console.log("Google Sign In was unsuccessful. Try Again Later");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <Avatar sx={{ margin: "auto" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Sign In</Typography>
        <GoogleLogin
          clientId={process.env.REACT_APP_PUBLIC_GOOGLE_API_TOKEN}
          render={(renderProps) => (
            <Button
              color="primary"
              fullWidth
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              variant="contained"
            >
              Google Sign In
            </Button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
        />
      </Paper>
    </Container>
  );
};
export default Auth;
