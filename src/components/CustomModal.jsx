import React from 'react'
import { Modal, TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../constants';

const { height, width } = Dimensions.get('window');

export const CustomModal = ({visible,onRequestClose,buttonText,onPressButton}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Your modal content */}
          <TouchableOpacity style={styles.button} onPress={onPressButton}>
            {/* Your button content */}
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    height: height / 2,
    width: width / 1.2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLORS.navy,
  height: 50,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  left: 0,
  borderRadius: 5,
  zIndex: 9999,
  },
  buttonText: {
    color: '#fff',
  },
});