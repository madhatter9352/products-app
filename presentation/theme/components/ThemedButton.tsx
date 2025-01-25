import { View, Text, Button, ButtonProps, Pressable, PressableProps, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '../hooks/useThemeColor';

interface Props extends PressableProps  {
    children: string;
    icon?: keyof typeof Ionicons.glyphMap;
    loading?: boolean;
}

const ThemedButton = ({ children, icon, loading, ...rest }: Props) => {
    const primaryColor = useThemeColor({}, 'primary');
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? primaryColor + '90' : primaryColor,
        },
        styles.button,
      ]}
      {...rest}
    >
      <Text style={{ color: 'white' }}>{children}</Text>

      {
        loading && <ActivityIndicator color="white" style={{ marginLeft: 10 }} />
      }
      {icon && !loading && (
        <Ionicons
          name={icon}
          size={24}
          color="white"
          style={{ marginHorizontal: 5 }}
        />
      )}
    </Pressable>
  )
}

export default ThemedButton

const styles = StyleSheet.create({
    button: {
      paddingHorizontal: 10,
      paddingVertical: 15,
      borderRadius: 5,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });