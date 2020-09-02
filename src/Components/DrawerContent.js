import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

class ScreenOne extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <DrawerContentScrollView {...this.props}>
                    <View style={styles.userInfoSection}>
                        <View>
                            <Image
                                source={require('../Assets/Images/ic_tag_faces.png')}
                                style={styles.userAvatar}
                            />
                        </View>
                        <View style={{ marginLeft: 15, flexDirection: 'column', }}>
                            <Text style={styles.userName}>John Doe</Text>
                            <Text style={{ fontSize: 12, color: '#4F4F4F4F' }}>@John_Doe</Text>
                        </View>
                    </View>
                    <DrawerItem
                        icon={() => (
                            <Icon
                                name="ios-home"
                                size={25}
                                color="#4F4F4F4F"
                            />
                        )}
                        label="Home"
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                    <DrawerItem
                        icon={() => (
                            <Icon
                                name="ios-settings"
                                size={25}
                                color="#4F4F4F4F"
                            />
                        )}
                        label="Settings"
                        onPress={() => this.props.navigation.navigate('Settings')}
                    />
                    <View>
                    </View>
                </DrawerContentScrollView>
                <View style={styles.bottomDrawerSection}>
                    <DrawerItem
                        icon={() => (
                            <Icon
                                name="ios-help-circle"
                                size={30}
                                color="#0098A0"
                            />
                        )}
                        label="Help"
                        onPress={() => this.props.navigation.navigate('Help')}
                    />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    userInfoSection: {
        flexDirection: "row",
        marginTop: 15,
        alignItems: 'center',
    },
    userAvatar: {
        margin: 5,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0098A0',
    },
    bottomDrawerSection: {
        height: 60,
        marginBottom: 15,
        borderTopColor: '#4F4F4F',
        borderTopWidth: 0.3
    }
})

export default ScreenOne;
