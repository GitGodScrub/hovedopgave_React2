/* eslint-disable arrow-body-style */
/* eslint-disable no-extra-parens */
import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";

const mapListItems = (itemsToMap) => {
  return (
    itemsToMap.map((iItem, index) => (
      <FormControlLabel
        key={index}
        control={
          <Checkbox
            name={iItem.name}
            /*fullpath={folderItem.fullpath} maybe enable later*/
            checked={iItem.checked}
            /*checked={(iItem.checked && iItem.checked) || false}*/
            /* onChange={handleChange} */
          />
        }
        label={iItem.fullname}
      />
    ))
  )
};

export default mapListItems;