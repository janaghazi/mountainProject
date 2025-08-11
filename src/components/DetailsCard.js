
import styles from "../styles/styles";
import {ImageBackground, View, Text} from "react-native";

const DetailsCard = ({item }) => {

    return (
        <View>
                <View style={styles.overViewDetails}>
                    <Text style={styles.overViewTitle}>Overview</Text>
                    <Text style={styles.overViewSubTitle}>Details:</Text>
                </View>
                <Text style={styles.detailsText}>{item.overview_en}</Text>
            </View>

    );
}

export default DetailsCard;


