import React from 'react';
import {Image,StyleSheet,Text,View,TouchableOpacity,Picker} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default class RenderClothes extends React.Component {
    constructor(props){
   super(props);
    this.state={
        ItemQuantity:0
    }
}
    render() {
    return (
    <View>

{/* ITEM */}
          <View style={{flexDirection:"row",height:110}}>

{/* ITEM IMAGE */}
              <View style={{width:"40%"}}>
                      <Image source={this.props.ItemPhoto}  resizeMode="contain" style={{width:"100%",height:"100%"}}/>
              </View>
              
{/* ITEM DESCRIPTION */}
              <View style={{width:"60%",paddingTop:"8%"}}>
              <Text style={{fontSize:15,color:"#3d5c5c",fontWeight:"bold"}}>{this.props.ItemName}</Text>
              <Text style={{fontSize:12,paddingTop:"3%",fontWeight:"bold"}}>$ {this.props.ItemPrice}</Text>
        
{/* ADD AND QUANTITY */}
              <View style={{marginTop:"3%",flexDirection:"row"}}>
              <TouchableOpacity style={{width:80,height:30,backgroundColor:"#cca300",borderRadius:3,paddingTop:5}} onPress={()=>{this.props.addCart(this.props.ItemKey,this.props.ItemName,this.props.ItemPrice,this.state.ItemQuantity)}}>
                  <Text style={{textAlign:"center",fontWeight:"bold",color:"white"}}>ADD</Text>
              </TouchableOpacity>

{/* QUANTITY */}
              <View style={{flexDirection:"row",backgroundColor:"#cca300",width:103,borderRadius:3,height:30,marginLeft:30}}>
                <Picker
                    selectedValue={this.state.ItemQuantity}
                    onValueChange={(itemValue, itemIndex) =>
                    this.setState({ItemQuantity: itemValue}) }
                    mode="dropdown"
                    style={{width:76,backgroundColor:"#cca300",height:30,marginLeft:2,color:"white"}} >

                    <Picker.Item label="Quantity" value={0} /> 
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={2} />
                    <Picker.Item label="3" value={3} />
                    <Picker.Item label="4" value={4} />
                    <Picker.Item label="5" value={5} />
                </Picker>
                <MaterialIcons name="arrow-drop-down" size={30} color="black" style={{width:20}} />
             </View>

              </View>
              </View>
          </View>

{/* hr  */}
                <View style={styles.hr} ></View>

    </View>
    )
  }
}

const styles = StyleSheet.create({

    hr:{
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
        },
  });