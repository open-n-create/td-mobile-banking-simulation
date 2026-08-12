import React, { useState } from "react";
import { ScrollView, Text, View, TouchableOpacity, Modal } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";

export default function AccountsScreen() {
  const [showBalances, setShowBalances] = useState(true);
  const [selectedAccount, setSelectedAccount] = useState<any | null>(null);

  const accounts = [
    {
      id: "1",
      name: "TD Every Day Chequing",
      number: "****-8921",
      balance: 4250.80,
      type: "chequing",
      transactions: [
        { id: "t1", title: "Grocery Store", date: "Today, 2:15 PM", amount: -84.50, category: "Food" },
        { id: "t2", title: "Payroll Direct Deposit", date: "Aug 10", amount: 2450.00, category: "Income" },
        { id: "t3", title: "Coffee Shop", date: "Aug 9", amount: -5.75, category: "Dining" },
      ]
    },
    {
      id: "2",
      name: "TD High Interest Savings",
      number: "****-4432",
      balance: 18920.45,
      type: "savings",
      transactions: [
        { id: "t4", title: "Interest Earned", date: "Aug 1", amount: 42.15, category: "Interest" },
        { id: "t5", title: "Automatic Transfer", date: "Jul 28", amount: 500.00, category: "Transfer" },
      ]
    },
    {
      id: "3",
      name: "TD First Class Travel Visa Infinite",
      number: "****-1092",
      balance: -1240.12,
      type: "credit",
      transactions: [
        { id: "t6", title: "Flight Booking Expedia", date: "Aug 8", amount: -480.00, category: "Travel" },
        { id: "t7", title: "Gas Station", date: "Aug 6", amount: -65.20, category: "Auto" },
      ]
    },
    {
      id: "4",
      name: "TD Direct Investing",
      number: "****-9923",
      balance: 34500.00,
      type: "investment",
      transactions: [
        { id: "t8", title: "Dividend Payout TD.TO", date: "Aug 2", amount: 185.40, category: "Investment" },
      ]
    },
  ];

  const formatCurrency = (amount: number) => {
    if (!showBalances) return "••••••";
    return amount < 0 
      ? `-$${Math.abs(amount).toFixed(2)}` 
      : `$${amount.toFixed(2)}`;
  };

  const totalNetWorth = accounts.reduce((acc, curr) => acc + curr.balance, 0);

  return (
    <ScreenContainer className="bg-gray-100 flex-1">
      {/* TD Header Bar */}
      <View className="bg-[#008A00] px-6 py-4 flex-row items-center justify-between">
        <View className="flex-row items-center gap-3">
          <View className="bg-white w-10 h-10 rounded-lg items-center justify-center">
            <Text className="text-[#008A00] font-black text-lg">TD</Text>
          </View>
          <View>
            <Text className="text-white text-xs opacity-95">Welcome back,</Text>
            <Text className="text-white font-bold text-base">Alex Morgan</Text>
          </View>
        </View>
        <TouchableOpacity 
          onPress={() => setShowBalances(!showBalances)}
          className="bg-[#006600] px-3 py-1.5 rounded-full flex-row items-center gap-1.5"
        >
          <IconSymbol name={showBalances ? "lock.fill" : "bell.fill"} size={16} color="white" />
          <Text className="text-white text-xs font-semibold">{showBalances ? "Hide" : "Show"}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 32 }}>
        {/* Net Worth Summary Card */}
        <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 mb-6">
          <Text className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Total Balance</Text>
          <Text className="text-3xl font-extrabold text-gray-900 mb-4">{formatCurrency(totalNetWorth)}</Text>
          
          <View className="flex-row justify-between pt-3 border-t border-gray-100">
            <View className="items-center flex-1">
              <Text className="text-xs text-gray-500 mb-1">Accounts</Text>
              <Text className="text-sm font-bold text-gray-800">4 Active</Text>
            </View>
            <View className="w-[1px] bg-gray-200" />
            <View className="items-center flex-1">
              <Text className="text-xs text-gray-500 mb-1">Aeroplan Miles</Text>
              <Text className="text-sm font-bold text-emerald-600">42,580</Text>
            </View>
            <View className="w-[1px] bg-gray-200" />
            <View className="items-center flex-1">
              <Text className="text-xs text-gray-500 mb-1">Credit Score</Text>
              <Text className="text-sm font-bold text-gray-800">785</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <Text className="text-gray-800 font-bold text-lg mb-3">Quick Actions</Text>
        <View className="flex-row justify-between mb-6">
          <TouchableOpacity className="bg-white rounded-xl p-3 items-center flex-1 mx-1 shadow-sm border border-gray-200">
            <View className="bg-emerald-50 w-12 h-12 rounded-full items-center justify-center mb-2">
              <IconSymbol name="arrow.left.right" size={22} color="#008A00" />
            </View>
            <Text className="text-xs font-semibold text-gray-800 text-center">Transfer</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white rounded-xl p-3 items-center flex-1 mx-1 shadow-sm border border-gray-200">
            <View className="bg-emerald-50 w-12 h-12 rounded-full items-center justify-center mb-2">
              <IconSymbol name="dollarsign.circle.fill" size={22} color="#008A00" />
            </View>
            <Text className="text-xs font-semibold text-gray-800 text-center">Pay Bills</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white rounded-xl p-3 items-center flex-1 mx-1 shadow-sm border border-gray-200">
            <View className="bg-emerald-50 w-12 h-12 rounded-full items-center justify-center mb-2">
              <IconSymbol name="camera.fill" size={22} color="#008A00" />
            </View>
            <Text className="text-xs font-semibold text-gray-800 text-center">Deposit</Text>
          </TouchableOpacity>
        </View>

        {/* Accounts List */}
        <Text className="text-gray-800 font-bold text-lg mb-3">Your Accounts</Text>
        <View className="gap-3">
          {accounts.map((acc) => (
            <TouchableOpacity 
              key={acc.id}
              onPress={() => setSelectedAccount(acc)}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 flex-row items-center justify-between"
            >
              <View className="flex-row items-center gap-3">
                <View className={`w-10 h-10 rounded-xl items-center justify-center ${acc.type === 'credit' ? 'bg-amber-50' : 'bg-emerald-50'}`}>
                  <IconSymbol 
                    name={acc.type === 'credit' ? 'creditcard.fill' : 'house.fill'} 
                    size={20} 
                    color={acc.type === 'credit' ? '#D97706' : '#008A00'} 
                  />
                </View>
                <View>
                  <Text className="font-bold text-gray-900 text-sm">{acc.name}</Text>
                  <Text className="text-gray-500 text-xs">{acc.number}</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className={`font-extrabold text-base ${acc.balance < 0 ? 'text-amber-700' : 'text-gray-900'}`}>
                  {formatCurrency(acc.balance)}
                </Text>
                <Text className="text-emerald-700 text-xs font-medium">Available</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Account Details Modal */}
      {selectedAccount && (
        <Modal visible={true} animationType="slide" transparent={true}>
          <View className="flex-1 bg-black/50 justify-end">
            <View className="bg-white rounded-t-3xl p-6 max-h-[80%]">
              <View className="flex-row justify-between items-center mb-4">
                <View>
                  <Text className="text-xl font-bold text-gray-900">{selectedAccount.name}</Text>
                  <Text className="text-gray-500 text-xs">{selectedAccount.number}</Text>
                </View>
                <TouchableOpacity onPress={() => setSelectedAccount(null)} className="p-2">
                  <Text className="font-bold text-emerald-700 text-base">Done</Text>
                </TouchableOpacity>
              </View>

              <View className="bg-emerald-50 rounded-2xl p-4 mb-6">
                <Text className="text-emerald-800 text-xs font-semibold">Current Balance</Text>
                <Text className="text-2xl font-black text-emerald-900 mt-1">${selectedAccount.balance.toFixed(2)}</Text>
              </View>

              <Text className="font-bold text-gray-800 text-base mb-3">Recent Transactions</Text>
              <ScrollView>
                {selectedAccount.transactions.map((tx: any) => (
                  <View key={tx.id} className="flex-row justify-between items-center py-3 border-b border-gray-100">
                    <View>
                      <Text className="font-semibold text-gray-800 text-sm">{tx.title}</Text>
                      <Text className="text-gray-400 text-xs">{tx.date} • {tx.category}</Text>
                    </View>
                    <Text className={`font-bold text-sm ${tx.amount < 0 ? 'text-gray-900' : 'text-emerald-600'}`}>
                      {tx.amount < 0 ? `-$${Math.abs(tx.amount).toFixed(2)}` : `+$${tx.amount.toFixed(2)}`}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </Modal>
      )}
    </ScreenContainer>
  );
}
