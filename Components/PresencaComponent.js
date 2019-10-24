import React from "react";
import {ScrollView, Text, View} from "react-native";
import {Button, Card, Header} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem, CheckBox } from 'react-native-elements'

const list = [
    {
        name: 'Turma INF205 ',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuBZl5DaqDsaRrs5-idrrf9hc3dJtKFoWAVPM6SQ16aBQUL48Y',
        subtitle: 'Estudos Sociais - Professor Arapuan Medeiros',
        id: 1
    },
    {
        name: 'Turma INF155',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuBZl5DaqDsaRrs5-idrrf9hc3dJtKFoWAVPM6SQ16aBQUL48Y',
        subtitle: 'Algoritimos em Grafos - Daniel Rocha',
        id: 2
    },
];

class Presenca extends React.Component{
    render () {
        return(
            <ScrollView>

                <View style={{flex:1, flexDirection:'column'}}>
                    <Card
                        containerStyle={{backgroundColor:'#194a71'}}>
                        <Text style={{fontSize:25, textAlign:'center', color:'white', fontStyle:'italic'}}>Pressione o botão para conectar a sua turma</Text>
                    </Card>
                    {list.map((l,i) => (
                        <ListItem
                            key={i}
                            leftAvatar={{source: { uri: l.avatar_url}}}
                            title={l.name}
                            subtitle={l.subtitle}
                            rightAvatar={
                                <Button
                                    title="Conectar-me"
                                    onPress={true}
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

Presenca.navigationOptions = {
    title: 'Aluno_Presenca',
};


export default Presenca;