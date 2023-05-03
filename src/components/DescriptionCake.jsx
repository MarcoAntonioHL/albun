import { Box, Button, Modal } from "@mui/material"
import { React, useState } from "react"
import CakeIcon from '@mui/icons-material/Cake'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: " #48c9b0",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const DescriptionCake = ({ cake }) => {
  const [open, setOpen] = useState(false);

  const { title, bill, flavor, filling, add, decorate, itemDecorate } = cake

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => handleOpen()}
        variant="contained"
        fullWidth
        startIcon={<CakeIcon />}
        sx={{
          color: '#31504F',
          marginY: 2
        }}
      >
        Detalles
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h1>{bill}</h1>
          <h2 id="parent-modal-title">{title}</h2>
          <p id="parent-modal-description">
            Torta de {flavor} con relleno de {filling},
            frutos secos.
          </p>
          <p>Decorado en {decorate}
          con {add} con detalles {itemDecorate}
          </p>
          
        </Box>
      </Modal>
    </>
  );
};
