import { useLocalSearchParams, router } from 'expo-router';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

export default function Page1Item() {
    const data = [
        {
            uuid: '1',
            name: 'Item 1',
        },
        {
            uuid: '2',
            name: 'Item 2',
        },
        {
            uuid: '3',
            name: 'Item 3',
        },
        {
            uuid: '4',
            name: 'Item 4',
        },
        {
            uuid: '5',
            name: 'Item 5',
        },
    ]

    const { uuid } = useLocalSearchParams();

    const item = data.find((item) => item.uuid === uuid);

    return (
        <View className="h-full w-full flex-col z-10">
            <View className="flex-row items-center p-4">
                <TouchableNativeFeedback onPress={() => router.back()}>
                    <View className="w-8 h-8 items-center justify-center">
                        <Icon name="chevron-left" size={22} color="#000" />
                    </View>
                </TouchableNativeFeedback>
                <View className="flex-1 items-center px-4">
                    <Text className="font-semibold text-base">{item.name}</Text>
                </View>
                <View className="w-8 h-8 items-center justify-center">
                    {/*  */}
                </View>
            </View>

            {/* <View className={`flex-1 bg-custom-black/5 ${!isOffline ? 'mb-[105px]' : ''}`}>
                <FlatList
                    data={actions}
                    renderItem={({ item }) => <ActionItem action={item} />}
                    contentContainerStyle={{ padding: 15 }}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={<Text className="text-custom-black/70 text-center">Aucune action disponible</Text>}
                    refreshing={isLoading}
                />
            </View> */}
        </View>
    );
}
