import { Task } from './task.model';
import { TasksService } from './tasks.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {
        this.tasksService = tasksService;
    }

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTask();
    }

    @Post()
    creteTask(
        @Body('title') title: string,
        @Body('description') description: string,
    ): Task {
        return this.tasksService.createTask(title, description);
    }
}
