import React ,{useState} from 'react'
import {View, Text, Button} from 'react-native'

const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1;

export default function CounterApp () {
  const [diceRolls, setDiceRolls] = useState([]);
  return (
    <View>
      <Button 
        title="Roll dice!"
        onPress = {() =>
        setDiceRolls([...diceRolls,randomDiceRoll()])
          }
      />
      {diceRolls.map ((diceRolls,index) =>(
        <Text style ={{fontSize : 24}} key = {index}>
          {diceRolls}
        </Text>
      ))}
      
      
    </View>
  );
}