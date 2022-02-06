import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title?: string;
  subtitle?: string;
  show?: boolean;
};
const EmptyList = ({ title, subtitle, show }: Props) => {
  if (!show) return null;

  return (
    <View style={styles.container}>
      <Text testID="title" style={styles.title}>
        {title}
      </Text>
      <Text testID="subtitle" style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 20, fontWeight: '500', marginBottom: 8 },
  subtitle: { fontSize: 14, opacity: 0.6 },
});
export default EmptyList;
