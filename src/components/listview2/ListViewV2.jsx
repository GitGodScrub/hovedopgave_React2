import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import mapListItems from './support/mapListItems'
export function ListViewV2(props) {
  return (
    <div>
      <div>current folder is: {props.currentFolder}</div>
      <FormControl component="fieldset">
        <FormLabel component="legend"> I am a FormLabel! </FormLabel>
        <FormGroup>
          {mapListItems(props.folderItems) ?? <div key="placeholder" />}
        </FormGroup>
      </FormControl>
    </div>
  );
}