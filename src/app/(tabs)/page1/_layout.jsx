import { Stack } from 'expo-router';

export default function Page1Layout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="[uuid]" options={{ presentation: 'modal' }} />
        </Stack>
    );
}
