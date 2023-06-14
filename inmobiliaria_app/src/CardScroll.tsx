import React from 'react';

import {
    FlatList
} from 'react-native';

import data from '../src/dataset.json';
import Card from './components/Card';

const CardScroll = () => {
    return (
            <FlatList
                testID='list'
                data={data}
                keyExtractor={(_item, index) => index.toString()}
                renderItem={({ item }) =>(
                    <Card 
                        title={item.name}  
                        address={item.address} 
                        area={item.area} 
                        bathrooms={item.bathrooms}
                        rooms={item.rooms}
                        rating={item.rating}
                        price={item.price}
                        image={item.imgURL}
                    />
                )}
            />
    )
}

export default CardScroll;