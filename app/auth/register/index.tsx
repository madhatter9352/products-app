import { View, Text, KeyboardAvoidingView, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import { ThemedText } from '@/presentation/theme/components/ThemedText';
import ThemedInput from '@/presentation/theme/components/ThemedInput';
import ThemedButton from '@/presentation/theme/components/ThemedButton';
import ThemedLink from '@/presentation/theme/components/ThemedLink';

const RegisterScreen = () => {
    const { height } = useWindowDimensions();
  return (
    <KeyboardAvoidingView
        behavior='padding'
        style={{
            flex: 1,
        }}
    >
        <ScrollView
            style={{
                paddingHorizontal: 32,
            }}
        >
            <View style={{
                paddingTop: height * 0.35
            }}>
                <ThemedText type='title'>Registrarse</ThemedText>
                <ThemedText style={{color: 'gray'}}>Por favor crear una cuenta para continuar</ThemedText>
            </View>
            
            <View
                style = {{
                    marginTop: 20
                }}
            >
                <ThemedInput 
                    placeholder='Nombre completo'
                    autoCapitalize='words'
                    icon='person-outline'
                />

                <ThemedInput 
                    placeholder='Email'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    icon='mail-outline'
                />

                <ThemedInput 
                    placeholder='Password'
                    secureTextEntry
                    autoCapitalize='none'
                    icon='lock-closed-outline'
                />
            </View>
            
            <View style={{marginTop: 10}}></View>

            <ThemedButton
                icon='log-in-outline'
            > 
                Crear cuenta 
            </ThemedButton>
            
            <View style={{marginTop: 50}}></View>
            
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ThemedText style={{color: 'gray'}}>¿Ya tienes cuenta?</ThemedText>
                <ThemedLink
                    href='/auth/login'
                    style={{
                        marginLeft: 5
                    }}
                >
                    Ingresar
                </ThemedLink>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen