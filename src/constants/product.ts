import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const numColumns = 3;
const paddingHorizontal = 16;

const itemWidth = (width - paddingHorizontal * (numColumns + 1)) / numColumns;

const getIsFirstOnRow = (index: number) => index % numColumns === 0;
const getIsMiddleOnRow = (index: number) => index % numColumns === 1;
const getIsLastOnRow = (index: number) => (index + 1) % numColumns === 0;

export const productItemConfig = {
  numColumns,
  spacingBetween: paddingHorizontal,
  paddingHorizontal,
  itemWidth,
  getIsFirstOnRow,
  getIsLastOnRow,
  getIsMiddleOnRow,
  shouldAddMargin: (index: number) => {
    return (
      (getIsFirstOnRow(index) || getIsLastOnRow(index)) &&
      !getIsMiddleOnRow(index)
    );
  },
  itemHeight: 240,
  itemMarginHorizontal: paddingHorizontal / 2,
};
