import { Children } from "react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"

interface ModalProps {
  dialogTriggerRender: React.ReactElement
  dialogCloseRender?: React.ReactElement
  dialogFooter?: React.ReactElement
  children: React.ReactNode
  dialogTitle?: string
  dialogDescription?: string
  dialogContentClassname?: string
  showCloseButton?: boolean
}

export default function Modal({
  dialogTriggerRender,
  dialogCloseRender,
  dialogDescription,
  dialogTitle,
  dialogFooter,
  children,
  dialogContentClassname,
  showCloseButton = true,
}: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger render={dialogTriggerRender} />
      <DialogContent
        className={dialogContentClassname}
        showCloseButton={showCloseButton}
      >
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
          <DialogClose render={dialogCloseRender} />
        </DialogHeader>
        {children}
        <DialogFooter>{dialogFooter}</DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
