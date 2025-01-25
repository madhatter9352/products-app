import { View, KeyboardAvoidingView, useWindowDimensions, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { ThemedText } from '@/presentation/theme/components/ThemedText';
import ThemedInput from '@/presentation/theme/components/ThemedInput';
import ThemedButton from '@/presentation/theme/components/ThemedButton';
import ThemedLink from '@/presentation/theme/components/ThemedLink';
import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import { router } from 'expo-router';

const LoginScreen = () => {
    const { login } = useAuthStore();
    const { height } = useWindowDimensions();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [isPosting, setIsPosting] = useState(false);

    const onLogin = async() => {
        if(form.email.length === 0 || form.password.length === 0) return;

        setIsPosting(true);
        
        const resplogin =  await login(form.email, form.password);

        setIsPosting(false);

        if(resplogin){
            router.replace('/(products)/(home)');
            return;
        }

        Alert.alert('Error', 'Credenciales incorrectas');
    }

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
                <ThemedText type='title'>Ingresar</ThemedText>
                <ThemedText style={{color: 'gray'}}>Ingrese los datos para continuar</ThemedText>
            </View>
            
            <View
                style = {{
                    marginTop: 20
                }}
            >
                <ThemedInput 
                    placeholder='Email'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    icon='mail-outline'
                    value={form.email}
                    onChangeText={email => setForm({...form, email})}
                />

                <ThemedInput 
                    placeholder='Password'
                    secureTextEntry
                    autoCapitalize='none'
                    icon='lock-closed-outline'
                    value={form.password}
                    onChangeText={password => setForm({...form, password})}
                />
            </View>
            
            <View style={{marginTop: 10}}></View>

            <ThemedButton
                icon='log-in-outline'
                onPress={onLogin}
                disabled={isPosting}
                loading={isPosting}
            > 
                Ingresar 
            </ThemedButton>
            
            <View style={{marginTop: 50}}></View>
            
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ThemedText style={{color: 'gray'}}>¿No tienes cuenta?</ThemedText>
                <ThemedLink
                    href='/auth/register'
                    style={{
                        marginLeft: 5
                    }}
                >
                    Registrate
                </ThemedLink>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen