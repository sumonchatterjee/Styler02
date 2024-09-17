import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
       <Image source={{
        uri:'https://sample-videos.com/img/Sample-png-image-100kb.png'
       }} style={styles.cardImage} />
       <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>HAWA MAHAL</Text>
        <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
        <Text style={styles.cardDescription}>Pink City, Jaipur agdhjsd jsdhjsahdja ajshdkajshdjasd jahsdjkahjsd jkahsdkjahsdjka</Text>
        <Text style={styles.cardFooter}>Pink City, Jaipur</Text>
       </View>

      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
 headingText:{
  fontSize:24,
  fontWeight:'bold',
  paddingHorizontal:8
 },
 card:{
  width:350,
  height:360,
  borderRadius:6,
  marginVertical:12,
  marginHorizontal:16
 },
 cardElevated:{
  backgroundColor:'#FFFFFF',
  elevation:3,
  shadowOffset:{
    width:1,
    height:1
  }
 },
 cardImage:{
    height:180,
    marginBottom:8,
    borderTopLeftRadius:6, //indiviadual corners

    borderTopRightRadius:6
 } ,
 cardBody:{
  flex:1,
  flexGrow:1,
  paddingHorizontal:12
 },
 cardTitle:{
  color:'#000000',
  fontSize:22,
  fontWeight:'bold',
  marginBottom:4
 },
 cardLabel:{
  color:'#000000',
  fontSize:14,
  marginBottom:6
 },
 cardDescription:{
  color:'#242B2E',
  fontSize:12,
  marginBottom:12,
  marginTop:6,
  flexShrink:1
 },
 cardFooter:{
  color:'#000000'
 }
})