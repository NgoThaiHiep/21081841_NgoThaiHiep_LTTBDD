import React ,{useState} from 'react'
import {View, Text, Button} from 'react-native'

const calculateInitiaValue = () =>{
  console.log("Calculating initial value...")
  return Math.floor(Math.random()  * 100);
}

const CounterCalcuLatiApp = () => {
  const [count, setCount] = useState(()=> calculateInitiaValue());
  return (
    <View style ={{padding : 20}}>
      <Text>Count: Initia Random Count : {count}</Text>
      <Button title="Increase" onPress = {() => setCount(count +1)}></Button>
      <Button title="Reset" onPress= {() => setCount(()=>calculateInitiaValue())} />
    </View>
  );
}

export default CounterCalcuLatiApp;


