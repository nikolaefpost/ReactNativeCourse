import React from 'react';
import {FlatList, StyleSheet, Text, View, Pressable} from "react-native";


const GoalItem = ({item, onDeleteGoal}) => {
    return (

        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: "#20083EFF"}}
                onPress={onDeleteGoal.bind(this, item.id)}
                // style={({pressed})=> pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{item.text}</Text>
            </Pressable>
        </View>

    )
}

const GoalItems = ({goalsList, deleteGoalHandler}) => {


    return (
        <View style={styles.goalsContainer}>
            <FlatList
                data={goalsList}
                renderItem={({item}) => <GoalItem item={item} onDeleteGoal={deleteGoalHandler}/>}
                keyExtractor={item => item.id}
            >
            </FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    goalsContainer: {
        flex: 5,
        marginTop: 12
    },
    goalItem: {
        marginVertical: 5,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    goalText: {
        padding: 8,
        color: "white"
    },
    pressedItem: {
        opacity: .5
    }

});

export default GoalItems;