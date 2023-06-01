import { StyleSheet } from 'react-native';
import { Avatar, Layout, Text } from '@ui-kitten/components';
import { StatusBar } from 'react-native';
import { colors } from 'design';
import { Icon } from '@ui-kitten/components';
import { useState } from 'react';
import { Pressable } from 'react-native';

const DrawerContent = () => {
  // change to state from router name
  const [activeTab, setActiveTab] = useState(1);
  const LIST = [
    {
      title: 'Events',
      icon: 'calendar-outline',
      onPress: (i) => setActiveTab(i),
    },
    {
      title: 'Achievements',
      icon: 'award-outline',
      onPress: (i) => setActiveTab(i),
    },
    {
      title: 'Notifications',
      icon: 'bell-outline',
      onPress: (i) => setActiveTab(i),
    },
    {
      title: 'Roles ',
      icon: 'credit-card-outline',
      onPress: (i) => setActiveTab(i),
    },
    {
      title: 'Inbox',
      icon: 'message-circle-outline',
      onPress: (i) => setActiveTab(i),
    },
    {
      title: 'Reources',
      icon: 'folder-outline',
      onPress: (i) => setActiveTab(i),
    },
    {
      title: 'HourTrade',
      icon: 'swap-outline',
      onPress: (i) => setActiveTab(i),
    },
    {
      title: 'Training',
      icon: 'layers',
      onPress: (i) => setActiveTab(i),
    },
    {
      title: 'Sign out',
      icon: 'log-out',
      onPress: (i) => setActiveTab(i),
    },
  ];

  return (
    <Layout style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <StatusBar style="auto" backgroundColor={colors.bg} />

      <Layout
        style={{
          backgroundColor: colors.bg,
          height: 92,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 24,
        }}
      >
        <Avatar
          onPress={() => alert('hi')}
          style={styles.avatar}
          source={{
            uri: 'https://media.istockphoto.com/id/1288634698/photo/beautiful-caucasian-teenager-smiling-happy-standing-at-the-city.jpg?s=170667a&w=0&k=20&c=fXAqV1uAAt78wOrP5QQrrVIrOYgJ8aBZqKwpexpDfSw=',
          }}
        />
        <Layout
          style={{
            backgroundColor: colors.transparent,
            marginLeft: 24,
          }}
        >
          <Text category="s1" status="basic">
            James
          </Text>
          <Text category="c2" status="basic">
            VIEW PROFILE
          </Text>
        </Layout>
      </Layout>

      {LIST.map(({ icon, title, onPress }, index) => {
        const isActive = index === activeTab;
        return (
          <Pressable
            onPress={() => onPress(index)}
            style={({ pressed }) => [
              styles.line,
              isActive && styles.activeLine,
              { opacity: pressed ? 0.7 : 1 },
            ]}
            key={index}
          >
            <Icon
              style={styles.icon}
              fill={isActive ? colors.primary : colors.basic6}
              name={icon}
            />
            <Text status={isActive ? 'primary' : 'basic'} category="c2" style={styles.title}>
              {title}
            </Text>
          </Pressable>
        );
      })}
    </Layout>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
  },

  line: {
    flexDirection: 'row',
    height: 65,
    alignItems: 'center',
    padding: 13,
    borderBottomWidth: 1,
    borderBottomColor: colors.bg,
  },

  activeLine: {
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    backgroundColor: colors.primaryHover,
  },

  title: {
    marginLeft: 10,
  },

  icon: {
    width: 20,
    height: 20,
  },
});
