import React from 'react';
import { View, Text, Platform } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

export default function NavHeader() {
    return (
        <View className="flex-row items-center px-4" style={{ paddingTop: Constants.statusBarHeight + (Platform.OS == 'android' ? 10 : 0) }}>
            <StatusBar style="black" />
            <View className="relative h-12 w-32 rounded justify-center items-center">
                <View className="items-center justify-center w-full h-full">
                    {/*  */}
                </View>
            </View>
            <View className="flex-1 items-end justify-center">
                <Text className="text-xs text-custom-black/30 mb-1">Connecté en tant que</Text>
                <Text className="text-[15px] font-semibold text-custom-black">
                    Administrateur
                </Text>
            </View>
        </View>
    );
}
