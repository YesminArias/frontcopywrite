import React from "react";
import {  useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import { Card, Paper } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function LandingPage() {

  const textResult = useSelector((state) => state.historial);

  return (
    <Paper
      sx={{
        backgroundColor: "#bdbdbd",
        height: "100vh",
      }}
    >
      <SearchBar />
      <Card
        sx={{
          width: "70vw",
          display: "flex",
          justifyContent: "space-evenly",
          alignContent: "center",
          margin: "auto",
          marginTop: "38px",
        }}
      >
        {textResult.length === 0 ? <span></span> : <h1>Results: </h1>}

        <div>
          {textResult.length === 0 ? (
            <span></span>
          ) : (
            textResult.map((e) => {
              return (
                <Card
                  key={e.text}
                  sx={{
                    width: "40vw",
                    height: "5vh",
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "15px",
                    paddingLeft: "8px",
                    alignItems: "center",
                    fontFamily: "roboto",
                  }}
                >
                  {e.text}{" "}
                  {e.palindrome === true ? (
                    <Alert severity="success">Palindrome</Alert>
                  ) : (
                    <Alert severity="error">No Palindrome</Alert>
                  )}
                </Card>
              );
            })
          )}
        </div>
      </Card>
    </Paper>
  );
}
