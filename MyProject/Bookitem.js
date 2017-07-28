'use strict';
import React from 'react';
import {AppRegistry,Text,ListView, View,Button} from 'react-native';

var bookitem=React.createClass({
propTypes:{
    coverURL:React.PropTypes.string.isRequired,
    author:React.PropTypes.string.isRequired,
    title:React.PropTypes.string.isRequired


},

render:function(){
    <View>
        <Image source={this.props.coverURL}
        />
        <View>
            <Text>{this.props.author}</Text>
            <Text>{this.props.title}</Text>
        </View>
    </View>
}









})

module.exports=bookitem;