import React, { useState } from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";

export default function TransfersScreen() {
  const [fromAccount, setFromAccount] = useState("TD Every Day Chequing ($4,250.80)");
  const [toAccount, setToAccount] = useState("TD High Interest Savings ($18,920.45)");
  const [amount, setAmount] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleTransfer = () => {
    if (!amount || parseFloat(amount) <= 0) {
      Alert.alert("Invalid Amount", "Please enter a valid transfer amount.");
      return;
    }
    setSuccessMsg(`Successfully transferred $${amount} from ${fromAccount} to ${toAccount}!`);
    setAmount("");
    setTimeout(() => setSuccessMsg(""), 4000);
  };

  return (
    <ScreenContainer className="bg-gray-100 flex-1">
      <View className="bg-[#008A00] px-6 py-4 flex-row items-center justify-between">
        <Text className="text-white font-bold text-lg">Transfer Funds</Text>
        <View className="bg-white/20 px-3 py-1 rounded-full">
          <Text className="text-white text-xs font-semibold">Secure</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {successMsg ? (
          <View className="bg-emerald-100 border border-emerald-300 rounded-xl p-4 mb-4">
            <Text className="text-emerald-800 font-bold text-center">{successMsg}</Text>
          </View>
        ) : null}

        <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 mb-6 gap-4">
          <View>
            <Text className="text-gray-500 text-xs font-semibold uppercase mb-1">From Account</Text>
            <View className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex-row justify-between items-center">
              <Text className="font-bold text-gray-800 text-sm">{fromAccount}</Text>
              <IconSymbol name="chevron.right" size={16} color="#687076" />
            </View>
          </View>

          <View className="items-center my-[-10px]">
            <View className="bg-emerald-50 w-8 h-8 rounded-full items-center justify-center border border-emerald-200">
              <IconSymbol name="arrow.left.right" size={16} color="#008A00" />
            </View>
          </View>

          <View>
            <Text className="text-gray-500 text-xs font-semibold uppercase mb-1">To Account</Text>
            <View className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex-row justify-between items-center">
              <Text className="font-bold text-gray-800 text-sm">{toAccount}</Text>
              <IconSymbol name="chevron.right" size={16} color="#687076" />
            </View>
          </View>

          <View>
            <Text className="text-gray-500 text-xs font-semibold uppercase mb-1">Amount ($CAD)</Text>
            <TextInput
              className="bg-gray-50 border border-gray-200 rounded-xl p-3 font-bold text-lg text-gray-900"
              placeholder="0.00"
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <TouchableOpacity 
            onPress={handleTransfer}
            className="bg-[#008A00] rounded-xl py-4 items-center justify-center shadow-md mt-2"
          >
            <Text className="text-white font-bold text-base">Complete Transfer</Text>
          </TouchableOpacity>
        </View>

        {/* Interac e-Transfer Section */}
        <Text className="text-gray-800 font-bold text-lg mb-3">Interac e-Transfer</Text>
        <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 gap-3">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="font-bold text-gray-900 text-sm">Send Money to Anyone</Text>
              <Text className="text-gray-500 text-xs">Instant transfer via email or mobile</Text>
            </View>
            <TouchableOpacity 
              onPress={() => Alert.alert("Interac e-Transfer", "Simulated e-Transfer interface ready.")}
              className="bg-emerald-50 px-4 py-2 rounded-xl"
            >
              <Text className="text-[#008A00] font-bold text-xs">Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
