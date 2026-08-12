import React, { useState } from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity, Modal, Animated } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("alex.morgan");
  const [password, setPassword] = useState("••••••••");
  const [biometricModal, setBiometricModal] = useState(true);
  const [authSuccess, setAuthSuccess] = useState(false);

  const handleBiometricScan = () => {
    // Simulate successful Face ID / Touch ID scan
    setAuthSuccess(true);
    setTimeout(() => {
      setBiometricModal(false);
      router.replace("/(tabs)");
    }, 1200);
  };

  const handleStandardLogin = () => {
    router.replace("/(tabs)");
  };

  return (
    <ScreenContainer className="bg-[#008A00] flex-1 justify-center px-6">
      <View className="items-center mb-8">
        <View className="bg-white w-20 h-20 rounded-2xl items-center justify-center shadow-lg mb-4">
          <Text className="text-[#008A00] font-black text-3xl">TD</Text>
        </View>
        <Text className="text-white font-extrabold text-2xl">TD Mobile Banking</Text>
        <Text className="text-emerald-100 text-sm mt-1">Secure Banking Anytime, Anywhere</Text>
      </View>

      <View className="bg-white rounded-3xl p-6 shadow-xl gap-4">
        <Text className="font-bold text-gray-900 text-lg mb-1">Sign In</Text>

        <View>
          <Text className="text-gray-500 text-xs font-semibold uppercase mb-1">Username or Access Card</Text>
          <TextInput
            className="bg-gray-50 border border-gray-200 rounded-xl p-3 font-semibold text-gray-900"
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View>
          <Text className="text-gray-500 text-xs font-semibold uppercase mb-1">Password</Text>
          <TextInput
            className="bg-gray-50 border border-gray-200 rounded-xl p-3 font-semibold text-gray-900"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <TouchableOpacity 
          onPress={handleStandardLogin}
          className="bg-[#008A00] rounded-xl py-4 items-center justify-center shadow-md mt-2"
        >
          <Text className="text-white font-bold text-base">Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => setBiometricModal(true)}
          className="bg-emerald-50 border border-emerald-200 rounded-xl py-3 items-center justify-center flex-row gap-2"
        >
          <IconSymbol name="lock.fill" size={18} color="#008A00" />
          <Text className="text-[#008A00] font-bold text-sm">Use Face ID / Touch ID</Text>
        </TouchableOpacity>
      </View>

      {/* Biometric Simulation Modal */}
      <Modal visible={biometricModal} animationType="fade" transparent={true}>
        <View className="flex-1 bg-black/60 justify-center items-center px-6">
          <View className="bg-white rounded-3xl p-8 w-full max-w-sm items-center shadow-2xl">
            <View className={`w-20 h-20 rounded-full items-center justify-center mb-4 ${authSuccess ? 'bg-emerald-100' : 'bg-gray-100'}`}>
              <IconSymbol 
                name={authSuccess ? "house.fill" : "lock.fill"} 
                size={36} 
                color={authSuccess ? "#008A00" : "#374151"} 
              />
            </View>

            <Text className="text-xl font-extrabold text-gray-900 mb-1">
              {authSuccess ? "Authenticated!" : "TD Biometric Login"}
            </Text>
            <Text className="text-gray-500 text-xs text-center mb-6">
              {authSuccess ? "Welcome back, Alex Morgan" : "Confirm Face ID / Touch ID to securely access your accounts"}
            </Text>

            {!authSuccess ? (
              <View className="w-full gap-3">
                <TouchableOpacity 
                  onPress={handleBiometricScan}
                  className="bg-[#008A00] rounded-xl py-4 items-center justify-center shadow-md"
                >
                  <Text className="text-white font-bold text-base">Simulate Face ID Scan</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={() => setBiometricModal(false)}
                  className="py-2 items-center justify-center"
                >
                  <Text className="text-gray-500 font-semibold text-sm">Cancel</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View className="bg-emerald-50 px-4 py-2 rounded-full">
                <Text className="text-emerald-800 font-bold text-xs">Logging in...</Text>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
}
