export interface FormProps<T extends string> {
  onSubmit(data: Record<T, string>): void
}