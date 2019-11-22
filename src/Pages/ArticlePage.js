import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from "@material-ui/core/Container";

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
        paddingRight: '10%'
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '100vh',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        width: '20wh',

    },
    content:{
        width: '20%',

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
                className={classes.tabs}
            >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
            </Tabs>
            <Container>
            <TabPanel value={value} index={0} className = {classes.contents}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1} className = {classes.contents}>
                {[...new Array(120)]
                    .map(
                        () => `Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    )
                    .join('\n')}
            </TabPanel>
            <TabPanel value={value} index={2} className = {classes.contents}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3} className = {classes.contents}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4} className = {classes.contents}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5} className = {classes.contents}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6} className = {classes.contents}>
                Item Seven
            </TabPanel>
            </Container>

        </div>
       </Box>
       </div>
    );
}
