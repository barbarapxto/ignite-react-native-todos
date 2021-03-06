import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import trashIcon from '../assets/icons/trash/trash.png'
import editIcon from '../assets/icons/edit/edit.png'
import closeIcon from '../assets/icons/close/close.png'
import { Task } from "./TasksList";

interface TaskItemProps{
    index: number;
    item: Task;
    toggleTaskDone: (id: number) => void;
    removeTask: (id: number) => void;
    // editTask: (id: number, newTaskTitle: string) => void;
}

export function TaskItem({index, item, toggleTaskDone, removeTask}: TaskItemProps){
    return(
        <>
            <View>
              <TouchableOpacity
                  testID={`button-${index}`}
                  activeOpacity={0.7}
                  style={styles.taskButton}
                  onPress={() => toggleTaskDone(item.id)}
              >
                  <View 
                  testID={`marker-${index}`}
                  style={item.done ? styles.taskMarkerDone : styles.taskMarker}
                  >
                  { item.done && (
                      <Icon 
                      name="check"
                      size={12}
                      color="#FFF"
                      />
                  )}
                  </View>

                  <Text style={item.done ? styles.taskTextDone : styles.taskText}>
                  {item.title}
                  </Text>
              </TouchableOpacity>
            </View>

            {/* <TouchableOpacity
                testID={`edit-${index}`}
                onPress={() => editTask(item.id, '')}
                >
            <Image source={editIcon} />
            </TouchableOpacity> */}

            <TouchableOpacity
                testID={`trash-${index}`}
                style={{ paddingRight: 24 }}
                onPress={() => removeTask(item.id)}
                >
            <Image source={trashIcon} />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    taskButton: {
      flex: 1,
      paddingHorizontal: 24,
      paddingVertical: 15,
      marginBottom: 4,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarker: {
      height: 16,
      width: 16,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#B2B2B2',
      marginRight: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    taskText: {
      color: '#666',
      fontFamily: 'Inter-Medium'
    },
    taskMarkerDone: {
      height: 16,
      width: 16,
      borderRadius: 4,
      backgroundColor: '#1DB863',
      marginRight: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    taskTextDone: {
      color: '#1DB863',
      textDecorationLine: 'line-through',
      fontFamily: 'Inter-Medium'
    }
  })