import classes from './Features.module.scss';
import { useState } from 'react';
import Tab from '../Components/Tab';
import Tab1Img from './../images/illustration-features-tab-1.svg'
import Tab2Img from './../images/illustration-features-tab-2.svg'
import Tab3Img from './../images/illustration-features-tab-3.svg'


function Features() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className={classes.features}>
      <h2>Features</h2>
      <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
      <div className={classes.container}>
        <div >
          <span
            onClick={() => handleTabClick(0)}
            className={`${classes.buttonWrapper} ${activeTab === 0 ? classes.activeButton : ''}`}
          >
            Simple Bookmarking
          </span>
          <span
            onClick={() => handleTabClick(1)}
            className={`${classes.buttonWrapper} ${activeTab === 1 ? classes.activeButton : ''}`}
          >
            Speedy Searching
          </span>
          <span
            onClick={() => handleTabClick(2)}
            className={`${classes.buttonWrapper} ${activeTab === 2 ? classes.activeButton : ''}`}
          >
            Easy Sharing
          </span>
        </div>
        {activeTab !== null && (
          <div>


            {activeTab === 0 && <Tab title='A Simple Bookmark Manager' text='A clean and simple interface to organize your favourite websites. Open a new bowser tab and see your sites load instantly. Try it for free.' img={Tab1Img} />}
            {activeTab === 1 && <Tab title='Intelligent search' text='Our powerful search feture will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.' img={Tab2Img} />}
            {activeTab === 2 && <Tab title='Share' text='Easily share your bookmarks and collections with others. Create a shareable link that you can sent at the click of a button.' img={Tab3Img} />}


          </div>
        )}
      </div>
    </div>
  );
};


export default Features