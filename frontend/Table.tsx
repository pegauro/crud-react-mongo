import { useEffect, useState } from 'react';
import { DataTable } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { user } from './types/user';

type tableProps = {
    users: user[];
    onUserClick: (user: user) => void;
};

const Table: React.FC<tableProps> = ({users, onUserClick}) => {
    const [page, setPage] = useState<number>(0);
    const [numPerPage] = useState([3]);
    const [itemsPerPage, setItemsPerPage] = useState(numPerPage[0]);
    const inicio = page * itemsPerPage;
    const fim = Math.min((page + 1) * itemsPerPage, users.length);

    useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <DataTable>
            <DataTable.Header style={style.header}>
                <DataTable.Title style={style.title} sortDirection='ascending'>ID</DataTable.Title>
                <DataTable.Title style={style.title}>Usuário</DataTable.Title>
                <DataTable.Title style={style.title}>Senha</DataTable.Title>
                <DataTable.Title style={style.title}>E-mail</DataTable.Title>
                <DataTable.Title style={style.title}>Tipo</DataTable.Title>
            </DataTable.Header>

            {users.map((t:user) => (
                <DataTable.Row key={t._id} style={style.row} onPress={() => onUserClick(t)}>
                    <DataTable.Cell textStyle={style.cell}>{t._id}</DataTable.Cell>
                    <DataTable.Cell textStyle={style.cell}>{t.nome}</DataTable.Cell>
                    <DataTable.Cell textStyle={style.cell}>{t.senha}</DataTable.Cell>
                    <DataTable.Cell textStyle={style.cell}>{t.email}</DataTable.Cell>
                    <DataTable.Cell textStyle={style.cell}>{t.tipo}</DataTable.Cell>
                </DataTable.Row>
            ))}

            <DataTable.Pagination
                page={page}
                numberOfPages={Math.ceil(users.length / itemsPerPage)}
                onPageChange={(page) => setPage(page)}
                label={`${inicio + 1}-${fim} de ${users.length}`}
                numberOfItemsPerPage={itemsPerPage}
                onItemsPerPageChange={setItemsPerPage}
            />
        </DataTable>
    );
}

const style = StyleSheet.create({
    title: {
        width: '20%'
    },
    header: {
        borderBottomColor: '#F3C63B'
    },
    row: {
        width: '100%',
        borderBottomColor: '#F3C63B',
    },
    cell: {
        fontSize: 12
    }
});