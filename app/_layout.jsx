import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { withLayoutContext } from 'expo-router';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { StatusBar } from 'expo-status-bar';
import { DrawerContent } from 'components';
import { Mapping, Theme } from 'theme';
import { colors } from 'design';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const { Navigator } = createDrawerNavigator();

export const Drawer = withLayoutContext(Navigator);

export default function LayoutRoot() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" backgroundColor={colors.bgStatusBar} />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} customMapping={Mapping} theme={{ ...eva.light, ...Theme }}>
        <Drawer
          drawerContent={({ descriptors, navigation, state }) => (
            <DrawerContent {...{ descriptors, navigation, state }} />
          )}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Drawer.Screen name="home" />
        </Drawer>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}
