import { Avatar, Box, Button, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import ThemeProvider from './contexts/ThemeProvider'
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

export default function App() {
  return (
    <ThemeProvider>
      <Typography variant='h4' component="h1" align='center'>Esto es lo primerito que estoy haciendo  </Typography>
      <Stack alignItems="center">
        <Box maxWidth="sm">
          <Paper sx={{ p: 2 }}>
            <Grid container>
              <Grid item xs={10} >
                <TextField label="Nota" placeholder='Escribe tu nota' size='small' fullWidth/>
              </Grid>
              <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button variant='contained' color='success'  >+</Button>
              </Grid>
              <Grid item xs={12} >
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                  Avatar with text and icon
                </Typography>
                <List >
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Single-line item"
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Stack>
    </ThemeProvider>
  )
}
