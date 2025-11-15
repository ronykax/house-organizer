"use client";

import { CheckIcon, PlusIcon, SearchIcon } from "lucide-react";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { addItem } from "@/server/add-item";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function Page() {
    const [addItemDetails, setAddItemDetails] = useState({
        name: "",
        location: "",
        room: "",
        visibility: "",
    });

    useEffect(() => {
        console.log(addItemDetails);
    }, [addItemDetails]);

    async function handleItemAdd() {
        try {
            const { location, name, room, visibility } = addItemDetails;
            await addItem({ id: nanoid(10), location, name, room, visibility });

            toast.success("Added item!");
        } catch (error) {
            toast.error(`Failed to add item: ${error}`);
        }
    }

    return (
        <div className="flex h-full w-full flex-col gap-4 p-4">
            <div className="flex gap-2">
                <InputGroup>
                    <InputGroupInput placeholder="Search..." />
                    <InputGroupAddon>
                        <SearchIcon />
                    </InputGroupAddon>
                </InputGroup>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Room" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="living">Living</SelectItem>
                        <SelectItem value="bathroom">Bathroom</SelectItem>
                        <SelectItem value="kitchen">Kitchen</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <DataTable
                columns={columns}
                data={[
                    {
                        id: "1234",
                        name: "keys",
                        room: "Living",
                        location: "near the tv",
                        visibility: "Visible",
                    },
                    {
                        id: "1234",
                        name: "toilet paper",
                        room: "Bathroom",
                        location: "yes",
                        visibility: "Hidden",
                    },
                    {
                        id: "1234",
                        name: "dildo",
                        room: "Bedroom",
                        location: "under the bed",
                        visibility: "Private",
                    },
                    {
                        id: "1234",
                        name: "e",
                        room: "Living",
                        location: "random place",
                        visibility: "Visible",
                    },
                ]}
            />

            <Dialog>
                <DialogTrigger asChild>
                    <Button className="mt-auto">
                        <PlusIcon />
                        Add Item
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Item</DialogTitle>
                        <DialogDescription>
                            Fill in the details to add this item
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label>Name</Label>
                            <Input
                                onChange={(e) =>
                                    setAddItemDetails({
                                        ...addItemDetails,
                                        name: e.currentTarget.value,
                                    })
                                }
                                placeholder="Enter name"
                                value={addItemDetails.name}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label>Room</Label>
                            <Select
                                onValueChange={(room) =>
                                    setAddItemDetails({
                                        ...addItemDetails,
                                        room,
                                    })
                                }
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Room" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="living">
                                        Living
                                    </SelectItem>
                                    <SelectItem value="bathroom">
                                        Bathroom
                                    </SelectItem>
                                    <SelectItem value="kitchen">
                                        Kitchen
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid gap-2">
                            <Label>Location</Label>
                            <Input
                                onChange={(e) =>
                                    setAddItemDetails({
                                        ...addItemDetails,
                                        location: e.currentTarget.value,
                                    })
                                }
                                placeholder="Enter location"
                                value={addItemDetails.location}
                            />
                            <p className="text-muted-foreground text-xs">
                                Use “Fridge” or “Kitchen” to mark it as a recipe
                                ingredient
                            </p>
                        </div>

                        <div className="grid gap-2">
                            <Label>Visibility</Label>
                            <Select
                                defaultValue="visible"
                                onValueChange={(visibility) =>
                                    setAddItemDetails({
                                        ...addItemDetails,
                                        visibility,
                                    })
                                }
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Visibility" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="visible">
                                        Visible
                                    </SelectItem>
                                    <SelectItem value="hidden">
                                        Hidden
                                    </SelectItem>
                                    <SelectItem value="private">
                                        Private
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button onClick={handleItemAdd}>
                                <CheckIcon />
                                Confirm
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
