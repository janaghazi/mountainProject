import { View, Text } from "react-native";

export default function SettingsPage(navigation) {
    return (
        <View>
            {/* <Header/> */}
            <Text
                onPress={() => navigation.navigate('HomePage')}
                style={{ fontSize: 20, textAlign: "center", margin: 10 }}
            >
                SettingsPage
            </Text>
        </View>
    );
}