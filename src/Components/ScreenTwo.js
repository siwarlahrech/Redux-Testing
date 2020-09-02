import React from 'react'
import { Text, View, TextInput, StyleSheet, SectionList, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import ActionSheet from 'react-native-actionsheet'



class ScreenTwo extends React.Component {
    constructor(props) {
        super(props)
    }

    _deleteName(item) {
        const action = { type: "REMOVE_NAME", value: item }
        this.props.dispatch(action)
    }

    render() {

        const DATA = [
            {
                title: "A",
                data: ["Aria", "Anry", "Alice"]
            },
            {
                title: "B",
                data: ["Brianca", "Bruno"]
            },
            {
                title: "K",
                data: ["Kamilia"]
            },
            {
                title: "Y",
                data: ["Yuli"]
            },

        ];

        const Item = ({ title }) => (
            <View style={styles.item}>
                <View style={styles.nameSection}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => this.ActionSheet.show() }
                    style={styles.deleteIconSection}>
                    <Icon
                        name="ios-trash"
                        size={25}
                        color="#4F4F4F4F"
                    />
                </TouchableOpacity>
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    options={["Cancel", "Delete this name"]}
                    cancelButtonIndex={0}
                    destructiveButtonIndex={1}
                    onPress={(index) => {
                        if (index == 0) {

                        } else if (index == 1) {
                            this._deleteName(title)
                        }
                    }}
                />
            </View>
        );

        // console.log('S2 =======', this.props.route.params.list)

        if (this.props.list != "") {
            return (
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={{ alignItems: 'center' }}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Search..."
                            onChangeText={(text) => this._addTextInputChanged(text)}
                        />
                    </View>
                    <View style={{ height: "100%" }}>
                        <FlatList
                            data={this.props.list}
                            keyExtractor={(item) => item}
                            renderItem={({  item }) => <Item title={item} 
                            />}
                        />
                        {/* <SectionList
                                sections={DATA}
                                keyExtractor={(item, index) => item + index}
                                renderItem={({ item }) => <Item title={item} />}
                                renderSectionHeader={({ section: { title } }) => (
                                    <Text style={styles.header}>{title}</Text>
                                )}
                            /> */}
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.emptyListView}>
                    <Icon
                        style={styles.icon}
                        name="ios-list"
                        size={120}
                        color='#4F4F4F4F'
                    />
                    <Text style={styles.emptyListTxt}>Empty list</Text>
                </View>
            )
        }


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
    item: {
        height: 45,
        flexDirection: 'row',
        borderBottomWidth: 0.3,
        borderColor: "#4F4F4F4F",
    },
    // header: {
    //     fontWeight: 'bold',
    //     fontSize: 20,
    // },
    nameSection: {
        flex: 3,
        justifyContent: 'center',
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
    },
    deleteIconSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20

    },
    emptyListView: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyListTxt: {
        fontSize: 20,
        fontWeight: "400",
        color: "#0098A0"
    },


})



const mapStateToProps = state => {
    return {
        list: state.list
    }
}

export default connect(mapStateToProps)(ScreenTwo)
