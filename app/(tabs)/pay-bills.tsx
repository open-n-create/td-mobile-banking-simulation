import React, { useState } from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";

export default function PayBillsScreen() {
  const [selectedPayee, setSelectedPayee] = useState("Toronto Hydro");
  const [amount, setAmount] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const payees = [
    { id: "p1", name: "Toronto Hydro", accountNo: "****-4491", due: "$124.50" },
    { id: "p2", name: "Enbridge Gas", accountNo: "****-8821", due: "$85.20" },
    { id: "p3", name: "Rogers Communications", accountNo: "****-1920", due: "$95.00" },
    { id: "p4", name: "Bell Canada", accountNo: "****-3320", due: "$110.00" },
  ];

  const handlePay = () => {
    if (!amount || parseFloat(amount) <= 0) {
      Alert.alert("Invalid Amount", "Please enter a valid bill payment amount.");
      return;
    }
    setSuccessMsg(`Successfully paid $${amount} to ${selectedPayee}!`);
    setAmount("");
    setTimeout(() => setSuccessMsg(""), 4000);
  };

  return (
    <ScreenContainer className="bg-gray-100 flex-1">
      <View className="bg-[#008A00] px-6 py-4 flex-row items-center justify-between">
        <Text className="text-white font-bold text-lg">Pay Bills</Text>
        <TouchableOpacity onPress={() => Alert.alert("Add Payee", "Add payee wizard simulated.")}>
          <Text className="text-white font-semibold text-xs">+ Add Payee</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {successMsg ? (
          <View className="bg-emerald-100 border border-emerald-300 rounded-xl p-4 mb-4">
            <Text className="text-emerald-800 font-bold text-center">{successMsg}</Text>
          </View>
        ) : null}

        <Text className="text-gray-800 font-bold text-lg mb-3">Your Payees</Text>
        <View className="gap-3 mb-6">
          {payees.map((payee) => (
            <TouchableOpacity
              key={payee.id}
              onPress={() => setSelectedPayee(payee.name)}
              className={`bg-white rounded-2xl p-4 shadow-sm border ${selectedPayee === payee.name ? 'border-[#008A00] bg-emerald-50/40' : 'border-gray-200'} flex-row justify-between items-center`}
            >
              <View className="flex-row items-center gap-3">
                <View className="bg-emerald-50 w-10 h-10 rounded-xl items-center justify-center">
                  <IconSymbol name="dollarsign.circle.fill" size={20} color="#008A00" />
                </View>
                <View>
                  <Text className="font-bold text-gray-900 text-sm">{payee.name}</Text>
                  <Text className="text-gray-500 text-xs">{payee.accountNo}</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="font-extrabold text-sm text-gray-900">{payee.due}</Text>
                <Text className="text-xs text-amber-600 font-semibold">Due Soon</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 gap-4">
          <Text className="font-bold text-gray-900 text-base">Make a Payment to {selectedPayee}</Text>
          
          <View>
            <Text className="text-gray-500 text-xs font-semibold uppercase mb-1">From Account</Text>
            <View className="bg-gray-50 border border-gray-200 rounded-xl p-3">
              <Text className="font-bold text-gray-800 text-sm">TD Every Day Chequing ($4,250.80)</Text>
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
            onPress={handlePay}
            className="bg-[#008A00] rounded-xl py-4 items-center justify-center shadow-md mt-2"
          >
            <Text className="text-white font-bold text-base">Pay Bill Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
