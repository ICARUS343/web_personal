import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Media from "../Component/Project";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function NestedGrid() {
    const classes = useStyles();


    return (
        <Container>
            <Box my={2}>
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                   <Media/>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Media/>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                   <Media/>
                </Grid>
            </Grid>
        </div>
            </Box>
        </Container>
    );
}

