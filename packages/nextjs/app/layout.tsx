import type { Metadata } from "next";
import { ScaffoldStarkAppWithProviders } from "~~/components/ScaffoldStarkAppWithProviders";
import "~~/styles/globals.css";
import { ThemeProvider } from "~~/components/ThemeProvider";
import StarryBackground from "~~/components/starryBackground/_components/StarryBackground";

export const metadata: Metadata = {
  title: "Starkcade",
  description: "",
  icons: "/starkcade.ico",
};

const ScaffoldStarkApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem>
          <ScaffoldStarkAppWithProviders>
          <StarryBackground />
            {children}
          </ScaffoldStarkAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldStarkApp;
