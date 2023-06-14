import React, {useState} from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBed, faMapLocationDot, faToilet, faRulerCombined, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';

interface CardProps {
    title: string;
    address: string;
    rooms: number;
    bathrooms: number;
    area: number;
    rating: number;
    price: number;
    image: string;
}

const Card: React.FC<CardProps> = ({ title, address, rooms, bathrooms, area, rating, price, image }) => {

    const [like, setLike] = useState(false);
    const [likeColor, setLikeColor] = useState('#ffffff');

    const handleLike = () => {
        setLike(!like);
        if(like) {
            setLikeColor('#ffffff');
        } else {
            setLikeColor('#ed2d5d');
        }
    }

    return (
        <View testID='flatListItem' style={styles.card}>
            <View style={styles.row}>
                <View style={styles.container}>
                    <Image
                        source={{uri: image}}
                        style={styles.image}
                    />
                    <View style={[styles.row, styles.rowRating]}>
                        <FontAwesomeIcon size={25} icon={faStar} style={styles.starIcon} />
                        <Text style={styles.price}>{rating}</Text>
                    </View>
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
                    <View style={styles.bottomRow}>
                        <Text style={styles.price}>{`$${price.toString().substring(0,3)}/m2`}</Text>
                        <TouchableOpacity 
                            style={styles.likeButton}
                            onPress={() => handleLike()}
                            testID='likeBtn'
                        >
                            <FontAwesomeIcon testID='likeIcon' icon={faHeart} style={{color: likeColor}} />
                        </TouchableOpacity>
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
        width: '50%',
        justifyContent: 'space-between'
    },
    bottomRow: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between'
    },
    icons: {
        marginRight: 7,
        color: '#919191'
    },
    title: {
        marginBottom: 8,
        fontSize: 24,
        color: '#151525',
        fontWeight: '600'
    },
    price: {
        fontSize: 20,
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
    rowRating: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 80,
        backgroundColor: '#FBEDB7',
        padding: 7,
        borderRadius: 20
    },
    starIcon: {
        color: '#EEBA00',
        marginRight: 5
    },
    likeButton: {
        backgroundColor: '#00B074',
        borderRadius: 50,
        width: 30,
        height: 30,
        padding: 7
    },
});

export default Card;
