import { FlatList, StyleSheet, Text, View } from 'react-native';

import { Container } from './styles';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { GroupCard } from '../../components/Groupcard';
import { useState } from 'react';
import { ListEmpty } from '../../components/ListEmpty';
import { Button } from '../../components/Button';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title='Turmas'
        subtitle='Jogue com sua turma'
      />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message='Nenhuma turma cadastrada!' />
        )}
      />
      <Button title='Criar nova turma' />
    </Container>
  );
}