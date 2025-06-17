import { icons } from '@/constants/icons';
import { shadow } from '@/styles/shadow';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface SearchBarProps {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

export default function SearchBar({ placeholder, value, onChangeText }: SearchBarProps) {
  return (
    <View className="flex-row items-center bg-background rounded-full px-5 py-4" style={shadow.shadow}>
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


