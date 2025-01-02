import AsyncStorage from "@react-native-async-storage/async-storage";

async function saveMessage(messages: string[]) {
  await AsyncStorage.setItem("messages", JSON.stringify(messages));
}

export default saveMessage;
