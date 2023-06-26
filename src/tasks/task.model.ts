export interface Task {
    id: String;
    title: String;
    description: string;
    status: TaskStatus
}

export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}