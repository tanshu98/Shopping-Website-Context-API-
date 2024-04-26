import { Height } from "@mui/icons-material";

export const FilterStyles = {
    radioButtonContainer :{
        display: 'flex',
        flexDirection: 'column',
        width: '25%',
        height: '85vh',
        padding: '20px'
    },
    squareRadio: {
        '& .MuiSvgIcon-root': {
          borderRadius: 0, // Makes the radio button square
        },
      },
    rating: {
        display: 'flex',
        marginTop: '12px'
    }
}