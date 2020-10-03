
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ListItem from "semantic-ui-react/dist/commonjs/elements/List/ListItem";
import {ListItemText} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import Resume from '../Resources/Resume_PS_GRP.pdf';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function TimeLine() {
    const classes = useStyles();
  return(

    <div>

   <VerticalTimeline>

       <VerticalTimelineElement
           className="vertical-timeline-element--work"
           date="Jan 2020 - May 2020"
           iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
           icon={<WorkIcon/>}
       >


           <h3 className="vertical-timeline-element-title">Apprenticeship</h3>
           <h4 className="vertical-timeline-element-subtitle">ProMazo</h4>
           <List>
               <ListItem>
                   <ListItemText>
                       Deployed and maintained web apps in AWS and Google cloud built
                       using Django, React, REST API, and Node JS.
                   </ListItemText>
               </ListItem>
           </List>

           </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2019 - Jan 2020"
            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
            icon={<WorkIcon/>}
        >
            <h3 className="vertical-timeline-element-title">Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">QikServe Ltd (Edinburgh, UK)</h4>

                <List >
                <ListItem>
                    <ListItemText>
                Used Apache Kafka for organizing different microservices by
                writing consistent producers and Kafka consumers in Java and
                Node JS.
                    </ListItemText>
                    </ListItem>
                <ListItem>
                    <ListItemText>
                        Worked closely with the dev-ops team to understand the server
                        and cloud infrastructure of the company.
                    </ListItemText>
                </ListItem>

                    <ListItem>
                        <ListItemText>
                            Pay at Table: Worked as a full-stack engineer to build a web app, Pay at Table v2, which is
                            widely used throughout the UK,
                            USA, and Europe.
                        </ListItemText>
                    </ListItem>

                </List>

        </VerticalTimelineElement>
       <VerticalTimelineElement
           className="vertical-timeline-element--work"
           date="Sep 2019 - Jan 2020"
           iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
           icon={<LaptopChromebookIcon/>}
       >
           <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
           <h4 className="vertical-timeline-element-subtitle">University of Rochester</h4>

           <List className={classes.root}>
               <ListItem>
                   <ListItemText>
                       Hosted labs twice a week to help students understand key
                       concepts and any help assisted with technical or logical problems.
                   </ListItemText>
               </ListItem>
               <ListItem>
                   <ListItemText>
                       Graded student projects and problem sets for introductory
                       courses on data structures, object-oriented programming, and
                       computational theory for approx.
                   </ListItemText>
               </ListItem>

               <ListItem>
                   <ListItemText>
                       Database and Algorithms. (Fall 2018, Spr 2019), Android
                       development. (Spr 2020), Introduction to Java (Spr. 2018).
                   </ListItemText>
               </ListItem>

           </List>

       </VerticalTimelineElement>


        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="August 2017 - May 2021"
            iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
            icon={<MenuBookIcon/>}
        >
            <h3 className="vertical-timeline-element-title">University of Rochester, NY,
                USA </h3>
            <h4 className="vertical-timeline-element-subtitle">Bsc Computer Science</h4>
            <p>
                Networking - Network architectures,
                Network technologies,
                Internetworking, Resource allocation,
                End-to-end issues, Interprocess
                communication.
            </p>
            <p>
                ios developement - Interface designs and functional algorithms and unique user interactions using multi-touch technologies. MVC paradigm, memory management, object-oriented database API, animation, multi-threading and performance considerations.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2019 - Jan 2020"
            iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
            icon={<MenuBookIcon/>}
        >
            <h3 className="vertical-timeline-element-title">Edinburgh Napier University</h3>
            <h4 className="vertical-timeline-element-subtitle">EPA study abroad</h4>
            <p>Database systems - Database
                architecture and functionality, Data
                analysis and modeling, SQL, NoSQL,
                Database Administrator role.

            </p>
            <p>
                Linux administration -Linux,
                webserver configurations, firewall
                configurations.
            </p>
        </VerticalTimelineElement>
       <VerticalTimelineElement
           className="vertical-timeline-element--work"
           date="Jun 2016 - Jul 2017"
           iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
           icon={<WorkIcon/>}
       >


           <h3 className="vertical-timeline-element-title">Software Intern</h3>
           <h4 className="vertical-timeline-element-subtitle">Nepdroid</h4>
           <List>
               <ListItem>
                   <ListItemText>
                       Used JavaFX, Spark, and services like
                       Jira and bitbucket to gain development
                       experience in a professional
                       environment.
                   </ListItemText>
               </ListItem>
           </List>

       </VerticalTimelineElement>

    </VerticalTimeline>
    </div>

  )
}