import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { carsStore } from '../store/cars'

const CarInfo = ({route}) => {
    const {id}=route.params
    const {getCar}= carsStore
    const car=getCar(id)
   
  return (
    <View>
      <Text>{car.carModel}</Text>
      <Text>{car.carName}</Text>
      <Text>{car.kmToNotifyBeforeAtachNbrKmCurrent}</Text>
      <Text>{car.matricule}</Text>
      <Text>{car.numberKmCurrent}</Text>
      <Text>{car.numberKmToChangeOil}</Text>
    </View>
  )
}

export default CarInfo

const styles = StyleSheet.create({})