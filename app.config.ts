import "dotenv/config";
import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  name:
    process.env.APP_ENV === "preview"
      ? "[Preview] Automate Build App"
      : "Automate Build App",
  slug: "automate-build-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.automatebuildapp.app",
  },
  extra: {
    eas: {
      projectId: "f32ef8b0-e068-4b69-8699-2ccdbccfd20c",
    },
    apiUrl: process.env.API_URL,
    appEnv: process.env.APP_ENV,
  },
});
