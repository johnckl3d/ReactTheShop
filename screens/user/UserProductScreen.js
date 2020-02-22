import React from "react";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import ProductItem from "../../components/shop/ProductItem";
import HeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
const UserProductsScreen = props => {
  const userProducts = useSelector(state => state.products.userProducts);

  return (
    <FlatList
      data={userProducts}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {}}
          onAddToCart={() => {}}
        ></ProductItem>
      )}
    ></FlatList>
  );
};

UserProductsScreen.navigationOptions = navData => {
  return {
    headerTitle: "Your Products",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={"ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};
export default UserProductsScreen;
