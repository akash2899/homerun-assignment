Native App Development Proposal for HomeRun

🔍 1. Application Analysis

🧩 Core Features Identified in the Web App

Authentication

User sign-up/login using OTP

Store Locator

Map-based location of stores

Search and filter by city or nearby location

Product Browsing

Explore products by category (e.g., beverages, snacks)

Product details page

Cart Management

Add/remove/update cart items

View cart summary and total price

Checkout & Payments

Address selection or geolocation

Payment flow with available options

Order Management

View past orders and statuses

Reorder functionality

Notifications

Order status updates

📉 UX Gaps and Tradeoffs (if building natively)

WebView fallback issues: Map experience is slower inside mobile browsers.

Poor offline behavior: No caching or offline-first strategy.

Location permissions: Not gracefully handled on web.

📱 Recommendation for Native

Prioritize performance, offline caching, and better permissions flow using native APIs (via React Native or Swift/Kotlin).

🚧 2. MVP Feature Breakdown

✅ Minimum Viable Product (MVP) Features

Priority

Feature

Description

High

Store Locator

Show nearby stores with map + list view

High

Search Stores by Name

Autocomplete & sorted alphabetical suggestions

High

Store Details

Show name, address, and map pin

Medium

Distance from User

Show distance in km from current location

Medium

Authentication via OTP

Firebase or custom API-based login

Medium

Cart Management

Basic add-to-cart, view, remove

Low

Checkout & Payment

Integrate with Razorpay or similar

Low

Order History

Show previous orders

🛠️ Proposed Methodology

🔁 Phase-Based Development

Phase 1: Infrastructure Setup

React Native + Expo setup

Folder structure (components, screens, services)

REST API testing (Postman + local backend)

Phase 2: Store Locator Module

Fetch + display store list

MapView with pin and user marker

Autocomplete search

Phase 3: Authentication Flow

Firebase OTP authentication

Store session/token securely

Phase 4: Cart and Product Flow

Category-wise product browsing

Cart UI and backend integration

Phase 5: Checkout & Payment

Address confirmation (via geolocation or input)

Payment API integration

Phase 6: Order Management & UX Polish

Order history screen

Push notifications

🕐 High-Level Timeline (2-3 Weeks for MVP)

Week

Phase

Deliverables

1

Setup + Store Locator Module

List + Map + Search

2

Auth + Cart + Product UI

OTP login, add-to-cart

3

Checkout + Polish

Payment + History + UX

Buffer: 2-3 days for testing, bug fixing and feedback loop.

✅ Final Notes

The proposal assumes the backend APIs are already in place (or mocked).

UI Library: React Native Paper or NativeBase for faster design.

Optional PWA fallback for non-native environments.
