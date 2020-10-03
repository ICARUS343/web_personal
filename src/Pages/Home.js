import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import homeImage from '../Resources/Photos/homePage.jpg';
import Typing from 'react-typing-animation';
import GetAppIcon from '@material-ui/icons/GetApp';
import {
    Button,
    Divider,
    Grid,
    Header,
    Image,

    Segment,

} from 'semantic-ui-react';
import Resume from "../Resources/Resume_PS_GRP.pdf";

const useStyles = makeStyles(theme => ({
    root: {
        padding: 'theme.spacing(9, 5)',
        overflow: 'hidden'
    },
}));

export default function Home() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box>
                <Segment style={{padding: '8em 0em'}} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>

                                <Header as='h3' style={{fontSize: '2em'}}>
                                    <Typing>
                                    <span>Hello. I am Praphul!</span>
                                    </Typing>
                                </Header>
                                <p style={{fontSize: '1.33em'}}>
                                        I am currently a senior at the University of Rochester. I study computer science and
                                        I am really passionate about learning and working on new tech.
                                        I enjoy photography, biking and table tennis.
                                </p>
                            </Grid.Column>

                            <Grid.Column floated='right' width={6}>
                                <Image bordered rounded size='large' src={homeImage}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>


                <Segment style={{padding: '0em'}} vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>

                            <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                                <Header as='h3' style={{fontSize: '2em'}}>
                                    Check out my timeLine?
                                </Header>
                                <p style={{fontSize: '1.33em'}}>View at my life events as a time line</p>
                                <Button as='a' size='large'>
                                    TimeLine
                                </Button>
                                <Grid.Row style={{paddingTop: '5em'}}>
                                    <p style={{fontSize: '1.33em'}}> Or download my resume here.</p>
                                    <Button as='a' size='large' >
                                        <GetAppIcon color = 'primary' style={ {fontSize : '1.2em'}}/>
                                        <span style={ {fontSize : '1.5em'}} >RESUME</span>
                                        <a href={Resume}></a>

                                    </Button>
                                </Grid.Row>
                            </Grid.Column>

                            <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                                <Header as='h3' style={{fontSize: '2em'}}>
                                    Gallery
                                </Header>
                                <p style={{fontSize: '1.33em'}}>
                                    <p>I enjoy photography.</p>

                                    I use my Nikon D5300 with a 18-140mm for most of my shots. </p>
                                <Button as='a' size='large'>
                                    View
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Box>
        </div>
    );
}