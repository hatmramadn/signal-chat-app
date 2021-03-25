import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  textInput: {
    fontSize: 16,
    bottom: 0,
    height: 60,
    flex: 1,
    marginRight: 15,
    borderRadius: 5,
    borderColor: colors.mainColor,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 18.35,
  },
  sender: {
    position: "relative",
    alignSelf: "flex-start",
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#eee",
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 50,
    flexDirection: "row",
  },
  reciver: {
    position: "relative",
    alignSelf: "flex-end",
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#0046ff",
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 50,
    flexDirection: "row",
  },
  msgSender: {
    fontWeight: "600",
    fontSize: 18,
  },
  msgReciver: {
    fontWeight: "600",
    fontSize: 18,
    color: "white",
  },
});
