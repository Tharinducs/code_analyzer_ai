import {
    Code as CodeIcon,
    Lightbulb as LightbulbIcon,
    Translate as TranslateIcon,
    Timer as TimerIcon,
    BugReport as BugReportIcon,
    Description as DescriptionIcon,
  } from "@mui/icons-material"

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
  ]

export const LANGUAGES_LIST = [
  {
    key: 'javascript',
    value: 'JavaScript'
  },
  {
    key: 'typescript',
    value: 'TypeScript'
  },
  {
    key: 'python',
    value: 'Python'
  },
  {
    key: 'java',
    value: 'Java'
  },
  {
    key: 'csharp',
    value: 'C#'
  },
]