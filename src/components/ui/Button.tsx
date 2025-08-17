'use client'

import Button, { ButtonProps } from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import { SxProps } from '@mui/material/styles'
import { Theme } from '@mui/system'

type RestrictedSx = SxProps<Theme> & {
  color?: 'white' | 'black'
  backgroundColor?: '#33BAEB' | '#F9F9F9' | '#0083E6'
  fontSize?: '20px' | '10px' | '30px',
 
  
}

interface MyButtonProps extends ButtonProps {
  label: string
  variant: 'text' | 'outlined' | 'contained'
  color?: 'error' | 'secondary' | 'success'
  className?: string
  sx?: RestrictedSx
  endIcon?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
}

const Mybutton = ({
  variant,
  label,
  color,
  className,
  sx,
  endIcon,
  size,
  ...props
}: MyButtonProps) => {
  return (
    <>
      
        <Button
          variant={variant}
          color={color}
          {...props}
          sx={{...sx,textTransform :'none'}}
          disableRipple={props.disableRipple ?? true}
          endIcon={endIcon}
          size={size}
          
        >
          {label}
        </Button>
      
    </>
  )
}

export default Mybutton
