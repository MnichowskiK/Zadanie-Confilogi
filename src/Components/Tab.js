
import ButtonOutline from "./Atoms/ButtonOutline";
import classes from './Tab.module.scss'


function Tab({ title, text, img }) {
  return (
    <>
      <div className={classes.tab_container}>
        <div >
          <img src={img} alt='Hero Illustration' className={classes.tab_img} />
          {/* <RoundedDiv /> */}
        </div>
        <div >
          <h2>{title}</h2>
          <p>{text}</p>
          <ButtonOutline color='light_blue'>More info</ButtonOutline>
        </div>

      </div>
    </>
  );
}

export default Tab;