import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from '../database';
export default class HomeScreen extends Component{
  constructor() {
    super();
    this.state = {
      text: '',
      isSearchPressed: false,
      isLoading: false,
      element : "Loading...",
      atomicNumber :'',
      state : "",
      symbol: "",
      founder: "",
    };
  }

  getWord=(text)=>{
    var text = text.toLowerCase()
    try{
      var element = dictionary[text]["Element"]

      var atomicNumber = dictionary[text]["AtomicNumber"]

      var state = dictionary[text]["State"]

      var symbol = dictionary[text]["Symbol"]

      var founder = dictionary[text]["Founder"]

      this.setState({
        "element" : element,
        "atomicNUmber" : atomicNumber,
        "state" : state,
        "symbol" : symbol,
        "founder": founder,
      })
    }
    catch(err){
      alert("Sorry This word is not available for now")
      this.setState({
        'text':'',
        'isSearchPressed':false
      })
    }
  }

  render(){
    return(
      <View style={{flex:1, borderWidth:2}}>
        <Header
          backgroundColor={'purple'}
          centerComponent={{
            text: 'Chemistry Partner',
            style: { color: "yellow", fontSize: 25},
          }}
        />
        <View style={styles.inputBoxContainer}>
          <TextInput
            style={styles.inputBox}
            onChangeText={text => {
              this.setState({
                text: text,
                isSearchPressed: false,
                element : "Loading...",
                atomicNumber :"",
                state : "",
                symbol : "",
                founder: "",
              });
            }}
            value={this.state.text}
          />

          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              this.setState({ isSearchPressed: true });
              this.getWord(this.state.text)
            }}>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.outputContainer}>
          <Text style={{fontSize:20}}>
            {
              this.state.isSearchPressed && this.state.element === "Loading..."
              ? this.state.element
              : ""
            }
          </Text>
            {
              this.state.element !== "Loading..." ?
              (
                <View style={{justifyContent:'center', marginLeft:10 }}>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}> Word :{" "} </Text>
                    <Text style={{fontSize:18 }}>
                      {/*Display the word here*/}
                      {this.state.element}
                    </Text>
                  </View>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}> Type :{" "}  </Text>
                    <Text style={{fontSize:18}}>
                      {/*Display the category here*/}
                      {this.state.atomicNumber}
                    </Text>
                  </View>
                  <View style={{flexDirection:'row',flexWrap: 'wrap'}}>
                    <Text style={styles.detailsTitle}> Definition :{" "} </Text>
                    <Text style={{ fontSize:18}}>
                    {/*Display the definition here*/}
                      {this.state.state}
                    </Text>
                  </View>
                </View>
              )
              :null
            }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputBoxContainer: {
    flex:0.3,
    alignItems:'center',
    justifyContent:'center'
  },
  inputBox: {
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
  },
  searchButton: {
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  searchText:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  outputContainer:{
    flex:0.7,
    alignItems:'center'
  },
  detailsContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  detailsTitle:{
    color:'orange',
    fontSize:20,
    fontWeight:'bold'
  }
});
