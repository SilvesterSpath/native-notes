const NoteItem = () => {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>{item.text}</Text>
    </View>
  );
};

export default NoteItem;
