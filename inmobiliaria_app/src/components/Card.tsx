import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBed, faMapLocationDot, faToilet, faRulerCombined } from '@fortawesome/free-solid-svg-icons';

import ImgContainer from './ImgContainer';

interface CardProps {
    title: string;
    address: string;
    rooms: number;
    bathrooms: number;
    area: number;
    rating: number;
    price: number;
}

const Card: React.FC<CardProps> = ({ title, address, rooms, bathrooms, area, rating, price }) => {
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <View style={styles.container}>
                    <Image
                        source={require('../real_state.jpg')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.column}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.row}>
                        <FontAwesomeIcon size={25} icon={faMapLocationDot} style={styles.icons} />
                        <Text style={styles.address}>{address}</Text>
                    </View>
                    <View style={[styles.row, styles.iconsRow]}>
                        <View style={styles.row}>
                            <FontAwesomeIcon size={25} icon={faBed} style={styles.icons} />
                            <Text style={styles.data}>{rooms}</Text>
                        </View>
                        <View style={styles.row}>
                            <FontAwesomeIcon size={25} icon={faToilet} style={styles.icons} />
                            <Text style={styles.data}>{bathrooms}</Text>
                        </View>
                        <View style={styles.row}>
                            <FontAwesomeIcon size={25} icon={faRulerCombined} style={styles.icons} />
                            <Text style={styles.data}>{`${area} m2`}</Text>
                        </View>
                    </View>         
                    <View style={[styles.row, styles.bottomRow]}>
                        <Text style={styles.price}>{`$${price.toString().substring(0,3)}/m2`}</Text>
                    </View>          
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        elevation: 2,
        margin: 20
    },
    row: {
        flexDirection: 'row',
        marginVertical: 3
    },
    column: {
        flexDirection: 'column',
    },
    iconsRow: {
        width: '65%',
        justifyContent: 'space-between'
    },
    bottomRow: {
        width: '65%',
        justifyContent: 'space-between'
    },
    icons: {
        marginRight: 7,
        color: '#919191'
    },
    title: {
        marginBottom: 8,
        fontSize: 18,
        color: '#151525',
        fontWeight: '600'
    },
    price: {
        fontSize: 18,
        color: '#151525',
        fontWeight: '800'
    },
    data: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#151525'
    },
    address: {
        fontSize: 16,
        fontWeight: 'normal',
        color: '#151525'
    },
    container: {
        width: '35%',
        height: '100%',
        borderRadius: 10,
        marginRight: 20,
        padding: 8
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
});

export default Card;