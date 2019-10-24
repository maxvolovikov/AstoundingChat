import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
//import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {CTX} from './Store';

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
    

    // CTX context store 
    const {allChats, sendChatAction, user} = React.useContext(CTX);

    const topics = Object.keys(allChats);

    //local state
    const [activeTopic, changeActiveTopic] = React.useState(topics[0])
    
    return (
        <div className ="dash">
            <Paper className={classes.root}>
                <Typography variant="h4" component="h4">
                AT Chat
                </Typography>
                <Typography variant="h5" component="h5">
                {activeTopic}
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List component="nav" aria-label="secondary mailbox folders">
                            {
                                topics.map( (topic, j) => (
                                    <ListItem onClick={e=>changeActiveTopic(e.target.innerText)} button key={topic}>
                                        <ListItemText primary={topic} />
                                    </ListItem>    
                                ))
                            }
                        </List>
                    </div>    
                    <div className={classes.chatWindow}>
                        {
                            allChats[activeTopic].map( (chat, i) => (
                                <div className={classes.flex} key={i}>
                                    <Chip label={chat.from} variant="outlined" />       
                                    <Typography variant="body1" gutterBottom>  {chat.msg} </Typography>                            
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
                    <Button 
                        variant="contained" 
                        size="medium" 
                        color="primary" 
                        className={classes.button}
                        onClick={()=>{
                            sendChatAction({msg: textValue, from: user, topic: activeTopic});
                            changeTextValue('');
                        }}
                    >
                        Send
                    </Button>
                </div>
            </Paper>

        </div>
    )
}