import React, { Component } from "react";

import Button from "./../Button";
import styles from "./style.js";
import { onGetCoords} from 'react-navigation';

const style = { backgroundColor: "#DDDDDD" };

var LocationButton =React.createClass( {
  propTypes: {
    onGetCoords: React.PropTypes.func.isRequired
  },

  _onPress: function() {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => {
        this.props.onGetCoords(
          initialPosition.coords.latitude,
          initialPosition.coords.longitude);
      },
      (error) => {alert(error.message)},
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  
//   var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };

//   function success(pos) {
//   var crd = pos.coords;

//   console.log('Your current position is:');
//   console.log('Latitude : ' + crd.latitude);
//   console.log('Longitude: ' + crd.longitude);
//   console.log('More or less ' + crd.accuracy + ' meters.');
// };

//       function error(err) {
//           console.warn('ERROR(' + err.code + '): ' + err.message);
//       };

//         navigator.geolocation.getCurrentPosition(success, error, options);
  
  },

  render:function() {
    return (
      <Button
        label="Use Current Location"
        style={style}
        onPress={this._onPress.bind(this)}
      />
    );
  }
})

module.exports= LocationButton;