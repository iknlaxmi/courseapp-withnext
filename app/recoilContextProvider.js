"use client";

import { RecoilRoot, atom } from "recoil";
export const emailState = atom({
  key: "emailState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export default function RecoidContextProvider({ children }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
