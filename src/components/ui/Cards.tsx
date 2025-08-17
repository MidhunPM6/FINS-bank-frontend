import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'



const Cards = ({obj}:any) => {
  return (
    <>
      <Box width='400px'>
        <Card>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
             {obj.name}
            </Typography>
            <Typography gutterBottom component='div'>
              {obj.description}
            </Typography>

          </CardContent>
          <CardActions>
          
          
          </CardActions>
        </Card>
      </Box>
    </>
  )
}

export default Cards
