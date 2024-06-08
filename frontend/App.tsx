import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Button from './Button';
import ImageViewer from './ImageViewer';
import Table from './Table';
import { styles } from './styles/style';
import AddUser from './components/AddUser';
import DeleteUser from './components/DeleteUser';
import ShowUsers from './components/ShowUsers';
import UpdateUser from './components/UpdateUser';
import { user } from './types/user';

const dirImagem = require('./assets/imagens/tcc-logo-quadrado.jpeg');

export default function App() {
  let [users, setUsers] = useState<user[] | undefined | null | [] | any>([]);

  let [user, setUser] = useState<user>();

  const mostraUsuarios = () => {
    ShowUsers().then(data => {
      setUsers(data);
    });
  };

  const guardaClicado = (user:user) => {
    setUser(user);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <ImageViewer dir={dirImagem} />
        </View>
        <Text style={styles.title}>UNINEWS</Text>
      </View>
      <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ width: '50%', marginHorizontal: 8, marginTop: 10 }}>
          <Text>Dados</Text>
          <View style={{ borderWidth: 2, borderRadius: 10, borderColor: '#F3C63B', padding: 5 }}>
            <Text style={styles.inputs}>Nome de Usuário</Text>
            <TextInput style={styles.input} value={user?.nome} onChange={(n) => setUser({ ...user, nome: n.target.value })} />
            <Text style={styles.inputs}>Senha</Text>
            <TextInput style={styles.input} value={user?.senha} onChange={(s) => setUser({ ...user, senha: s.target.value })} />
            <Text style={styles.inputs}>E-mail</Text>
            <TextInput style={styles.input} value={user?.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <Text style={styles.inputs}>Tipo</Text>
            <View>
              <RadioButton.Group onValueChange={tipo => setUser({ ...user, tipo: tipo })} value={user?.tipo || ''}>
                <RadioButton.Item label="Administrador" value="adm" uncheckedColor='#91C0E2'
                  color='#3C6294' style={styles.radioButton} />
                <RadioButton.Item label="Usuário" value="usu" uncheckedColor='#91C0E2'
                  color='#3C6294' style={styles.radioButton} />
              </RadioButton.Group>
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <Button label="Cadastrar" onClick={() => { AddUser({ user }); }} />
          <Button label="Ver Todos" onClick={ mostraUsuarios } />
          <Button label="Alterar" onClick={() => { UpdateUser({ user }); }} />
          <Button label="Apagar" onClick={() => { DeleteUser({ user }); }} />
        </View>
      </View>
      <View style={{ width: '100%', height: '35%', marginTop: 10, marginLeft: 18 }}>
        <Text style={{ marginTop: 15 }}>Dados Cadastrados</Text>
        <View style={{ width: '90%', height: '100%', borderWidth: 2, borderColor: '#F3C63B', borderRadius: 10 }}>
          <Table users={users} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}