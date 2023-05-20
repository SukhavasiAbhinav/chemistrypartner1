import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';

export default class Introduction extends Component{
    render(){
        return(
            <View>
            <Header 
              backgroundColor={'purple'}
              centerComponent={{
                text: 'Get Started',
                style: { color: "yellow", fontSize: 25},
              }}

              
            />

              <Image
                style={{ width: 200, height: 200, marginTop: 50 }}
                source={require('../assets/img1.png')}
              />
             <View
                style={{marginTop:90, alignSelf:'center', justifyContent:'center'}}
                
             >
            <Text
              style={{fontSize: 28, justifyContent}}
            >
                New To Our App?Well Dont Worry As This Screen Will Help You Get Started And Understand The App.
                So Basically This App Helps You Do the Last Minute Revision For Your Exams, Helps You Know The Elements Well And Many More.
                So Click The Button Below And Start Your Learning Journey.
            </Text>
             </View>
                <TouchableOpacity>
                    <Text>Start</Text>
                </TouchableOpacity>

                
        
            </View>
        )
    }
    
}
