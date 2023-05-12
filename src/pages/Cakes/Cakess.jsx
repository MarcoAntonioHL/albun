import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { itemData } from '../../data/cakes'
import { CardCake } from '@/src/components/CardCake'

const Cakes = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          {itemData && itemData.map((cake, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <CardCake cake={cake}/>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </>
  )
}
export default Cakes;