import React, { useState} from 'react';
import {Button, StyleSheet, TextInput, View, Modal, Image} from "react-native";
import goalImg from "../assets/goal.png"


const GoalInput = ({addGoalHandler, modalIsVisible, toggleAddGoalHandler}) => {
    const [goal, setGoal] = useState("");
    const goalInputHandler = (enteredText) => {
        setGoal(enteredText)
    }
    const onAddGoal = () => {
        if (goal) {
            addGoalHandler({text: goal, id: Date.now()});
            setGoal("");
        }
    };

    return (
        <Modal visible={modalIsVisible} animationType="slide" >
            <View style={styles.inputContainer}>
                <Image source={goalImg} style={styles.imageGoal} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal"
                    onChangeText={goalInputHandler}
                    value={goal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={onAddGoal} title="Add  Goal" color="#23093f" />
                    </View>
                    <View style={styles.button}>
                        <Button onPress={toggleAddGoalHandler} title="Close" color="#F31282" />
                    </View>


                </View>

            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
        paddingBottom: 24,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderColor: "grey",
        backgroundColor: "#5e0acc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        width: "100%",
        paddingHorizontal: 8,
        height: 40,
        color: "#120384",
        borderRadius: 6
    },
    buttonContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        width: "35%"
    },
    imageGoal: {
        height: 100,
        width: 100,
        marginHorizontal: "auto"
    }
});

export default GoalInput;