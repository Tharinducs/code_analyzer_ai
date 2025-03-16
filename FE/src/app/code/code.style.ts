import { Chip, Paper } from "@mui/material"
import styled from "styled-components"

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
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const ResultContainer = styled(Paper)`
  padding: 16px;
  margin-top: 16px;
  min-height: 400px;
  max-height: 90%;
  overflow-y: auto;
  background-color: #ffffff;
  color: #333333;
  font-family: "Roboto", sans-serif;
`

const CodeEditorContainer = styled.div`
  position: relative;
  height: 90%;
  border-radius: 8px;
  overflow: hidden;
`

const CodeTextarea = styled.textarea`
  width: 100%;
  height: 90%;
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

export {
    CodeEditorContainer,
    CodeTextarea,
    FeatureChip,
    MainContainer,
    ContentContainer,
    EditorSection,
    ResultContainer,
    ResultSection
}