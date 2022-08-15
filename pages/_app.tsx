import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, AppShell, Navbar, Header, Text, useMantineTheme } from '@mantine/core';

export default function MyApp({ Component, pageProps }: AppProps) {
    const theme = useMantineTheme();

    const navbar = (
        <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Note Taker</Text>
        </Navbar>
    );

    return (
        <>
            <Head>
                <title>Note Taker</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'light'
                }}
            >
                <AppShell
                    padding="md"
                    navbar={navbar}
                    // @ts-ignore
                    styles={{
                        main: {
                            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
                        }
                    }}
                >
                    <Component {...pageProps} />
                </AppShell>
            </MantineProvider>
        </>
    );
}
