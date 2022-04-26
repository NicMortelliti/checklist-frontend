import React, { useContext } from "react";
import AcItem from "./AcItem";
import { AcContext } from "../context/ac";
import { Dialog, DialogTitle, Slide, Stack } from "@mui/material";

function AcListModal({ acArray }) {
  const { ac } = useContext(AcContext);

  // Material UI transition effect
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return !ac ? (
    <Dialog open={!ac} TransitionComponent={Transition}>
      <DialogTitle>Select an aircraft</DialogTitle>
      <Stack alignItems="center">
        {acArray.map(aircraft => (
          <AcItem key={aircraft.id} itemData={aircraft} />
        ))}
      </Stack>
    </Dialog>
  ) : null;
}

export default AcListModal;
