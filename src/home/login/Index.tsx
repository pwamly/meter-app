import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './login.css';

function Index() {


  return (
    <div id="wrap">
       <div style={{ height: "150px", width: "100%" ,background:'red'}}>
        <img
          src={require("../../assets/tanesco-pc.jpg")}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    <Card sx={{ display: "flex", justifyContent: "center", width: "100%",height:'400px',background:'' }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "90%",
        }}
      >
        <TextField
          id="standard-multiline-flexible"
          label="Room No"
          variant="filled"
          fullWidth={true}
          sx={{ textAlign:'center' }}
        />{" "}
        <TextField
          id="standard-multiline-flexible"
          label="Password"
          variant="filled"
          fullWidth={true}
          sx={{  }}
        />{" "}
  
        <Button variant="contained" disableElevation >
          Sign in
        </Button>
      </div>
    </Card></div>
  );
}

export default Index;
