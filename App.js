import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';

export default function App() {
    const [count, setCount] = useState(0);
    return (
        // <View style={styles.container}>
        //     <TouchableOpacity onPress={() => setCount(count + 1)} style={styles.button}>
        //         <Text>Click me!</Text>
        //     </TouchableOpacity>
        //     <Text style={{marginBottom: 10}}>You clicked {count} times</Text>
        //     <Button title="Click me!" onPress={() => setCount(count + 1)}/>
        // </View>
        <ScrollView>
            <Text>Some text</Text>
            <View>
                <Text>Some more text</Text>
                <Image
                    source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png'
                    }}
                    style={{
                        width: 200,
                        height: 200
                    }}
                />
            </View>
            <TextInput defaultValue="You can type in me"
                       style={{
                           borderColor: 'gray',
                           borderWidth: 1,
                           height: 40
                       }}
            />
        </ScrollView>
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
