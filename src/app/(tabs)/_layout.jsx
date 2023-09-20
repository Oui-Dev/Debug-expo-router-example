import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import TabButton from '@components/TabButton';
import Header from '@components/Header';

export default function TabsLayout() {
    const TabScreenSettings = {
        tabBarStyle: {
            backgroundColor: '#000',
            height: Platform.OS === 'ios' ? 85 : 60,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10
        },
        tabBarHideOnKeyboard: true,
        tabBarLabel: () => {}
    };

    return (
        <Tabs screenOptions={TabScreenSettings}>
            <Tabs.Screen
                name="page1"
                options={{
                    header: () => <Header />,
                    tabBarIcon: ({ focused }) => <TabButton focused={focused} icon="unlock" />
                }}
            />
            <Tabs.Screen
                name="page2"
                options={{
                    header: () => <Header />,
                    tabBarIcon: ({ focused }) => <TabButton focused={focused} icon="graph" />
                }}
            />
            <Tabs.Screen name="index" options={{ href: null, header: () => null }} />
        </Tabs>
    );
}
