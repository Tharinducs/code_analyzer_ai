import { Box, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { CodeEditorContainer, EditorSection } from "./code.style"
import {
    PlayArrow as PlayArrowIcon,
    Save as SaveIcon
} from "@mui/icons-material"
import { FEATURE_IDS, LANGUAGES_LIST } from "@/lib/constants"
import { Editor } from "@monaco-editor/react";

interface EditorSectionProps {
    language: string,
    setLanguage: any,
    activeFeature: string,
    targetLanguage: string,
    setTargetLanguage: any,
    analyzeCode: any,
    isAnalyzing: boolean,
    code: string,
    setCode: any
}

const EditorSectionComponent = ({ language, setLanguage, activeFeature, targetLanguage, setTargetLanguage, analyzeCode, isAnalyzing, code, setCode }: EditorSectionProps) => {
    return (
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
                        {LANGUAGES_LIST.map((item, index) => <MenuItem key={index} value={item.key}>{item.value}</MenuItem>)}
                    </Select>
                </FormControl>

                {activeFeature === FEATURE_IDS.TRANSLATE && (
                    <FormControl variant="outlined" size="small" sx={{ width: 150 }}>
                        <InputLabel>Target</InputLabel>
                        <Select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)} label="Target">
                            {LANGUAGES_LIST.filter((litem) => litem.key !== language).map((item, index) => <MenuItem key={index} value={item.key}>{item.value}</MenuItem>)}
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
                <Editor
                    height="400px"
                    defaultLanguage="javascript"
                    language={language}
                    value={code}
                    onChange={(newValue: any) => setCode(newValue || "")}
                    theme="light"
                    options={{ fontSize: 14 }}
                />
            </CodeEditorContainer>
        </EditorSection>
    )
}

export default EditorSectionComponent