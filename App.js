import React from 'react';
import { StyleSheet, Text, View,TouchableWithoutFeedback, Animated,interpolate } from 'react-native';
//import Ball from './src/ball'

export default class App extends React.Component {
  state = {
    animation : new Animated.Value(0),
  }
  startAnimation = () => {
    Animated.timing(this.state.animation,{
      toValue: 1,
      duration : 1500
    }).start(()=>{
      Animated.timing(this.state.animation,{
        toValue:0,
        duration:1500
      }).start();
    });

  }

  render() {
    const widthChange = 
      this.state.animation.interpolate({
        inputRange : [0,1],
        outputRange :[ "20%","50%"]
        //positive values means clockwise rotation, negative values means counter clockwise
      })
    const heightChange = this.state.animation.interpolate({
      inputRange : [0,1],
      outputRange : ["20%","30%"]
    })
    const animStyles = {
      
        
          width:widthChange,
          height:heightChange
        
              
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
    // width:"20%",
    // height:"20%",
    backgroundColor:"tomato"
  }
});
