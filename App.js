import React from 'react';
import { StyleSheet, Text, View,TouchableWithoutFeedback, Animated } from 'react-native';
import Ball from './src/ball'

export default class App extends React.Component {
  state = {
    animation : new Animated.Value(1)
  }
  startAnimation = () => {
    Animated.timing(this.state.animation,{
      toValue: -2,
      duration : 1500
    }).start(()=>{
      Animated.timing(this.state.animation,{
        toValue:1,
        duration:1500
      }).start();
    });

  }

  render() {
    const animStyles = {
      transform  : [
        {
          scale : this.state.animation,
          //scaleX:this.state.animation
          //scaleY:this.state.animation
          //children of animated object also get scaled
          //-ve value of scale implies, that the object gets flipped
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
