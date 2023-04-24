import React from 'react';
import { Text, View } from 'react-native';
import CountDown from 'react-native-countdown-component';

function Input(){
  return(
    <View>
      <Text style = {{ justifyContent:'center', alignContent:'center',
       alignItems:'center', color:'red', fontSize: 500, paddingTop : 60}}>
        Application to Test Time Left
      </Text>
    <CountDown
    until={60 * 20 + 30}
    size={30}
    onFinish={() => alert('Finished')}
    digitStyle={{backgroundColor: '#FFF'}}
    digitTxtStyle={{color: '#1CC625'}}
    timeToShow={['M', 'S']}
    timeLabels={{m: 'MM', s: 'SS'}}
  />
  </View>

  );
}
export default Input;
