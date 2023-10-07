import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { AppLogo } from '../../assets';
import { PrimaryButton } from '../../components';

function LoginScreen({ navigation }) {
  const onhandleLoginButton = () => {
    navigation.navigate('Home'); // Mengganti 'Login' menjadi 'HomeScreen' untuk mengarahkan ke halaman HomeScreen
  };

  const onhandleSignUp = () => {
    navigation.navigate('Register'); // Mengarahkan ke halaman RegisterScreen
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Image source={AppLogo} style={styles.logoTop} />

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Phone number, email or username"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true} // Menggunakan secureTextEntry untuk input password
            />
          </View>

          <PrimaryButton
            style={[styles.loginButton, { width: '100%' }]}
            title="Sign In"
            onPress={onhandleLoginButton}
          />

          <View style={styles.bottomTextContainer}>
            <Text style={styles.bodyText}>Don't have an account? </Text>

            <TouchableOpacity onPress={onhandleSignUp}>
              <Text style={[styles.bodyText, styles.signUpText]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    margin: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoTop: {
    alignSelf: 'center',
    marginBottom: 75,
  },
  bodyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6E6E6E',
    marginTop: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  loginButton: {
    marginTop: 20,
  },
  bottomTextContainer: {
    flexDirection: 'row', // Menyusun teks "Don't have an account?" dan "Sign Up" dalam satu baris
    marginTop: 10,
  },
  signUpText: {
    color: '#1156BD', // Mengubah warna teks "Sign Up" menjadi biru
  },
});

export default LoginScreen;
