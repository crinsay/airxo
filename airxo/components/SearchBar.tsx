import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import {icons} from '@/constants/icons'

interface Props {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
}


export default function SearchBar({ placeholder, value, onChangeText }: Props) {
  return (
    <View className="flex-row items-center bg-background rounded-full px-5 py-4" style={styles.shadow}>
      <Image source={icons.search} className="size-5" resizeMode='contain' />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        className="flex-1 ml-2"
        placeholderTextColor="#BDBDBD"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});
