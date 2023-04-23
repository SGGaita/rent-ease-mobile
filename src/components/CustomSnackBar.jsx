import React from 'react'
import { Snackbar } from 'react-native-paper';
import { View, Text, Image, StyleSheet } from 'react-native';
import { images,COLORS } from '../constants';


export const CustomSnackBar = ({visible,onDismissSnackBar,message, isError}) => {
    return (

        <Snackbar
            visible={visible}
            duration={3000}
            onDismiss={onDismissSnackBar}
            style={styles.snackbar} // apply custom styles to the Snackbar
            action={{
                label: 'UNDO',
                color: isError ? 'red' : 'green',
                onPress: () => {
                    // Do something
                },
            }}>
            <View style={styles.snackbarContent}>
                <Text style={styles.snackbarText}>{message}</Text>
            </View>
        </Snackbar>
    )

}

const styles = StyleSheet.create({
    snackbar: {
        
        backgroundColor: COLORS.darknavy, // set background color to black
        borderRadius: 0, // set border radius to half the height of the Snackbar (16)
      },
      snackbarContent: {
        flexDirection: 'row',
        alignItems: 'center',
      },
     
      snackbarText: {
        color: '#fff', // set text color to red
      },
    
});
