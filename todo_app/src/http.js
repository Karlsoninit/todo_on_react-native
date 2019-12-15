import axios from "axios";

axios.defaults.baseURL = "https://rn-todo-48cbb.firebaseio.com/";

export class Http {
  static async addTodos(title) {
    try {
      return await axios.post("todos.json", { title });
    } catch (e) {
      throw e;
    }
  }
  static async deleteTodo(id) {
    try {
      return await axios.delete(`todos/${id}.json`);
    } catch (e) {
      throw e;
    }
  }
  static async fetchTodo() {
    try {
      return await axios.get(`todos.json`);
    } catch (e) {
      throw e;
    }
  }
  static async updeteTodo(id, title) {
    try {
      return await axios.patch(`todos/${id}.json`, { title });
    } catch (e) {
      throw e;
    }
  }
}
