import React, { useState } from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";

export default function DepositScreen() {
  const [amount, setAmount] = useState("");
  const [capturedFront, setCapturedFront] = useState(false);
  const [capturedBack, setCapturedBack] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleDeposit = () => {
    if (!amount || parseFloat(amount) <= 0) {
      Alert.alert("Invalid Amount", "Please enter the check amount.");
      return;
    }
    if (!capturedFront || !capturedBack) {
      Alert.alert("Photos Required", "Please capture both front and back images of the check.");
      return;
    }
    setSuccessMsg(`Successfully deposited check for $${amount}! Funds will be available in 2-3 business days.`);
    setAmount("");
    setCapturedFront(false);
    setCapturedBack(false);
    setTimeout(() => setSuccessMsg(""), 5000);
  };

  return (
    <ScreenContainer className="bg-gray-100 flex-1">
      <View className="bg-[#008A00] px-6 py-4 flex-row items-center justify-between">
        <Text className="text-white font-bold text-lg">Mobile Deposit</Text>
        <View className="bg-white/20 px-3 py-1 rounded-full">
          <Text className="text-white text-xs font-semibold">TD Deposit</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {successMsg ? (
          <View className="bg-emerald-100 border border-emerald-300 rounded-xl p-4 mb-4">
            <Text className="text-emerald-800 font-bold text-center">{successMsg}</Text>
          </View>
        ) : null}

        <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 mb-6 gap-4">
          <Text className="font-bold text-gray-900 text-base">Deposit Check to Chequing</Text>
          
          <View>
            <Text className="text-gray-500 text-xs font-semibold uppercase mb-1">Select Account</Text>
            <View className="bg-gray-50 border border-gray-200 rounded-xl p-3">
              <Text className="font-bold text-gray-800 text-sm">TD Every Day Chequing ($4,250.80)</Text>
            </View>
          </View>

          <View>
            <Text className="text-gray-500 text-xs font-semibold uppercase mb-1">Check Amount ($CAD)</Text>
            <TextInput
              className="bg-gray-50 border border-gray-200 rounded-xl p-3 font-bold text-lg text-gray-900"
              placeholder="0.00"
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
              placeholderTextColor="#9CA3AF"
            />
          </View>

          {/* Camera Capture Simulation */}
          <View className="gap-3 mt-2">
            <Text className="text-gray-700 font-bold text-sm">Check Photos</Text>
            
            <TouchableOpacity 
              onPress={() => setCapturedFront(true)}
              className={`border-2 border-dashed rounded-xl p-4 items-center justify-center ${capturedFront ? 'border-emerald-600 bg-emerald-50' : 'border-gray-300 bg-gray-50'}`}
            >
              <IconSymbol name="camera.fill" size={24} color={capturedFront ? "#008A00" : "#687076"} />
              <Text className={`font-semibold text-xs mt-2 ${capturedFront ? 'text-emerald-800' : 'text-gray-600'}`}>
                {capturedFront ? "Front of Check Captured ✓" : "Tap to Capture Front of Check"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => setCapturedBack(true)}
              className={`border-2 border-dashed rounded-xl p-4 items-center justify-center ${capturedBack ? 'border-emerald-600 bg-emerald-50' : 'border-gray-300 bg-gray-50'}`}
            >
              <IconSymbol name="camera.fill" size={24} color={capturedBack ? "#008A00" : "#687076"} />
              <Text className={`font-semibold text-xs mt-2 ${capturedBack ? 'text-emerald-800' : 'text-gray-600'}`}>
                {capturedBack ? "Back of Check Captured (Signed) ✓" : "Tap to Capture Back of Check"}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            onPress={handleDeposit}
            className="bg-[#008A00] rounded-xl py-4 items-center justify-center shadow-md mt-4"
          >
            <Text className="text-white font-bold text-base">Submit Deposit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
