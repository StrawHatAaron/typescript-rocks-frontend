import React, { useReducer } from "react";
import {getTheme, setTheme} from "./themes";
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

//gonna just try to pass state up the tree

interface Switch {
    text: string;
    on: boolean;
}

type SwitchState = Switch;

type Actions = 
    | {type: "setOff"; text:"light" }
    | {type: "setOn";  text:"dark"  }


export const Reducer = (state: SwitchState, action:Actions) => {
    switch (action.type){
        case "setOff":
            setTheme(action.text);
            return {text: action.text, on:false};
        case "setOn":
            setTheme(action.text);
            return {text: action.text, on:true};
        default:
            return state;
    }
}

// export const SwitchReducer: React.FC = () => {
//   const initialVal = {text:"light", on:false};
//   const [switches, dispatch] = useReducer(ThemeReducer, initialVal);

//   return(
//     <Typography>
//         <div>
//       {JSON.stringify(switches)}
//       <button
//         onClick={() => {
//           dispatch({ type: "setOff", text: "light" });
//         }}
//       >
//         +
//       </button>
//     </div>
//     </Typography>
//   )
// }