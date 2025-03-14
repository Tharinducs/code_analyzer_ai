import { FEATURES } from "@/lib/constants"
import { Box } from "@mui/material"
import { FeatureChip } from "./code.style"
import { SetStateAction } from "react"

interface FeatureChipProps {
    handleFeatureChange: (feature: SetStateAction<string>) => void
    activeFeature : string
}

const FeatureChipComponent = ({handleFeatureChange,activeFeature}:FeatureChipProps) => {
    return (
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
    )
}

export default FeatureChipComponent