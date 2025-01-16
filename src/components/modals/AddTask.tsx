import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface AddTaskProps {
  onClose: () => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onClose }) => {
  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add a new task here. Click the confirm button when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4  py-4 w-full ">
          <div className="flex items-center gap-4">
            <Label htmlFor="taskname">
              Title
            </Label>
            <Input id="name" className="w-full" />
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="role">
              Role
            </Label>
            <Input id="role" className="outline-none" />
          </div>
          <div className="flex items-center gap-4">
            <Label>Time</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1hr">1 hour</SelectItem>
                  <SelectItem value="2hr">2 hours</SelectItem>
                  <SelectItem value="3hr">3 hours</SelectItem>
                  <SelectItem value="4hr">4 hours</SelectItem>
                  <SelectItem value="5hr">5 hours</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddTask;
