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

interface EditTaskProps {
  onClose: () => void;
}

const EditTask: React.FC<EditTaskProps> = ({ onClose }) => {
  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="taskname" className="text-right">
              Task Name
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role" className="text-right">
              Role
            </Label>
            <Input id="role" className="col-span-3 outline-none" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Time</Label>
            <Select>
              <SelectTrigger className="col-span-3">
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
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditTask;
