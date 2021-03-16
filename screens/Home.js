import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ScrollView,
    TouchableOpacity,
    Image,
    ImageBackground,
} from 'react-native';

import {dummyData, icons, images, FONTS, COLORS, SIZES} from "../constants";
import {PriceAlert} from "../components";

const Home = ({ navigation }) => {
    const [trending, setTrending] = React.useState(dummyData.trendingCurrencies);
    const [transactionHistory, setTransactionHistory] = React.useState(dummyData.transactionHistory);

    function renderHeader() {
        const renderItem = ({item, index}) => (
            <TouchableOpacity
                style = {{
                    width: 180,
                    paddingVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    marginLeft: index == 0 ? SIZES.padding : 0,
                    marginRight: SIZES.radius,
                    borderRadius: 10,
                    backgroundColor: COLORS.white,

                }}
            >  
                {/* Currency */}
                <View style = {{flexDirection: "row"}}>
                    <View>
                        <Image 
                            source = {item.image}
                            resizeMode = "cover"
                            style = {{
                                marginTop: 5,
                                width: 25, 
                                height: 25,
                            
                            }}
                        />
                    </View>
                    <View style={{marginLeft: SIZES.base}}>
                        <Text style={{...FONTS.h2}}>{item.currency}</Text>
                        <Text style={{color: COLORS.green, ...FONTS.body3}}>{item.code}</Text>
                    </View>
                </View>
                {/* Value */}
                <View style={{marginTop: SIZES.radius}}>
                    <Text style={{...FONTS.h2}}>${item.amount}</Text>
                    <Text style={{color: item.type == "I" ? COLORS.green : COLORS.red, ...FONTS.h3 }}>{item.changes}</Text>
                </View>
            </TouchableOpacity>
        )
        return(
            <View 
            style = {{
                width: "100%",
                height: 290,
                ...styles.shadow,
            }}
            >
            <ImageBackground
            source={images.banner}
            resizeMode = "cover"
            style = {{
                flex: 1,
                alignItems: "center",
            }}
            >
                {/* Header */}
                <View
                    style = {{
                        marginTop: SIZES.padding * 2,
                        width: "100%",
                        alignItems: "flex-end",
                        paddingHorizontal: SIZES.padding,
                    }}
                >
                    <TouchableOpacity
                        style = {{
                            width: 35,
                            height: 35,
                            alignItems: "center", 
                            justifyContent: "center",
                        }}
                        onPress = {() => console.log("Notification on press")}
                    >
                        <Image 
                        source = {icons.notification_white}
                        resizeMode = "contain"
                        style = {{
                            flex :1
                        }}
                        >

                        </Image>
                    </TouchableOpacity>
                </View>
                {/* Balance */}
                <View 
                style = {{
                    alignItems: "center",
                    alignContent: "center",
                }}
                >
                    <Text style={{color: COLORS.white, ...FONTS.h3}}>Your Portfolio Balanace</Text>
                    <Text style={{color: COLORS.white, marginTop: SIZES.base,  ...FONTS.h1}}>${dummyData.portfolio.balance}</Text>
                    <Text style={{color: COLORS.white, ...FONTS.body5}}>{dummyData.portfolio.changes } Last 24 Hours</Text>
                </View>

                {/* Trending */}
                <View 
                style = {{
                    position: "absolute",
                    bottom: "-30%",
                }}
                >
                    <Text style={{marginLeft: SIZES.padding, color: COLORS.white, ...FONTS.h2}}>
                        Trending
                    </Text>
                    <FlatList
                    contentContainerStyle = {{ marginTop: SIZES.base, }}
                    data = {trending}
                    renderItem = {renderItem}
                    keyExtractor = {item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    >

                    </FlatList>
                </View>

            </ImageBackground>
            </View>
        )
    }

    function renderAlert(){
        return(
            <PriceAlert />
        )
    }
    function renderNotice(){
        <View
            style={{
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.padding,
                padding: 20,
                borderRadius: SIZES.padding,
                backgroundColor: COLORS.secondary,
                ...styles.shadow
            }}
        >
            <Text style={{color: COLORS.white, ...FONTS.h3}}>Investing Safty</Text>
            <Text style={{ color: COLORS.white, ...FONTS.body4, marginTop: SIZES.base, lineHeight: 18}}>It's very dificult to time an investment,
                especially when the market is volotile. Learn how to
                use dollar cost average to your advantage,
            </Text>
            <TouchableOpacity
            style={{
                marginTop: SIZES.base,
            }}
                onPress = {() => console.log("Learn more")}
            >
                <Text style={{
                    textDecorationLine: "underline", 
                    color: COLORS.green,
                }}>Learn More</Text>
            </TouchableOpacity>
        </View>
    }

    function renderTransactionHistory(){
        return(
            <transactionHistory
                customContainerStyle = {...styles.shadow}
                history = {transactionHistory}
            />
        )
    }
    return (
        <ScrollView>
            <View style = {{ flex: 1, paddingBottom: 130, }} >
                {renderHeader()}
                {renderAlert()}
                {renderNotice()}
                {renderTransactionHistory()}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default Home;