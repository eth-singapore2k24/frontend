import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/styles/globals.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<DynamicContextProvider
			settings={{
				environmentId: "23e83aa9-fae7-48c7-93c0-1572f77f0e04",
				walletConnectors: [EthereumWalletConnectors],
			}}
		>
			<ThemeProvider storageKey="vite-ui-theme">
				<App />
			</ThemeProvider>
		</DynamicContextProvider>
	</React.StrictMode>
);
