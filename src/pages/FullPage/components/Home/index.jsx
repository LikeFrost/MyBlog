import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './index.module.scss';
import { Button, Box, Icon, Drawer,ResponsiveGrid} from '@alifd/next';
import { useState } from 'react';
import {createHashHistory} from 'history'

const anchors = ["firstPage", "secondPage", "thirdPage"];
const history = createHashHistory();
const {Cell} = ResponsiveGrid;

function Home() {
  const [value, setValue] = React.useState(0);
  const [isVisible, setVisible]=useState(false);
  const OpenList=()=>{
    setVisible(true)
  }
  const CloseList=()=>{
    setVisible(false)
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const click1=()=>{
    
    location.hash='/about/lab'
  }
  const click2=()=>{
    location.hash='/about/competition'
  }
  const click3=()=>{
    location.hash='/about/project'
  }
  const click4=()=>{
    location.hash='/about/link'
  }

  return (
    <>
      <Button className={styles.button} type='secondary' text iconSize="xl" onClick={OpenList}>
        <Icon type="list" />
      </Button>
      <Drawer
          placement="right"
          visible={isVisible}
          onClose={CloseList}
          className={styles.drawer}
          width={1000}
        >
          <div className={styles.more}>What's more</div>
          <div className={styles.menu}>
            <div className={styles.menu1} onClick={click1}>
              <div className={styles.title}>01.</div>
              <div className={styles.lab}>Lab</div>
              <div className={styles.experience}>Exp</div>
            </div>
            <div className={styles.menu2} onClick={click2}>
              <div className={styles.title}>02.</div>
              <div className={styles.com}>Competition & Award</div>
              <div className={styles.in}>in</div>
              <div className={styles.num}>3</div>
              <div className={styles.years}>Years</div>
            </div>
            <div className={styles.menu3} onClick={click3}>
              <div className={styles.title}>03.</div>
              <div className={styles.p}>Project</div>
            </div>
            <div className={styles.menu4} onClick={click4}>
              <div className={styles.title}>04.</div>
              <div className={styles.life}>Friendly Link</div>
            </div>
          </div>
        </Drawer>
        <ResponsiveGrid className={styles.tab}>
          <Cell colSpan={12}>
             <div className={styles.text1}>Hello everyone , I am</div>
          <div className={styles.text3}><strong>Like Frost</strong> , a Dreamer from Shan Dong University</div>
          </Cell>
        </ResponsiveGrid>
    </>
  );
}

export default Home;
