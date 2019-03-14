import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
  },
  todoContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderBottomColor: '#666',
    borderBottomWidth: 0.5,
    padding: 10,
    justifyContent: 'space-between',
  },
});


export default (props) => (
  <ScrollView style={styles.scrollView}>
    {
      props.todos.map((todo, index) => (
        <View key={todo+index} style={styles.todoContainer}>
          <Text >{todo}</Text>
          <TouchableOpacity onPress={() => props.onPressDelete(index) }>
            <Text>DELETE</Text>
          </TouchableOpacity>
        </View>
      ))
    }
  </ScrollView>
);
