import React from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class ScreenOne extends React.Component {

    constructor(props) {
        super(props)
        this.addedText = ''
    }

    _addTextInputChanged(text) {
        this.addedText = text
    }

    _MoveToList() {
            this.props.navigation.navigate('ScreenTwo')
    }

    _saveNewName() {
        if (this.addedText.length > 0) {
            const action = { type: "ADD_NAME", value: this.addedText }
            this.props.dispatch(action)
        }

    }


    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center',justifyContent:'center', backgroundColor: '#fff' }}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Add a name"
                        onChangeText={(text) => this._addTextInputChanged(text)}
                    />
                    <TouchableOpacity
                        onPress={() =>  this._saveNewName() }
                        style={styles.btn}
                    >
                        <Text style={styles.textBtn}>Add name</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this._MoveToList()}
                        style={styles.btn}
                    >
                        <Text style={styles.textBtn}>Check list</Text>
                    </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        width: '90%',
        borderColor: '#4F4F4F4F',
        borderWidth: 1,
        paddingLeft: 15,
        borderRadius: 20,
        marginVertical: 15,
        

    },
    btn: {
        height: 40,
        width: "90%",
        backgroundColor: '#0098A0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 10,
        shadowColor: "#111",
        shadowOpacity: 0.2,
        shadowRadius: 15,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },
    textBtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    }
})


const mapStateToProps = state => {
    return {
        list: state.list
    }
}

export default connect(mapStateToProps)(ScreenOne)