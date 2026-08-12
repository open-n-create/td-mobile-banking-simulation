# TD Mobile Banking App - Interface Design

## Overview
A high-fidelity mobile banking application inspired by TD Bank's iOS app, featuring accounts, transfers, bill payments, mobile deposit, investments, and settings with fully simulated workflows. Designed for mobile portrait orientation (9:16) with one-handed usage and Apple Human Interface Guidelines (HIG).

## Screen List
1. **Login Screen**: Biometric (FaceID/TouchID) prompt, username/password form, quick login switch.
2. **Accounts Dashboard**: Account balances (Chequing, Savings, Credit Card, Investment), quick action toolbar (Transfer, Pay, Deposit), recent transactions list.
3. **Account Detail & Transactions**: Detailed transaction history with filters, search, search by category, and statements view.
4. **Transfer Screen**: Send money between accounts, Interac e-Transfer simulation, recipient management.
5. **Bill Pay & Services**: Pay bills to major utilities, add payees, schedule recurring payments, Mobile Check Deposit (camera capture simulation).
6. **Investing & Wealth**: Portfolio overview, stock watchlist, simulated trade execution.
7. **Profile & Settings**: Security settings, notifications, dark/light mode toggle, biometrics toggle, sign out.

## Primary Content and Functionality
- **Accounts Dashboard**: Real-time balance calculations, color-coded badges (Green for TD brand), card switcher.
- **Transfers & Payees**: Instant validation, success/failure toasts, confirmation receipts.
- **Mobile Deposit**: Simulated photo capture of front/back of check, immediate pending balance update.

## Key User Flows
1. **Login Flow**: App opens -> Biometric prompt or saved credentials -> Tap Login -> Accounts Dashboard.
2. **Transfer Flow**: Dashboard -> Tap Transfer -> Select From/To accounts -> Enter amount -> Confirm -> Receipt screen.
3. **Bill Payment Flow**: Dashboard -> Tap Pay -> Select payee -> Enter amount -> Confirm -> Success receipt.
4. **Mobile Deposit Flow**: Dashboard -> Tap Deposit -> Capture Check photo -> Input amount -> Submit -> Pending deposit receipt.

## Color Choices
- **TD Green**: `#008A00` (Primary brand color)
- **Dark Green**: `#005500` (Header / accents)
- **Background**: Light mode `#F4F6F8`, Dark mode `#121814`
- **Surface**: Light `#FFFFFF`, Dark `#1A241F`
- **Text**: Foreground `#11181C` / `#ECEDEE`, Muted `#687076` / `#9BA1A6`
- **Accent/Alert**: Success `#22C55E`, Error `#EF4444`
