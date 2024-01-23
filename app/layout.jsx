import '@styles/globals.css';
import { Children } from 'react';

export const metadata = {
    title: "Master Prompter",
    description: 'Discover & share awsome GPT promts'
}

const RootLayout = () => {
  return (
    <html lang='en'>
      <body>
        <div className="main">
          <div className="gradient"/>
        </div>

        <main className="app">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout;