import React from 'react';
import { Text, View } from 'react-native';
import CountDown from 'react-native-countdown-component';

function timer(){
  return(
    <View>
      <Text style = {{ justifyContent:'center', alignContent:'center',
       alignItems:'center', color:'red', fontSize: 40, paddingTop : 50}}>
        React Native Timer Test Time by : Kavita Singh 
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
export default timer;
