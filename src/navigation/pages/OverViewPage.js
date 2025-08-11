import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "../../styles/styles";
import OverViewCard from "../../components/OvewViewCard";
import DetailsCard from "../../components/DetailsCard";



export default function OverviewPage({ route }) {
    const { item } = route.params;

    return (
        <ScrollView>

            <View style={{ flex: 1 }}>
                <OverViewCard
                    item={item}
                />
                <DetailsCard
                    item={item}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Book Now </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
