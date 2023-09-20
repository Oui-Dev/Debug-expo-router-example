import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Page1() {
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

    const HeaderComponent = React.useMemo(() => {
        return (
            <View className="relative pb-4">
                <View className="flex-row items-center mb-4 text-custom-black/50">
                    <Text className="text-[13px] font-bold uppercase flex-1">Items list</Text>
                    <Text className="font-semibold">{data.length}</Text>
                </View>
            </View>
        );
    });

    const ListItem = React.useCallback(({ item }) => {
        return (
            <View className="flex-row items-center p-2 mb-4 bg-cyan-200">
                <Link href={{ pathname: 'page1/[uuid]', params: { uuid: item.uuid } }} asChild>
                    <Pressable className="flex-1 flex-row items-center">
                        <View className="flex-1 px-4">
                            <Text className="font-bold" numberOfLines={1}>
                                {item.name}
                            </Text>
                        </View>
                    </Pressable>
                </Link>
            </View>
        );
    }, []);

    return (
        <View className="rounded overflow-hidden h-full">
            <FlatList
                data={data}
                renderItem={({ item }) => <ListItem item={item} />}
                ListHeaderComponent={HeaderComponent}
                contentContainerStyle={{ padding: 15 }}
                keyExtractor={(item) => item.uuid}
                onEndReachedThreshold={0.25}
                ListEmptyComponent={<Text className="text-custom-black/70 text-center">No data</Text>}
                className="h-full"
            />
        </View>
    );
}
