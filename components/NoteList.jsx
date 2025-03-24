import { FlatList, View } from 'react-native-web';
import NoteItem from './NoteItem';

const NoteList = ({ notes }) => {
  return (
    <View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.$id.toString()}
        renderItem={({ item }) => <NoteItem note={item} />}
      />
    </View>
  );
};

export default NoteList;
