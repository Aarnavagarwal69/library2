import React,{Component} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Modal, KeyboardAvoidingView, ScrollView, Alert} from 'react-native';
import firebase from 'firebase'
import {Card, Header, Icon} from 'react-native-elements'
import db from '../config'


export default class Recieverdetailsscreen extends Component{
    constructor(props){
        super(props)
        this.state={
            userid:firebase.auth().currentUser.email,
            recieverid:this.props.navigation.getParam('details')['userid'],
            requestid:this.props.navigation.getParam('details')['requestid'],
            bookname:this.props.navigation.getParam('details')['bookname'],
            reason:this.props.navigation.getParam('details')['reason'],
            recievername:'',
            recievercontact:'',
            recieveraddress:'',
            recieverrequestdocid:''
        }
    }

getrecieverdetails(){
    db.collection('Users').where("emailID","==",this.state.recieverid).get().then(snapshot=>{
        snapshot.forEach(doc=>{
            this.setState({
                recievername:doc.data().Firstname,
                recievercontact:doc.data().Contact,
                recieveraddress:doc.data().Address
            })
        })
    })
}


updatebookstatus=()=>{
    db.collection('Donations').add({
        bookname:this.state.bookname,
        requestid:this.state.requestid,
        requestedby:this.state.recievername,
        donorid:this.state.userid,
        requeststatus:"donor interested"
    })
}

    render(){
        return(
            <View> style={styles.container}
            <View style={{flex:0.1}}>
            <Header leftComponent ={<Icon name='arrow-left' type='feather' color='#696969' onPress={() => this.props.navigation.goBack()}/>} 
            centerComponent={{ text:"Donate Books", style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }} 
            backgroundColor = "#eaf8fe" />
            </View>
            <View style={{flex:0.3}}>
                <Card title={"book information"} titleStyle={{fontSize:20}}>
                    <Card>
                        <Text style={{fontWeight:'bold'}}>name:{this.state.bookname}</Text>
                    </Card>
                    <Card>
                        <Text style={{fontWeight:'bold'}}>reason:{this.state.reason}</Text>
                    </Card>
                </Card>
            </View>
            <View style={{flex:0.3}}>
                <Card title={"reciever information"} titleStyle={{fontSize:20}}>
                    <Card>
                        <Text style={{fontWeight:'bold'}}>name:{this.state.recievername}</Text>
                    </Card>
                    <Card>
                        <Text style={{fontWeight:'bold'}}>Contact:{this.state.recievercontact}</Text>
                    </Card>
                    <Card>
                        <Text style={{fontWeight:'bold'}}>Address:{this.state.recieveraddress}</Text>
                    </Card>
                </Card>
            </View>
            <View>
                {this.state.recieverid!==this.state.userid
                ?(
                    <TouchableOpacity style={styles.button} onPress={()=>{this.updatebookstatus()
                    this.props.navigation.navigate('Mydonations')}}>
                        <Text>
                            i want to Donate
                        </Text>
                    </TouchableOpacity>
                )
            :null
            }   
            </View>
            </View>
        )
    }
}
    