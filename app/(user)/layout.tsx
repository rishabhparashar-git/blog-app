import "../../styles/globals.css";
import Header from "../../components/user/Header";
import Banner from "../../components/user/Banner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {/* Header */}
      {/* Banner */}
      <body>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
