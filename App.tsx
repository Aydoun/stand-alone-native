import React from 'react';
import { Text, View  } from 'react-native';
import { Button } from 'react-native-elements';

export default class FetchExample extends React.Component {

  componentDidMount(){

  }



  render(){
    return(
      <View style={{marginTop: 50}}>
        <Text >Hi Native</Text>
        <Button title="Solid Button" />
      </View>
    );
  }
}