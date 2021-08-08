import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './components/Home/index';
import styles from './index.module.scss';
import Competition from '../Competition/index'
import Contact from './components/Contact'

function FullPage() {
  return (
    <>
    <ReactFullpage
        navigation={true}
        anchors={['Hi', 'Contact_me']}
        scrollingSpeed = {1000}
        //sectionsColor={['#ff5f45', '#0798ec', '#fc6c7c', 'grey']}
        render={({state, fullpageApi}) => {
          return (
            <> 
            <ReactFullpage.Wrapper>
              <div className="section"><Home/></div>
              <div className="section "><Contact/></div>
            </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
      </>
  );
}

export default FullPage;
