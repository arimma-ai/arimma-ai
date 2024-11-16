import {View, StyleSheet, Text} from "react-native";
import {AntDesign, Entypo} from "@expo/vector-icons";


const UserFinance = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#fff"
                }}>
                    Total Balance
                </Text>
                <Text style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "#fff",
                    marginVertical:10
                }}>
                    R -
                </Text>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10
                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#262832",
                        paddingHorizontal:20,
                        paddingVertical: 10,
                        borderRadius: 10,
                    }}>
                        <Text style={{
                            color: "#21fcb0",
                            fontSize: 16,
                            fontWeight: "bold",

                        }}>
                            R-
                        </Text>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center'
                    }}>
                        <Text style={{
                            color: "#999",
                            fontSize: 12,
                        }}>
                            Cashback Saved
                        </Text>
                        <Entypo name={"chevron-small-right"} size={28} color={"#999"}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 20
    },
    leftContainer: {
        padding: 10
    }
})


export default UserFinance
