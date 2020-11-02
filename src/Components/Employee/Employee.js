import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Select from '@material-ui/core/Select';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { postEmployee, getAllEmployee } from '../../api/EmployeeServices';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontSize: 1,
    paddingLeft: 20
    
    
  },

  headline: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 200,
    backgroundColor: 'yellow',
  },


         
  paper: {
     margin: theme.spacing(20),
      
    //  height: theme.spacing(70),
    // paddingLeft: 20,
    textAlign: "center",
    color: theme.palette.text.secondary

  }

  
}));



export default function Employee() {
  const handleShow = (e) => {
    getAllEmployee()
                .then(res => {
                    // setValues({
                    //     name: res[0].fname,
                    //     lname: res[0].lname,
                    //     email: res[0].email,
                    //     password: res[0].password,
                    //     address: res[0].address,
                    //     phnumber: res[0].phnumber
                    // });
                    console.log(res);
                });
    console.log(e.target.value);
    // setValues({ ...values, [prp]: e.target.value });
}
  const classes = useStyles();
  return (
    <React.Fragment>
       <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <h1>Employee Data</h1>
                        </Grid>
                          </Grid>
                        <Paper className={classes.paper} elevation={3}>
        <div className={classes.root}>
          <form noValidate autoComplete="off">
            <Grid container spacing={5}>
              <Grid container item xs={12} spacing={3}>
                <Grid item xs={3}>
                  <Typography variant="h6" component="h6">
                    First Name :
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                
                  <TextField id="outlined-basic" variant="outlined" />
                 
                </Grid>
              </Grid>
              <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                  <Typography variant="h6" component="h2">
                    Designiation :
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                <TextField id="outlined-basic" variant="outlined" />
                </Grid>
            </Grid>
              
              <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                <Typography variant="h6" component="h2">
                    Contact Details :
                     </Typography>
                     </Grid> 
                     <Grid item xs={2}>
                 <Select native defaultValue=""  id="grouped-native-select" variant="outlined">
                      <option label="Type" value="Type" />
                      <option value={1}>Primary</option>
               <      option value={2}>Emergency</option>
                       </Select>
                        </Grid>
                                <Grid item xs={5}>
                              <TextField id="outlined-basic" label="phone number" variant="outlined" />
                             {/* <Icon style={{ fontSize: 30 }}>add_box</Icon> */}
                             <AddBoxIcon></AddBoxIcon>
                            </Grid>
                    </Grid>
                   
                                                   
                    
                <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                  <Typography variant="h6" component="h2">
                    Skills :
                  </Typography>
                </Grid> 
                <Grid item xs={8}>
                  <TextField id="outlined-basic" variant="outlined" />
                </Grid>
              </Grid>

          <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>      
              <TextField
               id="date"
               type="date"
              defaultValue="01-january-2000"
              className={classes.textField}
              InputLabelProps={{
             shrink: true,
                }}
         />
         </Grid>
             </Grid>
    
  );
                
            </Grid>
          </form>
        </div>
      </Paper>
      
          <Button variant="contained">Add Employee</Button>
                
      <Button variant="contained"  onClick={handleShow} > Show Data   </Button>
  
    </React.Fragment>
  );
}


      
      

   



