//CORE
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
//CONSTANT
import { COLORS } from '../constant/COLORS'
//3RD PARTY
import { mvs } from 'react-native-size-matters'


/**
 * Component to display when there are no search results or data available.
 * 
 * @param {Object} props - Component props.
 * @param {Object} props.icon - Image source for the icon to be displayed.
 * @param {string} props.title - Main title text to be displayed.
 * @param {string} props.subText - Subtitle text to be displayed.
 * @returns {JSX.Element} NoResult component.
 */
export default function NoResult({ icon, title, subText }) {
  return (
    <View style={style.container}>
      <Image style={style.icon} source={icon}></Image>
      <Text style={style.mainText}>{title}</Text>
      <Text style={style.secondaryText}>{subText}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 90,
    gap: 10
  },
  icon: {
    opacity: 0.3,
    aspectRatio: 1,
    height: mvs(70),
    resizeMode: 'contain',
    marginBottom: 10
  },
  mainText: {
    fontSize: mvs(32),
    fontWeight: '700',
    color: COLORS.BASE,
    opacity: 0.6,
    textAlign: 'center',
  },
  secondaryText: {
    fontSize: mvs(18),
    fontWeight: '600',
    color: COLORS.BASE,
    opacity: 0.2,
    textAlign: 'center'
  }
})