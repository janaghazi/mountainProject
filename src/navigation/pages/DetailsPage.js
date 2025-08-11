import { View, Text } from "react-native";
// import Header from "../components/Header";


export default function DetailsPage(navigation) {
    return (
        <View>
            {/* <Header/> */}
            <Text
                onPress={() => navigation.navigate('HomePage')}
                style={{ fontSize: 20, textAlign: "center", margin: 10 }}
            >
                Details Page
            </Text>
        </View>
    );
}
