import React from 'react';

import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native';
var Geolocation=require('Geolocation')
var geolocation=React.createClass({
   navigationOptions :{
    title: 'Geolocation',
  },
  render:function() {
    return (
      <View>
        <Text onPress={this.vibration} style={StyleSheet.btn}>看看我在哪</Text>
      </View>
    );
  },

    vibration:function(){
        Geolocation.getCurrentPosition(function(data){
                alert(JSON.stringify(data));

        },function(){alert('失敗');
        });



    }
});

var style=StyleSheet.create({
btn:{
marginTop:50,
marginLeft:50,
marginRight:50,
height:35,
lineHeight:24,
textAlign:'center'

}

});
module.exports=geolocation;