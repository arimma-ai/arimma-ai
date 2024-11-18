import React from "react";
import { Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Colors from "@/constants/Colors"; 
import { NavigationContainer } from '@react-navigation/native';

// Create a Stack Navigator
const Stack = createStackNavigator();

const LogInScreen = () => {
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rePassword, setRePassword] = React.useState('');

    // Handle login button press
    const handleLogin = () => {
        // Placeholder function for login logic
        console.log("Logging in with", phoneNumber, password);
    };

    // Handle signup button press
    const handleSignup = () => {
        // Placeholder function for signup logic
        console.log("Signing up with", phoneNumber, password, rePassword);
    };

    // Format the phone number to be more user-friendly (optional)
    const formatPhoneNumber = (text) => {
        let formatted = text.replace(/[^\d]/g, ''); // Remove non-digit characters
        if (formatted.length > 3 && formatted.length <= 6) {
            formatted = `${formatted.slice(0, 3)}-${formatted.slice(3)}`;
        } else if (formatted.length > 6) {
            formatted = `${formatted.slice(0, 3)}-${formatted.slice(3, 6)}-${formatted.slice(6, 10)}`;
        }
        return formatted;
    };

    return (
       <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="LogInScreen" options={{ headerShown: false }}>
                {() => (
                    <View style={styles.container}>
                        <SafeAreaView style={styles.safeArea}>
                            <View style={styles.innerContainer}>
                                {/* Logo */}
                                <View style={styles.logoContainer}>
                                  <Image source={require('../assets/images/logo.png')}/>
                                </View>

                                {/* Phone Number Input */}
                                <TextInput
                                    placeholder="Cellphone Number"
                                    value={phoneNumber}
                                    onChangeText={(text) => setPhoneNumber(formatPhoneNumber(text))}
                                    keyboardType="numeric"
                                    style={styles.input}
                                    maxLength={13} // Format like xxx-xxx-xxxx
                                />

                                {/* Password Input */}
                                <TextInput
                                    placeholder="Password"
                                    secureTextEntry
                                    value={password}
                                    onChangeText={setPassword}
                                    style={styles.input}
                                />

                                {/* Re-Password Input */}
                                <TextInput
                                    placeholder="Forgot Password"
                                    secureTextEntry
                                    value={rePassword}
                                    onChangeText={setRePassword}
                                    style={styles.input}
                                />

                                {/* Login Button */}
                                <TouchableOpacity onPress={handleLogin} style={styles.button}>
                                    <Text style={styles.buttonText}>Log In</Text>
                                </TouchableOpacity>

                                {/* SignUp Button */}
                                <TouchableOpacity onPress={handleSignup} style={styles.button}>
                                    <Text style={styles.buttonText}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </SafeAreaView>
                    </View>
                )}
            </Stack.Screen>
        </Stack.Navigator>
       </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background, // Assuming you have a color for the background
    },
    safeArea: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 40,
    },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        color: "#fff",
    },
    button: {
        backgroundColor: Colors.primary, // Using primary color for button background
        paddingVertical: 15,
        borderRadius: 5,
        marginBottom: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});

export default LogInScreen;
