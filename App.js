import React from 'react';
import { StyleSheet, Text, View,TouchableWithoutFeedback, Animated } from 'react-native';
import Ball from './src/ball'

export default class App extends React.Component {
  state = {
    animation : new Animated.Value(150),
  }
  startAnimation = () => {
    Animated.timing(this.state.animation,{
      toValue: 300,
      duration : 1500
    }).start(()=>{
      Animated.timing(this.state.animation,{
        toValue:150,
        duration:1500
      }).start();
    });

  }

  render() {
    const animStyles = {
      top : this.state.animation,
      left : this.state.animation
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
    position: "absolute",
    left:0,
    top:0,
    width:150,
    height : 150,
    backgroundColor:"tomato"
  }
});
