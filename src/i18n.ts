import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Freefall Simulation": "Freefall Simulation",
          "An interactive physics simulation of an object in freefall from an accelerating plane.": "An interactive physics simulation of an object in freefall from an accelerating plane.",
          "Initial Speed": "Initial Speed",
          "Acceleration": "Acceleration",
          "Drop Interval": "Drop Interval",
          "Start": "Start",
          "Pause": "Pause",
          "Reset": "Reset",
          "Controls": "Controls",
          "Interactive Freefall Simulation": "Interactive Freefall Simulation",
          "Toggle theme": "Toggle theme",
          "Light": "Light",
          "Dark": "Dark",
          "System": "System"
        }
      },
      zh: {
        translation: {
          "Freefall Simulation": "自由落体模拟",
          "An interactive physics simulation of an object in freefall from an accelerating plane.": "一个交互式物理模拟，模拟一个物体从加速飞机上自由下落。",
          "Initial Speed": "初速度",
          "Acceleration": "加速度",
          "Drop Interval": "掉落间隔",
          "Start": "开始",
          "Pause": "暂停",
          "Reset": "重置",
          "Controls": "控制",
          "Interactive Freefall Simulation": "交互式自由落体模拟",
          "Toggle theme": "切换主题",
          "Light": "浅色",
          "Dark": "深色",
          "System": "系统"
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
