import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";

function mapItems(props) {
  
  return props.map((item, index) => (
    <FormControlLabel
      key={index}
      control={
        <Checkbox
          checked={(item.checked && item.checked) || false}
          /* onChange={handleChange} */
          name={item.name}
        />
      }
      label={item.fullname}
    />
  ));
}
  
export default mapItems;
/*
    
    var promise = () => new Promise( (resolve, reject) => {

      let name = 'Paul'
    
      if (name === 'Paul') {
       resolve("Promise resolved successfully");
      }
      else {
       reject(Error("Promise rejected"));
      }
    });
    

    return new Promise((resolve) => {

    }
    

    )
*/