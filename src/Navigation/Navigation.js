import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ScreenOne from '../Components/ScreenOne'
import ScreenTwo from '../Components/ScreenTwo'
import Settings from '../Components/Settings'
import DrawerContent from '../Components/DrawerContent'
import Help from '../Components/Help'

import Icon from 'react-native-vector-icons/Ionicons'; 

const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Settings" component={SettingsStackNavigation} />
        <Drawer.Screen name="Home" component={HomeStackNavigation} />
        <Drawer.Screen name="Help" component={Help} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export const HomeStackNavigation = ({navigation}) => {
  return (
      <HomeStack.Navigator 
        initialRouteName='ScreenOne' 
        screenOptions={{
          headerStyle :{
            backgroundColor: '#0098A0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight:'bold'
          }
        }}
      >
        <HomeStack.Screen
          options={{ 
            title: 'Home',
            headerLeft: () => (
              <Icon.Button 
                name="ios-menu" 
                size={30}
                backgroundColor="#0098A0"
                onPress={() => navigation.openDrawer()} />
            ) }}
          name='ScreenOne'
          component={ScreenOne}
        />
         <HomeStack.Screen
          options={{ title: 'Names list' }}
          name='ScreenTwo'
          component={ScreenTwo}
        />
      </HomeStack.Navigator>
  );
}


export const SettingsStackNavigation = ({navigation}) => {
  return (
      <SettingsStack.Navigator 
        initialRouteName='ScreenOne' 
        screenOptions={{
          headerStyle :{
            backgroundColor: '#0098A0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight:'bold'
          }
        }}
      >
        <SettingsStack.Screen
          options={{ title: 'Settings',
          headerLeft: () => (
            <Icon.Button 
              name="ios-menu" 
              size={30}
              backgroundColor="#0098A0"
              onPress={() => navigation.openDrawer()} />
          )}}
          name='Settings'
          component={Settings}
        />
      </SettingsStack.Navigator>
  );
}
