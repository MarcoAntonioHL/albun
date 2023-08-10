import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styles from '@/src/styles/Home.module.css'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Slide } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from 'next/link';

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 0 0 1px rgb(16 22 26 / 40%)'
        : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
        : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background:
        theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
  }));
  
  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  });

  const Transition =React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  // Inspired by blueprintjs
  function BpRadio(props) {
    return (
      <Radio
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    );
  }
export default function PersonalizarProducto() {
    const [open,setOpen]=useState(false)
    const [sabor,setSabor]=useState('')
    const [agregado,setAgregado]=useState('')
    const [relleno,setRelleno]=useState('')
    const [decorado,setDecorado]=useState('')
    const handleChangeSabor=(event)=>{
        console.log(event.target.value)
        setSabor(event.target.value)
    }
    const handleChangeAgregado=(event)=>{
        console.log(event.target.value)
        setAgregado(event.target.value)
    }
    const handleChangeRelleno=(event)=>{
        console.log(event.target.value)
        setRelleno(event.target.value)
    }
    const handleChangeDecorado=(event)=>{
        console.log(event.target.value)
        setDecorado(event.target.value)
    }
    const handleSend=()=>{
        console.log(sabor,agregado,relleno,decorado)
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
  return (
    < >
        <FormControl sx={{left:'25%'}}>
        <Grid container spacing={5}>
            <Grid item xs={6}>
                <FormLabel id="sabor">Sabor</FormLabel>
            <Box >
                <RadioGroup
                    defaultValue="Naranja"
                    aria-labelledby="demo-customized-radios"
                    name="customized-radios"
                    onChange={handleChangeSabor}
                >
                    
                    <FormControlLabel value="Vainilla" control={<BpRadio />} label="Vainilla" />
                    <FormControlLabel value="Chocolate" control={<BpRadio />} label="Chocolate" />
                    <FormControlLabel value="naranja" control={<BpRadio />} label="Naranja" />
                    <FormControlLabel value="yogurt" control={<BpRadio />} label="Yogurt" />
                    <FormControlLabel
                    value="disabled"
                    disabled
                    control={<BpRadio />}
                    label="otros"
                    />
                </RadioGroup>   
            </Box>
            </Grid>

        <Grid item xs={6} >
        <FormLabel id="Agregado">+Agregado</FormLabel>
        <Box >
        <RadioGroup
            defaultValue="Naranja"
            aria-labelledby="demo-customized-radios"
            name="customized-radios"
            onChange={handleChangeAgregado}
        >
            
            <FormControlLabel value="Confitado" control={<BpRadio />} label="Confitado" />
            <FormControlLabel value="Pasas" control={<BpRadio />} label="Pasas" />
            <FormControlLabel value="Fruta" control={<BpRadio />} label="Fruta" />
            <FormControlLabel value="Castaña" control={<BpRadio />} label="Castaña" />
            <FormControlLabel value="Pecanas" control={<BpRadio />} label="Pecanas" />
            <FormControlLabel value="Chocolate" control={<BpRadio />} label="Chocolate" />
            <FormControlLabel
            value="disabled"
            disabled
            control={<BpRadio />}
            label="otros"
            />
        </RadioGroup> 
        </Box>
        </Grid>

        <Grid item xs={6}>
        <FormLabel id="Relleno">Relleno</FormLabel>
        <Box >
        <RadioGroup
            defaultValue="Naranja"
            aria-labelledby="demo-customized-radios"
            name="customized-radios"
            onChange={handleChangeRelleno}
        >
            
            <FormControlLabel value="Mermelada" control={<BpRadio />} label="Mermelada" />
            <FormControlLabel value="Manjar" control={<BpRadio />} label="Manjar" />
            <FormControlLabel value="chantilly" control={<BpRadio />} label="chantully" />
            <FormControlLabel
            value="disabled"
            disabled
            control={<BpRadio />}
            label="otros"
            />
        </RadioGroup>
        </Box>
        </Grid>

        <Grid item xs={6}>
        <FormLabel id="Decorado">Decorado</FormLabel>
        <Box>
        <RadioGroup
            defaultValue="Naranja"
            aria-labelledby="demo-customized-radios"
            name="customized-radios"
            onChange={handleChangeDecorado}
        >
            
            <FormControlLabel value="Chantilly" control={<BpRadio />} label="Chantilly" />
            <FormControlLabel value="Fondant" control={<BpRadio />} label="Fondant" />
            
            <FormControlLabel
            value="disabled"
            disabled
            control={<BpRadio />}
            label="otros"
            />
        </RadioGroup>
        </Box>
        </Grid>
        </Grid>
        <Grid container spacing={5}>
            <Grid item xs={8}>
                <Button variant='contained' color='secondary'>Salir</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant='contained' onClick={handleSend}>Siguiente</Button>
            </Grid>
        </Grid>
        </FormControl>
        
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            
            <DialogTitle>Descripcion del producto</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                Descripcion
            </DialogContentText>
            <DialogContentText >
                <FavoriteBorderIcon fontSize="small"/> {sabor}<br/>
                <FavoriteBorderIcon fontSize="small" />{agregado}<br/>
                <FavoriteBorderIcon fontSize="small"/>{relleno}<br/>
                <FavoriteBorderIcon fontSize="small"/>{decorado}<br/>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Link href={'/Cakes/Cakess'}>
                <Button variant='contained'>Correcto</Button>
            </Link>
            </DialogActions>
        </Dialog>    
        

    </>
    


  )
}
