import React, { useReducer } from "react";
import {getTheme, setTheme} from "./themes";
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

//gonna just try to pass state up the tree

interface Switch {
    text:  string;
    on: boolean;
    
}

type SwitchesState = Switch[];

type Actions = 
    | {type: "setOff"; text:"light" }
    | {type: "setOn";  text:"dark"  }


const ThemeReducer = (state: SwitchesState, action:Actions) => {
    switch (action.type){
        case "setOff":
            setTheme(action.text);
            return {...state, text: action.text, on:false};
        case "setOn":
            setTheme(action.text);
            return {...state, text: action.text, on:true};
        default:
            return state;
    }
}

export const SwitchReducer: React.FC = () => {
  const [switches, dispatch] = useReducer(ThemeReducer, []);

  return(
    <Typography>
        <div>
      {JSON.stringify(switches)}
      <button
        onClick={() => {
          dispatch({ type: "setOff", text: "light" });
        }}
      >
        +
      </button>
    </div>

      {/* {switches.map((c) => (
        <>
        <Switch
          checked={c.on}
          onChange={() => dispatch(c.on ? 
            {type:"setOff", text:"light"} : 
            {type:"setOn", text:"dark"})}
          color="primary"
          name="switches"
          inputProps={{ 'aria-label': 'primary checkbox' }}/>
          on: {c.on}
          text: {c.text}
          <br/>
        </>
      ))} */}
    </Typography>
  )
}