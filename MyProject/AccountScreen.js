import React from 'react';

import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

class AccountScreen extends React.Component {
  static navigationOptions = {
    title: 'Account',
  };
  render() {
    return (
      <View>
        <Text>This is AccountScreen</Text>
      </View>
    );
  }
}
export default AccountScreen;