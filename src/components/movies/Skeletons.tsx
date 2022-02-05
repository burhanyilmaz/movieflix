import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const HorizontalMovieSkeleton = () => (
  <SkeletonPlaceholder>
    <SkeletonPlaceholder.Item flexDirection="row" marginBottom={16}>
      <SkeletonPlaceholder.Item flexDirection="column">
        <SkeletonPlaceholder.Item width={150} height={230} borderRadius={8} />
        <SkeletonPlaceholder.Item width={150} height={10} borderRadius={4} marginTop={16} />
        <SkeletonPlaceholder.Item width={100} height={10} borderRadius={4} marginTop={8} />
        <SkeletonPlaceholder.Item width={130} height={10} borderRadius={4} marginTop={8} />
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item flexDirection="column" marginLeft={16}>
        <SkeletonPlaceholder.Item width={150} height={230} borderRadius={8} />
        <SkeletonPlaceholder.Item width={150} height={10} borderRadius={4} marginTop={16} />
        <SkeletonPlaceholder.Item width={100} height={10} borderRadius={4} marginTop={8} />
        <SkeletonPlaceholder.Item width={130} height={10} borderRadius={4} marginTop={8} />
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item flexDirection="column" marginLeft={16}>
        <SkeletonPlaceholder.Item width={150} height={230} borderRadius={8} />
        <SkeletonPlaceholder.Item width={150} height={10} borderRadius={4} marginTop={16} />
        <SkeletonPlaceholder.Item width={100} height={10} borderRadius={4} marginTop={8} />
        <SkeletonPlaceholder.Item width={130} height={10} borderRadius={4} marginTop={8} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder.Item>
  </SkeletonPlaceholder>
);

export const VerticalMovieSkeleton = () => (
  <SkeletonPlaceholder>
    <SkeletonPlaceholder.Item flexDirection="column" marginLeft={16}>
      <SkeletonPlaceholder.Item flexDirection="row">
        <SkeletonPlaceholder.Item width={120} height={170} borderRadius={8} />
        <SkeletonPlaceholder.Item flexDirection="column" marginLeft={8}>
          <SkeletonPlaceholder.Item width={150} height={10} borderRadius={4} />
          <SkeletonPlaceholder.Item width={100} height={10} borderRadius={4} marginTop={8} />
          <SkeletonPlaceholder.Item width={130} height={10} borderRadius={4} marginTop={8} />
          <SkeletonPlaceholder.Item flexDirection="row" marginTop={16}>
            <SkeletonPlaceholder.Item width={75} height={30} borderRadius={100} marginRight={8} />
            <SkeletonPlaceholder.Item width={75} height={30} borderRadius={100} marginRight={8} />
            <SkeletonPlaceholder.Item width={75} height={30} borderRadius={100} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item flexDirection="row" marginTop={16}>
        <SkeletonPlaceholder.Item width={120} height={170} borderRadius={8} />
        <SkeletonPlaceholder.Item flexDirection="column" marginLeft={8}>
          <SkeletonPlaceholder.Item width={150} height={10} borderRadius={4} />
          <SkeletonPlaceholder.Item width={100} height={10} borderRadius={4} marginTop={8} />
          <SkeletonPlaceholder.Item width={130} height={10} borderRadius={4} marginTop={8} />
          <SkeletonPlaceholder.Item flexDirection="row" marginTop={16}>
            <SkeletonPlaceholder.Item width={75} height={30} borderRadius={100} marginRight={8} />
            <SkeletonPlaceholder.Item width={75} height={30} borderRadius={100} marginRight={8} />
            <SkeletonPlaceholder.Item width={75} height={30} borderRadius={100} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item flexDirection="row" marginTop={16}>
        <SkeletonPlaceholder.Item width={120} height={170} borderRadius={8} />
        <SkeletonPlaceholder.Item flexDirection="column" marginLeft={8}>
          <SkeletonPlaceholder.Item width={150} height={10} borderRadius={4} />
          <SkeletonPlaceholder.Item width={100} height={10} borderRadius={4} marginTop={8} />
          <SkeletonPlaceholder.Item width={130} height={10} borderRadius={4} marginTop={8} />
          <SkeletonPlaceholder.Item flexDirection="row" marginTop={16}>
            <SkeletonPlaceholder.Item width={75} height={30} borderRadius={100} marginRight={8} />
            <SkeletonPlaceholder.Item width={75} height={30} borderRadius={100} marginRight={8} />
            <SkeletonPlaceholder.Item width={75} height={30} borderRadius={100} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder.Item>
  </SkeletonPlaceholder>
);
