import {
    CheckSquareIcon,
    ChefHatIcon,
    ChevronRightIcon,
    HomeIcon,
    PlusSquareIcon,
} from "lucide-react";
import Link from "next/link";
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from "../../components/ui/item";

export default function Page() {
    return (
        <div className="flex w-full flex-col gap-4 p-4">
            <Item asChild variant="outline">
                <Link href="/dashboard/items">
                    <ItemMedia variant="icon">
                        <HomeIcon />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>View Items</ItemTitle>
                        <ItemDescription>Browse items by room</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <ChevronRightIcon className="size-4" />
                    </ItemActions>
                </Link>
            </Item>

            <Item asChild variant="outline">
                <Link href="/dashboard/add-item">
                    <ItemMedia variant="icon">
                        <PlusSquareIcon />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>Add Item</ItemTitle>
                        <ItemDescription>
                            Put things where they belong
                        </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <ChevronRightIcon className="size-4" />
                    </ItemActions>
                </Link>
            </Item>

            <Item asChild variant="outline">
                <Link href="/dashboard/habits">
                    <ItemMedia variant="icon">
                        <CheckSquareIcon />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>Habits</ItemTitle>
                        <ItemDescription>Track your routines</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <ChevronRightIcon className="size-4" />
                    </ItemActions>
                </Link>
            </Item>

            <Item asChild variant="outline">
                <Link href="/dashboard/recipes">
                    <ItemMedia variant="icon">
                        <ChefHatIcon />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>Recipes</ItemTitle>
                        <ItemDescription>
                            Based on your fridge items
                        </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <ChevronRightIcon className="size-4" />
                    </ItemActions>
                </Link>
            </Item>
        </div>
    );
}
