import { View, Text, TextInputProps, TextInput, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '../hooks/useThemeColor';

interface Props extends TextInputProps {
    icon?: keyof typeof Ionicons.glyphMap;
}

const ThemedInput = ({icon, ...rest}: Props) => {
    const primaryColor = useThemeColor({}, 'primary');
    const textColor = useThemeColor({}, 'text');
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<TextInput>(null);

  return (
    <View
        style={{
            ...styles.border,
            borderColor: isFocused ? primaryColor : 'gray'
        }}
        onTouchStart={() => inputRef.current?.focus()}
    >
        {
            icon && (
                <Ionicons 
                    name={icon}
                    size={20}
                    color={textColor}
                    style={{
                        marginRight: 5,
                        marginLeft: 5
                    }}
                />
            )
        }
        <TextInput 
            {...rest}
            placeholderTextColor='#5c5c5c'
            ref={inputRef}
            style={{
                color: textColor,
                flex: 1
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    border: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        // margin: 10
    }
})

export default ThemedInput