import React, {Component} from 'react';
import {Modal, Text, View, Button, StyleSheet} from 'react-native';

class Modal extends Component {
    render() {
        const order = Object.keys(this.props.order).map(dishId=>{
           return (
               <View
                   style={styles.orderItem}
                   key={dishId}
               >
                   <Text>{this.props.dishes[dishId].name}</Text>
                   <Text> x {this.props.order[dishId]}</Text>
                   <Text>{this.props.dishes[dishId].price} KGS</Text>
                   <Button
                       onPress={()=>this.props.removeDishFromOrder(dishId)}
                       title="delete"
                       color="red"
                   />
               </View>
           )});

        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.visible}
                    onRequestClose={this.props.toggle}>


                    <View  style={styles.modal}>
                        <Text style={styles.header}>Ваш заказ:</Text>

                        <View style={styles.content}>
                            {order}
                            <View style={styles.orderItem}>
                                <Text style={{color: '#424242', fontWeight: 'bold'}}>Delivery</Text>
                                <Text style={{color: '#424242', fontWeight: 'bold'}}> x 1</Text>
                                <Text style={{color: '#424242', fontWeight: 'bold'}}>150 KGS</Text>
                                <Button
                                    onPress={()=>this.props.removeDishFromOrder(dishId)}
                                    title="delete"
                                    color="red"
                                    disabled={true}
                                />
                            </View>
                        </View>

                        <View style={styles.footer}>
                            <Text style={styles.total}>Total: {this.props.total} KGS</Text>
                                <View style={styles.buttons}>
                                    <Button
                                        onPress={this.props.toggle}
                                        title="Cancel"
                                        color="grey"
                                    />
                                    <Button
                                        onPress={() => this.props.saveOrder('HELLO WORLD')}
                                        title="Order Now"
                                        color="green"
                                    />
                                </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
       flex: 1,
       backgroundColor: '#ef6c00',
       justifyContent: 'space-between',
    },
    header: {
        flex: 1,
        alignContent: 'center',
        fontSize: 25,
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
    content: {
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#f57c00',
    },
    orderItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 20,
        borderBottomColor: '#ef6c00',
        borderBottomWidth: 2,
        paddingLeft: 25,
        paddingRight: 25,

    },
    footer: {
        flex: 2,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    buttons: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    btn: {
        width: 40,
        height: 40,
        backgroundColor: 'pink'
    },
    total: {
        fontSize: 25,
        marginTop: 10,
        color: '#fff',
        fontWeight: 'bold',
    }
});

export default Modal;