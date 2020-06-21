import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export function ListViewV2(props) {
  const mapListItems = (itemsToMap) => {
    return(
      itemsToMap.map((folderItem, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox
              name={folderItem.name}
              /*fullpath={folderItem.fullpath} maybe enable later*/
              checked={folderItem.checked}
              /* onChange={handleChange} */
            />
          }
          label={folderItem.fullname}
        />
      ))
    )
  }
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
