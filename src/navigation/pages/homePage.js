import { View, Image, Alert, Text, TouchableOpacity, ScrollView } from "react-native";
import Header from "../../components/HeaderCard";
import MountainCard from "../../components/mountainCard";
import SearchInput from "../../components/SearchInput";
import CategorieCard from "../../components/CategoryCard";
import Places from "../../data/mountainData";

export default function HomePage(navigation) {
    return (
        <ScrollView>
            <View>
                <Header />
                <SearchInput />
                <CategorieCard />
                <MountainCard
                    placesData={Places}
                />
            </View>
        </ScrollView>
    );
}