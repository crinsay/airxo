import { qualityColors } from '@/constants/colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { ReactNode, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface CollapsibleProps {
    children: ReactNode;
    title: string;
}

export default function Collapsible({ children, title }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity
        className="flex-row items-center gap-1.5"
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
            
        <MaterialIcons
          name="chevron-right"
          color={qualityColors.lethal}
          size={18}
          weight="medium"
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
        />

        <Text>{title}</Text>
      </TouchableOpacity>
      {isOpen && <Text className="mt-2 mb-2 ml-8">{children}</Text>}
    </View>
  );
}