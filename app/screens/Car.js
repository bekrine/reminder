import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'


const Car = ({ car,navigation }) => {
  return (
    <Pressable  onPress={()=>navigation.navigate('carInfo',{id:car.id})} style={styles.car}>

    <View style={styles.item}>
      <View style={{flexDirection:'row'}}>
        <Text style={{ textTransform: 'uppercase' ,marginRight:8}}>{car.matricule} </Text>
        <Text>{car.carName}</Text>
      </View>
      <View style={styles.iteminfo}>
        <Text style={{ textTransform: 'uppercase' }}>{car.carModel} </Text>
      </View>
    </View>
    <AntDesign name="right" size={24} color="black" style={{marginRight:20}} />
  </Pressable >
  )
}

export default Car

const styles = StyleSheet.create({
    item: {
        flex: 1,
    
        marginLeft: 40
      },
      car: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
       
        backgroundColor:'white'
      }
      , iteminfo: {
        marginTop: 5,
        opacity: 0.4
      }
})