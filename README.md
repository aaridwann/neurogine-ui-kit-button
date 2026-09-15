# Neurogine UI-Kit Button Module

An atomic design system library providing highly customizable, accessible, and consistent Button components across the entire Neurogine mobile application ecosystem. Built with **Styled Components** and **TypeScript**, this module ensures visual uniformity, design token compliance, and robust interaction states.

---

## 🏛️ Module Responsibility

As part of the **Neurogine Micro-Module Architecture**, this repository serves as an atomic UI component library:

* **Design Consistency:** Enforces brand design tokens across all feature modules (Primary, Secondary, Outline, Disabled, and Loading states).
* **Flexible Customization:** Supports dynamic variants, sizes, border radii, color schemes, and icon placements.
* **Accessibility & Feedback:** Built-in loading state management, disabled touch prevention, and native ripple/touch feedback.

---

## 🛠️ Tech Stack & Requirements

| Category | Technologies |
| :--- | :--- |
| **Framework & Language** | React Native, TypeScript |
| **Package Manager** | Yarn |
| **Styling & Design System** | Styled Components (`styled-components/native`) |

---

## 📁 Directory Structure

```text
neurogine-ui-kit-button/
├── src/
│   ├── Components/     # Button components, loading indicators, and icon wrappers
│   ├── Constants/      # Button variant maps, default theme sizes, and style constants
│   └── Types/          # TypeScript props, variant types, and component interfaces
├── package.json
└── tsconfig.json