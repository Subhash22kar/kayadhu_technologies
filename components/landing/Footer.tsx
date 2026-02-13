"use client"

export function Footer() {
    return (
        <footer className="border-t bg-background py-12 text-muted-foreground">
            <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <div className="relative h-8 w-8">
                            <img
                                src="/logo.png"
                                alt="Kayadhu Technologies Logo"
                                className="object-contain"
                            />
                        </div>
                        <span className="text-lg font-bold text-foreground">Kayadhu Technologies</span>
                    </div>
                    <p className="text-sm">© 2026 Kayadhu Technologies. All rights reserved.</p>
                </div>
                <div className="flex gap-8 text-sm">
                    <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                    <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                    <a href="#" className="hover:text-foreground transition-colors">Contact</a>
                    <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
                </div>
            </div>
        </footer>
    )
}
