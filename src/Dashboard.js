import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { height } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3, 2),
    },
    flex: {
        display: 'flex',
    },
    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid grey'
    },
    chatWindow: {
        width: '70%'

    },
    chatBox: {
        width: '85%'

    },
    button: {
        width: '15%'

    }
}));

export default function Dashboard() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h4" component="h3">
                Chatter App
      </Typography>
            <Typography component="h5">
                Placeholder
      </Typography>
            <div className={classes.flex}>
                <div className={classes.topicsWindow}>
                </div>
                <div className={classes.chatWindow}>
                </div>
            </div>
            <div className={classes.flex}>

            </div>
        </Paper>
    );
}