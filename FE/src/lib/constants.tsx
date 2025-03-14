import {
    Code as CodeIcon,
    PlayArrow as PlayArrowIcon,
    Lightbulb as LightbulbIcon,
    Translate as TranslateIcon,
    Timer as TimerIcon,
    BugReport as BugReportIcon,
    Description as DescriptionIcon,
  } from "@mui/icons-material"

export const NAV_ITEMS_NAME = {
    HOME: 'Home',
    ABOUT: 'About',
    SERVICES: 'Services',
    CONTACT: 'Contact'
}

export const NAV_ITEMS = [
    {
        url: '/',
        style: { color: "#fffff", textDecoration: "none" },
        name: NAV_ITEMS_NAME.HOME
    },
    {
        url: '/about',
        style: { color: "#fffff", textDecoration: "none" },
        name: NAV_ITEMS_NAME.ABOUT
    },
    {
        url: '/about',
        style: { color: "#fffff", textDecoration: "none" },
        name: NAV_ITEMS_NAME.SERVICES
    },
    {
        url: '',
        style: { color: "#fffff", textDecoration: "none" },
        name: NAV_ITEMS_NAME.CONTACT
    },
]

export const ENV_PATH = "environment/.env."

export const FEATURE_IDS = {
  IMPROVE: 'improve',
  TRANSLATE: 'translate',
  COMPLEXITY: 'complexity',
  DEBUG: 'debug',
  DOCUMENT: 'document',
  ANALYSE: 'analayse',
  RUNNER : 'runner'
}

export const FEATURES = [
    {
      id: FEATURE_IDS.ANALYSE,
      label: "Code Explanation",
      icon: <CodeIcon />,
    },
    {
      id: FEATURE_IDS.IMPROVE,
      label: "Improvement Suggestions",
      icon: <LightbulbIcon />,
    },
    {
      id: FEATURE_IDS.TRANSLATE,
      label: "Code Translation",
      icon: <TranslateIcon />,
    },
    {
      id: FEATURE_IDS.COMPLEXITY,
      label: "Time Complexity",
      icon: <TimerIcon />,
    },
    {
      id: FEATURE_IDS.DEBUG,
      label: "Error Detection",
      icon: <BugReportIcon />,
    },
    {
      id: FEATURE_IDS.DOCUMENT,
      label: "Documentation",
      icon: <DescriptionIcon />,
    },
    {
      id: FEATURE_IDS.RUNNER,
      label: "Code Runner",
      icon: <PlayArrowIcon />,
    },
  ]