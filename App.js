import React from 'react';
import { StyleSheet, Text, View,TouchableWithoutFeedback, Animated,interpolate } from 'react-native';
//import Ball from './src/ball'

export default class App extends React.Component {
  state = {
    animation : new Animated.Value(0),
  }
  startAnimation = () => {
    Animated.timing(this.state.animation,{
      toValue: 360,
      duration : 1500
    }).start(()=>{
      Animated.timing(this.state.animation,{
        toValue:0,
        duration:1500
      }).start();
    });

  }

  render() {
    const boxRotation = 
      this.state.animation.interpolate({
        inputRange : [0,360],
        outputRange :[ "0deg","360deg"]
        //positive values means clockwise rotation, negative values means counter clockwise
      })
    
    const animStyles = {
      transform : [
        {
          //rotate :  boxRotation,
          // rotateY: boxRotation
          rotateX : boxRotation
        }
      ]        
    }
   

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={this.startAnimation}>
              <Animated.View style={[styles.box,animStyles]}>
                <Text> Sample Text</Text>
              </Animated.View>
        </TouchableWithoutFeedback>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
    justifyContent:"center"
  },
  box : {
    width:150,
    height : 150,
    backgroundColor:"tomato"
  }
});
