import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaViewBase,
  SafeAreaView,
  Button,Alert
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchCategories, fetchProducts} from '../redux/actions/productAction';
const product = () => {
  const products = useSelector(state => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const dispatch = useDispatch();
  const productcat = useSelector(state => state.product);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.productContainer}>
        <Image
          resizeMode={'center'}
          style={styles.image}
          source={{uri: item.image}}
        />
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>

        <Text numberOfLines={3} style={styles.desc}>
          {item.description}
        </Text>

        <View>
          <TouchableOpacity>
            <Text style={{color: '#000'}}>View details</Text>

          </TouchableOpacity>
        </View>
        <View>
        <Button title="Add to the cart"
        onPress={() => Alert.alert('Simple Button pressed')}></Button>
        </View>
      </View>
    );
  };

  return (
   
    <>
     headerRight: (
          <View style={{alignItems: 'center',  justifyContent:'center'}}>
            <TouchableOpacity
              >
              <View style={{flex:1, alignItems: 'center',  justifyContent:'center'}}>
              <Icon
                  name="shoppingcart"
                  type="antdesign"
                  color={"#FFFFFF"}
                  size={22}
                  containerStyle={{marginHorizontal: 15, position: 'relative',}}
                />
                {cartCount > 0 ? (
                  <View
                    style={{
                     
                      position: 'absolute',
                      backgroundColor: 'red',
                      width: 16,
                      height: 16,
                      borderRadius: 15 / 2,
                      right: 10,
                      top: +10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: "#FFFFFF",
                        fontSize: 8,
                      }}>
                      {cartCount}
                    </Text>
                  </View>
                ) : null}
                <View>
              
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ),
      <View style={styles.catogerycontainer}>
        <Text style={styles.text}>Categories</Text>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={productcat}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            if (index === 0) {
              return (
                <>
                  <Image
                    style={styles.imageitem}
                    source={require('../Images/electrical.jpg')}
                  />
                  <Text style={styles.category}>{item}</Text>
                </>
              );
            }
            if (index === 1) {
              return (
                <>
                  <Image
                    style={styles.imageitem}
                    source={require('../Images/jwellery.jpg')}
                  />
                  <Text style={styles.category}>{item}</Text>
                </>
              );
            }
            if (index === 2) {
              return (
                <>
                  <Image
                    style={styles.imageitem}
                    source={require('../Images/men.jpg')}
                  />
                  <Text style={styles.category}>{item}</Text>
                </>
              );
            }
            if (index === 3) {
              return (
                <>
                  <Image
                    style={styles.imageitem}
                    source={require('../Images/women.jpg')}
                  />
                  <Text style={styles.category}>{item}</Text>
                </>
              );
            }
          }}
        />
      </View>
      <Text style={styles.textstyle}>Products</Text>

      <View style={styles.container}>
        <FlatList
          data={products}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

export default product;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 4,
  },
  catogerycontainer: {
    flex: 2,
  },
  imageitem: {
    borderRadius: 40,
    height: 70,
    width: 70,
    top: 30,
    justifyContent: 'center',
    left: 10,
  },
  productContainer: {
    padding: 10,
    flex: 2,

    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemContainer: {
    justifyContent: 'space-between',
  },
  desc: {
    color: '#a1a1a1',
    marginBottom: 5,
    fontSize: 12,
  },
  image: {
    width: 70,
    height: 70,
    marginBottom: 5,
  },
  category: {
    justifyContent: 'space-around',
    fontSize: 18,
    top: 100,
    right: 60,
    fontWeight: 'bold',
  },
  textstyle: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#000',
  },
  text: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#000',
  },
});
