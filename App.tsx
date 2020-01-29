import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';

const noop = () => {};
export default class FetchExample extends React.Component {
  somegetter = () => {
    console.log('Hey Getter');
  }

  render(){
    return(
      <View style={{ flex: 1, marginTop: Math.ceil(StatusBar.currentHeight) }} >
        <Text >Hi Native</Text>
        <Button title="Solid Button" onPress={noop} />
      </View>
    );
  }
}