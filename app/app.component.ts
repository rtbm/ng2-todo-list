import { Component } from 'angular2/core';
import { TodosService } from './todos.service';

@Component({
    selector: 'my-app',
    template:`
        <div *ngFor="#todo of todosService.todos">
            <h1>{{ todo.name }}</h1>
            <p>{{ todo.content }}</p>
            <p><a (click)='todosService.remove(todo)'>remove</a></p>
        </div>
    `,
    providers: [TodosService]
})
export class AppComponent {
    constructor(private todosService: TodosService) {}
}
