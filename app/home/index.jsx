import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Layout, Text } from '@ui-kitten/components';
import { CardLog, CardSuggestion, SubTitle } from 'components';
import { colors } from 'design';

const Sessions = [
  {
    id: 1,
    title: 'Volunteering soon 1',
    comingAt: '18 May, 2022',
  },
  {
    id: 2,
    title: 'Volunteering soon 2',
    comingAt: '25 May, 2022',
  },
  {
    id: 3,
    title: 'Volunteering soon 3',
    comingAt: '22 May, 2023',
  },
];

const Opportunities = [
  {
    id: 1,
    title: 'Volunteering soon 1',
  },
  {
    id: 2,
    title: 'Volunteering soon 2',
  },
  {
    id: 3,
    title: 'Volunteering soon 3',
  },
];

const Suggestions = [
  {
    id: '1',
    title: 'Opportunity name',
    Category: 'Category name',
    provider: 'Provider name',
    cover:
      'https://awe365.com/wp-content/uploads/2013/12/Vienna-Rafting-Flickr-image-by-Tourismusregion-KatschbergRennweg9.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi qui fugit labore aliquam itaque iure voluptates modi voluptate. Qui.',
  },
  {
    id: '2',
    title: 'Opportunity name',
    Category: 'Category name',
    provider: 'Provider name',
    cover:
      'https://uploads-ssl.webflow.com/5e699f856d7774a368e11218/5e704ad996313461382c1841_16%20College%20Avenue_Level%2003_A3.07_Living%20Dining_Cam_01_HR.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, quasi eos? Sequi corrupti molestiae excepturi inventore, quas veniam tempora vel facilis. Ab cupiditate inventore ex.',
  },
  {
    id: '3',
    title: 'Opportunity name',
    Category: 'Category name',
    provider: 'Provider name',
    cover:
      'https://i0.wp.com/newenglandwanderlust.com/wp-content/uploads/2022/05/day-trips-from-providence-ri-7.jpg?w=1200&ssl=1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias vero doloremque quia ad aperiam asperiores, reprehenderit commodi rem debitis esse repellendus?',
  },
];

const index = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
      <Layout style={{ paddingBottom: 20 }}>
        <Layout style={styles.logged}>
          <Text category="c2" status="basic">
            Hours logged
          </Text>
          <Text style={{ color: colors.basicTitle }} category="h1">
            6:15
          </Text>
        </Layout>

        <Layout style={styles.boxs}>
          <Layout style={[styles.boxUp, { backgroundColor: colors.primary2 }]}>
            <Text category="h4" status="primary">
              6:15
            </Text>
            <Text category="c2" status="primary">
              Hours Confirmed
            </Text>
          </Layout>

          <Layout style={[styles.boxUp, { backgroundColor: colors.success2 }]}>
            <Text category="h4" status="success">
              2
            </Text>
            <Text category="c2" status="success">
              Thumbs up
            </Text>
          </Layout>
        </Layout>

        <SubTitle title="Upcoming sessions" />
        {Sessions?.map(({ comingAt, id, title }) => (
          <CardLog key={id} comingAt={comingAt} title={title} />
        ))}

        <SubTitle title="Opportunities with hours to log" />
        {Opportunities?.map(({ comingAt, id, title }) => (
          <CardLog key={id} comingAt={comingAt} title={title} />
        ))}

        <SubTitle title="New opportunities suggestions" />

        {Suggestions?.map((item) => (
          <CardSuggestion key={item?.id} {...item} />
        ))}
      </Layout>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: colors.white,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    marginTop: 5,
  },

  logged: {
    backgroundColor: colors.basic5,
    borderRadius: 4,
    padding: 20,
    marginTop: 20,
  },
  boxs: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-between',
  },
  boxUp: {
    padding: 10,
    borderRadius: 4,
    width: '48%',
    height: 89,
    justifyContent: 'space-between',
  },
});
