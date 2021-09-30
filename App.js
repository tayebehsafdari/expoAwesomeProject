import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setCount(count + 1)} style={styles.button}>
                <Text>Click me!</Text>
            </TouchableOpacity>
            <Text style={{marginBottom: 10}}>You clicked {count} times</Text>
            <Button title="Click me!" onPress={() => setCount(count + 1)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    }
});
