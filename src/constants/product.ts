import {Dimensions} from 'react-native';

const numColumns = 3;
const padding = 16;

const screenWidth = Dimensions.get('window').width;
const itemWidth = (screenWidth - padding * (2 + (numColumns - 1))) / numColumns;

export const productItemConfig = {
  numColumns,
  padding,
  itemHeight: 244,
  itemWidth,
  itemMarginHorizontal: padding / 2,
};
