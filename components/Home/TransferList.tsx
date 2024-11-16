import {View, StyleSheet, Text, Pressable, ScrollView, Image} from "react-native";


const TransferList = () => {
    return (
        <View style={styles.container}>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10
            }}>
                <Text style={styles.heading}>
                    Arimma Services
                </Text>
                <Pressable>
                    <Text style={styles.btnText}>
                        View All
                    </Text>
                </Pressable>
            </View>

            <ScrollView style={{
                marginTop:20
            }} showsHorizontalScrollIndicator={false} horizontal>
                <Image source={require('@/assets/images/remittances.jpg')} style={styles.avatar}/>
                <Image source={require('@/assets/images/carbon-market.jpg')} style={styles.avatar}/>
                <Image source={require('@/assets/images/insurance.jpg')} style={styles.avatar}/>
                <Image source={require('@/assets/images/credit-score.jpg')} style={styles.avatar}/>
                <Image source={require('@/assets/images/data-driven-credit.jpg')} style={styles.avatar}/>
                <Image source={require('@/assets/images/green-banking.jpg')} style={styles.avatar}/>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#12151C",
        marginHorizontal: 10,
        marginTop: 20,
        padding: 20,
        borderRadius: 10,
    },
    heading: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
    btnText: {
        color: "#BC385A",
        fontSize: 14,
        fontWeight: "500",
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight:10,
    }
})

export default TransferList
