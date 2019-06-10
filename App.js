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
      width : this.state.animation,
      height : this.state.animation
      //this allows us to scale the object without scaling
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
