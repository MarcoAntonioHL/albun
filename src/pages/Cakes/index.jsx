import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
export const Cakes = () => {
  const lista = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          {lista &&
            lista.map(cake => (
              <Grid item xs={12} md={6} lg={4} key={cake}>
                {cake}
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </>
  )
}
