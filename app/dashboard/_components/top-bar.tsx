"use client";

import { SidebarIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment } from "react/jsx-runtime";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "../../../components/ui/button";
import { useSidebar } from "../../../components/ui/sidebar";

export function TopBar() {
    const { toggleSidebar } = useSidebar();
    const pathname = usePathname();

    const names = pathname.split("/");
    const currentPage = names.at(-1);

    const labels: Record<string, string> = {
        dashboard: "Home",
        items: "Items",
    };

    return (
        <div className="flex items-center gap-4 border-b border-dashed p-4">
            <Button onClick={toggleSidebar} size="icon" variant="ghost">
                <SidebarIcon />
            </Button>

            <Breadcrumb>
                <BreadcrumbList className="gap-2.5">
                    {names
                        .filter((n) => n.trim() !== "")
                        .map((name, index) => (
                            <Fragment key={name}>
                                <BreadcrumbItem>
                                    {name === currentPage ? (
                                        <BreadcrumbPage>
                                            {labels[name]}
                                        </BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink href={`/${name}`}>
                                            {labels[name]}
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                                {index !== names.length - 2 && (
                                    <BreadcrumbSeparator />
                                )}
                            </Fragment>
                        ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}
