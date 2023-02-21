import { Avatar, Box, Button, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Paper, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import ThemeProvider from './contexts/ThemeProvider';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';

export default function App() {
  const [notas, setNotas] = useState([]);
  const [notaActual, setNotaActual] = useState({ nota: '', index: -1 });

  const agregarNota = () => {
    const nota = document.getElementById('nota').value;
    setNotas([...notas, nota]);
    document.getElementById('nota').value = '';
  };

  const eliminarNota = (index) => {
    if (index === notaActual.index) {
      setNotaActual({ nota: '', index: -1 });
    }
    const nuevasNotas = [...notas];
    nuevasNotas.splice(index, 1);
    setNotas(nuevasNotas);
  };
  const editarNota = () => {
    const nuevasNotas = [...notas];
    nuevasNotas[notaActual.index] = notaActual.nota;
    setNotas(nuevasNotas);
    setNotaActual({ nota: '', index: -1 });
  };

  const cancelarEdicion = () => {
    setNotaActual({ nota: '', index: -1 });
  };
  const eliminarTodasLasNotas = () => {
    setNotas([]);
    setNotaActual({ nota: '', index: -1 });
  };
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (notaActual.index === -1) {
        agregarNota();
      } else {
        editarNota();
      }
    }
  };

  const seleccionarNotaParaEditar = (index) => {
    setNotaActual({ nota: notas[index], index });
  };

 


  return (
    <ThemeProvider>
      <Typography variant='h4' component="h1" align='center'>
        Notas App
      </Typography>
      <Stack alignItems="center">
        <Box maxWidth="sm">
          <Paper sx={{ p: 2 }}>
            <Grid container>
              <Grid item xs={10} >
              <TextField id="nota" label="Nota" placeholder='Escribe tu nota' size='small' fullWidth onKeyDown={handleKeyPress} value={notaActual.index === -1 ? notaActual.nota : ''} onChange={(e) => setNotaActual({ ...notaActual, nota: e.target.value })} />
              </Grid>
              <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
{notaActual.index === -1 ? (
<Button variant='contained' color='success' onClick={agregarNota}>+</Button>
) : (
<>
<IconButton color='success' onClick={editarNota}>
<DoneIcon />
</IconButton>
<IconButton color='error' onClick={cancelarEdicion}>
<CancelIcon />
</IconButton>
</>
)}
</Grid>
<Grid item xs={12} >
<Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
Notas
</Typography>
<List>
{notas.map((nota, index) => (
<ListItem key={index}
secondaryAction={
<ListItemSecondaryAction>
{notaActual.index === index ? (
<>
<IconButton edge="end" aria-label="done" onClick={editarNota}>
<DoneIcon />
</IconButton>
<IconButton edge="end" aria-label="cancel" onClick={cancelarEdicion}>
<CancelIcon />
</IconButton>
</>
) : (
<IconButton edge="end" aria-label="edit" onClick={() => seleccionarNotaParaEditar(index)}>
<EditIcon />
</IconButton>
)}
<IconButton edge="end" aria-label="delete" onClick={() => eliminarNota(index)}>
<DeleteIcon />
</IconButton>
</ListItemSecondaryAction>
}
>
<ListItemAvatar>
<Avatar>
<FolderIcon />
</Avatar>
</ListItemAvatar>
<ListItemText
primary={notaActual.index === index ? (
<TextField value={notaActual.nota} onChange={(e) => setNotaActual({ ...notaActual, nota: e.target.value })} />
) : nota}
/>
</ListItem>
))}
</List>
<Button variant='contained' color='error' onClick={eliminarTodasLasNotas}>Eliminar todo</Button>
</Grid>
</Grid>
</Paper>
</Box>
</Stack>
</ThemeProvider>
)
}