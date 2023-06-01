import { Redirect } from 'expo-router';
import { SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { OpenSans_400Regular, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';
import {
  RobotoSlab_500Medium,
  RobotoSlab_600SemiBold,
  RobotoSlab_700Bold,
} from '@expo-google-fonts/roboto-slab';

const index = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    RobotoSlab_500Medium,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    RobotoSlab_600SemiBold,
    RobotoSlab_700Bold,
  });
  console.log('fontsLoaded: ', fontsLoaded);

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return <Redirect href="/home" />;
};

export default index;
