import { Box, CircularProgress, Typography } from "@mui/material"
import { ResultContainer, ResultSection } from "./code.style"
import { FEATURES } from "@/lib/constants"

interface ResultComponentProps {
    activeFeature:string
    isAnalyzing: boolean
}

const ResultComponent = ({activeFeature,isAnalyzing}:ResultComponentProps) => {
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
            <div
            />
          )}
        </ResultContainer>
      </ResultSection>
    )
}

export default ResultComponent