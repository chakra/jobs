import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Slides from '../components/Slides';

const SLIDES_DATA =  [
  {text: 'Slide 1 is found here now and then ', backgroundColor: '#0adffe'},
  {text: 'Slide 2 is found here now and then ', backgroundColor: '#0ddaff'},
  {text: 'Slide 3 is found here now and then ', backgroundColor: '#000fff'}
]

class WelcomeScreen extends Component {

  onSlidesComplete = () =>  {
    this.props.navigation.navigate('auth');
  }
 
  render() {
    return (
    <Slides data={SLIDES_DATA} onComplete={this.onSlidesComplete}></Slides>
    )
  }
}

export default WelcomeScreen;
