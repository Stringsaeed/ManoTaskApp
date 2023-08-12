// we can use it from react-native or flash-list directly
// but now we won't depends on any extra types from no package.
export interface IListRenderItemInfo<T extends unknown> {
  item: T;
  index: number;
}
