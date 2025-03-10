# Mobile App Framework Development Intern - Take-Home Test

## Overview
Welcome! This take-home test is designed to evaluate your ability to build a simple mobile application using **React Native** (preferred) or **Flutter**. The goal is to assess your understanding of mobile development fundamentals, code structure, and best practices.

## Task
Build a simple **To-Do List App** with the following features:

### Core Requirements
- Users should be able to **add, complete, and delete** tasks.
- Tasks should be **persisted locally** using:
  - **AsyncStorage** (React Native) or
  - **SharedPreferences** (Flutter).
- Basic UI to display tasks in a list.

### Bonus (Optional, for extra credit)
- Implement **swipe-to-delete** functionality using:
  - **React Native Gesture Handler** (React Native) or
  - **Dismissible widgets** (Flutter).
- Use **TypeScript** (React Native) or enable **null safety** (Flutter).
- Implement basic **unit testing**:
  - **Jest** (React Native) or
  - **Widget Testing** (Flutter).

### Advanced Bonus Features (Differentiation Factors)
1. **(Easy) Task Categories:** Allow users to assign tasks to different categories (e.g., Work, Personal, Shopping) and display them in separate sections.
2. **(Intermediate) Due Date & Notifications:** Let users set due dates on tasks and send local notifications when a task is due (use `react-native-push-notification` for React Native or `flutter_local_notifications` for Flutter).
3. **(Hard) Cloud Syncing:** Sync tasks with Firebase Firestore or Supabase, allowing tasks to persist across different devices.

## Tech Stack
- **React Native (preferred)**: You can use Expo for easy setup.
- **Flutter**: If you prefer, use Dart with a simple Flutter setup.

## Submission Guidelines
1. Create your own repository.
2. Implement the required features.
3. Push your changes.
4. Add [cary-cba](https://github.com/cary-cba) as a contributor to your repository.

## Evaluation Criteria
- **Code structure & clarity**: Is the project well-organized and readable?
- **Functionality**: Does it work as expected?
- **Best practices**: Are modern mobile development principles followed?
- **Bonus points**: If you implement extra features.

## Expected Time Commitment
This task is designed to take **2-4 hours**. If you go beyond the core requirements, feel free to note the extra time spent.

## Getting Started
### React Native (Expo)
```sh
npx create-expo-app todo-app
cd todo-app
npm install @react-native-async-storage/async-storage react-native-gesture-handler
npm start
```

### Flutter
```sh
flutter create todo_app
cd todo_app
flutter pub add shared_preferences
flutter run
```

## Questions?
If you have any questions, feel free to reach out!
