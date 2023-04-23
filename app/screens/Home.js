import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../config/colors'


const Home = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={()=>navigation.navigate('Addcars')} style={styles.link}>
          <View style={styles.text}>

          <Text >Ajouter Une Voiture</Text>
          </View>
      </Pressable>
      <Pressable onPress={()=>navigation.navigate('Allcars')} style={styles.link}>
          <View style={styles.text}>
          <Text >Tous Les Voiture</Text>
          </View>
      </Pressable>
      
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
    link:{
        margin:5,
        padding:5,
        height:50,
        backgroundColor:`${colors.primire}`,
        width:150
    },
    text:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    }
})