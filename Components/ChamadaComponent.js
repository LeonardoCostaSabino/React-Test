import React from "react";
import {ScrollView, Text, View} from "react-native";
import {Button, Card, Header} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem, CheckBox } from 'react-native-elements'

const list = [
    {
        name: 'Leonardo Costa Sabino ',
        avatar_url: 'https://static.thenounproject.com/png/15724-200.png',
        subtitle: '18103489 - Disciplina',
        id: 1
    },
    {
        name: 'Ariana Araujo',
        avatar_url: 'https://static.thenounproject.com/png/15724-200.png',
        subtitle: '15042515 - Disciplina',
        id: 2
    },
];

class Chamada extends React.Component{

    state = {
        checked: false
    }

    render () {

        return(
            <ScrollView>

                <View style={{flex:1, flexDirection:'column'}}>
                    <Card
                        containerStyle={{backgroundColor:'#194a71'}}>
                        <Text style={{fontSize:25, textAlign:'center', color:'white', fontStyle:'italic'}}>Selecione a caixa de seleção para marcar o aluno como presente</Text>
                    </Card>
                    <View style={{marginTop:10, marginBottom:10}}>
                    <Button title="Marcar todos"  onPress={() => this.setState({checked: !this.state.checked})}/>
                    </View>
                    {list.map((l,i) => (
                        <ListItem
                            key={i}
                            leftAvatar={{source: { uri: l.avatar_url}}}
                            title={l.name}
                            subtitle={l.subtitle}
                            rightAvatar={
                                <CheckBox
                                    size={50}
                                    checked={this.state.checked}
                                    onPress={() => this.setState({checked: !this.state.checked})}
                                />}
                            bottomDivider
                        >
                        </ListItem>
                    ))}

                    <View style={{marginTop:15}}>

                        <Button
                            title="  Voltar"
                            onPress={() => {this.props.navigation.navigate('Login_Home')}}
                            icon={
                                <Icon
                                    name='arrow-left'
                                    size={20}
                                    color='#004075'
                                />
                            }
                        >

                        </Button>

                    </View>

                </View>
            </ScrollView>
        )
    }
}

Chamada.navigationOptions = {
    title: 'Professor_Chamada',
};


export default Chamada;