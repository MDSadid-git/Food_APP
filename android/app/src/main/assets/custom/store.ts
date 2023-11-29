/* eslint-disable prettier/prettier */
import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/ProductsData';
import BeansData from '../data/BeansData';

export const useStore = create(
  persist(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (set, get) => ({
      CoffeeList: CoffeeData,
      BeanList: BeansData,
      CartPrice: 0,
      FavoritesList: [],
      CartList: [],
      OrderHistoryList: [],
    }),
    {
      name: 'shahi-food-app',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
