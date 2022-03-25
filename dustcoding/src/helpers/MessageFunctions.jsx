import React from "react";

export const ShowErrMsg = (msg) => {
  return (
    <div
      className="mb-4 rounded-lg bg-redBg p-4 text-sm text-redtext dark:bg-redBg2 dark:text-redtext2"
      role="alert"
    >
      <span className="font-medium">{msg}</span>
    </div>
  );
};
export const ShowSuccess = (msg) => {
  return (
    <div
      className="mb-4 rounded-lg bg-dustLight p-4 text-sm text-dustCool dark:bg-dustrang dark:text-dustDark"
      role="alert"
    >
      <span className="font-medium">{msg}</span>
    </div>
  );
};
