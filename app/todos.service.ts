import { Todo } from './todo.ts';
import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';

@Injectable()
export class TodosService {
    public todos: Todo[] = [];

    constructor(private http: Http) {
        this.findAll();
    }

    findAll() {
        this.http.get('api/todos.json')
            .subscribe(res => this.todos = <Todo[]> res.json());
    }

    remove(todo: Todo) {
        let index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
    }
}
