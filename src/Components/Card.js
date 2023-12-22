
import dots from '../images/bg-dots.svg';
import ButtonOutline from './Atoms/ButtonOutline';
import classes from './Card.module.scss'


function Card({ browser, version, name }) {
  console.log(browser)
  return (
    <div className={classes.card}>
      <img src={browser} alt={`${browser} logo`} />
      <p>Add to {name} </p>
      <p>Minimum version {version}</p>
      <img src={dots} alt="dots" className={classes.dots} />
      <ButtonOutline color="light_blue">Add & Install Extension</ButtonOutline>
    </div>

  )
}


export default Card