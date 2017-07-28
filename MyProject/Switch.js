import React from 'react';

import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native';
import SwtichFromiOS from "./SwitchFromiOS";
import PhotoBackdrop from "./PhotoBackdrop/local_image";

var Switch = React.createClass({
  
     navigationOptions :{
    title: 'Switch'
  },
// navigationOptions(){
//      return {title: 'Switch'};
//     },

  
  getInitialState(){
    //val:bool; 
    return {val:false};
  },

  _onValueChange(val){

    this.setState({val:val})

  },
  render:function() {

    var colorClass=this.state.val?styles.firstcontainer:styles.secondcontainer;
    //var colorClass=this.state.val?styleMedia.firstcontainer:<image> source={require("./PhotoBackdrop/flowers.png")}</image>;
    return (
      <View>
        <Text>Change the picture</Text>
        <Switch onValueChange={this._onValueChange}/>

      </View>
    );
  }
});
var styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
   firstContainer:{
        backgroundColor:'#FF5555'
    },
     SecondContainer:{
        backgroundColor:'#55FFFF'
    },

    welcone:{
        fontSize:20,
        textAlign:'center',
        margin:10
    }

});


module.exports=Switch;