// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

function SplashScreen({ navigation }) {
  useEffect(() => {
    // Menggunakan setTimeout untuk simulasi layar pemutaran awal selama beberapa detik
    setTimeout(() => {
      // Navigasi ke layar berikutnya (misalnya, LoginScreen atau HomeScreen)
      navigation.replace('Login'); // Ubah 'Home' sesuai dengan rute yang Anda inginkan
    }, 3000); // Ubah 3000 menjadi durasi pemutaran awal yang diinginkan (dalam milidetik)
  }, []);

  return (
    <View style={styles.container}>
      {/* Tambahkan logo Anda di bawah ini */}
      <Image
        source={require('./assets/logo.png')} // Gantilah dengan path logo Anda
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Ubah latar belakang sesuai kebutuhan Anda
  },
  logo: {
    width: 200, // Sesuaikan lebar dan tinggi logo sesuai preferensi Anda
    height: 200,
  },
});

export default SplashScreen;
