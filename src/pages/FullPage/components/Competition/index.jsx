import React from 'react';
import styles from './index.module.scss'
import pic_win from '/public/picture/win.png'
import {Timeline , Button} from '@alifd/next'

function Competition() {
  const TimelineItem = Timeline.Item
  const toHome=()=>{
    window.location.href='/#Hi'
  }
  return (
    <>
      <div className={styles.box}>
        <div className={styles.title}>Competition & Award</div>
      </div>
      <img className={styles.img} src={pic_win} alt='pic_win'/>
      <Timeline className={styles.timeline}>
        <TimelineItem
          className={styles.item}
          state='process'
          title={<div className={styles.item_title}>"互联网 + " 大学生创新创业大赛</div>}
          content={<div className={styles.item_content}>校级铜奖</div>}
          timeLeft={<div className={styles.item_time}>2019.06</div>} 
        />
        <TimelineItem
          className={styles.item}
          state='process'
          title={<div className={styles.item_title}>全国大学生数学建模竞赛</div>}
          content={<div className={styles.item_content}>省级一等奖（队长）</div>}
          timeLeft={<div className={styles.item_time}>2019.10</div>} 
        />
        <TimelineItem
          className={styles.item}
          state='process'
          title={<div className={styles.item_title}>山东大学计算机学院 “黑客马拉松”</div>}
          content={<div className={styles.item_content}>三等奖</div>}
          timeLeft={<div className={styles.item_time}>2019.12</div>} 
        />
        <TimelineItem
          className={styles.item}
          state='process'
          title={<div className={styles.item_title}>第十三届全国大学生软件创新大赛</div>}
          content={<div className={styles.item_content}>校级推荐队伍</div>}
          timeLeft={<div className={styles.item_time}>2020.02</div>} 
        />
        <TimelineItem
          className={styles.item}
          state='success'
          title={<div className={styles.item_title}>全国大学生数学建模竞赛</div>}
          content={<div className={styles.item_content}>国家二等奖（队长）</div>}
          timeLeft={<div className={styles.item_time}>2020.10</div>} 
        />
        
        <TimelineItem
          className={styles.item}
          state='process'
          title={<div className={styles.item_title}>“挑战杯”全国大学生课外学术科技作品竞赛</div>}
          content={<div className={styles.item_content}>校级种子队伍，省奖，省级科研项目</div>}
          timeLeft={<div className={styles.item_time}>2021.05</div>} 
        />
      </Timeline>
      <Button onClick={toHome} ghost='light' className={styles.button} size='large'>Return to Home</Button>
    </>
  );
}

export default Competition;
