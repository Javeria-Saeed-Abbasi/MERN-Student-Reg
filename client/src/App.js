import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import './App.css';
import Student from './components/showStudent/showStudent.js';
import Create from './components/createStudent/createStudent.js'; 
import styles from './styles.js';



function App() {
  return (
    <div className="App">
         <Container maxWidth="lg">
  <AppBar className={styles.appBar} position="static" color='inherit'>

<Typography className={styles.heading} variant="h2" align="center" 

> Students Create & Show
</Typography>
  </AppBar>

  <Grow in>
    <Container  style={{
        backgroundColor: "#cfe8fc",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <AppBar className={styles.appBar} position="static" color="inherit">
          <Student />
          </AppBar>
        </Grid>

        <Grid item xs={12} sm={4} style ={{
          marginLeft:"3rem",
        }}>
        <AppBar className={styles.appBar} position="static" color="inherit">
          <Create />
          </AppBar>
        </Grid>
      
      </Grid>
    </Container>
  </Grow>
</Container>
    </div>
  );
}

export default App;
