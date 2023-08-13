import {MMKV} from 'react-native-mmkv';

const manoStorage = new MMKV();

export async function setItem(key: string, value: string) {
  return await manoStorage.set(key, value);
}

export async function getItem(key: string) {
  return (await manoStorage.getString(key)) || null;
}

export async function removeItem(key: string) {
  await manoStorage.delete(key);
}

export const AsyncStorage = {
  setItem,
  getItem,
  removeItem,
};
