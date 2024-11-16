import React from "react";
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button } from "react-native";
import Colors from "@/constants/Colors";
import LoginScreen from "react-native-login-screen";

const LogInScreen = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rePassword, setRePassword] = React.useState('');

    return (
                   <View style={styles.container}>
                        <SafeAreaView style={{ flex: 1 }}>
                                <View
                                        style={{
                                                paddingHorizontal: 20,
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                        }}
                                >
                                   
                                   <LoginScreen
                                      logoImageSource={require('@/assets/images/favicon.png')}
                                      onLoginPress={() => {}}
                                      onSignupPress={() => {}}
                                      onNumberChange={setUsername}
                                      loginButtonText={'Log In'}
                                      disableSignup
                                      textInputChildren={
                                         <View style={styles.repasswordContainer}>
                                           <TextInput
                                              placeholder="Re-Password"
                                              secureTextEntry
                                              value={rePassword}
                                              onChangeText={setRePassword}
                                              style={styles.input}
                                            />
                                         </View>
                                     }
                                     onPasswordChange={setPassword}
                                   />
                                </View>
                        </SafeAreaView>
                   </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
    },
    repasswordContainer: {
        marginTop: 16,
    },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
});

export default LogInScreen;
