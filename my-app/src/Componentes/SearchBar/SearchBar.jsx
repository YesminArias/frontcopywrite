import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getText } from "../../Redux/actions";
import {
  Button,
  FormControl,
  OutlinedInput,
  AppBar,
  Toolbar,
} from "@mui/material";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getText(text));
    setText("");
  };

  return (
    <div>
      <AppBar
        size="large"
        color="error"
        position="static"
        sx={{
          backgroundColor: "error.dark",
          height: "10vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Toolbar>
          <FormControl>
            <OutlinedInput
              id="component-outlined"
              placeholder="Insert text..."
              value={text}
              onChange={handleInputChange}
              sx={{
                backgroundColor: "common.white",
                width: "30vw",
                height: "4vh",
              }}
            />
          </FormControl>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              marginLeft: "15px",
              width: "8vw",
            }}
          >
            Send
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
