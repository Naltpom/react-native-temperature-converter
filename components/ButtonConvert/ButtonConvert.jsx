import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { s } from "./ButtonConvert.style";

export function ButtonConvert({ onPress, unit }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text style={s.text}>Converture en {unit}</Text>
    </TouchableOpacity>
  );
}
