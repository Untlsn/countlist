export interface ConfirmationPortalProps {
  pointName: string
  onYes(): void
  onNo(): void
}