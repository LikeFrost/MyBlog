import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './index.module.scss'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor:'#c6e1f6',
    textColor:'#FFFFFF'
  },
  label:{
    color: "#FFFFFF",
  },
  indicator: {
    backgroundColor: "#FFF"  //条的颜色
  }
});

function Home() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Paper className={classes.root}>
      <Tabs
        value={value} 
        onChange={handleChange}
        //indicatorColor="primary"
        classes={{ indicator: classes.indicator }}
        centered
        variant="fullWidth"
        textColor="#FFFFFF"
      >
        <Tab classes={{label:classes.label}} label="Hi" />
        <Tab classes={{label:classes.label}} label="About Me" />
        <Tab classes={{label:classes.label}} label="Contact Me" />
      </Tabs>
       
    </Paper>
        {value === 0 && <div className={styles.tab}>Item One</div>}
        {value === 1 && <div>Item Two</div>}
        {value === 2 && <div>Item Three</div>}
    </>
  );
}

export default Home;
