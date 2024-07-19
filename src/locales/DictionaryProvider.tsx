"use client";

import React from "react";
import { createContext } from "react";

export const DictionaryContext = createContext(null);

export default function DictionaryProvider({
  dictionary,
  children,
}: {
  dictionary: any;
  children: React.ReactNode;
}) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
}

export const useDictionary = () => {

  const dictionary = React.useContext(DictionaryContext);
  if (!dictionary) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }
  return dictionary;
};
