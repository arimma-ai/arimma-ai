/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/ArimmaMarkets` | `/(tabs)/CardScreen` | `/(tabs)/HistoryScreen` | `/(tabs)/HomeScreen` | `/(tabs)/MessageScreen` | `/(tabs)/SignUpScreen` | `/ArimmaMarkets` | `/CardScreen` | `/HistoryScreen` | `/HomeScreen` | `/MessageScreen` | `/SignUpScreen` | `/_sitemap` | `/missing` | `/modal`;
      DynamicRoutes: `/${string}`;
      DynamicRouteTemplate: `/[...Loginscreen]`;
    }
  }
}
