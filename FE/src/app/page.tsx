"use client"
import { store } from "@/store";
import { Provider } from "react-redux";
import Layout from "@/components/nav/Layout";
import { Box, Button, Chip, CircularProgress, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material";
import { FEATURES } from "@/lib/constants";
import styled from "styled-components";
import { SetStateAction, useState } from "react";
import {
  PlayArrow as PlayArrowIcon,
  Save as SaveIcon
} from "@mui/icons-material"

const FeatureChip = styled(Chip)`
  margin: 4px;
  cursor: pointer;
  &.active {
    background-color: #3f51b5;
    color: white;
  }
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
  color: #000000;
`

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`

const EditorSection = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
const ResultSection = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const ResultContainer = styled(Paper)`
  padding: 16px;
  margin-top: 16px;
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
  background-color: #ffffff;
  color: #333333;
  font-family: "Roboto", sans-serif;
`

const CodeEditorContainer = styled.div`
  position: relative;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`

const CodeTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  min-height: 300px;
  padding: 16px;
  font-family: "Roboto Mono", monospace;
  font-size: 14px;
  line-height: 1.5;
  border: none;
  background-color: #f8f8f8;
  color: #333333;
  resize: none;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 2px #3f51b5;
  }
`

export default function App() {
  const [code, setCode] = useState()
  const [activeFeature, setActiveFeature] = useState("explanation")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [language, setLanguage] = useState("javascript")
  const [targetLanguage, setTargetLanguage] = useState("python")
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const handleFeatureChange = (feature: SetStateAction<string>) => {
    setActiveFeature(feature)
  }

  const analyzeCode = () => {
    setIsAnalyzing(true)
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false)
    }, 1500)
  }
  
  return (
    <Provider store={store}>
      <Layout >
      <MainContainer>
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
            {FEATURES.map((feature) => (
              <FeatureChip
                key={feature.id}
                label={feature.label}
                icon={feature.icon}
                onClick={() => handleFeatureChange(feature.id)}
                className={activeFeature === feature.id ? "active" : ""}
                color={activeFeature === feature.id ? "primary" : "default"}
                variant={activeFeature === feature.id ? "filled" : "outlined"}
              />
            ))}
          </Box>
        </Box>
        <ContentContainer>
          <EditorSection>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <FormControl variant="outlined" size="small" sx={{ width: 150 }}>
                <InputLabel>Language</InputLabel>
                <Select value={language} onChange={(e) => setLanguage(e.target.value)} label="Language">
                  <MenuItem value="javascript">JavaScript</MenuItem>
                  <MenuItem value="typescript">TypeScript</MenuItem>
                  <MenuItem value="python">Python</MenuItem>
                  <MenuItem value="java">Java</MenuItem>
                  <MenuItem value="csharp">C#</MenuItem>
                </Select>
              </FormControl>

              {activeFeature === "translation" && (
                <FormControl variant="outlined" size="small" sx={{ width: 150 }}>
                  <InputLabel>Target</InputLabel>
                  <Select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)} label="Target">
                    <MenuItem value="python">Python</MenuItem>
                    <MenuItem value="javascript">JavaScript</MenuItem>
                    <MenuItem value="typescript">TypeScript</MenuItem>
                    <MenuItem value="java">Java</MenuItem>
                    <MenuItem value="csharp">C#</MenuItem>
                  </Select>
                </FormControl>
              )}

              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<PlayArrowIcon />}
                  onClick={analyzeCode}
                  disabled={isAnalyzing}
                  sx={{ mr: 1 }}
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze"}
                </Button>
                <Button variant="outlined" startIcon={<SaveIcon />} sx={{ mr: 1 }}>
                  Save
                </Button>
              </Box>
            </Box>

            <CodeEditorContainer>
              <CodeTextarea
                value={code}
                placeholder="Enter your code here..."
              />
            </CodeEditorContainer>
          </EditorSection>

          <ResultSection>
            <Typography variant="h6" gutterBottom>
              {FEATURES.find((f) => f.id === activeFeature)?.label} Results
            </Typography>

            <ResultContainer elevation={2}>
              {isAnalyzing ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    flexDirection: "column",
                  }}
                >
                  <CircularProgress />
                  <Typography sx={{ mt: 2 }}>Analyzing your code...</Typography>
                </Box>
              ) : (
                <div
                />
              )}
            </ResultContainer>
          </ResultSection>
        </ContentContainer>
        </MainContainer>
      </Layout>
    </Provider>
  );
}
