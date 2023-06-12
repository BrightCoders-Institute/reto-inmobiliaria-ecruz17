import React from 'react'
import { 
    View,
    Image,
    StyleSheet
} from 'react-native';

interface ImgContainerProps {
    imgURL: string;
}

export const ImgContainer: React.FC<ImgContainerProps> = ({imgURL}) => {
    return (
        <View style={styles.column}>
            <Image source={{uri: imgURL}}/>
        </View>
    )
}

export default ImgContainer;

const styles = StyleSheet.create({
    column: {
        flexDirection: 'column'
    },
});