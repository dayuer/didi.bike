import { Inter, JetBrains_Mono } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata = {
  metadataBase: new URL("https://didi.bike"),
  title: {
    default:
      "DIDI.BIKE — Data-Integrated Dynamic Intelligence | Precision Cycling Sensor",
    template: "%s | DIDI.BIKE",
  },
  description:
    "DIDI.BIKE Sensor — Professional cycling telemetry hardware for aerodynamic profiling, posture analysis, and power measurement. 14g ultra-light, 100Hz sampling, <10ms latency.",
  keywords: [
    "cycling sensor",
    "bike telemetry",
    "aerodynamics",
    "posture analysis",
    "power meter",
    "bike fitting",
    "IMU sensor",
    "ANT+",
    "Bluetooth LE",
    "cycling data",
    "biomechanics",
    "CdA measurement",
    "cycling technology",
    "DIDI.BIKE",
  ],
  authors: [{ name: "DIDI.BIKE", url: "https://didi.bike" }],
  creator: "DIDI.BIKE",
  publisher: "DIDI.BIKE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DIDI.BIKE — Precision in Every Pedal",
    description:
      "Millisecond-level telemetry for elite cyclists. Aerodynamic profiling, posture analysis, and power measurement in one ultra-light 14g sensor.",
    url: "https://didi.bike",
    siteName: "DIDI.BIKE",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DIDI.BIKE — Precision Cycling Sensor",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DIDI.BIKE — Precision in Every Pedal",
    description:
      "Millisecond-level telemetry for elite cyclists. 14g sensor with 100Hz sampling rate.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#050a12",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
