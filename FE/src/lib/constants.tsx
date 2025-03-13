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

export const FEATURES = [
    {
      id: "explanation",
      label: "Code Explanation",
      icon: <CodeIcon />,
    },
    {
      id: "improvement",
      label: "Improvement Suggestions",
      icon: <LightbulbIcon />,
    },
    {
      id: "translation",
      label: "Code Translation",
      icon: <TranslateIcon />,
    },
    {
      id: "complexity",
      label: "Time Complexity",
      icon: <TimerIcon />,
    },
    {
      id: "debugging",
      label: "Error Detection",
      icon: <BugReportIcon />,
    },
    {
      id: "documentation",
      label: "Documentation",
      icon: <DescriptionIcon />,
    },
    {
      id: "runner",
      label: "Code Runner",
      icon: <PlayArrowIcon />,
    },
  ]