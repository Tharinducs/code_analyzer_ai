import { SetStateAction, useState } from "react"
import { ContentContainer, MainContainer } from "./code.style"
import FeatureChipComponent from "./FeatureChipComponent"
import EditorSectionComponent from "./EditorSectionComponent"
import ResultComponent from "./ResultComponent"
import { FEATURE_IDS } from "@/lib/constants"

const CodeContainer = () => {
    const [code, setCode] = useState("")
    const [activeFeature, setActiveFeature] = useState(FEATURE_IDS.ANALYSE)
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [language, setLanguage] = useState("javascript")
    const [targetLanguage, setTargetLanguage] = useState("javascript")
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
        <>
            <MainContainer>
                <FeatureChipComponent handleFeatureChange={handleFeatureChange} activeFeature={activeFeature} />
                <ContentContainer>
                    <EditorSectionComponent setCode={setCode} language={language} setLanguage={setLanguage} activeFeature={activeFeature} targetLanguage={targetLanguage} setTargetLanguage={setTargetLanguage} analyzeCode={analyzeCode} isAnalyzing={isAnalyzing} code={code} />
                    <ResultComponent activeFeature={activeFeature} isAnalyzing={isAnalyzing} />
                </ContentContainer>
            </MainContainer>
        </>
    )
}

export default CodeContainer