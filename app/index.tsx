import { Link, Stack } from 'expo-router';
import { useState } from 'react';
import { Image, Text, View, StyleSheet, Button } from 'react-native';

function LogoTitle() {
    return (
        <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
    );
}

export default function Home() {

    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'My home',
                    headerStyle: { backgroundColor: '#f4511e' },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                    headerTitle: props => <LogoTitle {...props} />,
                    headerRight: () => <Button onPress={() => setCount(c => c + 1)} title="Update count" />,
                }}
            />
            <Text>Count: {count}</Text>

            <Link href={{ pathname: 'details', params: { name: 'Nathan Test' } }}>Go to Details</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
});
