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

        margin: theme.spacing(2),
        paddingLeft: '10%',
        paddingRight: '10%',
        width: '100%',

    },
    main_media:{
        position: 'center',
       paddingLeft: '3%',
        align: 'center',
    },
    media: {
        width: '80vh',

        height: '50vh',

    },
}));

export default function Media() {

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
                title={ 'Face recognition'}
                subheader={ 'Python'}
            />
            <CardContent>
                { (
                    <Typography variant="h6" color="textSecondary" component="p">
                        {
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image."

                        }
                    </Typography>
                )}
            </CardContent>

                <div className={classes.main_media}>
                <CardMedia
                    className={classes.media}
                    image="https://files.realpython.com/media/face-detection-abba.ea2dcc6d3bda.jpg"
                    title="Face"
                />

                </div>

            <CardContent>
                { (
                    <Typography variant="h6" color="textSecondary" component="p" aria-setsize={12}>
                        {
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image." +
                            "Used openCV and a facial cascade to find faces in any given image."

                        }
                    </Typography>
                )}
            </CardContent>


        </Card>
    );
}

