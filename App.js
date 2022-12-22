import { View, 
          Text,
          StyleSheet, 
          TouchableOpacity} from 'react-native'
import React, {useState} from 'react'

export default function App() {

const [textValue, setTextValue] = useState("");
const [isCardVisible, setIsCardVisible] = useState(false)

// ================== Handle Touchable Text and Print it on Display Start =============================
const handleChangeText = (text) => {
// console.log(text);
 var temp = textValue + text
 setTextValue(temp);
    if(temp == '1+3+9') 
    {
      setIsCardVisible(true)
    }

  
}
// ================== Handle Touchable Text and Print it on Display End =============================

  return (
    <View style={styles.container}>

      {/* Display View Starts */}
        <View style={styles.upperView}>
              {/* Moving Display to bottom-right */}
              <View style={styles.upperInnerView}>
                <Text style={{color: 'white', fontSize: 30}}>{textValue}</Text>
              </View>
              {/*  */}
        </View>
      {/* Display View Ends */}


      {/* Middle Line View */}
        <View style={{backgroundColor: 'grey', height: 1}}></View>
      {/*  */}


      {/* Botton View Starts */}
        <View style={styles.bottomView}>
                {/* Row View Starts */}
                <View style={styles.bottomInnerView}>
                        {/* 1st Row */}
                        <View style={styles.columnContainer}>
                              <TouchableOpacity onPress = {() => {
                                setTextValue("")
                              }}>
                                <Text style={styles.buttonText}>C</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress = {() => handleChangeText('7')}>
                                <Text style={styles.buttonText}>7</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress = {() => handleChangeText('4')}>
                                <Text style={styles.buttonText}>4</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress = {() => handleChangeText('1')}>
                                <Text style={styles.buttonText}>1</Text>
                                </TouchableOpacity>
                              <TouchableOpacity onPress = {() => handleChangeText('.')}>
                                <Text style={styles.buttonText}>.</Text>
                              </TouchableOpacity>
                        </View>
                        {/*  */}

                        {/* 2nd Row */}

                        <View style={styles.columnContainer}>
                              <TouchableOpacity onPress = {() => handleChangeText('')}>
                                <Text style={styles.buttonText}>+/-</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress = {() => handleChangeText('8')}>
                                <Text style={styles.buttonText}>8</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress = {() => handleChangeText('5')}>
                                <Text style={styles.buttonText}>5</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress = {() => handleChangeText('2')}>
                                <Text style={styles.buttonText}>2</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress = {() => handleChangeText('0')}>
                                <Text style={styles.buttonText}>0</Text>
                              </TouchableOpacity>
                        </View>
                        {/*  */}

                        {/* 3rd Row */}
                        <View style={styles.columnContainer}>
                              <TouchableOpacity onPress = {() => handleChangeText('%')}>
                                <Text style={styles.buttonText}>%</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress = {() => handleChangeText('9')}>
                                <Text style={styles.buttonText}>9</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress = {() => handleChangeText('6')}>
                                <Text style={styles.buttonText}>6</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress = {() => handleChangeText('3')}>
                                <Text style={styles.buttonText}>3</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress = {() => handleChangeText('00')}>
                                <Text style={styles.buttonText}>00</Text>
                              </TouchableOpacity>
                        </View>
                        {/*  */}

                        {/* 4th Row */}
                        <View style={[styles.columnContainer, {backgroundColor: '#363636', borderRadius: 50}]}>
                              <TouchableOpacity onPress = {() => handleChangeText('/')}>
                                <Text style={styles.buttonText}>/</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress = {() => handleChangeText('*')}>
                                <Text style={styles.buttonText}>*</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress = {() => handleChangeText('-')}>
                                <Text style={styles.buttonText}>-</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress = {() => handleChangeText('+')}>
                                <Text style={styles.buttonText}>+</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress = {() => {
                                var output = eval(textValue)
                               // console.log(output);
                               setTextValue(output);
                              }}>
                                <View style={{backgroundColor: '#f8f5c0', 
                                              height: 50, 
                                              width: 50, 
                                              borderRadius: 50,
                                              alignItems: 'center',
                                              justifyContent: 'center'}}>
                                  
                                    <Text style={[styles.buttonText, {color: 'black'}]}>=</Text>
                                </View>
                              </TouchableOpacity>
                        </View>
                        {/*  */}
                </View>
                {/* Row View Ends */}
        </View>
      {/* Botton View Ends */}

      {/*  */}
      {isCardVisible? (
        <View style={{position: 'absolute',
             top: 0, right: 0, left: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{backgroundColor: '#9c9e9d', width: '65%', padding: 30, height: 200, justifyContent: 'center', borderRadius: 30}}>
                <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>Hello</Text>
             </View>                 
          </View>
      ): null}
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  upperView: {
    backgroundColor: '#3e403f',
    flex: 1
  },
  upperInnerView: {
   // backgroundColor: 'red',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20
  },
  bottomView: {
    backgroundColor: '#3e403f',
    flex: 1
  },
  bottomInnerView: {
    flexDirection: 'row',
   // backgroundColor: 'red',
    flex: 1,
    justifyContent: "space-around",
    marginVertical: 25
  },
  buttonText: {
    color: 'white',
    fontSize: 27
  },
  columnContainer: {
   // backgroundColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10
   // padding: 10
  },
  
}) 