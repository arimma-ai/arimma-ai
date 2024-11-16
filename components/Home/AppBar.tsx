import {View, StyleSheet, Text, Image} from "react-native";
import {Feather, Ionicons} from "@expo/vector-icons";


const AppBar = () => {
    return (
        <View style={styles.appBar}>
          {/* Left Section with logo */}
            <View style={styles.leftContainer}>
                <Image
                    source={require('@/assets/images/logo.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.rightContainer}>
                <Feather name={"search"} size={24} color={"#fff"}/>
                <Feather name={"bell"} size={24} color={"#fff"}/>
                <View style={styles.btn}>
                    <Ionicons name={"scan-outline"} size={24} color={"#fff"}/>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    rightContainer: {
        flexDirection: 'row',
        gap: 18,
        alignItems: 'center'
    },
    leftContainer: {
        flexDirection: 'row',
        gap: 18,
        alignItems: 'center'
    },
    appBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: 120,
        height: 40
    },
    btn: {
        backgroundColor: '#262832',
        borderRadius: 50,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },

})


export default AppBar
