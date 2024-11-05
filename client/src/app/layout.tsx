import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { AuthProvider } from "@/app/context/auth";
import { ServerProvider } from "./(routes)/home/context/server";
import { UserInfoProvider } from "./(routes)/home/(routes)/profile/context/userInfo";
import { ChannelProvider } from "./(routes)/home/context/channel";
import { EventProvider } from "./(routes)/home/(routes)/[serverId]/context/event";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} ${poppins.className} antialiased`}>
        <AuthProvider>
          <ServerProvider>
            <UserInfoProvider>
              <ChannelProvider>
                <EventProvider>{children}</EventProvider>
              </ChannelProvider>
            </UserInfoProvider>
          </ServerProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
