/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
  Container,
  Header,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Title,
  Form,
  Item,
  Input,
  Label,
  Content
}from 'native-base';
import axios from 'axios';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component{
  constructor(){
    super();
    this.state ={
      kepada: '',
      subject: '',
      isi: '',
    }
  }

  klikKirim(){
    var url = 'http://192.168.5.230:3210/';
    
    axios.post(url,{
      kepada: this.state.kepada,
      subject: this.state.subject,
      isi: this.state.isi
    })
  }
  
  // ini gimana ngecek front endnya jalan atau enga?????? bakendnya blm bener

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>
              React Native - Nodemailer
            </Title>
          </Body>
        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label> To - email recipient </Label>
              <Input 
                onChangeText={(x) => this.setState({kepada: x})}
                value={this.state.x}
              />
            </Item>

            <Item floatingLabel>
              <Label> Email subject </Label>
              <Input 
                onChangeText={(y) => this.setState({subject: y})}
                value={this.state.x}
              />
            </Item>

            <Item floatingLabel last>
              <Label> Messages.. </Label>
              <Input 
                onChangeText={(z) => this.setState({isi: z})}
                value={this.state.z}
              />
            </Item>
          </Form>

          <Button 
            primary
            onPress = {() => {klikKirim()}}
          >
            <Text> SEND EMAIL </Text>
          </Button>

        <Text>{this.state.kepada}</Text>
        <Text>{this.state.subject}</Text>
        <Text>{this.state.isi}</Text>
        </Content>
        
        

      </Container>
    );
  }
}
