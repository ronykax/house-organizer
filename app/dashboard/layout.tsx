import { AppSidebar } from "@/app/dashboard/_components/app-sidebar";
import { TopBar } from "@/app/dashboard/_components/top-bar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="flex w-full flex-col">
                <TopBar />
                {children}
            </main>
        </SidebarProvider>
    );
}
