import {setTheme} from "./themes";
import Switch from '@material-ui/core/Switch';

//gonna just try to pass state up the tree

export interface Switch {
    text: string;
    on: boolean;
}

type SwitchState = Switch;

export type Actions = 
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