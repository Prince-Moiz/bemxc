export type PlatformId = "macos" | "windows" | "linux" | "ios" | "android";

export type DownloadRelease = {
  id: PlatformId;
  name: string;
  subtitle: string;
  version: string;
  size: string;
  fileName: string;
  sha256: string;
  requirements: string;
  notes: string[];
};

export const DOWNLOADS: DownloadRelease[] = [
  {
    id: "macos",
    name: "macOS",
    subtitle: "Universal (Apple silicon + Intel)",
    version: "1.2.0",
    size: "142 MB",
    fileName: "bemxc-macos-universal-1.2.0.dmg",
    sha256: "8f3c6a1d9e2b74c0a5d18f6b4e91c027d5a8b3e1f6c40972a1d5e8b0c3f7a294",
    requirements: "macOS 13 Ventura or later",
    notes: [
      "Native menu bar ticker and Touch ID unlock for webhook secrets.",
      "Fixes a settlement race on multi-broker EUR/USD tick feeds.",
      "Adds Playground draft autosave across Spaces.",
    ],
  },
  {
    id: "windows",
    name: "Windows",
    subtitle: "x64 installer",
    version: "1.2.0",
    size: "128 MB",
    fileName: "bemxc-windows-x64-1.2.0.exe",
    sha256: "1b9e04c7a6d532f8e0c14a97b5d2e6813f70c9a4d8b2156e0f3a7c1d94e2b850",
    requirements: "Windows 10 22H2 or later",
    notes: [
      "Hardware-accelerated tape rendering on DirectX 12.",
      "Corrects timezone drift on Win Rate settlement windows.",
      "Webhook secret now stored in Windows Credential Manager.",
    ],
  },
  {
    id: "linux",
    name: "Linux",
    subtitle: "AppImage · amd64",
    version: "1.2.0",
    size: "136 MB",
    fileName: "bemxc-linux-x86_64-1.2.0.AppImage",
    sha256: "c4a70e29b1f8563d0e9a27c5d14b8f02a6e3d917c8b0451f2e6a9d3c7b10e584",
    requirements: "glibc 2.35+, Wayland or X11",
    notes: [
      "AppImage, .deb, and .rpm ship the same protocol build.",
      "Fixes tray icon theming on GNOME 46.",
      "Headless mode for desk operators: `bemxc --tape`.",
    ],
  },
  {
    id: "ios",
    name: "iOS",
    subtitle: "iPhone and iPad",
    version: "1.1.4",
    size: "86 MB",
    fileName: "bemxc-ios-1.1.4.ipa",
    sha256: "7d2e91a0c5b348f6e1a04d89b3c7f2150e6a9d42c8b1735f0a4e6c1d9b28f370",
    requirements: "iOS 17 or later",
    notes: [
      "Live Activities for open verified calls.",
      "Face ID lock on desk-chat execution confirms.",
      "Watch complication shows Trust Score delta.",
    ],
  },
  {
    id: "android",
    name: "Android",
    subtitle: "Phone and tablet",
    version: "1.1.4",
    size: "79 MB",
    fileName: "bemxc-android-1.1.4.apk",
    sha256: "e5b10c38a7d24691f0c3e85a2b94d0176e1a8c4f9d3052b7a6c0e4d1f8b29713",
    requirements: "Android 13 or later",
    notes: [
      "Material You tape with system accent mapping.",
      "Play Integrity attestation for sideload APK builds.",
      "Fixes notification grouping on Pixel 9.",
    ],
  },
];
