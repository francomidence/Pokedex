import React, { Component } from "react";

import {
  withStyles,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Grid,
  TextField,
  Button,
  FormControl,
  Avatar,
  Card,
  MenuItem,
  Select,
  InputLabel
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ACTIONS from "../modules/action";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  }
});

const mapStateToProps = state => ({
    items: state.items
});
  
const mapDispatchToProps = dispatch => ({
    createItem: (pName,pType,pType2,pHeight,pWeight,pGender,pCatchRate,pAvatar) => dispatch(ACTIONS.createItem(pName,pType,pType2,pHeight,pWeight,pGender,pCatchRate,pAvatar)),
    deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});

class SampleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          item:'',
          pkmnName:'',
          pkmnType:'',
          pkmnType2:'',
          pkmnHeight:'',
          pkmnWeight:'',
          pkmnGender:'',
          pkmnCatchRate:'',
          pkmnAvatar:'',

        };
    }

    createPkmn = () =>{
      this.setState({
        pkmnName:this.state.pkmnName,
        pkmnType:this.state.pkmnType,
        pkmnType2:this.state.pkmnType2,
        pkmnHeight:this.state.pkmnHeight,
        pkmnWeight:this.state.pkmnWeight,
        pkmnGender:this.state.pkmnGender,
        pkmnCatchRate:this.state.pkmnCatchRate,
        pkmnAvatar:this.state.pkmnAvatar
      })
    }


    //No funciona cuando lo pongo entre parentesis
    //Ejemplo de internet que tampoco funciona
  /* handleChange() function to set a new state for input */
  // handleChange = event => {
  //   const value = event.target.value;
  //   this.setState({
  //     input: value
  //   });
  // };


    handleChange = name =>event=>{
      this.setState({ [name]: event.target.value })
      this.createPkmn()
    }

    handleSubmit = event => {

      this.createPkmn();

      if (this.state.pkmnName !== ""
      &&
      this.state.pkmntype !== ""
      &&
      this.state.pkmnWeight !==""
      &&
      this.state.pkmnHeight !=="") {

        this.props.createItem(this.state.pkmn);


      }
      event.preventDefault();
  };

  generate = () => {
    return this.props.items.map(item => (
      <Card style={{height:'50%',width:'100%',marginBottom:'10%'}}>
      <ListItem key={item.id}>

      <Avatar src={item.pkmnAvatar}></Avatar>

        <ListItemText primary={item.pkmnName} secondary={item.pkmnType}/>
        <ListItemText primary={item.pkmnCatchRate}/>

        </ListItem>

        </Card>
    ));
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
          <form noValidate autoComplete="off">
            <FormControl>

              <TextField
              id="txtPkmnName"
              label="Pokemon name"
              className={classes.textField}
              value={this.state.pkmnName}
              onChange={this.handleChange('pkmnName')}
              margin="normal"
          />

          <TextField
          id="txtPkmnAvatar"
          label="Pokemon image"
          className={classes.textField}
          value={this.state.pkmnAvatar}
          onChange={this.handleChange('pkmnAvatar')}
          margin="normal"
      />




<FormControl>
                                <Select
                                    value={this.state.pkmntype}
                                    onChange={this.handleChange('pkmntype')}
                                    inputProps={{
                                    name: 'pkmntype',
                                    id: 'selectpkmntype',
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value='Normal'>Normal</MenuItem>
                                    <MenuItem value='Fighting'>Fighting</MenuItem>
                                    <MenuItem value={'Flying'}>Flying</MenuItem>
                                    <MenuItem value={'Poison'}>Poison</MenuItem>
                                    <MenuItem value={'Ground'}>Ground</MenuItem>
                                    <MenuItem value={'Rock'}>Rock</MenuItem>
                                    <MenuItem value={'Bug'}>Bug</MenuItem>
                                    <MenuItem value={'Ghost'}>Ghost</MenuItem>
                                    <MenuItem value={'Steel'}>Steel</MenuItem>
                                    <MenuItem value={'Fire'}>Fire</MenuItem>
                                    <MenuItem value={'Water'}>Water</MenuItem>
                                    <MenuItem value={'Grass'}>Grass</MenuItem>
                                    <MenuItem value={'Electric'}>Electric</MenuItem>
                                    <MenuItem value={'Psychic'}>Psychic</MenuItem>
                                    <MenuItem value={'Ice'}>Ice</MenuItem>
                                    <MenuItem value={'Dragon'}>Dragon</MenuItem>
                                    <MenuItem value={'Fairy'}>Fairy</MenuItem>
                                    <MenuItem value={'Dark'}>Dark</MenuItem>
                                </Select>

                                </FormControl>


 
<FormControl>

                                <Select
                                value={this.state.pkmnType2}
                                onChange={this.handleChange('pkmnType2')}
                                inputProps={{
                                name: 'pkmnType2',
                                id: 'selectpkmnType2',
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value='Normal'>Normal</MenuItem>
                                <MenuItem value='Fighting'>Fighting</MenuItem>
                                <MenuItem value={'Flying'}>Flying</MenuItem>
                                <MenuItem value={'Poison'}>Poison</MenuItem>
                                <MenuItem value={'Ground'}>Ground</MenuItem>
                                <MenuItem value={'Rock'}>Rock</MenuItem>
                                <MenuItem value={'Bug'}>Bug</MenuItem>
                                <MenuItem value={'Ghost'}>Ghost</MenuItem>
                                <MenuItem value={'Steel'}>Steel</MenuItem>
                                <MenuItem value={'Fire'}>Fire</MenuItem>
                                <MenuItem value={'Water'}>Water</MenuItem>
                                <MenuItem value={'Grass'}>Grass</MenuItem>
                                <MenuItem value={'Electric'}>Electric</MenuItem>
                                <MenuItem value={'Psychic'}>Psychic</MenuItem>
                                <MenuItem value={'Ice'}>Ice</MenuItem>
                                <MenuItem value={'Dragon'}>Dragon</MenuItem>
                                <MenuItem value={'Fairy'}>Fairy</MenuItem>
                                <MenuItem value={'Dark'}>Dark</MenuItem>
                            </Select>

                            </FormControl>


                            <TextField
                            id="txtPkmnHeight"
                            label="Height"
                            className={classes.textField}
                            value={this.state.pkmnHeight}
                            onChange={this.handleChange('pkmnHeight')}
                            margin="normal"
                        />
                        <TextField
                            id="txtpkmnWeight"
                            label="Weight"
                            className={classes.textField}
                            value={this.state.pkmnWeight}
                            onChange={this.handleChange('pkmnWeight')}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="txtpkmnCatchRate"
                            label="Catch Rate"
                            className={classes.textField}
                            value={this.state.pkmnCatchRate}
                            onChange={this.handleChange('pkmnCatchRate')}
                            margin="normal"
                        />

            </FormControl>
            <FormControl>
              <Button onClick={this.handleSubmit}>Add</Button>
            </FormControl>
          </form>
        </div>
        <div>
          <Grid item container justify="space-evenly" alignItems="center">
            <div className={classes.demo}>
              <List dense={false}>{this.generate()}</List>
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(SampleComponent));