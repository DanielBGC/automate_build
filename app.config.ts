import "dotenv/config";
import { ExpoConfig, ConfigContext } from "expo/config";

function getEnvVar(name: string) {
  const isEasBuild = process.env.EAS_BUILD_PLATFORM !== undefined;
  const isProd = process.env.APP_ENV === "production";

  console.log("isEasBuild", isEasBuild);

  if (isEasBuild) {
    return process.env[`EXPO_PUBLIC_${name}`] || process.env[name];
  }

  // Desenvolvimento local
  return process.env[name];
}

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
    apiUrl: getEnvVar("API_URL"),
    apiKey: getEnvVar("API_KEY"),
    appEnv: getEnvVar("APP_ENV"),
  },
});
