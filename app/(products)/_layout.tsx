import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useAuthStore } from '@/presentation/auth/store/useAuthStore'
import { Redirect, Stack } from 'expo-router';

const ProductsLayout = () => {
    const { status, checkAuth } = useAuthStore();

    React.useEffect(() => {
        checkAuth();
    }, []);

    if (status === 'loading'){
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ActivityIndicator size={'large'} />
            </View>
        );
    }

    if(status === 'unauthenticated'){
        return <Redirect href={'/auth/login'} />;
    }

  return (
    <Stack>
        <Stack.Screen 
            name='(home)/index' 
            options={{
                title: 'Productos',
            }} 
        />
    </Stack>
  )
}

export default ProductsLayout