import { Avatar, Box, Button, Grid, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Paper, TextField, } from '@mui/material';
import { Stack } from '@mui/system';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';



export default function NoteItem(props) {
    const {notaActual, index, editarNota, cancelarEdicion, seleccionarNotaParaEditar, eliminarNota, setNotaActual, nota} = props
    return (
        <ListItem
            secondaryAction={
                <ListItemSecondaryAction>
                    {notaActual.index === index ? (
                        <Stack direction='row' >
                            <IconButton edge="end" aria-label="done" onClick={editarNota}>
                                <DoneIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="cancel" onClick={cancelarEdicion}>
                                <CancelIcon />
                            </IconButton>
                        </Stack>
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
    )
}
