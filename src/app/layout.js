import { Montserrat, Gilda_Display } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS dosyası
import Footer from "./components/footer/footer";

import StoreProvider from "./StoreProvider";
const montserrat = Montserrat({
  subsets: ['latin'], // Latin alfabesi için
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Tüm ağırlıklar
  style: ['normal','italic'], // Normal ve italik stiller
  // display: 'swap', // Fontu yedek fontla değiştirme (swap) stratejisi
  variable: '--font-montserrat'
});
// const dmSans = DM_Sans({
//   subsets: ['latin'], // Latin alfabesi için
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Tüm ağırlıklar
//   style: ['normal','italic'], // Normal ve italik stiller
//   // display: 'swap', // Fontu yedek fontla değiştirme (swap) stratejisi
//   variable: '--font-dm-sans'
// });
// const dancing = Dancing_Script({
//   subsets: ['latin'], // Latin alfabesi için
//   weight: ['400', '500', '600', '700'], // Tüm ağırlıklar
//   style: ['normal'], // Normal ve italik stiller
//   // display: 'swap', // Fontu yedek fontla değiştirme (swap) stratejisi
//   variable: '--font-dancing'
// });
const gilda = Gilda_Display({
  subsets: ['latin'], // Latin alfabesi için
  weight: ['400'], // Tüm ağırlıklar
  style: ['normal'], // Normal ve italik stiller
  // display: 'swap', // Fontu yedek fontla değiştirme (swap) stratejisi
  variable: '--font-gilda'
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children
}) {
  return (
    <StoreProvider>
    <html lang="en">
      {/* <body className={`${dmSans.variable} ${montserrat.variable} ${dancing.variable} ${gilda.variable}`}> */}
      <body className={`${montserrat.variable} ${gilda.variable}`}>
        {children}
        <Footer/>
      </body>
    </html>
    </StoreProvider>
  );
}