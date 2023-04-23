import React from 'react'
import {View, Text} from 'react-native'
import { COLORS, FONTS } from '../../constants'

export const Transactions = () => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:COLORS.navy, ...FONTS.body2}}>No Transactions records found</Text>
    </View>
  )
}
