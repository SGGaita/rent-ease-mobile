import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SIZES, icons, images ,routes} from '../../constants'



export const Profile = ({navigation}) => {
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontWeight:700,color:COLORS.white,...FONTS.h2 }}>Profile</Text>
      </View >
      <View style={styles.body}>
        <View style={styles.avatar}>
          <Image source={images.avatar} resizeMode='contain' style={{borderRadius:600,width:100,height:100 }} />
        </View>

        <ScrollView style={styles.scroll}>
          <View style={{marginTop:SIZES.padding * 5 ,flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:COLORS.darknavy, ...FONTS.h2}}>Steve Gaikia</Text>
            <Text style={{color:COLORS.darkgray, ...FONTS.body3}}>steveggaikia@gmail.com</Text>
          </View>

          <View style={{margin:SIZES.padding * 2 ,flex:1, flexDirection:'column'}}>
            <Text style={{color:COLORS.black, ...FONTS.h2}}>General</Text>

            <TouchableOpacity
               
               style={{
                 width: '100%',
                 height: 60,
                 justifyContent: 'space-between',
                 alignItems: 'center',
                 marginVertical: 10,
                 backgroundColor: COLORS.white,
                 borderRadius: 4,
                 borderColor: COLORS.blue,
                 borderStyle: "solid",
                 borderWidth: 0.1,
                 //elevation: 4,
                 position: "relative",
                 paddingHorizontal: 15,
                 flexDirection: 'row',
                 backgroundColor:COLORS.white
               }}
               onPress={() => {}}
             >
               <View style={{flex: 1,alignItems:'flex-start'}}>
                 <Text style={{color:COLORS.darknavy,...FONTS.h4}}>Profile Settings</Text>
               </View>
               </TouchableOpacity>

               <TouchableOpacity
               
               style={{
                 width: '100%',
                 height: 60,
                 justifyContent: 'space-between',
                 alignItems: 'center',
                 marginVertical: 10,
                 backgroundColor: COLORS.white,
                 borderRadius: 4,
                 borderColor: COLORS.blue,
                 borderStyle: "solid",
                 borderWidth: 0.1,
                 //elevation: 4,
                 position: "relative",
                 paddingHorizontal: 15,
                 flexDirection: 'row',
                 backgroundColor:COLORS.white
               }}
               onPress={() => {}}
             >
               <View style={{flex: 1,alignItems:'flex-start'}}>
                 <Text style={{color:COLORS.darknavy,...FONTS.h4}}>Change Password</Text>
               </View>
               </TouchableOpacity>

               <TouchableOpacity
               
               style={{
                 width: '100%',
                 height: 60,
                 justifyContent: 'space-between',
                 alignItems: 'center',
                 marginVertical: 10,
                 backgroundColor: COLORS.white,
                 borderRadius: 4,
                 borderColor: COLORS.blue,
                 borderStyle: "solid",
                 borderWidth: 0.1,
                 //elevation: 4,
                 position: "relative",
                 paddingHorizontal: 15,
                 flexDirection: 'row',
                 backgroundColor:COLORS.white
               }}
               onPress={() => {}}
             >
               <View style={{flex: 1,alignItems:'flex-start'}}>
                 <Text style={{color:COLORS.darknavy,...FONTS.h4}}>Notifications</Text>
               </View>
               </TouchableOpacity>
               <TouchableOpacity
               
               style={{
                 width: '100%',
                 height: 60,
                 justifyContent: 'space-between',
                 alignItems: 'center',
                 marginVertical: 10,
                 backgroundColor: COLORS.white,
                 borderRadius: 4,
                 borderColor: COLORS.blue,
                 borderStyle: "solid",
                 borderWidth: 0.1,
                 //elevation: 4,
                 position: "relative",
                 paddingHorizontal: 15,
                 flexDirection: 'row',
                 backgroundColor:COLORS.white
               }}
               onPress={() => {}}
             >
               <View style={{flex: 1,alignItems:'flex-start'}}>
                 <Text style={{color:COLORS.darknavy,...FONTS.h4}}>Transaction History</Text>
               </View>
               </TouchableOpacity>

               <TouchableOpacity
               
               style={{
                 width: '100%',
                 height: 60,
                 justifyContent: 'space-between',
                 alignItems: 'center',
                 marginVertical: 10,
                 backgroundColor: COLORS.white,
                 borderRadius: 4,
                 borderColor: COLORS.blue,
                 borderStyle: "solid",
                 borderWidth: 0.1,
                 //elevation: 4,
                 position: "relative",
                 paddingHorizontal: 15,
                 flexDirection: 'row',
                 backgroundColor:COLORS.white
               }}
               onPress={() => navigation.navigate(routes.LOGIN)}
             >
               <View style={{flex: 1,alignItems:'flex-start'}}>
                 <Text style={{color:COLORS.darknavy,...FONTS.h4}}>Logout</Text>
               </View>
               </TouchableOpacity>
            
            
            
            
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.navy,
  },
  header: {
    flex: 1,
    backgroundColor: COLORS.navy,
    paddingTop: SIZES.padding * 4,
    paddingBottom: SIZES.padding * 1,
    paddingHorizontal: SIZES.padding * 4,
    alignItems:'flex-start',
    //justifyContent:'center'
  },
  body: {
    flex: 6,
    backgroundColor: COLORS.white,
    borderTopStartRadius:20,
    borderTopEndRadius:20  
  },
  scroll:{
    
  },
  avatar: {
    alignSelf:'center',
    padding: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    height: 110,
    width:110 ,
    backgroundColor: COLORS.white,
    //left: 30,
    //right: 30,
    top: -70,
    borderColor: COLORS.white,
    borderWidth: 3,
    borderRadius: 75,
    shadowColor: COLORS.navy,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.5,
    elevation: 0,
    zIndex: 100
  }


})