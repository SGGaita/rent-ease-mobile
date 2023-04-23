import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SIZES, icons } from '../../constants'
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux'
import { RentInformation } from '../../components/RentInformation';

export const Home = () => {
  const [today, setToday] = useState(new Date());
  const [tenant, setTenant] = useState()
  const user = useSelector(state => state.user.user)

  useEffect(() => {

    const timer = setInterval(() => {
      setToday(new Date());
    }, 1000);
    return () => clearInterval(timer);

  }, []);

  useEffect(() => {
    //fetch tenant
    const subscriber = firestore()
      .collection('Tenants')
      .doc(user.uid)
      .onSnapshot(documentSnapshot => {
        setTenant(documentSnapshot.data());
      });

    return () => subscriber();
  }, [tenant]);



  const hour = today.getHours();
  let greeting;

  if (hour < 12) {
    greeting = 'Good morning';
  } else if (hour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }


  const options = { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return (
    <View style={styles.container}>
      <View style={styles.tenantinfo}>
        <Text>{formattedDate}</Text>
        <Text style={{ marginTop: SIZES.padding * 0.6, fontWeight: 800, ...FONTS.h4, color: COLORS.white }}>{greeting}, {user.firstName} {user.lastName}</Text>
      </View >
      <View style={styles.body}>
        <View style={styles.due}>
          <RentInformation />

        </View>

        <ScrollView style={{ marginTop: 80, marginHorizontal: SIZES.padding, flexDirection: 'column', }}>
          <View>
            <Text style={{ color: COLORS.navy, ...FONTS.h2 }}>
              Overview
            </Text>
          </View>
          <TouchableOpacity

            style={{
              width: '100%',
              height: 70,
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
              backgroundColor: COLORS.white
            }}
            onPress={() => { }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ color: COLORS.darknavy, ...FONTS.h4 }}>View your current lease</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity

            style={{
              width: '100%',
              height: 70,
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
              backgroundColor: COLORS.white
            }}
            onPress={() => { }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ color: COLORS.darknavy, ...FONTS.h4 }}>Make maintenance request</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tenantinfo: {
    flex: 1,
    backgroundColor: COLORS.navy,
    paddingTop: SIZES.padding * 3,
    paddingBottom: SIZES.padding * 1,
    paddingHorizontal: SIZES.padding * 4
  },
  body: {
    flex: 6,
    backgroundColor: COLORS.white,
  },
  due: {
    alignItems: 'center',
    flex: 1,
    padding: SIZES.padding,
    //alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    height: 100,
    backgroundColor: COLORS.white,
    left: 30,
    right: 30,
    top: -50,
    borderColor: COLORS.lime,
    borderWidth: 1,
    borderRadius: 10,
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
