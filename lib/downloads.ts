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
  /** Direct CDN URL. Omit / empty = not ready yet. */
  url?: string;
  available: boolean;
};

const CDN = "https://cdn.bemxc.com";

export const DOWNLOADS: DownloadRelease[] = [
  {
    id: "macos",
    name: "macOS",
    subtitle: "Universal (Apple silicon + Intel)",
    version: "—",
    size: "—",
    fileName: "coming-soon.dmg",
    sha256: "—",
    requirements: "macOS 13 Ventura or later",
    notes: ["Desktop build ships after Android auto-update is stable."],
    available: false,
  },
  {
    id: "windows",
    name: "Windows",
    subtitle: "x64 installer",
    version: "—",
    size: "—",
    fileName: "coming-soon.exe",
    sha256: "—",
    requirements: "Windows 10 22H2 or later",
    notes: ["Desktop build ships after Android auto-update is stable."],
    available: false,
  },
  {
    id: "linux",
    name: "Linux",
    subtitle: "AppImage · amd64",
    version: "—",
    size: "—",
    fileName: "coming-soon.AppImage",
    sha256: "—",
    requirements: "glibc 2.35+, Wayland or X11",
    notes: ["Desktop build ships after Android auto-update is stable."],
    available: false,
  },
  {
    id: "ios",
    name: "iOS",
    subtitle: "iPhone and iPad",
    version: "—",
    size: "—",
    fileName: "coming-soon.ipa",
    sha256: "—",
    requirements: "iOS 17 or later",
    notes: ["App Store / TestFlight distribution not enabled yet."],
    available: false,
  },
  {
    id: "android",
    name: "Android",
    subtitle: "Phone and tablet · sideload APK",
    version: "1.0.1",
    size: "13.4 MB",
    fileName: "BEMXC-1.0.1-release.apk",
    sha256:
      "d288338202f3ef13343f997660c04c9d8c2df6d4cba5a4d1191cae5cb482c633",
    requirements: "Android 7.0 (API 24) or later",
    notes: [
      "Release build (non-debug) signed for sideload installs.",
      "Also mirrored at /android/latest.apk on the CDN.",
      "In-app auto-update checks https://fcm.accsgold.com/updates/latest",
    ],
    url: `${CDN}/android/BEMXC-1.0.1-release.apk`,
    available: true,
  },
];
