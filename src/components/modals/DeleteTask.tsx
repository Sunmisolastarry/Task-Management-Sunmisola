import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";

interface DeleteTaskProps {
  onClose: () => void;
  open: boolean;
}

const DeleteTask: React.FC<DeleteTaskProps> = ({ onClose, open }) => {
  const handleCloseDialog = () => {
    onClose();
  };
  return (
    <AlertDialog
      open={open}
      onOpenChange={(open) => !open && handleCloseDialog()}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            task.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCloseDialog}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleCloseDialog}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteTask;
