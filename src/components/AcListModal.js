import React, { useContext } from "react";
import AcItem from "./AcItem";
import { AcContext } from "../context/ac";
import { Dialog, Slide, Typography } from "@mui/material";

function AcListModal({ acArray }) {
  const { ac } = useContext(AcContext);

  // Material UI transition effect
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <Dialog
      fullScreen
      open={!ac}
      // onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Typography sx={{ m1: 2, flex: 1 }} variant="h6" component="div">
        Select an aircraft
      </Typography>
      {acArray.map(aircraft => (
        <AcItem key={aircraft.id} itemData={aircraft} />
      ))}
    </Dialog>
  );
}

export default AcListModal;
