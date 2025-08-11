import { StyleSheet, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9C594C',
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  headerText: {
    // fontFamily: 'Montserrat-Regular', // or the name of your font file
    // textAlign: 'left',
    marginLeft: 20,
    marginTop: 10,

  },
  headerTitleText: {
    marginTop: 50,
    fontSize: 30,
    color: '#2F2F2F',
    fontWeight: 'bold',
  },
  headerSubText: {
    fontSize: 20,
    color: '#888888',

  },
  // i want it to be a circualr icon in the header: 
  imageIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },

  mountainCard: {
    backgroundColor: '#bbb',
    margin: 20, //the entire card
    height: 405,
    width: 270,
    borderRadius: 30,
  },

  mountainCardImage: {
    flex: 1,
    height: 405,
    width: 270,
    borderRadius: 30,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },

  mountainCardTextBox: {
    backgroundColor: '#1D1D1D',
    width: 224,
    height: 75,
    borderRadius: 20,
    opacity: 0.8,

  },

  mountainCardTitle: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  mountainCardsubTitle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    fontSize: 14,
    color: '#CAC8C8',
  },

  SearchInputBox: {
    borderRadius: 15,
    borderColor: "#cccccc",
    borderWidth: 3,
    padding: 15,
    margin: 20,
    width: 350,
    fontSize: 15
  },

  HomeHeader: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  HomeHeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",

  },

  HomeHeaderSubTitle: {
    fontSize: 16,
    color: "#888888"
  },

  categories: {
    color: "FFFFFF",
    backgroundColor: "#2F2F2F",
    borderRadius: 5,
    width: 136,
    height: 54,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: 20,
  },
  categoriesList: {
    flexDirection: "row"
  },

  categoryName: {
    fontSize: 16,
    fontWeight: "bold"
  },

  overviewImage: {
    margin: 40,
    padding: 10,
    width: 347,
    height: 460,
    justifyContent: "flex-end",
    alignContent: "center"

  },

  overViewCardTextBox: {
    borderRadius: 20,
    backgroundColor: '#1D1D1D',
    width: 331,
    height: 104,
    opacity: 0.6,
    justifyContent: 'flex-end',
    alignItems: 'left',
    paddingBottom: 20,
  },
  overViewCardTextTitle: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  overViewCardTextSubTitle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    margin: 10,
    fontSize: 14,
    color: '#CAC8C8',
  },
  overViewCardPrice: {
    color: '#CAC8C8',
    fontSize: 26,
    marginRight: 20,

  },
  overViewDetails: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginRight: 20,
    marginLeft: 20
  },
  overViewTitle: {
    color: "1B1B1B",
    fontWeight: "bold",
    fontSize: 22
  },
  overViewSubTitle: {
    color: "1B1B1B",
    opacity: 0.7,
    fontSize: 16,
  },
  detailsText: {
    fontSize: 18,
    textAlign: "justify",
    marginRight: 20,
    marginLeft: 20,
    fontWeight: "bold",
    color : "#1B1B1B",
    opacity: 0.7,


  },
  button: {
    backgroundColor: "#1B1B1B",
    padding: 10,
    borderRadius: 5,
    margin: 20,
    width:300,
    height: 66,
    alignSelf:"center"
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center"
  },

});


export default styles;
