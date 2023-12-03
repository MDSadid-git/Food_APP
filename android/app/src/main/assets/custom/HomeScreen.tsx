/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HearderBar from '../components/HearderBar';
import CustomIcon from '../components/CustomIcon';

const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.lenght; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getCoffeeList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let coffeelist = data.filter((item: any) => item.name == category);
    return coffeelist;
  }
};

const HomeScreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);
  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList),
  );
  const [searchText, setSeacrhText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  );
  const tabBarHeight = useBottomTabBarHeight();
  console.log('CateGories', CoffeeList);
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <HearderBar />
        <Text style={styles.ScreenTitle}>
          Find The Best {'\n'}Products for you
        </Text>
        {/* Search area start */}
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={() => {}}>
            <CustomIcon
              style={styles.inputIcon}
              name="search"
              size={FONTSIZE.size_18}
              color={
                searchText.length > 0
                  ? COLORS.primaryPinkHex
                  : COLORS.primaryLightGreyHex
              }
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find Your Products"
            value={searchText}
            onChangeText={text => setSeacrhText(text)}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
        </View>
        {/* Search area end */}
      </ScrollView>
      {/* Category Scrooller area start */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.CategoryScrollViiewStyle}>
        {categories.map((data, index) => (
          <View
            key={index.toString()}
            style={styles.CategoryScrollViewContainer}>
            <TouchableOpacity
              style={styles.CategoryScroolViewItem}
              onPress={() => {}}>
              <Text
                style={[
                  styles.CategoryText,
                  categoryIndex,
                  index == index ? {} : {},
                ]}>
                {data}
              </Text>
              {/* {categoryIndex.index == index ? (
                <View style={styles.ActiveCategory} />
              ) : (
                <></>
              )} */}
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      {/* Category Scrooller area end */}
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScreenTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_28,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  inputContainer: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
  },
  inputIcon: {
    marginHorizontal: SPACING.space_20,
  },
  TextInputContainer: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryPinkHex,
  },
  CategoryScrollViiewStyle: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },
  CategoryScrollViewContainer: {},
  CategoryScroolViewItem: {},
  CategoryText: {},
  ActiveCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryPinkHex,
  },
});
export default HomeScreen;
