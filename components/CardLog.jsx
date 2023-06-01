import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';
import { AntDesign } from '@expo/vector-icons';
import { colors } from 'design';
import { PropTypes } from 'prop-types';

const CardLog = ({ comingAt, title }) => {
  return (
    <Layout style={styles.bowl}>
      <Layout style={{ backgroundColor: 'transparent' }}>
        <Text category="p1" status="basic">
          {title}
        </Text>

        {comingAt ? (
          <Layout level="1" style={styles.date}>
            <AntDesign name="calendar" size={20} color={colors.basic} />
            <Text style={{ marginLeft: 5 }} category="p2" status="basic">
              {comingAt}
            </Text>
          </Layout>
        ) : null}
      </Layout>

      <Button style={{ width: 83 }} status={comingAt ? 'primary' : 'success'} size="small">
        {(props) => (
          <Text
            {...props}
            style={{ fontFamily: 'OpenSans_600SemiBold' }}
            category="c2"
            status="control"
          >
            Log
          </Text>
        )}
      </Button>
    </Layout>
  );
};

CardLog.propTypes = {
  title: PropTypes.string,
  comingAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
};

export default CardLog;

const styles = StyleSheet.create({
  bowl: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E4E9F2',
    backgroundColor: colors.basic5,
    borderRadius: 4,
    padding: 15,
    alignItems: 'center',
    height: 64,
  },

  date: {
    backgroundColor: colors.transparent,
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
});
