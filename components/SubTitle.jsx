import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { PropTypes } from 'prop-types';
import { colors } from 'design';

const SubTitle = ({ title }) => {
  return (
    <Layout style={styles.bowl}>
      <Text category="p2" status="basic">
        {title}
      </Text>
    </Layout>
  );
};

SubTitle.propTypes = {
  title: PropTypes.string,
};

export default SubTitle;

const styles = StyleSheet.create({
  bowl: {
    marginTop: 20,
    marginBottom: 10,
    padding: 5,
    borderLeftColor: colors.primary,
    borderLeftWidth: 2,
    borderRadius: 2,
  },
});
