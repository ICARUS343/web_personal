import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {
    Button,
    Divider,
    Grid,
    Header,
    Image,

    Segment,

} from 'semantic-ui-react';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

export default function MainBody() {


    return (
        <div>
        <Box>
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Hi! I am Praphul Shivakoti
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Lorem ipsum
                            </p>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Want to check out some fun projects!!
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                               Check out how apache kafka works and implement MongoDB in your react web app.
                            </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Image bordered rounded size='large' src='https://ak1.ostkcdn.com/images/products/is/images/direct/468343eaff46e86e1e95741836fc6e54b81642c9/Flight-of-Icarus-Cold-Cast-Bronze-Greek-Mythology-Statue.jpg?impolicy=medium' />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <Link to="/AuthPage">
                            <Button size='huge' >Check Them Out</Button>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment style={{ padding: '0em' }} vertical>
                <Grid celled='internally' columns='equal' stackable>
                    <Grid.Row textAlign='center'>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                "What is Apache Kafka?"
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>It's an streaming platform capable of handling trillions of events a day.
                                <br/>Find out more.</p>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                "Paranoid about apps tracking you?"
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                 Learn more about platforms like google analytics and amplitude
                                <br/>and stay one step ahead.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Container text>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                        What is Apcahe Kafka?
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Instead of focusing on content creation and hard work, we have learned how to master the
                        art of doing nothing by providing massive amounts of whitespace and generic content that
                        can seem massive, monolithic and worth your attention.
                    </p>
                    <Button as='a' size='large'>
                        Read More
                    </Button>
                    <Divider
                        as='h4'
                        className='header'
                        horizontal
                        style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                    >
                        <a href='#'>Case Studies</a>
                    </Divider>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                        Did We Tell You About Our Bananas?
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        View my resume as a timeline.
                    </p>
                    <Button as='a' size='large'>
                        Time-Line
                    </Button>
                </Container>
            </Segment>

        </Box>
        </div>
    );
}