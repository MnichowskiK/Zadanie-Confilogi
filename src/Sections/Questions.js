import React, { useState } from 'react';
import arrow from './../images/icon-arrow.svg'
import classes from './Questions.module.scss'

const LoremIpsumText = ({ tabNumber }) => (
  <p className={classes.tab_p}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Tab {tabNumber} specific text.
  </p>
);

function Questions() {
  const [activeTab, setActiveTab] = useState(null);

  const tabs = [
    { id: 1, title: 'What is Bookmark?', content: <LoremIpsumText tabNumber={1} /> },
    { id: 2, title: 'How can I request a new browser?', content: <LoremIpsumText tabNumber={2} /> },
    { id: 3, title: 'Is there a mobile app?', content: <LoremIpsumText tabNumber={3} /> },
    { id: 4, title: 'What about other Chromium broswers', content: <LoremIpsumText tabNumber={4} /> },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(activeTab === tabId ? null : tabId);
  };

  return (
    <div className={classes.questions_container}>
      <div className={classes.questions_text}>
        <h2>Frequently Asked Questions</h2>
        <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
      </div>
      <div className={classes.tab_container}>
        {tabs.map((tab) => (
          <div key={tab.id}>
            <div onClick={() => handleTabClick(tab.id)} >
              <div className={classes.tab}>
                <h6> {tab.title}</h6>
                <img src={arrow} alt="arrow icon" />
              </div>
              <div>
                {activeTab === tab.id && <div>{tab.content}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Questions;