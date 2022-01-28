import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchProducts} from '../redux/actions/productAction';

const product = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
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
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  productContainer: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
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
});
