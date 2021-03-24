import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  textInput: {
    marginTop: 20,
    fontSize: 16,
    padding: 20,
    borderRadius: 5,
    borderColor: colors.mainColor,
    borderWidth: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: colors.mainColor,
    borderRadius: 4,
    marginTop: 20,
  },
});
