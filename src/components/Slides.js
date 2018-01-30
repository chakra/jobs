import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

renderLastSlide(index) {
  if (index === this.props.data.length - 1) {
    return (
        <Button title="Login"
          raised
          onPress={this.props.onComplete}/>
    )
  }
}

renderSlides() {
  return this.props.data.map((slide, index) => {
    return (
      <View key={slide.text} style={[styles.slideStyle, { backgroundColor: slide.backgroundColor} ]}>
      <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderLastSlide(index)}
      </View>
    )
  })
}

  render() {

    return (
      <ScrollView
        style={{flex:1}}
        horizontal
        pagingEnabled>
      {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 24
  }
})

export default Slides;
