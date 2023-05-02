import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { itemData } from '../data/cakes';
import { DescriptionCake } from './DescriptionCake';
import Grid from '@mui/material/Grid'
import { ButtonBuy } from './ButtonBuy';



export const CardCake = ({ cake }) => {
  const { img, title, bill } = cake

  return (
    <>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height="240"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {bill}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
          >
            <Grid item xs={6}>
              <DescriptionCake cake={cake}></DescriptionCake>
            </Grid>
            <Grid item xs={6}>
              <ButtonBuy cake={cake}/>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  )
}
