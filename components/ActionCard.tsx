import { StyleSheet, Text, View,Linking, Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {

function openWebsite(websiteLink:string){
 Linking.openURL(websiteLink)
}

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
What's new in javascript 21-ES12
            </Text>
        </View>
        <Image source={{
uri: 'https://images.pexels.com/photos/5054776/pexels-photo-5054776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }} style={styles.cardImage}></Image>
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
     hello there, welcome to new javascript stuffs. This is just a demo text, dont try to explore too much :P
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={()=>openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                <Text style={styles.socialLinks}>
                    Read More...
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>openWebsite('https://google.com')}>
                <Text style={styles.socialLinks}>
                    Follow Me
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
headingText:{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8
},
card:{
    width:350,
    height:360,
    borderRadius:8,
    marginVertical:12,
    marginHorizontal:16
},
elevatedCard:{
    backgroundColor:'#E07C24',
    elevation:3,
    shadowOffset:{
        width:1,
        height:1
    },
    shadowColor:'#333',
    shadowOpacity:0.3
},
headingContainer:{
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
},
headerText:{
    color:'#000000',
    fontSize:16,
    fontWeight:'600'
},
cardImage:{
    height:200
},
bodyContainer:{
    padding:10
},
footerContainer:{
    padding:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
},
socialLinks:{
    fontSize:14,
    color:'#000000',
    backgroundColor:'#FFF',
    paddingHorizontal:20,
    paddingVertical:6,
    borderRadius:6
}
})