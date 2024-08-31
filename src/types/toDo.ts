export interface ToDo {
  /**
   * Название задачи
   */
  title: string;
  /**
   * Описание задачи
   */
  description?: string;
  /**
   * Завершена ли задача
   */
  isCompleted: boolean;
}
