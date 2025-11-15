import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { SidebarGroupAction } from "../ui/sidebar";

export function AddRoomButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <SidebarGroupAction title="Add Room">
                    <PlusIcon />
                    <span className="sr-only">Add Room</span>
                </SidebarGroupAction>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>New Room</DialogTitle>
                    <DialogDescription>Create a new room</DialogDescription>
                </DialogHeader>

                <Input placeholder="Enter name" />

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="ghost">Cancel</Button>
                    </DialogClose>

                    <DialogClose asChild>
                        <Button>Confirm</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
