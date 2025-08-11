
import styles from "../styles/styles";
import {ImageBackground, View, Text} from "react-native";

const OverViewCard = ({item }) => {

    return (
       <ImageBackground
                source={{ uri: item.image }}
                style={styles.overviewImage}
                resizeMode="cover"
                borderRadius={30}
            >
                <View style={styles.overViewCardTextBox}>
                    <Text style={styles.overViewCardTextTitle}>{item.title_en} </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.overViewCardTextSubTitle}>{item.location_en}</Text>
                        <Text></Text>
                        <Text style={styles.overViewCardPrice}>${item.price}</Text>
                    </View>
                </View>

            </ImageBackground>


    );
}

export default OverViewCard;


