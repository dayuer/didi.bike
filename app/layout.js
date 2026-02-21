import "./globals.css";

export const metadata = {
  title:
    "DIDI.BIKE — Data-Integrated Dynamic Intelligence | Precision Cycling Sensor",
  description:
    "DIDI.BIKE Sensor — Professional cycling telemetry hardware for aerodynamic profiling, posture analysis, and power measurement. Millisecond-level data for elite cyclists.",
  keywords:
    "cycling sensor, telemetry, aerodynamics, posture analysis, power meter, bike fitting, IMU, ANT+, Bluetooth",
  openGraph: {
    title: "DIDI.BIKE — Precision in Every Pedal",
    description:
      "Millisecond-level telemetry for elite cyclists. Aerodynamic profiling, posture analysis, and power measurement in one ultra-light sensor.",
    url: "https://didi.bike",
    siteName: "DIDI.BIKE",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
