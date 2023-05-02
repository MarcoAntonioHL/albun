import { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import estiloMuestra from './muestra.module.css';
import Button from '@mui/material/Button';
import {useRouter} from 'next/router';
import {useForm, Controller} from 'react-hook-form';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Contactos from '../contactos/infoContactos';


function InfoAdicional(){
  const router=useRouter()
  const {handleSubmit,control,reset}=useForm(
    {defaultValues:{
      name:''
    }} 
  );
  const onSubmit=(data)=>{
    console.log(data);
    reset();

  }
    return(
      <div>    
        <form onSubmit={handleSubmit(onSubmit)}> 
          <Controller
          name='palabras'
          control={control} 
          defaultValue=""
          rules={{required:false}}
          render={({field})=><input {...field} placeholder='Feliz dia Mamá'/>}
          />
          <button type='submit' onClick={()=>router.push('/Vistas/pagos')}>Reservar</button>
        </form>
      </div>
    )
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: ' #48c9b0',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

export default function Muestras(){
    const [open,setOpen]=useState(false);
    const [info,setInfo]=useState('');
    const handleOpen=(info)=>{
        setOpen(true);
        setInfo(info);
    }
    const handleClose=()=>{
        setOpen(false);
    }

    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
          bill: '25 s/',
          flavor:'chocolate',
          filling:'manjar',
          add:'castaña',
          decorate:'chantilly',
          itemDecorate:'frutillas'

        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
          precio: '20 s/',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
          precio: '10 s/',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
          precio: '5 s/',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            precio: '10 s/.',
        },
        
      ];
      
    return(
        <>
        <Contactos></Contactos>
        <div className={estiloMuestra.caja}>
            
            {/* caja de titulo*/}
            <div className={estiloMuestra.titulo}>
                <h1><p>Modelos</p></h1>
            </div>
            {/*caja de modelos*/}
            <ImageList className={estiloMuestra.imagelist} >
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>Precio: {item.bill}</span>}
                            position="below"
                        />
                    
                    <Button variant='outlined' onClick={()=>handleOpen(item)}>Descripcion</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Box sx={{ ...style, width: 400 }}>
                            <h2 id="parent-modal-title">{info.title}</h2>
                            <p id="parent-modal-description">
                                {info.flavor}
                            </p>
                        
                        
                        
                        </Box>
                    </Modal>
                    </ImageListItem>
                    
                ))}
            </ImageList>
            
            {/* boton de reserva*/}
            {/*<Button className={estiloMuestra.boton} variant='container' >Registrar</Button>*/}
            
        </div>
        </>
    )
}