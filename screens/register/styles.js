import {StyleSheet} from "react-native"
import colors from "../../constants/colors";

export default StyleSheet.create({
 container:{
     backgroundColor: "white",
     flex: 1,
     alignItems: "center",
     justifyContent:"center"
 },
 textInput:{
     fontSize: 16,
     paddingVertical: 10,
     width: 300,
     borderBottomColor: "#e5ede8",
     borderBottomWidth: 1,
     marginTop: 20
 },
button:{
    alignItems:"center",
    justifyContent:"center",
    width:150,
    paddingHorizontal:30,
    paddingVertical: 10,
    backgroundColor: colors.mainColor,
    borderRadius: 4,
    marginTop: 40
},
buttonBordered:{
    alignItems:"center",
    justifyContent:"center",
    width:150,
    paddingHorizontal:30,
    paddingVertical: 10,
    borderColor: colors.mainColor,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 15
}
})
