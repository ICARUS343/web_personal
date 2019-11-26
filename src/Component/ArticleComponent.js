import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LongMenu from "./VerticalIcon";

const useStyles = makeStyles(theme => ({
    card: {
        paddingLeft: '10%',
        paddingRight: '10%',
        width: '100%',

    },
    main_media:{
        position: 'center',
        align: 'center',
        width: '80vh',
        height: '50vh'
    },

}));

export default function Media(props) {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={

                        <Avatar
                            alt="GitHub"
                            src="https://cdn1.iconfinder.com/data/icons/social-media-vol-1-1/24/_github-512.png"
                        />

                }
                action={

                        <IconButton aria-label="settings">
                           <LongMenu/>
                        </IconButton>

                }
                title={ <Typography variant="h5">{props.title}</Typography>}
                subheader={ 'Python'}
            />
            <CardContent>
                { (
                    <Typography variant="h6" color="textSecondary" component="p">
                        {
                            props.content1

                        }
                    </Typography>
                )}
            </CardContent>


                <CardMedia
                    className = {classes.main_media}
                    image={props.image}
                    title="Face"
                />



            <CardContent>
                { (
                    <Typography variant="h6" color="textSecondary" component="p" aria-setsize={12}>
                        {
                            props.content2

                        }
                    </Typography>
                )}
            </CardContent>


        </Card>
    );
}

