import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './index.module.scss';
import { Button, Box, Icon, Drawer} from '@alifd/next';
import { useState } from 'react';
import pic_menu1 from '/picture/menu1.jpg'
import pic_menu2 from '/picture/menu3.jpg'
import pic_menu3 from '/picture/menu4.jpg'
import pic_menu4 from '/picture/menu5.jpg'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    color:'#FFF',
    textColor:'#FFFFFF'
  },
  label:{
    color: "#FFFFFF",
  },
  indicator: {
    backgroundColor: "#FFF"  //条的颜色
  }
});
const anchors = ["firstPage", "secondPage", "thirdPage"];

function Home() {
  const classes = useStyles();
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
    window.location.href='/#about/lab'
  }
  const click2=()=>{
    window.location.href='/#competition'
  }
  const click3=()=>{
    window.location.href='/#project'
  }
  const click4=()=>{
    window.location.href='/#life'
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
          width={1500}
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
              <div className={styles.life}>Daily Life</div>
            </div>
          </div>
         

        </Drawer>
        <div className={styles.tab}>
          <div className={styles.text1}>Hello everyone , I am</div>
          <div className={styles.text3}><strong>Like Frost</strong> , a Dreamer from Shan Dong University</div>
        </div>
    </>
  );
}

export default Home;
