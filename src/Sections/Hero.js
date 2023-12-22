import React from 'react';
import ButtonOutline from '../Components/Atoms/ButtonOutline';
import heroIllustration from '../images/illustration-hero.svg';
import classes from './Hero.module.scss';
import RoundedDiv from '../Components/Atoms/RoundedDiv';

function Hero() {
  return (
    <>
      <div className={classes.hero_section}>
        <div className={classes.content}>
          <h1>A Simple Bookmark Manager</h1>
          <p>A clean and simple interface to organize your favourite websites. Open a new bowser tab and see your sites load instantly. Try it for free.</p>
          <ButtonOutline color='light_blue'>Get it on Chrome</ButtonOutline>
          <ButtonOutline color='light_grey'>Get it on Firefox</ButtonOutline>
        </div>
        <div className={classes.hero_image}>
          <img src={heroIllustration} alt='Hero Illustration' />
          {/* <RoundedDiv /> */}
        </div>
      </div>
    </>
  );
}

export default Hero;
