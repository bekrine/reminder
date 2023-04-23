import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useState,useRef } from 'react'
import {showMessage} from 'react-native-flash-message'


import colors from '../config/colors'
import { carsStore } from '../store/cars'

const Addcars = () => {
    const {primire}=colors
    const Matref=useRef()
    const carNameref=useRef()
    const carModelref=useRef()
    const numberKmCurrentref=useRef()
    const numberKmToChangeOilref=useRef()
    const kmToNotifyBeforeAtachNbrKmCurrentref=useRef()
    const[info,setInfo]=useState({
        matricule:''|| info?.matricule,
        carName:''|| info?.carName ,
        carModel:''|| info?.carModel ,
        numberKmCurrent:''|| info?.numberKmCurrent,
        numberKmToChangeOil:''|| info?.numberKmToChangeOil ,
        kmToNotifyBeforeAtachNbrKmCurrent:''|| info?.kmToNotifyBeforeAtachNbrKmCurrent
    })
    const addCar=()=>{
        
        carsStore.addCar(info)
        showMessage({
            message:'Voiture Ajouter Avec Succes',
            type:'success',
        })
        
       setInfo({
        matricule:'',
        carName:'' ,
        carModel:'' ,
        numberKmCurrent:'',
        numberKmToChangeOil:'',
        kmToNotifyBeforeAtachNbrKmCurrent:''

       })

    }
    const addInfo=(key,value)=>{
        const state=info
       state[key]=value
        setInfo(
         state
        )
    }
  return (
    <SafeAreaView style={styles.screenPage}>
      <Text style={styles.title} >Ajouter une Voiture </Text>
      <View style={styles.inputs}>
        <TextInput
        autoFocus={true}
        returnKeyType='next'
        blurOnSubmit={false}
        style={styles.input}
        placeholder='Entre Matricule de Voiture'
        value={info?.matricule}
        onChangeText={(text)=>addInfo('matricule',text)}
        onSubmitEditing={()=>{carNameref.current.focus()}}
        />
        <TextInput
        ref={carNameref}
        returnKeyType='next'
        blurOnSubmit={false}
        style={styles.input}
        placeholder='Entre le Nom de Voiture'
        defaultValue={info.carName}
        onChangeText={(text)=>addInfo('carName',text)}
        onSubmitEditing={()=>{carModelref.current.focus()}}
        />
        <TextInput
        ref={carModelref}
        returnKeyType='next'
        blurOnSubmit={false}
        style={styles.input}
        placeholder='Entre le Model de Voiture'
        defaultValue={info?.carModel}
        onChangeText={(text)=>addInfo('carModel',text)}
        onSubmitEditing={()=>{numberKmCurrentref.current.focus()}}

        />
        <TextInput
        ref={numberKmCurrentref}
        returnKeyType='next'
        blurOnSubmit={false}
        style={styles.input}
        placeholder='Entre Le Km Actuel de Voiture'
        defaultValue={info?.numberKmCurrent}
        onChangeText={(text)=>addInfo('numberKmCurrent',text)}
        onSubmitEditing={()=>{numberKmToChangeOilref.current.focus()}}
        keyboardType='numeric'
        />
        <TextInput
        ref={numberKmToChangeOilref}
        returnKeyType='next'
        blurOnSubmit={false}
        style={styles.input}
        placeholder='Entre le Km de Vidange de Voiture'
        defaultValue={info?.numberKmToChangeOil}
        onChangeText={(text)=>addInfo('numberKmToChangeOil',text)}
        onSubmitEditing={()=>{kmToNotifyBeforeAtachNbrKmCurrentref.current.focus()}}

        keyboardType='numeric'

        />
        <TextInput
        ref={kmToNotifyBeforeAtachNbrKmCurrentref}
        returnKeyType='done'
        style={styles.input}
        placeholder='Entre Km pour envoie le notification  de Vidange'
        defaultValue={info?.kmToNotifyBeforeAtachNbrKmCurrent}
        onChangeText={(text)=>addInfo('kmToNotifyBeforeAtachNbrKmCurrent',text)}
        onSubmitEditing={()=>addCar()}
        keyboardType='numeric'
        />
      </View>
      <View style={styles.button}>

      <Button
      color={primire}
      title='Ajouter'
      onPress={()=>addCar()}
      />
      </View>
    </SafeAreaView>

)
}

const styles = StyleSheet.create({
    screenPage:{
        flex:1,
     
        alignItems:"center"
    },
    title:{
        marginTop:30,
        fontSize:20
    },  
    inputs:{
        marginTop:30
    },
    input:{
        borderWidth:1,
        height:40,
        marginVertical:10,
        padding:10
    },
    button:{
        width:100,
        margin:10,
        
    }
})

export default Addcars