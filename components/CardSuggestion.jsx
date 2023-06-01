import { StyleSheet, Image } from 'react-native';
import { colors } from 'design';
import { PropTypes } from 'prop-types';
import { Button, Layout, Text, Card } from '@ui-kitten/components';

const CardSuggestion = ({ id, title, Category, provider, cover, description }) => {
  return (
    <Card style={{ marginTop: 15 }}>
      <Image style={styles.cover} source={{ uri: cover }} />
      <Layout style={styles.content}>
        <Text category="h6" status="basic">
          {title}
        </Text>

        <Layout style={styles.categories}>
          <Text
            style={[styles.type, { backgroundColor: colors.primary2 }]}
            category="c2"
            status="primary"
          >
            {Category}
          </Text>
          <Text
            style={[styles.type, { backgroundColor: colors.success2 }]}
            category="c2"
            status="success"
          >
            {provider}
          </Text>
        </Layout>

        <Text category="s2" status="basic" style={{ marginTop: 12 }}>
          {description}
        </Text>

        <Button size="small" status="primary" style={styles.btn} onPress={() => console.log(id)}>
          {(props) => (
            <Text
              {...props}
              style={{ fontFamily: 'OpenSans_600SemiBold' }}
              category="c2"
              status="control"
            >
              More details
            </Text>
          )}
        </Button>
      </Layout>
    </Card>
  );
};

CardSuggestion.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  Category: PropTypes.string,
  provider: PropTypes.string,
  cover: PropTypes.string,
  description: PropTypes.string,
};

export default CardSuggestion;

const styles = StyleSheet.create({
  cover: {
    width: '100%',
    height: 200,
    backgroundColor: colors.primary,
    resizeMode: 'cover',
  },
  categories: {
    flexDirection: 'row',
    marginTop: 12,
  },

  content: {
    padding: 15,
  },
  type: {
    borderRadius: 24,
    marginRight: 4,
    padding: 6,
    paddingLeft: 12,
    paddingRight: 12,
  },

  btn: {
    marginTop: 12,
    width: 102,
  },
});
