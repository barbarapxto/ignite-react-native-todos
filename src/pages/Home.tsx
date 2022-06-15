import React, { useState } from 'react';
import { Alert, Keyboard, StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    
    const hasTaskAlready = tasks.some(task => task.title === newTaskTitle);

    if(newTaskTitle === '') return;

    if(hasTaskAlready){
      Alert.alert('Task já cadastrada', 'Você não pode cadastrar uma task com o mesmo nome.');
      return;
    }

    const newTask: Task = {
      id: (tasks.length > 0 ? tasks.length : 0),
      title: newTaskTitle,
      done: false
    }

    setTasks(oldState => [...oldState, newTask]);
    Keyboard.dismiss();
    
  }

  function handleToggleTaskDone(id: number) {

    const filteredTasks = tasks.map(task => {
      if(task.id === id) {
        return {
          ...task,
          done: !task.done
        }
      }
      else{
        return task;
      }
    });

    setTasks(filteredTasks);

  }

  function handleRemoveTask(id: number) {

    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
    // Alert.alert(
    //   'Remover tarefa', 
    //   'Você têm certeza de que deseja remover esta tarefa?', 
    //   [
    //     {
    //       text: 'Cancelar',
    //     },
    //     {
    //       text: 'Sim, tenho',
    //       onPress: () => {
    //         const filteredTasks = tasks.filter(task => task.id !== id);
    //         setTasks(filteredTasks);
    //       }
    //     }
    //   ]
    // );
    
  }

  function handleEditTask(id: number, taskNewTitle: string){
    //TODO
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
        //editTask={handleEditTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})