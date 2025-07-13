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
          "System": "System",
          "Toggle language": "Toggle language",
          "English": "English",
          "Simplified Chinese": "Simplified Chinese",
          "Spanish": "Spanish",
          "French": "French"
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
          "System": "系统",
          "Toggle language": "切换语言",
          "English": "英语",
          "Simplified Chinese": "简体中文",
          "Spanish": "西班牙语",
          "French": "法语"
        }
      },
      es: {
        translation: {
          "Freefall Simulation": "Simulación de Caída Libre",
          "An interactive physics simulation of an object in freefall from an accelerating plane.": "Una simulación física interactiva de un objeto en caída libre desde un avión en aceleración.",
          "Initial Speed": "Velocidad Inicial",
          "Acceleration": "Aceleración",
          "Drop Interval": "Intervalo de Caída",
          "Start": "Iniciar",
          "Pause": "Pausar",
          "Reset": "Reiniciar",
          "Controls": "Controles",
          "Interactive Freefall Simulation": "Simulación Interactiva de Caída Libre",
          "Toggle theme": "Cambiar tema",
          "Light": "Claro",
          "Dark": "Oscuro",
          "System": "Sistema",
          "Toggle language": "Cambiar idioma",
          "English": "Inglés",
          "Simplified Chinese": "Chino Simplificado",
          "Spanish": "Español",
          "French": "Francés"
        }
      },
      fr: {
        translation: {
          "Freefall Simulation": "Simulation de Chute Libre",
          "An interactive physics simulation of an object in freefall from an accelerating plane.": "Une simulation physique interactive d'un objet en chute libre depuis un avion en accélération.",
          "Initial Speed": "Vitesse Initiale",
          "Acceleration": "Accélération",
          "Drop Interval": "Intervalle de Chute",
          "Start": "Démarrer",
          "Pause": "Pause",
          "Reset": "Réinitialiser",
          "Controls": "Contrôles",
          "Interactive Freefall Simulation": "Simulation Interactive de Chute Libre",
          "Toggle theme": "Changer de thème",
          "Light": "Clair",
          "Dark": "Foncé",
          "System": "Système",
          "Toggle language": "Changer de langue",
          "English": "Anglais",
          "Simplified Chinese": "Chinois Simplifié",
          "Spanish": "Espagnol",
          "French": "Français"
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
