import { View, Text, Image } from "react-native";
import styles from "../styles/styles";

export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Text style={[styles.headerTitleText, styles.headerText]}>Hi, Jana👋</Text>
                <Text style={[styles.headerSubText, styles.headerText]}>Explore the world ;)</Text>
            </View>
            <View>
                <Image
                    source={require("../images/busineeskitty.jpg")}
                style={styles.imageIcon}             
                />
            </View>
        </View>
    );
}