import { View, Text, TouchableOpacity } from "react-native";
import {useState} from "react";
import styles from "../styles/styles";

const categories = [
    { label: "Most Viewed", key: "mostViewed" },
    { label: "Nearby", key: "nearby" },
    { label: "Latest", key: "latest" }
];

const CategorieCard = () => {
    const [selected, setSelected] = useState("mostViewed");

    return (
        <View>
            <View style={styles.HomeHeader}>
                <Text style={styles.HomeHeaderTitle}>Popular places</Text>
                <Text style={styles.HomeHeaderSubTitle}>View all</Text>
            </View>
            <View style={styles.categoriesList}>
                {categories.map(cat => (
                    <TouchableOpacity
                        key={cat.key}
                        style={[
                            styles.categories,
                            {
                                backgroundColor: selected === cat.key ? "#2F2F2F" : "#FBFBFB"
                            }
                        ]}
                        onPress={() => setSelected(cat.key)}
                    >
                        <Text
                            style={[
                                styles.categoryName,
                                {
                                    color: selected === cat.key ? "#FFFFFF" : "#C5C5C5"
                                }
                            ]}
                        >
                            {cat.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default CategorieCard;