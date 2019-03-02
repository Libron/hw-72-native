import React from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';

const DishCard = (props) => {
    return (
        <TouchableOpacity key={props.dish.id} style={styles.Item} onPress={() => {props.onClick(props.dish.id)}}>
                <View>
                    <Image
                        style={{width: 80, height: 80}}
                        source={{uri: props.dish.imgURL}}
                    />
                </View>

                <View>
                    <Text>{props.dish.name}</Text>
                </View>

                <View>
                    <Text>{props.dish.price} KGS</Text>
                </View>
        </TouchableOpacity>
    );
};

export default DishCard;

const styles = StyleSheet.create({
    Item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center',
        marginBottom: 10,
        padding: 15
    }
});