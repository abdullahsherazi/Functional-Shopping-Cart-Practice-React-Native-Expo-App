import React from 'react';
import {Image,StyleSheet,Text,View,TouchableOpacity,ScrollView} from 'react-native';
import {AntDesign,Feather} from '@expo/vector-icons';
import ShoppingStore from "./photos/ShoppingStore.jpg";
import RenderClothes from "./RenderClothes";

export default class Store extends React.Component {

    addCart=(ItemKey,ItemName,ItemPrice,ItemQuantity)=>{
             let cart=this.state.cart;

                for(var i=0;i<cart.length;i++){
                    if(cart[i].ItemKey===ItemKey){
                    cart.splice(i, 1);}
                }
             if(ItemQuantity!==0){
              cart.push({
                  ItemKey:ItemKey,
                  ItemName:ItemName,
                  ItemPrice:ItemPrice,
                  ItemQuantity:ItemQuantity
              })
            }
            this.setState({cart:cart});
    }
    constructor(props){
        super(props);
         this.state={
             items:[
                 {ItemKey:0,ItemName:"Gildan Ultra Cotton T-shirt", ItemPrice:900, ItemPhoto:require('./photos/shirt1.jpg'),},
                 {ItemKey:1,ItemName:"Oxford Button-Down Shirt", ItemPrice:600, ItemPhoto:require('./photos/shirt2.jpg'),},
                 {ItemKey:2,ItemName:"Office Shirt", ItemPrice:3000, ItemPhoto:require('./photos/shirt5.jpg'),},
                 {ItemKey:3,ItemName:"Dress Shirt", ItemPrice:100, ItemPhoto:require('./photos/shirt3.jpg'),},
                 {ItemKey:4,ItemName:"Flannel Shirt", ItemPrice:2000, ItemPhoto:require('./photos/shirt4.jpg'),},
                 {ItemKey:5,ItemName:"Party Shirt", ItemPrice:550, ItemPhoto:require('./photos/shirt6.jpg'),},
                 {ItemKey:6,ItemName:"Men's T-shirt", ItemPrice:330, ItemPhoto:require('./photos/shirt7.jpg')},
                 {ItemKey:7,ItemName:"Men Fitted T-shirt", ItemPrice:2100, ItemPhoto:require('./photos/shirt8.jpg')},
                 {ItemKey:8,ItemName:"Women's Oxford T-shirt", ItemPrice:3500, ItemPhoto:require('./photos/shirt9.jpg'),},
                 {ItemKey:9,ItemName:"Kid's Party Shirt", ItemPrice:9000, ItemPhoto:require('./photos/shirt10.jpg'),},
                 {ItemKey:10,ItemName:"Formal T-shirt", ItemPrice:170, ItemPhoto:require('./photos/shirt11.jpg'),},
                 {ItemKey:11,ItemName:"Men's Party shirt", ItemPrice:190, ItemPhoto:require('./photos/shirt12.png'),},
                 {ItemKey:12,ItemName:"Women's Office T-shirt", ItemPrice:345, ItemPhoto:require('./photos/shirt13.jpg'),},
                 {ItemKey:13,ItemName:"Cotton T-shirt", ItemPrice:970, ItemPhoto:require('./photos/shirt14.jpg'),},
                 {ItemKey:14,ItemName:"Silk T-shirt", ItemPrice:120, ItemPhoto:require('./photos/shirt15.jpg'),},
                 {ItemKey:15,ItemName:"Ultra Light T-shirt", ItemPrice:320, ItemPhoto:require('./photos/shirt16.jpg'),},
                 {ItemKey:16,ItemName:"Light Cotton T-shirt", ItemPrice:520, ItemPhoto:require('./photos/shirt17.jpg'),},
                 {ItemKey:17,ItemName:"Stylish T-shirt", ItemPrice:940, ItemPhoto:require('./photos/shirt18.jpg'),},
                 {ItemKey:18,ItemName:"Simple T-shirt", ItemPrice:670, ItemPhoto:require('./photos/shirt19.jpg'),},
                 {ItemKey:19,ItemName:"Men's Oxford T-shirt", ItemPrice:490, ItemPhoto:require('./photos/shirt20.jpg'),},
                 ],
         cart:[]
       
                }
            }
    
  render() {
    return (
     <View style={styles.container}>

{/* HEADER */}
            <View style={{backgroundColor:"white",width:"100%",height:60,flexDirection:"row",marginTop:"6.5%"}}>
           <Feather name="menu" size={30}  color="#404040" style={{paddingTop:12,paddingLeft:"7%"}} />
          <View style={{borderBottomWidth:0.8,height:33,width:"33%",borderTopWidth:0.8,padding:0,marginTop:12,marginLeft:"16%"}}>
           <Text style={{fontSize:20,color:"#404040",textAlign:"center"}}>DUBAI MART</Text>
          </View>
          <AntDesign name="filter" size={30} color="black" size={30} style={{paddingTop:12,paddingLeft:"20%"}}  /> 
        </View>

{/* BACKGROUND IMAGE */}
            <View style={{width:"100%",height:90,backgroundColor: "#0044cc"}}>
        <Image source={ShoppingStore} resizeMode="cover" style={{width:"100%",height:90}}> 
        </Image>
        </View>

{/* NO OF ITEMS */}
        <View style={{backgroundColor:"#cca300",height:30,alignItems:"flex-start",justifyContent:"center"}}>
 <Text style={{color:"white",fontWeight:"bold",marginRight:6,marginLeft:6}}>No. Of Items Added: {this.state.cart.length}</Text>
        </View>

{/* RENDERING ITEMS USING MAP FUNCTION */}
      <ScrollView style={{height:"70%",marginBottom:10}}>
        {this.state.items.map((items)=>{
            return (<RenderClothes key={items.ItemKey} ItemKey={items.ItemKey}  ItemName={items.ItemName} ItemPrice={items.ItemPrice} ItemPhoto={items.ItemPhoto} ItemSale={items.ItemSale} addCart={this.addCart}/>)
        })}
      </ScrollView>

{/* PROCEED TO CART */}
      <TouchableOpacity style={{backgroundColor:"#cca300",width:"70%",height:30,borderRadius:7,paddingTop:5,marginLeft:"16%"}}  onPress={()=>this.props.navigation.navigate('CreateCart',{cart:this.state.cart}) }  >
          <Text style={{textAlign:"center",color:"white",fontWeight:"bold"}}>Proceed To My Cart</Text>
      </TouchableOpacity>

     </View>
    )
  }
}

const styles = StyleSheet.create({

  container:{
   flex: 1,
   justifyContent: 'flex-start',
  }
});