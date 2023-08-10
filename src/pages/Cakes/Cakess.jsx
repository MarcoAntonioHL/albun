import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { itemData } from '../../data/cakes'
import { CardCake } from '@/src/components/CardCake'
import MenuLayout from '@/src/components/layout/menu'
import ThemeContext from '@/src/context/theme'
import styles from '@/src/styles/Home.module.css'

const Cakes = () => {
  return (
    <div className={styles.main}>
    <ThemeContext>
    <MenuLayout titulo='Tortas'>
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
    </MenuLayout>
    </ThemeContext>
    </div>
  )
}
export default Cakes;