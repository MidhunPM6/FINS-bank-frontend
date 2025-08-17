import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'


type Search = {
  placeholder?: string
  className?: string
}

const SearchInput = ({ placeholder, className }: Search) => {
  return (
    <Paper
      component='form'
      sx={{
        display: 'flex',
        p: '2px 4px',
        alignItems: 'center',
        width: '250px'
      }}
    >
      <InputBase
        placeholder={placeholder}
        className={className}
        inputProps={{ 'aria-label': 'Search for courses' }}
      />
      <IconButton type='button'  aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchInput
