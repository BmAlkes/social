import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "src/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { PRIMARY_COLOR } from "src/utils/constants";
import { trpc } from "src/utils/trpc";

interface Props {
  session: Session | null;
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<Props>) {
  return (
    <SessionProvider session={session}>
      <NextNProgress options={{ showSpinner: false }} color={PRIMARY_COLOR} />
      <Toaster />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default trpc.withTRPC(MyApp);
