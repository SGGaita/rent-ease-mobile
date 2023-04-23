import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../constants'

export const Documents = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: COLORS.navy, ...FONTS.body2 }}>No documents found</Text>
        </View>
    )
}

