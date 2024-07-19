import React from "react";
import TagsField, { TagsFieldProps } from "../TagsField";

const Example = <T,>(props: TagsFieldProps<T>) => {
  return (
    <div style={{ width: "500px" }}>
      <TagsField {...props} />
    </div>
  );
};

export default Example;
