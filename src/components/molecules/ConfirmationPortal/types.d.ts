export interface ConfirmationPortalProps {
  name: string
  onYes(): void
  onNo(): void
}