import { Observable, Service } from 'src';

interface TodoItem {
  id: number;
  isDone: boolean;
  text: string;
}

@Service()
export class TodoService {
  public items = new Observable<TodoItem[]>([]);

  public addItem(itemText: string) {
    const newItem: TodoItem = {
      id: this.items.value[this.items.value.length - 1].id + 1,
      text: itemText,
      isDone: false,
    };

    this.items.value = [...this.items.value, newItem];
  }

  public deleteItem(itemId: number) {
    const updatedItems = this.items.value.filter(item => item.id !== itemId);
    this.items.value = updatedItems;
  }

  public toggleItemDone(itemId: number) {
    const updatedItems = this.items.value.map(item =>
      item.id === itemId ? { ...item, isDone: !item.isDone } : item,
    );

    this.items.value = updatedItems;
  }
}
