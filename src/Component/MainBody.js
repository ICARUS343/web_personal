import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {
    Button,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
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
                                Built for fun
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                I built this website first just to play around with react and some backend with MongoDB then decided to
                                put up some articles which might be helpful for CS students and decided to host it.
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
                            <Link to="/ArticlePage">
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
                            <p style={{ fontSize: '1.33em' }}>It's amazing!! Find out more.</p>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                "Paranoid about apps tracking you?"
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                 Learn about analytics and stay one step ahead.
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
                        Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
                        it's really true. It took years of gene splicing and combinatory DNA research, but our
                        bananas can really dance.
                    </p>
                    <Button as='a' size='large'>
                        I'm Still Quite Interested
                    </Button>
                </Container>
            </Segment>
            <Segment inverted vertical style={{ padding: '5em 0em' }}>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='About' />
                                <List link inverted>
                                    <List.Item as='a'>Sitemap</List.Item>
                                    <List.Item as='a'>Contact Us</List.Item>
                                    <List.Item as='a'>Religious Ceremonies</List.Item>
                                    <List.Item as='a'>Gazebo Plans</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Services' />
                                <List link inverted>
                                    <List.Item as='a'>Banana Pre-Order</List.Item>
                                    <List.Item as='a'>DNA FAQ</List.Item>
                                    <List.Item as='a'>How To Access</List.Item>
                                    <List.Item as='a'>Favorite X-Men</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Header as='h4' inverted>
                                    Footer Header
                                </Header>
                                <p>
                                    Extra space for a call to action inside the footer that could help re-engage users.
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </Box>
        </div>
    );
}