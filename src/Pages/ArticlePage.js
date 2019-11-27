import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from "@material-ui/core/Container";
import Media from "../Component/ArticleComponent";


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    main:{
        paddingLeft: '10%',
        paddingRight: '10%',
        height: '100%',
    },
    root: {
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        borderRight: `1px solid ${theme.palette.divider}`,
        width: '200px',
        height: '100vh', /* Full-height: remove this if you want "auto" height */
        position: 'fixed', /* Fixed Sidebar (stay in place on scroll) */
        zIndex: 1, /* Stay on top */
    },
    second:{
        backgroundColor: '#b0b0ab',
        marginLeft: '200px', /* Same as the width of the sidebar */
    }
}));

export default function ArticlePage() {

    const face_recognition = ["Used openCV and a facial cascade to find faces in an image.\n"  +
    " The [haarcascade_frontalface_default.xml]  Stump-based 24x24 discrete adaboost frontal face detector" +
    " created by Rainer Lienhart.",
        "To run the code clone or download the project repo from GitHub. " +
        "Install python 3 in your computer."
        ,"https://files.realpython.com/media/face-detection-abba.ea2dcc6d3bda.jpg"]





    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
       <div className={classes.main}>
        <Box my ={2}>
        <div className={classes.root}>

            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
            >


                <Tab label="Face recognition" {...a11yProps(0)} />
                <Tab label="Kafka Introduction" {...a11yProps(1)} />
                <Tab label="Kafka Producer in Java" {...a11yProps(2)} />
                <Tab label="Kafka Consumer in Java" {...a11yProps(3)} />
                <Tab label="Using faker in ReactJS" {...a11yProps(4)} />
                <Tab label="A basic database implementation in C" {...a11yProps(5)} />



            </Tabs>
        </div>
        </Box>
           <div className={classes.second}>
           <Box my={2}>

            <Container >
            <TabPanel value={value} index={0}>
                <Media title = {'Face Recognition'}
                       content1 = {face_recognition[0]}
                       content2 =  {face_recognition[1]}
                image = {face_recognition[2]}


                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                {[...new Array(120)]
                    .map(
                        () => `Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    )
                    .join('\n')}
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
               <Media/>
            </TabPanel>
            </Container>



       </Box>
           </div>
       </div>
    );
}
