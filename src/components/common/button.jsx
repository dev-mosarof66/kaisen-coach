import { Button } from "../ui/button"

export const OutlineButton = ({children})=>{
    return(
        <Button
        variant="outline"
        className="border-gray-600 bg-transparent hover:bg-white/5 text-white"
    >
        View Schedule
    </Button>

    )
}