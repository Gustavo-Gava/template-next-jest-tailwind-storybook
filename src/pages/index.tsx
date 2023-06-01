import { Inter } from "next/font/google";
import { Button } from "@/components/ui/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={inter.className}>
			<div className="w-full flex items-center justify-center gap-4">
				<h1>Home</h1>
			</div>
		</main>
	);
}
