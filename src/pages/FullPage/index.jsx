import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './components/Home/index';
import styles from './index.module.scss';
import Lab from './components/Lab/index'
import Competition from './components/Competition/index'

function FullPage() {
  return (
    <>
    <ReactFullpage
        navigation={true}
        anchors={['Hi', 'Lab_Experience', 'thirdPage', 'fourthPage', 'lastPage']}
        scrollingSpeed = {1000}
        //sectionsColor={['#ff5f45', '#0798ec', '#fc6c7c', 'grey']}
        render={({state, fullpageApi}) => {
          return (
            <> 
            <ReactFullpage.Wrapper>
              <div className="section"><Home/></div>
              <div className="section "><Home/></div>
              <div className="section "><Competition/></div>
              <div className="section"><Home/></div>
            </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
      </>
  );
}

export default FullPage;
