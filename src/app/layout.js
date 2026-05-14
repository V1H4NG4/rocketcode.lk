import "./styles/globals.css";

export const metadata = {
  title: "RocketCode.lk",
  description: "Designed and developed by Vihanga Jayakody. BSc(Hons)Software Eng.(UK). Founder of RocketCode.lk and Code Lab by Rocket.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
