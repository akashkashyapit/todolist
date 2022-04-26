import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import CommonCard from "../component/CommonCard";

function Home() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const onCreate = () => {
    if (title != "" && text != "") {
      setData([...data, { title: title, text: text }]);
      setText("");
      setTitle("");
    }
  };
  return (
    <div>
      <Box
        sx={{
          height: "90vh",
          width: "95%",
          //   background: "rgb(226, 224, 224)",
          margin: "auto",
          borderRadius: 10,
          boxShadow: "1px 2px 10px 1px",
        }}
      >
        <h1>To do App</h1>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={3}>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              sx={{ background: "#fff" }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="outlined-basic"
              label="Write your task"
              variant="outlined"
              fullWidth
              value={text}
              onChange={(event) => {
                setText(event.target.value);
              }}
              sx={{ background: "#fff" }}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="success"
              onClick={() => onCreate()}
            >
              CREATE
            </Button>
          </Grid>
        </Grid>

        {data.map((d, i) => {
          return (
            <Box
              sx={{
                background: "#fff",
                height: 50,
                width: "95%",
                margin: "auto",
                marginBottom: 1,
                marginTop: 2,
                // border: "1px solid black",
                borderRadius: 3,
                background: "rgb(226, 224, 224)",
              }}
              key={i}
            >
              <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={2}>
                  {d.title}
                </Grid>
                <Grid item xs={6}>
                  {d.text}
                </Grid>
                <Grid item xs={2}>
                  <Button variant="text">edit</Button>
                </Grid>
                <Grid item xs={2}>
                  <Button variant="text">delete</Button>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Box>
    </div>
  );
}

export default Home;
