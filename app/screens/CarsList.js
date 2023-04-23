import { View, Text, FlatList, StyleSheet, Button, useWindowDimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { carsStore } from '../store/cars'
import { StatusBar } from 'expo-status-bar'
import { observer } from 'mobx-react'
import { SwipeListView } from 'react-native-swipe-list-view'
import { hiddenButton } from '../../utils/hiddenButton'

import Car from './Car'


const CarsList =({ navigation }) => {

const {width:screenWidth}=useWindowDimensions()

const delet=()=>{
  console.log('left')
}
const animation=()=>{
  console.log('animation')
}
  return (
    <SafeAreaView style={styles.container}>
      {
        carsStore.carsInfo.length > 0
          ?
          // <FlatList
          //   data={carsStore.carsInfo}
          //   renderItem={({ item }) => <Car navigation={navigation} car={item} />}
          //   keyExtractor={item => item.id}
          // />
          <SwipeListView
          data={carsStore.carsInfo}
          renderItem={({ item }) => <Car navigation={navigation} car={item} />}
          renderHiddenItem={hiddenButton}
          leftOpenValue={75}
          disableLeftSwipe
          stopLeftSwipe={210}
          leftActivationValue={200}
          leftActionValue={screenWidth}
          onLeftActionStatusChange={delet}
          swipeGestureEnded={animation}
          swipeToClosePercent={15}
          swipeToOpenPercent={15}
          useNativeDriver={false}
          />
          :
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ marginBottom: 10 }}>aucune Voiture Ajouter</Text>
            <Button
              title='Ajouter une Voiture'
              onPress={() => navigation.navigate('Addcars')}
            />
          </View>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',
  }
})

export default observer( CarsList)