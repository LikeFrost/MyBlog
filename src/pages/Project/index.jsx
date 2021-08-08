import React from 'react';
import styles from './index.module.scss'
import pic_project from '/public/picture/project.png'
import {Timeline , Button} from '@alifd/next'


function Project() {
  const TimelineItem = Timeline.Item;
  const toHome=()=>{
    window.location.href='/#Hi'
  }
  return (
    <>
      <div className={styles.box}>
        <div className={styles.title}>Participating Projects</div>
        <Timeline className={styles.timeline1}>
          <TimelineItem
            className={styles.item}
            state='process'
            title={<div className={styles.item_title}>地摊地图</div>}
            content={<div className={styles.item_content}>针对疫情时期地摊数目增多、难以管理现象提出的解决方案，通过调用百度地图接口实现区域划分，制定预约摊位制度，使地摊管理成为可能，在项目中主要负责前端的搭建;</div>}
            timeLeft={<div className={styles.item_time}>2020.03-2020.05</div>} 
          />
          <TimelineItem
            className={styles.item}
            state='process'
            title={<div className={styles.item_title}>实验室火灾监测系统</div>}
            content={<div className={styles.item_content}>使用摄像头采集视频数据，对视频进行处理，通过调整色彩、饱和度阈值等标准，实现火情的监测，负责整个项目的实现；<br/>技术栈：React + OpenCV + Django + MaySql + Ajax；</div>}
            timeLeft={<div className={styles.item_time}>2020.04-2020.10</div>} 
          />
        </Timeline>
        <Timeline className={styles.timeline2}>
          
          
          <TimelineItem
            className={styles.item}
            state='process'
            title={<div className={styles.item_title}>图片修复平台</div>}
            content={<div className={styles.item_content}>基于 OpenCV 和 React.js，实现了简单图像修复、C++ 库封装、Python 调用 dll 库等功能，负责整个项目的策划和搭建；</div>}
            timeLeft={<div className={styles.item_time}>2020.11-2020.12</div>} 
          />
          <TimelineItem
            className={styles.item}
            state='process'
            title={<div className={styles.item_title}>森林指标监测系统</div>}
            content={<div className={styles.item_content}>基于 NB-IoT、卫星通信、LoRa 等技术，结合华为云服务搭建观测网络并通过数字大屏的形式展现出来。目前项目已与沂南县林业局取得联系，等待落地部署，有三项在投专利，且已申请省级科研项目。</div>}
            timeLeft={<div className={styles.item_time}>2021.03-2021.05</div>} 
          />
        </Timeline>
      </div>
      <img className={styles.img} src={pic_project} alt='pic_project'/>
      <Button onClick={toHome} ghost='light' className={styles.button} size='large'>Return to Home</Button>
    </>
  );
}

export default Project;
