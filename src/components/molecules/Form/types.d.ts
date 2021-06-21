export interface FormProps<T extends string = string> {
  template: T[]
  onSubmit(data: Record<T, string>): void
  buttonText: string
}