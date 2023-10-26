import {Button, StyleSheet, View} from 'react-native';
import {useState} from "react";
import {GoalItems, GoalInput} from "./components";
import {StatusBar} from "expo-status-bar";


export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [goalsList, setGoalsList] = useState([]);

    const toggleAddGoalHandler = () => {
        setModalIsVisible(prev => !prev);
    }

    const addGoalHandler = (goalObj) => {
        setGoalsList(prev => [...prev, goalObj]);
        toggleAddGoalHandler()
    }
    const deleteGoalHandler = (id) => {
        setGoalsList(prev => prev.filter(el => el.id !== id))
    }

    return (
        <>
            <StatusBar style="light" backgroundColor='black' />
            <View style={styles.appContainer}>
                <Button title="Add New Goal" color="#5e0acc" onPress={toggleAddGoalHandler}/>
                <GoalInput
                    addGoalHandler={addGoalHandler}
                    modalIsVisible={modalIsVisible}
                    toggleAddGoalHandler={toggleAddGoalHandler}
                />
                <GoalItems goalsList={goalsList} deleteGoalHandler={deleteGoalHandler}/>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    appContainer: {
        paddingVertical: 50,
        paddingHorizontal: 16,
        flex: 1
    }
});