import React,{Component} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Modal, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import db from '../config.js'
import firebase from 'firebase'

export default class Mydonations extends Component{
    render(){
        return(
            <View>
                <Text>
                    My donations
                </Text>
            </View>
        )
    }
} 