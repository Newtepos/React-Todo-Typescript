// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAZuVo_2ZxmfSNh0eQxlw-VGEb9ElkhkHY",
  authDomain: "react-http-efc44.firebaseapp.com",
  databaseURL:
    "https://react-http-efc44-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-http-efc44",
  storageBucket: "react-http-efc44.appspot.com",
  messagingSenderId: "489659645991",
  appId: "1:489659645991:web:d2b867e6b0af3ed3b68e02",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase(app);
const todosRef = ref(db, "todos");

export const insertData = (todo: string, status: string) => {
  const newTodoRef = push(todosRef);
  set(newTodoRef, { todo, status });
};

export const readData = (onFinish: (data: any) => void) => {
  onValue(todosRef, (snapshot) => {
    onFinish(snapshot.val());
  });
};

export const deleteData = (id: string) => {
  const deleteRef = ref(db, `todos/${id}`);
  remove(deleteRef);
};

export const updateData = (id: string, todo?: string, status?: string) => {
  const todoref = ref(db, `todos/${id}`);
  if (todo === undefined) {
    update(todoref, { status });
  } else if (status === undefined) {
    update(todoref, { todo });
  } else {
    update(todoref, { todo, status });
  }
};
