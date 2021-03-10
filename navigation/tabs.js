import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import LinearGradient  from "react-native-linear-gradient";

import { Home } from "../screens"
import { COLORS, FONTS, icons, images } from "../constants"

const Tab = createBottomTabNavigator()
const TouchBarCustomButton = ({children, onPress}) => {
    <TouchableOpacity
    style = {{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
    }}
    onPress = {onPress}
    >
        <LinearGradient
        colors = {[COLORS.primary, COLORS.secondary]}
            style = {{
                height: 70,
                width: 70,
                borderRadius: 35,
            }}
        >
            {children}
        </LinearGradient>
    </TouchableOpacity>
}
const Tabs = () => {
    return (
        <Tab.Navigator
        tabBarOptions = {{
            showLabel: false,
            style:{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                elevation: 0,
                backgroundColor: COLORS.white,
                borderColor: "transparent",
                height: 100,
            }
        }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options = {{
                    tabBarIcon : ({focused}) => (
                        <View style={{ alignContent: "center", justifyContent: "center"}}>
                            <Image source = 
                            {icons.home} 
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: "contain",
                                tintColor: focused ? COLORS.primary : COLORS.black,
                            }}/>
                            <Text 
                            style = {{ 
                                color: focused ? COLORS.primary : COLORS.black, 
                                ...FONTS.body5
                            }}>
                                HOME
                            </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Portfolio"
                component={Home}
                options = {{
                    tabBarIcon : ({focused}) => (
                        <View style={{ alignContent: "center", justifyContent: "center"}}>
                            <Image source = 
                            {icons.pie_chart} 
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: "contain",
                                tintColor: focused ? COLORS.primary : COLORS.black,
                            }}/>
                            <Text 
                            style = {{ 
                                color: focused ? COLORS.primary : COLORS.black, 
                                ...FONTS.body5
                            }}>
                                PORTFOLIO
                            </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Transaction"
                component={Home}
                options = {{
                    tabBarIcon: ({focused}) => (
                        <Image 
                        source={icons.transaction}
                        resizeMode = "contain"
                        style = {{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.white,
                        }}
                        >
                        </Image>
                    ),
                    tabBarButton: (props) => {
                        <TouchBarCustomButton
                            {...props}
                        />
                    }
                }}
            />
            <Tab.Screen
                name="Prices"
                component={Home}
                options = {{
                    tabBarIcon : ({focused}) => (
                        <View style={{ alignContent: "center", justifyContent: "center"}}>
                            <Image source = 
                            {icons.line_graph} 
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: "contain",
                                tintColor: focused ? COLORS.primary : COLORS.black,
                            }}/>
                            <Text 
                            style = {{ 
                                color: focused ? COLORS.primary : COLORS.black, 
                                ...FONTS.body5
                            }}>
                                PRICES
                            </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Home}
                options = {{
                    tabBarIcon : ({focused}) => (
                        <View style={{ alignContent: "center", justifyContent: "center"}}>
                            <Image source = 
                            {icons.settings} 
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: "contain",
                                tintColor: focused ? COLORS.primary : COLORS.black,
                            }}/>
                            <Text 
                            style = {{ 
                                color: focused ? COLORS.primary : COLORS.black, 
                                ...FONTS.body5
                            }}>
                                SETTINGS
                            </Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Tabs;