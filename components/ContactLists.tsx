import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactLists() {
    const contacts=[
        {
            uid:1,
            name:'Hitech Chowdhury',
            status:'Just an teacher',
            imageUrl:'https://avatars.githubusercontent.com/u/11613311?v=4',

        },
        {
            uid:2,
            name:'Anurag Tiwari',
            status:'Just an teacher',
            imageUrl:'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
            uid:3,
            name:'Sanket Singh',
            status:'Just an teacher',
            imageUrl:'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
            uid:4,
            name:'Anirudh Jwala',
            status:'Just an teacher',
            imageUrl:'https://avatars.githubusercontent.com/u/25549847?v=4',
        }
    ];
  return (
    <View>
      <Text style={styles.headingText}>ContactLists</Text>
      <ScrollView style={styles.container}
      scrollEnabled={false}>
        {/* without destrcturing */}
         {/* {contacts.map((item) => (item.name))}  */}
         {contacts.map(({uid,name,status,imageUrl}) => (
                <View key={uid} style={styles.userCard}>
                    <Image source={{uri:imageUrl}} style={styles.userImage}></Image>
                   <View>
                   <Text style={styles.userName}>{name}</Text>
                   <Text style={styles.userStatus}>{status}</Text>
                   </View>
                </View>
            ))} 

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{
        paddingHorizontal:16,
        marginBottom:3
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#8D3DEF',
        marginBottom:4,
        padding:8,
        borderRadius:10
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:60/2,
        marginRight:14
    },
    userName:{
fontSize:16,
fontWeight:'600',
color:'#FFFFFF'
    },
    userStatus:{
        fontSize:12,
        color:'#FFFFFF'
    }
})