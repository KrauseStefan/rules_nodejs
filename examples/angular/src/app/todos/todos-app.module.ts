import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {TodosModule} from '@lib/todos/todos.module';

import {TodosAppComponent} from './todos-app.component';


@NgModule({
  declarations: [TodosAppComponent],
  imports: [TodosModule, RouterModule.forChild([{path: '', component: TodosAppComponent}])],

})
export class TodosAppModule {}
