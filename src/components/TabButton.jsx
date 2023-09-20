import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

export default function TabButton(props) {
    return (
        <View
            className="w-11 h-11 bg-custom-white/10 rounded-full justify-center items-center"
            style={props.focused ? { backgroundColor: 'rgba(12,175,96, .3)' } : {}}
        >
            <Icon name={props.icon} size={20} color={props.focused ? 'rgb(12,175,96)' : 'rgba(255,255,255,.5)'} />
        </View>
    );
}
