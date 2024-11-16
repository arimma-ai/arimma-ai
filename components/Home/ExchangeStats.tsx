import {Pressable, ScrollView, View, StyleSheet, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import CountryFlag from "react-native-country-flag";
import flags from "react-native-country-flag/data";

const ExchangeStats = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.topHeader}>Arimma Markets</Text>
                <Pressable>
                    <Text style={styles.viewBtn}>See More</Text>
                </Pressable>
            </View>
            <CurrencyItem_0/>
            <CurrencyItem_1/>
            <CurrencyItem_2/>
            <CurrencyItem_3/>
            <CurrencyItem_4/>
        </ScrollView>
    )
}

const CurrencyItem_0 = () => {
    return (
        <View style={styles.currencyContainer}>
            <View>
               <CountryFlag isoCode="US" size={24} />
                <Text style={styles.currencySmallText}>
                    United States Dollar
                </Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={styles.currencySmallText}>
                    R -
                </Text>
                <Ionicons name={"trending-up"} size={24} color={"#01BA59"}/>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={styles.currencySmallText}>
                    R -
                </Text>
                <Ionicons name={"trending-up"} size={24} color={"#EE281D"}/>
            </View>
        </View>
    )
}

const CurrencyItem_1 = () => {
    return (
        <View style={styles.currencyContainer}>
            <View>
               <CountryFlag isoCode="CN" size={24} />
                <Text style={styles.currencySmallText}>
                    Chinese Yuan
                </Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={styles.currencySmallText}>
                    R -
                </Text>
                <Ionicons name={"trending-up"} size={24} color={"#01BA59"}/>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={styles.currencySmallText}>
                    R -
                </Text>
                <Ionicons name={"trending-up"} size={24} color={"#EE281D"}/>
            </View>
        </View>
    )
}

const CurrencyItem_2 = () => {
    return (
        <View style={styles.currencyContainer}>
            <View>
               <CountryFlag isoCode="GB" size={24} />
                <Text style={styles.currencySmallText}>
                    Great British Pound
                </Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={styles.currencySmallText}>
                    R -
                </Text>
                <Ionicons name={"trending-up"} size={24} color={"#01BA59"}/>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={styles.currencySmallText}>
                    R -
                </Text>
                <Ionicons name={"trending-up"} size={24} color={"#EE281D"}/>
            </View>
        </View>
    )
}

const CurrencyItem_3 = () => {
    return (
        <View style={styles.currencyContainer}>
            <View>
               <CountryFlag isoCode="KE" size={24} />
                <Text style={styles.currencySmallText}>
                    Kenyan Shilling
                </Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={styles.currencySmallText}>
                    R -
                </Text>
                <Ionicons name={"trending-up"} size={24} color={"#01BA59"}/>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={styles.currencySmallText}>
                    R -
                </Text>
                <Ionicons name={"trending-up"} size={24} color={"#EE281D"}/>
            </View>
        </View>
    )
}

const CurrencyItem_4 = () => {
    return (
        <View style={styles.currencyContainer}>
            <View>
               <CountryFlag isoCode="AE" size={24} />
                <Text style={styles.currencySmallText}>
                    U.A.E Dirham
                </Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={styles.currencySmallText}>
                    R -
                </Text>
                <Ionicons name={"trending-up"} size={24} color={"#01BA59"}/>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={styles.currencySmallText}>
                    R -
                </Text>
                <Ionicons name={"trending-up"} size={24} color={"#EE281D"}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#12151C",
        marginHorizontal: 10,
        marginTop: 20,
        padding: 10
    },
    topContainer: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    topHeader: {
        fontSize: 14,
        fontWeight: "500",
        color: "#fff"
    },
    viewBtn: {
        color: "#F3456F",
        padding: 5,
    },
    currencyContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems:'center',
        paddingVertical: 10,
    },
    currencyFlag: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "700"
    },
    currencySmallText: {
        fontSize: 12,
        color: "#ABB0BC",
        fontWeight: "400"
    }
})

export default ExchangeStats
