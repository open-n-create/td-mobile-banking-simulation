// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolWeight, SymbolViewProps } from "expo-symbols";
import { ComponentProps } from "react";
import { OpaqueColorValue, type StyleProp, type TextStyle } from "react-native";

const MAPPING = {
  "house.fill": "home",
  "paperplane.fill": "send",
  "chevron.left.forwardslash.chevron.right": "code",
  "chevron.right": "chevron-right",
  "creditcard.fill": "credit-card",
  "arrow.left.right": "swap-horiz",
  "dollarsign.circle.fill": "attach-money",
  "camera.fill": "camera-alt",
  "person.fill": "person",
  "gear": "settings",
  "chart.bar.fill": "bar-chart",
  "lock.fill": "lock",
  "bell.fill": "notifications",
};

export type IconSymbolName = keyof typeof MAPPING;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName | string;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  const iconName = (MAPPING as Record<string, any>)[name] || "help";
  return <MaterialIcons color={color} size={size} name={iconName} style={style} />;
}
