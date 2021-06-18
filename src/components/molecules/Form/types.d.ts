export interface FormProps<T extends string> {
  template: T[]
  onSubmit(data: Record<T, string>): void
}