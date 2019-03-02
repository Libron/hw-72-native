import React from 'react';
import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import {connect} from 'react-redux';
import {addDishToOrder, fetchDishes, removeDishFromOrder, saveOrder, toggleModal} from "../../store/action";
import DishCard from "../../components/DishCard/DishCard";

import Modal from '../../components/Modal';

const DELIVERY_PRICE = 150;

class DishesMenu extends React.Component {
    componentDidMount() {
        this.props.fetchDishes();
    }

    render() {
        if (!this.props.dishes) {
            return <Text>Loading...</Text>;
        }

        let totalSum = DELIVERY_PRICE;

        const dishes = Object.keys(this.props.dishes).map(dishID => (
            {...this.props.dishes[dishID], id: dishID}
        ));

        if (this.props.order) {
            Object.keys(this.props.order).map(dishId => {
                totalSum += this.props.order[dishId] * this.props.dishes[dishId].price;
            });
        }

        return (
                <View style={styles.DishMenu}>
                    <View style={styles.menu}>
                        <FlatList
                            data={dishes}
                            renderItem={(dish) => <DishCard dish={dish.item} onClick={this.props.addDishToOrder}/>}
                            keyExtractor={dish => dish.id}
                        />
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Order total: {totalSum} KGS</Text>
                        <Button
                            onPress={this.props.toggleModal}
                            title="CHECKOUT"
                            color="#841584"
                            disabled={(Object.keys(this.props.order).length === 0)}
                        />
                    </View>

                    <Modal
                        order={this.props.order}
                        dishes={this.props.dishes}
                        total={totalSum}
                        deliveryPrice={DELIVERY_PRICE}
                        visible={this.props.show}
                        toggle={this.props.toggleModal}
                        removeDishFromOrder={this.props.removeDishFromOrder}
                        saveOrder={this.props.saveOrder}
                    />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    DishMenu: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-between'
    },
    menu: {
        flex: 0.90,
        overflow: 'hidden',
    },
    footer: {
        flex: 0.15,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: '#fafafa'
    },
    footerText: {
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'red'
    },
    test: {
        margin: 100
    }
});

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        order: state.order,
        show: state.isActiveModal
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDishes: () => dispatch(fetchDishes()),
        saveOrder: () => (order) => dispatch(saveOrder(order)),
        addDishToOrder: (id) => dispatch(addDishToOrder(id)),
        removeDishFromOrder: (id) => dispatch(removeDishFromOrder(id)),
        toggleModal: () => dispatch(toggleModal()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DishesMenu);