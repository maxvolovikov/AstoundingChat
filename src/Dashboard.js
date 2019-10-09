import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3, 2),
    },
    flex: {
        display: 'flex',
        allignItems: 'center',
    },
    topicsWindow: {
        width:'30%',
        height: '300px',
        borderRight:'1px solid grey'
    },
    chatWindow: {
        width:'70%',
        height: '300px',
        padding: '20px',
    },
    chatBox: {
        width:'85%',
    },
    button: {
        width:'15%',
    },
  }));

export default function Dashboard(){
    const classes = useStyles();
    const [textValue, changeTextValue] = React.useState('');

    return (
        <div className ="dash">
            <Paper className={classes.root}>
                <Typography variant="h4" component="h4">
                Astounding Chat
                </Typography>
                <Typography variant="h5" component="h5">
                Main body of a chat app
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List component="nav" aria-label="secondary mailbox folders">
                            {
                                ['oneMessage','twoMessage', 'threeMessage'].map( (topic) => (
                                    <ListItem button key={topic}>
                                        <ListItemText primary={topic} />
                                    </ListItem>    
                                ))
                            }
                        </List>
                    </div>    
                    <div className={classes.chatWindow}>
                        {
                            [{user:'user1', text:'text1'},{user:'user2', text:'text2'},{user:'user3', text:'text3'}].map( (chat, i) => (
                                <div button key={chat}>
                                    <Chip label={chat.user} variant="outlined" key={i} />       
                                    <Typography variant='p' > {chat.text} </Typography>                            
                                </div>    
                            ))
                        }
                    </div>   
                </div>
                <div className={classes.flex}>
                    <TextField
                        label="Send a Message"
                        className={classes.chatBox}
                        value={textValue}
                        onChange={event => changeTextValue(event.target.value)}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button variant="contained" size="medium" color="primary" className={classes.button}>
                        Send
                    </Button>
                </div>
            </Paper>

        </div>
    )
}