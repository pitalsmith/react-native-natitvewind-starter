import { StatusBar } from 'expo-status-bar';
import { Text, View , Button} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-green-500">
      <Button 
        title="Navigate to second screen with french"
        onPress={() => navigation.navigate("Second", { language: "french" })}
      />
      <StatusBar style="auto" />
    </View>
  );
}

