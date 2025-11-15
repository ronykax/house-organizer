"use client";

import {
    BoxIcon,
    CheckSquareIcon,
    ChefHatIcon,
    ListIcon,
    LogOutIcon,
    MailIcon,
    SmartphoneIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth/client";

export function AppSidebar() {
    const router = useRouter();

    async function handleLogout() {
        try {
            await authClient.signOut();
            router.push("/");
        } catch {
            toast.error("failed to log out");
        }
    }

    return (
        <Sidebar>
            <SidebarContent className="p-2">
                <SidebarGroup>
                    <SidebarGroupLabel>App</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <ListIcon />
                                    Items
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <CheckSquareIcon />
                                    Habits
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <ChefHatIcon />
                                    Recipes
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Settings</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <BoxIcon />
                                    Rooms
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <SmartphoneIcon />
                                    Devices
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <MailIcon />
                                    Emails
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    className="text-destructive"
                                    onClick={handleLogout}
                                >
                                    <LogOutIcon />
                                    Logout
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarFooter>
        </Sidebar>
    );
}
