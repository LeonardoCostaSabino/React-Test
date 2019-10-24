/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Picker,
} from 'react-native';

import logo from './images/logo_unisuam.png';

import {Button, Image, ThemeProvider, Input, Card} from 'react-native-elements';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (

          <ScrollView style={{height:'100%'}}>
              <View style={{alignItems:'center', marginTop:50}}>
                <Image source={logo} style={{width: 300, height: 50}} />
              </View>
              <View style={{alignItems:'center'}}>
              <Card
                  imageStyle={{width:'90%'}}
                  containerStyle={{width:'90%', height:450,backgroundColor:"#ebebeb" }}>
                  <Text style={{marginBottom: 10, textAlign:'center', fontSize:25}}>
                      Por favor preencha com suas informações
                  </Text>

                  <View style={{alignItems:'center'}}>
                  <Picker
                      selectedValue="Aluno"
                      style={{height: 50, width: 100}}
                      >
                      <Picker.Item label="Aluno" value="aluno" />
                      <Picker.Item label="Professor" value="professor" />
                  </Picker>
                  </View>

                  <Input
                      placeholder='Matricula'
                      label="Matricula"
                      rightIcon={
                          <Icon
                              name='user'
                              size={24}
                              color='#004075'
                          />
                      }
                  />

                  <Input
                      secureTextEntry={true}
                      placeholder='Senha'
                      label="Senha"
                      rightIcon={
                          <Icon
                              name='lock'
                              size={24}
                              color='#004075'
                          />
                      }
                  />

                  <View style={{marginTop:70}}>
                  <Button
                      icon={<Icon name='key' size={20} color='#ffffff' />}
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title=' Entrar' />
                  </View>
              </Card>
              </View>

          </ScrollView>

  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  card: {
    fontSize: 50
  }
});

export default App;
