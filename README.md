# React Native Monorepo

React Native와 React 프로젝트를 yarn workspace를 통해 monorepo로 구성한 프로젝트입니다.

## 프로젝트 구조

```bash
<root>/
└─ packages/
    ├── app/
    │   ├── src/
    │   └── package.json
    # Android/iOS app configuration files and native code
    ├── mobile/
    │   ├── android/
    │   ├── ios/
    │   ├── app.json
    │   ├── babel.config.js
    │   ├── index.js
    │   ├── metro.config.js
    │   └── package.json
    # Windows app configuration files and native code
    └── web/
        ├── public/
        ├── src/
        ├── carco.config.js
        └── package.json
└─ package.json
```

## 실행

```git
git clone https://github.com/Yeony99/react-native-monorepo.git
```

루트 디렉토리 `react-native-monorepo` 에서 스크립트 실행

```bash
yarn reset && yarn
```

### iOS 실행

```bash
yarn ios:start
```

### Android 실행

```bash
yarn android:start
```

### web 실행

```bash
yarn web:start
```
