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
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />



            </Tabs>
        </div>
        </Box>
           <div className={classes.second}>
           <Box my={2}>

            <Container >
            <TabPanel value={value} index={0}>
                <Media title = {'Face Recognition'} content1 = {[...new Array(20)]
                    .map(
                        () => `Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    )
                    .join('\n')}
                       content2 =  {[...new Array(20)]
                    .map(
                        () => `Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    )
                    .join('\n')}
                image = "https://files.realpython.com/media/face-detection-abba.ea2dcc6d3bda.jpg"


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
