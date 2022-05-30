 

import React from 'react';
import type {Node} from 'react';
import colores from './src/utils/colors';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Formulario from './src/components/Formulario';

 

 

const App: () => Node = () => {

  return (
    <>

    <SafeAreaView style={styles.safeArea}>
      <Text>Cotizador de Prestamos</Text>
      <Formulario />
    </SafeAreaView>

    <View>
      <Text>Resultado</Text>
    </View>

    <View>
      <Text>Footer</Text>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
   safeArea:{
     backgroundColor: colores.PRIMARY_COLOR,
     height:200,
     borderBottomLeftRadius:30,
     borderBottomRightRadius:30,
     alignItems:'center',
   },
   titleApp:{
    fontSize:25,
    fontWeight:'900',
    color:'black',
    marginTop:15,

   }
   
});

export default App;
