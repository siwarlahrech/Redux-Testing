import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux'


class Settings extends React.Component {
  

    render() {
        console.log(' === ' , this.props.counter)
        return (
            <View style={styles.mainConatiner}>
                <Text style={styles.conterTitle}>counter</Text>
                <View style={styles.counter}>
                    <TouchableOpacity onPress={this.props.increaseCounter}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.counterText}>{this.props.counter}</Text>
                    <TouchableOpacity onPress={this.props.decreaseCounter}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainConatiner:{
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: '#fff' 
    },
    conterTitle:{
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 25
    },
    counter:{
        flexDirection:'row'
    },
    buttonText:{
        fontSize: 30,
        fontWeight: "300",
        marginHorizontal: 40,
        color: "#0098A0"
    
    },
    counterText:{
        fontSize: 36,
        fontWeight: '400',
        color: "#000"
        
    }
})

const mapStateToProps = (state) => {
    // console.log('state === ' , state)

    return {
        counter: state.counter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //Increase Counter
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER', value: 1 }),

        //Decrease Counter
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER', value: 1 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);