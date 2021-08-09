import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './components/Home/index';
import styles from './index.module.scss';
import Competition from '../Competition/index'
import Contact from './components/Contact'
import {ResponsiveGrid} from '@alifd/next'

const {Cell} = ResponsiveGrid;

function FullPage() {
  return (
    <ResponsiveGrid gap={10}>
      <Cell colSpan={12}>
      <ReactFullpage
        navigation={true}
        anchors={['Hi', 'Contact_me']}
        scrollingSpeed = {1000}
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
      </Cell>
    </ResponsiveGrid>
  );
}

export default FullPage;
