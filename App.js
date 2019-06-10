import React from 'react';
import { StyleSheet, Text, View,TouchableWithoutFeedback, Animated,interpolate, Easing } from 'react-native';
//import Ball from './src/ball'

export default class App extends React.Component {
  state = {
    animation : new Animated.Value(0),
  }
  startAnimation = () => {
    Animated.timing(this.state.animation,{
      toValue: 300,
      duration : 500,
     // easing : Easing.back(5),
     // easing: Easing.bounce,
     easing : Easing.elastic(5),
     // easing : Easing.bezier(.4,.3,.1),
      easing :Easing.circle


    }).start(()=>{
      Animated.timing(this.state.animation,{
        toValue:0,
        duration:500,
      }).start();
    });

  }

  render() {
    const animStyles= { 
      transform : [
        {translateY: this.state.animation}
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
     height:150,
    backgroundColor:"tomato"
  }
});
