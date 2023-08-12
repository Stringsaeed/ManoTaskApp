import React from 'react';
import {FlashList, FlashListProps} from '@shopify/flash-list';

function List<T>(props: FlashListProps<T>) {
  return <FlashList<T> {...props} />;
}

export default List;
