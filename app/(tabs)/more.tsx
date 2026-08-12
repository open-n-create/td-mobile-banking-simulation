import React, { useState } from "react";
import { ScrollView, Text, View, TouchableOpacity, Switch, Alert } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";

export default function MoreScreen() {
  const [faceIdEnabled, setFaceIdEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);

  const watchlist = [
    { symbol: "TD.TO", name: "Toronto-Dominion Bank", price: "$82.40", change: "+0.85%" },
    { symbol: "RY.TO", name: "Royal Bank of Canada", price: "$145.20", change: "+1.12%" },
    { symbol: "AAPL", name: "Apple Inc.", price: "$224.50", change: "-0.45%" },
  ];

  return (
    <ScreenContainer className="bg-gray-100 flex-1">
      <View className="bg-[#008A00] px-6 py-4 flex-row items-center justify-between">
        <Text className="text-white font-bold text-lg">Menu & Settings</Text>
        <View className="bg-white/20 px-3 py-1 rounded-full">
          <Text className="text-white text-xs font-semibold">v14.2.0</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Profile Card */}
        <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 mb-6 flex-row items-center gap-4">
          <View className="bg-emerald-100 w-14 h-14 rounded-full items-center justify-center">
            <IconSymbol name="person.fill" size={28} color="#008A00" />
          </View>
          <View>
            <Text className="font-extrabold text-gray-900 text-base">Alex Morgan</Text>
            <Text className="text-gray-500 text-xs">Client Card: ****-8921</Text>
            <Text className="text-emerald-700 text-xs font-semibold mt-0.5">TD Aeroplan Visa Infinite</Text>
          </View>
        </View>

        {/* Investing Watchlist */}
        <Text className="text-gray-800 font-bold text-lg mb-3">TD Direct Investing Watchlist</Text>
        <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 mb-6 gap-3">
          {watchlist.map((item, idx) => (
            <View key={idx} className="flex-row justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
              <View>
                <Text className="font-bold text-gray-900 text-sm">{item.symbol}</Text>
                <Text className="text-gray-400 text-xs">{item.name}</Text>
              </View>
              <View className="items-end">
                <Text className="font-bold text-gray-900 text-sm">{item.price}</Text>
                <Text className={`text-xs font-semibold ${item.change.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
                  {item.change}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Security & Preferences */}
        <Text className="text-gray-800 font-bold text-lg mb-3">Security & Preferences</Text>
        <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 mb-6 gap-4">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center gap-3">
              <IconSymbol name="lock.fill" size={20} color="#008A00" />
              <Text className="font-semibold text-gray-800 text-sm">Face ID Login</Text>
            </View>
            <Switch
              value={faceIdEnabled}
              onValueChange={setFaceIdEnabled}
              trackColor={{ false: "#D1D5DB", true: "#008A00" }}
            />
          </View>

          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center gap-3">
              <IconSymbol name="bell.fill" size={20} color="#008A00" />
              <Text className="font-semibold text-gray-800 text-sm">Account Push Notifications</Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: "#D1D5DB", true: "#008A00" }}
            />
          </View>

          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center gap-3">
              <IconSymbol name="gear" size={20} color="#008A00" />
              <Text className="font-semibold text-gray-800 text-sm">Dark Theme Simulation</Text>
            </View>
            <Switch
              value={darkTheme}
              onValueChange={setDarkTheme}
              trackColor={{ false: "#D1D5DB", true: "#008A00" }}
            />
          </View>
        </View>

        <TouchableOpacity 
          onPress={() => Alert.alert("Signed Out", "You have successfully signed out of TD Mobile Banking.")}
          className="bg-red-50 border border-red-200 rounded-xl py-4 items-center justify-center mb-8"
        >
          <Text className="text-red-700 font-bold text-base">Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenContainer>
  );
}
