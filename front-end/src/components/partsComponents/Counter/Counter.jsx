import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../../features/CounterSlice";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const CustomButton = styled(Button)({
  borderRadius: "3rem",
});

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <Stack
        spacing={8}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Button
          endIcon={<RemoveCircleIcon />}
          variant="contained"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <CustomButton variant="contained" color="secondary">
          Count:{count}
        </CustomButton>
        <Button
          startIcon={<AddCircleIcon />}
          variant="outlined"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
      </Stack>
      <Stack spacing={8} direction="row" mt={2}>
        <Button
          variant="outlined"
          onClick={() => dispatch()}
          startIcon={<AddCircleIcon />}
        >
          SHOW ICON
        </Button>
      </Stack>
    </div>
  );
}
