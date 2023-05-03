import { useState } from "react"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import styles from './DescriptionCake.module.css';

const Transition =React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export function DescriptionCake({cake}) {
  const [open, setOpen] = useState(false);
  const { title, bill, Description, porciones,forma,dimenciones } = cake
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="secondary" onClick={()=>handleClickOpen()}>
        Descripcion
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={styles.bill}><p>{bill}</p><div className={styles.sl}>s/.</div></div>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {Description}
          </DialogContentText>
          <DialogContentText >
            <FavoriteBorderIcon fontSize="small"/> modelo: {forma}<br/>
            <FavoriteBorderIcon fontSize="small" />{porciones}porciones<br/>
            <FavoriteBorderIcon fontSize="small"/>tamaño:{dimenciones}<br/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


