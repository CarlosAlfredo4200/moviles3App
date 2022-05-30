import React from 'react'
import colores from '../utils/colors';
import { StyleSheet, View, TextInput} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';



const Formulario = () => {

    
  return (
      <>

    <View style={styles.viewForm}>
        <View style={styles.viewInput}>
        <TextInput 
            placeholder='Cantidad solicitada:'
            keyboardType='numeric'
            style={styles.input}
        />
        <TextInput 
            placeholder='Interes %:'
            keyboardType='numeric'
            style={[styles.input, styles.inputPocentaje]}

        />
        </View>

        <RNPickerSelect
            style={styles.inputAndroid}
            onValueChange={(value) => console.log(value)}
            items={[
                { label: '3 Meses', value: 3 },
                { label: '6 Meses', value: 6 },
                { label: '12 Meses', value: 12 },
                { label: '24 Meses', value: 24 },
                 
            ]}
        />
    </View>
      </>
  )
}

const styles = StyleSheet.create({
    viewForm:{
        position:'absolute',
        bottom:-90,
        width:'85%',
        paddingHorizontal:50,
        backgroundColor:colores.PRIMARY_COLOR_DARK,
        borderRadius:30,
        height:180,
        justifyContent:'center'
    },
    viewInput:{
        flexDirection:'row',
    },
    input:{
        height:50,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:colores.PRIMARY_COLOR,
        width:'60%',
        marginLeft:5,
        marginRight:-5,
        marginBottom:10,
        color:'#000',
        paddingHorizontal:20,
    },
    inputPocentaje:{
        width:'40%',
        marginLeft:5,
    },
    inputAndroid:{
        fontSize:16,
        bottom:0,
        paddingHorizontal:10,
        paddingVertical:8,
        borderWidth:1,
        borderColor:'grey',
        borderRadius:8,
        color:'black',
        paddingRight:20,
        backgroundColor:'#fff'



    }
})

export default Formulario