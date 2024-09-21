import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Cardholder } from "@phosphor-icons/react";

interface CreateAccountProps {
	currentStepIndex: number;
	setCurrentStepIndex: (index: number) => void;
}

const CreateAccount = (props: CreateAccountProps) => {
	const handleConnect = () => {
		// TODO: wallet connect + next step
		console.log("Connecting wallet...");
		props.setCurrentStepIndex(props.currentStepIndex + 1);
	};
	return (
		<Card className="rounded-none space-y-5 ">
			<CardHeader>
				<CardTitle className="font-display">Create your account</CardTitle>
				<CardDescription>
					Help us create your account by choosing an available username and
					connecting your wallet
				</CardDescription>
			</CardHeader>
			<Separator />
			<CardContent>
				<Label htmlFor="username">Your username</Label>
				<Input id="username" placeholder="Enter your username here" />
				<Button
					onClick={handleConnect}
					className="w-full mt-5 rounded-xl shadow-button text-center text-lg"
				>
					<Cardholder className="w-6 h-6 mr-2" /> Connect Dynamic Wallet
				</Button>
			</CardContent>
		</Card>
	);
};

export default CreateAccount;
