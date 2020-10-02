import React, { useRef } from 'react';
import useSlider from '../hooks/useSlider'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {makeStyles} from "@material-ui/core";



const useStyles = makeStyles(theme => ({
    slider : {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '94.5vh',
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
},


sliderContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '94.5vh',
},

leftRightIcon: {
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontSize: '4rem',
    color: '#eee',
    padding: '0 1rem',
    cursor: 'pointer',
    transition: 'transform 0.1s ease-in-out',
}

}));





const Slider = ({images}) => {
    const classes = useStyles();
    const slideImage = useRef(null)
    const { goToPreviousSlide, goToNextSlide } = useSlider(slideImage, images)

    return (
        <div className={classes.slider} ref={slideImage}>
            <div className={classes.sliderContent}>
                <ArrowBackIosIcon  className={classes.leftRightIcon} onClick={goToPreviousSlide} fontSize={"large"} color={"secondary"} />


                <ArrowForwardIosIcon   className={classes.leftRightIcon} onClick={goToNextSlide} fontSize={"large"} color = {"secondary"}/>
            </div>
        </div>
    );
}

export default Slider;