import { Box, CircularProgress, Typography } from "@mui/material"
import { ResultContainer, ResultSection } from "./code.style"
import { FEATURES } from "@/lib/constants"
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ResultComponentProps {
    activeFeature:string
    isAnalyzing: boolean
    results: string
}

const ResultComponent = ({activeFeature,isAnalyzing,results}:ResultComponentProps) => {
    return (
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
            <ReactMarkdown
              components={{
                code({ node, className, children, ...props }) {
                  return (
                    <SyntaxHighlighter style={materialLight} language="javascript">
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  )
                },
              }}
            >
              {results}
            </ReactMarkdown>
          )}
        </ResultContainer>
      </ResultSection>
    )
}

export default ResultComponent