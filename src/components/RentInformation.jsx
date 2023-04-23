import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { images, icons, COLORS,FONTS } from '../constants'

export const RentInformation = () => {
  return (
    <>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Image source={icons.location}
              resizeMode='contain'
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.grey
              }}
            />
            <Text style={{ fontWeight: 100, ...FONTS.body3, color: COLORS.navy }}>Central Lane Apartments</Text>
          </View>

          <View style={{ flex: 2, flex: 1, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
              <Text style={{ fontWeight: 800, ...FONTS.h4, color: COLORS.navy }}> Payment Due</Text>
              <Text style={{ fontWeight: 100, ...FONTS.body1, color: COLORS.limeDark }}>Kes 15,000</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
              <Text style={{ fontWeight: 800, ...FONTS.h3, color: COLORS.navy }}>Due date</Text>
              <Text style={{ fontWeight: 100, ...FONTS.body2, color: COLORS.navy }}>5th May, 2023</Text>
            </View>


          </View>
    </>
  )
}


const styles = StyleSheet.create({

})
