"use client"
import { SetStateAction, useEffect, useState } from "react"
import { ContentContainer, MainContainer } from "./code.style"
import FeatureChipComponent from "./FeatureChipComponent"
import EditorSectionComponent from "./EditorSectionComponent"
import ResultComponent from "./ResultComponent"
import { FEATURE_IDS } from "@/lib/constants"
import { useAnalyseCodeMutation } from "@/services/codeApi"
import { get } from 'lodash'
import { Alert, Snackbar } from "@mui/material"

const CodeContainer = () => {
    const [code, setCode] = useState("")
    const [activeFeature, setActiveFeature] = useState(FEATURE_IDS.ANALYSE)
    const [language, setLanguage] = useState("javascript")
    const [targetLanguage, setTargetLanguage] = useState("javascript")
    const [results, setResults] = useState("")
    const [open, setOpen] = useState(false)

    const [analyseCodeApi, { isError, isLoading, isSuccess, data, error }] = useAnalyseCodeMutation();

    useEffect(() => {
        handleAnalyseCodeAPIResponse()
    }, [isError, isLoading, isSuccess, data])

    const handleFeatureChange = (feature: SetStateAction<string>) => {
        setResults("")
        setActiveFeature(feature)
    }

    const analyzeCode = () => {
        analyseCodeApi({ task: activeFeature, lang: targetLanguage, code })
    }

    const handleAnalyseCodeAPIResponse = () => {
        if (isSuccess && data) {
            setResults(get(data, 'explanation', ""))
        } else if (isError) {
            setOpen(true)
        }
    }

    return (
        <>
            <MainContainer>
                <FeatureChipComponent handleFeatureChange={handleFeatureChange} activeFeature={activeFeature} />
                <ContentContainer>
                    <EditorSectionComponent setCode={setCode} language={language} setLanguage={setLanguage} activeFeature={activeFeature} targetLanguage={targetLanguage} setTargetLanguage={setTargetLanguage} analyzeCode={analyzeCode} isAnalyzing={isLoading} code={code} />
                    <ResultComponent activeFeature={activeFeature} isAnalyzing={isLoading} results={results} />
                </ContentContainer>
            </MainContainer>
            <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
                <Alert severity="error" variant="filled" onClose={() => setOpen(false)}>
                    Error! Something went wrong.
                </Alert>
            </Snackbar>
        </>
    )
}

export default CodeContainer