import * as React from "react"
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

const Start = ({goToPage}) => {
    return (
        <View style={styles.container}>
            <View style={styles.fillerContainer}></View>
            <View style={styles.brandContainer}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require(`../assets/pushcart_orange.png`)}
                    />
                    <Text style={styles.appTitle}>PushCart</Text>
                </View>
                <View style={styles.taglineContainer}>
                    <Text style={styles.tagline}>Shop without hassle.</Text>
                    <Text style={styles.tagline}>Save your time.</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableHighlight 
                  style={styles.button}
                  onPress={()=>goToPage(1)}
                  underlayColor="#F56A4D"
                >
                    <Text style={styles.buttonTitle}>SHOP NOW</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.registerContainer}>
                <Text style={{fontSize: 15}}>Don't have an account?</Text>
                <Text 
                    style={{
                        fontSize: 20, fontWeight: '600', color: '#F56A4D'
                    }}>
                        Sign Up
                </Text>
            </View>
            <View style={styles.heroImageContainer}>
                <Image source={require('../assets/pushcart_hero.png')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fillerContainer: {
    flex: 2
  },
  brandContainer: {
    flex: 1
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  taglineContainer: {
    alignItems: 'center',
    flex: 1
  },
  registerContainer: {
    alignItems: 'center',
    flex: 1
  },
  buttonContainer: {
    flex: 1
  },
  heroImageContainer: {
    flex: 1
  },
  appTitle: {
    fontSize: 30,
    fontWeight: '800',
    alignSelf: 'center'
  },
  tagline: {
    fontSize: 20,
    fontWeight: '600'
  },
  button: {
    backgroundColor: '#F56A4D',
    width: 188,
    height: 65,
    borderColor: '#F56A4D',
    borderRadius: 10
  },
  buttonTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    paddingTop: 21
  }
});

export default Start