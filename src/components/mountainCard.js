import { View, Text, Image, ImageBackground, FlatList, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

const MountainCard = ({
    placesData,
}) => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate("OverviewPage", { item })}
        >
            <View style={styles.mountainCard}>
                <ImageBackground
                    style={[styles.mountainCardImage]} // this style is for image alone 
                    source={{ uri: item.image }}
                    resizeMode='cover'
                >

                    <View style={styles.mountainCardTextBox}>
                        <Text style={styles.mountainCardTitle}>{item.title_en}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.mountainCardsubTitle}>{item.location_en}</Text>
                            <Text style={styles.mountainCardsubTitle}>{item.rating}</Text>
                        </View>
                    </View>

                </ImageBackground>
            </View>
            
        </TouchableOpacity>
    )
    return (
        <FlatList
            data={placesData}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            horizontal={true}
        />
    );
}



export default MountainCard;
