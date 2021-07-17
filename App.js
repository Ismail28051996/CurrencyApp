
import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Snackbar from "react-native-snackbar";

const CurrencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004

}

const App = () => {

  const [InputValue, setInputValue] = useState(0);
  const [resultValue, setresultValue] = useState(0);

  const buttonPressed= (currency) => {
    if(!InputValue){
      return Snackbar.show({
        text: 'Please Enter a Value',
        backgroundColor:"#EA7773",
        textColor:"#000000"
      });
    }
    let result = parseFloat(InputValue) * CurrencyPerRupee[currency]
    setresultValue(result.toFixed(2))
  }

  return (
    <>
    <ScrollView backgroundColor="#1b262c"
    keyboardShouldPersistTaps="handled"
    contentInsetAdjustmentBehavior="automatic"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{resultValue}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter Value"
          placeholderTextColor="#c1c1c1"
          value={InputValue}
          onChangeText={(InputValue) => setInputValue(InputValue)}
          ></TextInput>
        </View>
        <View style={styles.convertButtonContainer}>
          {Object.keys(CurrencyPerRupee).map((currency)=>(
            <TouchableOpacity
            onPress={()=>buttonPressed(currency)}
            key={currency}
            style={styles.conertorButton}
            >
              <Text style={styles.conertorButtonText}>{currency}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1b262c"
  },
  resultContainer:{
    height:70,
    marginTop:80,
    justifyContent:"center",
    borderColor:"#bbe1fa",
    borderWidth:2,
    alignItems:"center",
  },
  resultValue:{
    fontSize:30,
    color:"#FFF",
    fontWeight:"bold",
  },
  inputContainer:{
    height:70,
    marginTop:10,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:"#bbe1fa"
  },
  input:{
    fontSize:30,
    textAlign:"center",
    color:"#FFFF",
  },
  convertButtonContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:10,
  },
  conertorButton:{
    alignItems:"center",
    justifyContent:"center",
    height:100,
    width:"33.3%",
    borderWidth:1,
    borderColor:"#bbe1fa",
    marginTop:10,
    backgroundColor:"#00AC61",
  },
  conertorButtonText:{
    color:"#CAD5E2",
    fontWeight:"bold",
  }
})