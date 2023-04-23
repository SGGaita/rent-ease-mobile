import React, { useState, useContext } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { CustomSnackBar } from '../../components';
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { userSlice } from '../../redux/userSlice';



import { COLORS, FONTS, icons, images, SIZES, routes } from '../../constants'


export const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [visible, setVisible] = useState(false);




  const onDismissSnackBar = () => setVisible(false);



  const handleEmailChange = (text) => {
    setEmail(text)
  }

  const handlePasswordChange = (text) => {
    setPassword(text)
  }



  const handleSignIn = async () => {
    setShow(!show)


    // // Validate input fields
    // Validate input fields
    if (!email) {
      setError('Email is required.');
      setShow(false);
      setVisible(!visible)
      return;
    }


    if (!password) {
      setError('Password is required.');
      setShow(false);
      setVisible(!visible)
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {

        const usercred = userCredential.user;
        //console.log('User account created & signed in!', usercred);
        // fetch user details from Firebase
        const userDoc = await firestore().collection('Users').doc(usercred.uid).get();
        const user = userDoc.data();

        //console.log("user data1", user)

        let userData = {
          'uid': usercred.uid,
          "tenantID": user.tenantID,
          "firstName": user.firstName,
          "lastName": user.lastName,
          "email": user.email,
          "phoneNumber": user.phoneNumber,
          "type": user.type
        }

        //console.log("user data", userData)

        // Clear error if any
        setError('')
        setShow(false)
        dispatch(userSlice.actions.setUser(userData))
        navigation.navigate(routes.HOME_TAB)

      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          setError('That email address is invalid!')
          setShow(false);
          setVisible(!visible)
          return;
        }
        else if (error.code === 'auth/wrong-password') {
          setError('Wrong password!')
          setShow(false);
          setVisible(!visible)
          return;
        }
        else {
          console.log(error)
          setError('An error occurred. Please try again later.')
          setShow(false);
          setVisible(!visible)
          return;
        }



      });

  }


  const isValidEmail = (email) => {
    // Basic email validation using regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }



  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>

      <ImageBackground style={{ flex: 1, backgroundColor: COLORS.blue }} source={images.background}>
        <LinearGradient colors={['#293a4fda', '#293a4f99', '#8fe89068']} style={{ flex: 1 }}>

          <View style={styles.top}>
            <Text style={styles.title}>Login</Text>
          </View>

          <View style={styles.bottom}>
            <View style={styles.logo}>
              <Image
                source={images.logo}
                resizeMode="contain"
                style={{
                  width: 300,
                  //tintColor: COLORS.white,
                }}
              />

              <Text style={styles.slogan}>
                Rent smarter, not harder
              </Text>
            </View>

            <View style={styles.inputs}>
              <TextInput
                style={styles.input}
                placeholder="Enter email...."
                placeholderTextColor={COLORS.darkgray}
                selectionColor={COLORS.black}
                onChangeText={handleEmailChange}
                value={email}
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={COLORS.darkgray}
                selectionColor={COLORS.black}
                onChangeText={handlePasswordChange}
                value={password}
                secureTextEntry={true}
              // right={<TextInput.Icon icon="camera" />}
              />


            </View>
            <View style={styles.forgot}>
              <Text style={styles.forgotpassword}>Forgot your password?</Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={{
                  borderRadius: 30,
                  marginVertical: SIZES.padding * 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 60,
                  backgroundColor: COLORS.navy
                }}
                onPress={handleSignIn}
              >
                {show ?
                  (
                    <>
                      <ActivityIndicator size={25} color='white' />
                      <Text style={{ color: COLORS.white, ...FONTS.body2 }}>Signing in...</Text>
                    </>
                  ) : (
                    <Text style={{ color: COLORS.white, ...FONTS.body2 }}>Sign In</Text>
                  )}
              </TouchableOpacity>
            </View>


            <View style={styles.signup}>
              <Text style={{
                color: COLORS.black,
                ...FONTS.body3
              }}>
                Don't have an account? <TouchableOpacity ><Text style={{ ...FONTS.body3, color: COLORS.limeDark }}>SIGN UP.</Text></TouchableOpacity>
              </Text>
            </View>
            <View style={{ flex: 1, position: 'absolute', bottom: 0, left: 30, right: 0, width: '100%' }}>
              <CustomSnackBar visible={visible} onDismissSnackBar={onDismissSnackBar} message={error} />
            </View>

          </View>

        </LinearGradient>
      </ImageBackground>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lime
  },

  top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

  title: {
    ...FONTS.largeTitle,
    zIndex: 100,
    color: COLORS.white,
    fontWeight: 900
  },

  bottom: {
    flex: 2,
    flexDirection: "column",
    //justifyContent: 'center',
    backgroundColor: COLORS.white,
    paddingTop: SIZES.padding * 4,
    paddingHorizontal: SIZES.padding * 3,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  logo: {
    flexDirection: 'column',
    alignItems: 'center'

  },

  slogan: {
    color: COLORS.darkgray,
    ...FONTS.body3,
    paddingVertical: SIZES.padding * 0.1
  },

  inputs: {
    paddingVertical: SIZES.padding * 2
  },

  input: {
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 0.5,
    height: 50,
    marginTop: SIZES.padding * 3,
    color: COLORS.black,
    ...FONTS.body3,
    backgroundColor: COLORS.white
  },
  forgot: {
    //flex:1,
    flexDirection: 'row',
    marginTop: SIZES.padding * 1,
    justifyContent: 'flex-end',



  },
  forgotpassword: {
    color: COLORS.black,
    ...FONTS.body3

  },

  signup: {
    marginTop: SIZES.padding * 2,
    alignItems: 'center',
    height: 80

  },


})
