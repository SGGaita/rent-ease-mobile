import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Button, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Documents, Home, Payment, Profile, Transactions } from '../screens'
import { COLORS, routes, icons } from '../constants';
import axios from 'axios'


// get the current timestamp
//Current timestamp
const current_timestamp = () => {
    let year = new Date().getFullYear();

    let month = new Date().getMonth() + 1;

    month = month < 10 ? `0${month}` : month;

    let day = new Date().getDate();

    day = day < 10 ? `0${day}` : day;

    let hour = new Date().getHours();

    hour = hour < 10 ? `0${hour}` : hour;

    let minute = new Date().getMinutes();

    minute = minute < 10 ? `0${minute}` : minute;

    let second = new Date().getSeconds();

    second = second < 10 ? `0${second}` : second;

    return `${year}${month}${day}${hour}${minute}${second}`;

};

// stk push
const handleStkPush = async() => {
    await fetch(`https://rent-ease-mpesa-server.onrender.com/stk-push`, {
        method: 'POST',
        body: JSON.stringify({
          "phoneNumber": 254723272915,
          "amount": 1 ,
        }),
        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(async (response) => {
          console.log(response)
          //Triger and return realtime data only when the already set data has been modified & the message property is present
        //   const subscriber = firestore().collection('Transactions')
        //     .onSnapshot((snapshot) => {
        //       snapshot.docChanges().forEach(change => {
        //         if (change.type === 'modified' && change.doc.data().message) {
        //           const data = change.doc.data();
        //           // perform action with the data
        //           setTimeout(() => {
  
        //             if (data.message === "The service request is processed successfully.") {
        //               navigation.navigate('Receipt', { receipt: data });
        //               setShow(show)
        //             }
        //             if (data.message === "The balance is insufficient for the transaction.") {
        //               Alert.alert("Transaction failed", `${data.message}`);
        //               console.log("Data:", data);
        //               setShow(show)
        //             }
        //             if (data.message === "Request cancelled by user") {
        //               Alert.alert("Transaction cancelled", `${data.message}`);
        //               console.log("Data:", data);
        //               setShow(show)
        //             }
  
        //             if (data.message === "DS timeout user cannot be reached") {
        //               Alert.alert("Request timed out", `${data.message}`);
        //               console.log("Data:", data);
        //               setShow(show)
        //             }
        //           }, 2000)
        //           //
  
        //         }
        //       });
        //     });
        //   // Stop listening for updates when no longer required
        //   return () => subscriber();
  
        }).catch((err) => {
          
          console.log('Error', err)
        })
  }
  


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress, focused }) => (
    <TouchableOpacity
            style={{
                top: -40,
               justifyContent: 'center',
                alignItems: 'center',
                //...styles.shadow
            }}
            onPress={handleStkPush}
        >
            <View style={{  borderWidth:2,
                borderColor:COLORS.white,
                width: 70, 
                height: 70, 
                backgroundColor: COLORS.limeDark, borderRadius: 35 }}>
                {children}
            </View>
        </TouchableOpacity>
)


export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: COLORS.darknavy,
                    borderTopColor: 'transparent',
                    alignItems: "center",
                    height: 90,
                    position: 'absolute',
                    bottom: 25,
                    left: 10,
                    right: 10,
                    //elevation:0,
                    borderRadius: 15,
                    ...styles.shadow
                }
            }
            }
        >
            <Tab.Screen name={routes.HOME} component={Home}
                options={{
                    headerShown: false,
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ focused, color, size }) =>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                            <Image
                                source={icons.home}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? COLORS.lime : COLORS.white
                                }}

                            />
                            <Text style={{ color: focused ? COLORS.lime : COLORS.white, top: 10, fontSize: 12 }}>Home</Text>
                        </View>,
                    headerLeft: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Back"
                            color={COLORS.darknavy}
                        />)

                }}
            />

            <Tab.Screen name={routes.TRANSACTIONS_TAB} component={Transactions}
                options={{
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ focused, color, size }) =>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                            <Image
                                source={icons.transaction}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? COLORS.lime : COLORS.white
                                }}

                            />
                            <Text style={{ color: focused ? COLORS.lime : COLORS.white, top: 10, fontSize: 12 }}>Transactions</Text>
                        </View>,
                    headerLeft: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Back"
                            color={COLORS.darknavy}
                        />)

                }}
            />

            <Tab.Screen name={routes.PAYMENT_TAB} component={Payment}
                options={{
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                         <Image
                            source={icons.pay}
                            resizeMode='contain'
                            style={{
                                width: 80,
                                height: 80,
                                tintColor: focused ? COLORS.white : COLORS.white
                            }}

                        />
                       
                        </View>
                        ),
                        headerLeft: () => (
                            <Button
                                onPress={() => alert('This is a button!')}
                                title="Back"
                                color={COLORS.darknavy}
                            />),
                    tabBarButton: (props) => (
                       <CustomTabBarButton {...props}/>
                    )

                   
                }}
            />

            <Tab.Screen name={routes.DOCUMENTS_TAB} component={Documents}
                options={{
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ focused, color, size }) =>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                            <Image
                                source={icons.file}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? COLORS.lime : COLORS.white
                                }}

                            />
                            <Text style={{ color: focused ? COLORS.lime : COLORS.white, top: 10, fontSize: 12 }}>Documents</Text>
                        </View>,
                    headerLeft: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Back"
                            color={COLORS.darknavy}
                        />)

                }}
            />

            <Tab.Screen name={routes.PROFILE_TAB} component={Profile}
                options={{
                    headerShown: false,
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ focused, color, size }) =>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                            <Image
                                source={icons.user}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: focused ? COLORS.lime : COLORS.white
                                }}

                            />
                            <Text style={{ color: focused ? COLORS.lime : COLORS.white, top: 10, fontSize: 12 }}>Profile</Text>
                        </View>,
                    headerLeft: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Back"
                            color={COLORS.darknavy}
                        />)

                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.navy,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 0,
        zIndex:200
    }
})