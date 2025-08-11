import { StatusBar, useColorScheme, View } from 'react-native';
import styles from '../../styles/styles';
import HomePage from './homePage';
import MainContainer from '../MainContainer';
import { Navigation } from "react-native-navigation";


function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    // <HomePage />
    <MainContainer />
  );
}



export default App;

