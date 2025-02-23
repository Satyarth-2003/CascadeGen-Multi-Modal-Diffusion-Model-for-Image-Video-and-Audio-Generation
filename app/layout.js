export const metadata = {
    title: 'CascadeGen',
    description: 'Free AI Assistant with Text & Image Generation',
  }
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }