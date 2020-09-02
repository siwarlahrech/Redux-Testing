import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class Help extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" ,backgroundColor: '#fff' }}>
                <Text style={{fontStyle:'italic'}}>
                    How can i help u ?
                </Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.openDrawer()}
                    style={styles.btn}
                >
                    <Text style={styles.textBtn}>Go back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn:{
        height: 40,
        width:"50%",
        backgroundColor: '#0098A0',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        marginVertical: 20,
        shadowColor: "#111",
        shadowOpacity: 0.2,
        shadowRadius: 15,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },
    textBtn:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:18
    }
})

export default Help;