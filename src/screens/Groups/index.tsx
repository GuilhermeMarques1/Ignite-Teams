import { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

import { Container } from './styles';
import { GroupCard } from '@components/GroupCard';

export function Groups() {
  const [groups, setGroups] = useState(['Amigos', 'Familia', 'Grupo da faculdade', 'Trabalho', 'Futebol da comp', 'Lolzin dos crias', 'Os pexe']);

  return (
    <Container>
      <Header showBackButton/>

      <Highlight 
        title="Turmas" 
        subtitle="jogue com a sua turma"
      />

      {/* <GroupCard title="Galera do Ignite" /> */}
      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
      />

    </Container>
  );
}
