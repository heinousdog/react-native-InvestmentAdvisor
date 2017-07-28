
import React from 'react';
import {AppRegistry,Text,ListView, View,Button} from 'react-native';
//import Finance from './FinanceReactNative-master/Finance';
//StatusBar.setBarStyle('light-content', true);


class FinancialMarket extends React.Component {


    static navigationOptions = {
    title: 'FinancialMarket',
  };

  constructor() {
    super();
   let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['Stock', 'ETF','Bond','Exchange','Ｒaw Ｍaterial','Fund','Index','Future','1','1','1','1','1','1','1','1','1','1','Stock', 'ETF','Bond','Exchange','Ｒaw Ｍaterial','Fund','Index','Future','1','1','1','1','1','1','1','1','1','1']),
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    );
  }
}
 export default FinancialMarket;