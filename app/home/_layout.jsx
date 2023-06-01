import { Tabs } from 'expo-router';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { Avatar, Layout, Text } from '@ui-kitten/components';
import { colors } from 'design';
import { StyleSheet, StatusBar } from 'react-native';

const _layout = () => {
  return (
    <Tabs
      sceneContainerStyle={{ backgroundColor: colors.bg }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 56 },
        tabBarActiveTintColor: colors.primary6,
        tabBarInactiveTintColor: colors.basic,
      }}
    >
      <Tabs.Screen
        name="drawer"
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.dispatch(DrawerActions.openDrawer());
          },
        })}
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => <Feather name="list" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="opportunties"
        options={{
          title: 'Opportunties',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="lightbulb-on" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          header: () => (
            <Layout style={styles.headerHome}>
              <Text category="s1" status="basic">
                Dashboard
              </Text>
              <Avatar
                onPress={() => alert('hi')}
                style={styles.avatarHome}
                source={{
                  uri: 'https://media.istockphoto.com/id/1288634698/photo/beautiful-caucasian-teenager-smiling-happy-standing-at-the-city.jpg?s=170667a&w=0&k=20&c=fXAqV1uAAt78wOrP5QQrrVIrOYgJ8aBZqKwpexpDfSw=',
                }}
              />
            </Layout>
          ),
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({
  headerHome: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight + 5,
    height: 56,
    backgroundColor: colors.white,
  },

  avatarHome: {
    position: 'absolute',
    right: 20,
  },
});
