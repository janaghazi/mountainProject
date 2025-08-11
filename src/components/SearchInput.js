import { View, TextInput } from "react-native";
import styles from "../styles/styles";


const SearchInput = ({ }) => {

    return (
        <View>
            <TextInput
                placeholder="Search places.."
                style = {styles.SearchInputBox}
            >
            </TextInput>
        </View>

    );
}

export default SearchInput;
