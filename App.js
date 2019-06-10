import React from 'react';
import { StyleSheet, Text, View,TouchableWithoutFeedback, Animated,interpolate } from 'react-native';
import Ball from './src/ball'

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
    const boxInterpolation = 
      this.state.animation.interpolate({
        inputRange : [0,1],
        outputRange :[ "rgb(255,99,71)","rgb(99,71,255)"]
      })
    const textInterpolation = this.state.animation.interpolate({
      inputRange:[0,1],
      outputRange : ["rgb(99,71,255)","rgb(255,99,71)"]
    })
    
    const animStyles = {
      backgroundColor:boxInterpolation,
    }
    const textAnimStyles = {
      color: textInterpolation
    }

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={this.startAnimation}>
              <Animated.View style={[styles.box,animStyles]}>
                <Animated.Text style={textAnimStyles}> Sample Text</Animated.Text>
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
