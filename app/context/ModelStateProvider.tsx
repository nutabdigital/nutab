//ModelStateProvider.tsx
"use client";
import React, { createContext, useContext, useRef } from "react";

type ModelState = {
  currentSection: number;
  angles: { angleX: number; angleY: number };
  camDistance: number;
  frequency: number;
  direction: number;
};

type ModelStateContextType = {
  currentSection: number;
  state: React.MutableRefObject<ModelState>;
  setState: (partial: Partial<ModelState>) => void;
  paused: boolean;
  pauseModel: () => void;
  resumeModel: () => void;
};

const defaultState: ModelState = {
  currentSection: 0,
  angles: { angleX: 0, angleY: 0 },
  camDistance: 50,
  frequency: 0,
  direction: 1,
};

const ModelStateContext = createContext<ModelStateContextType | undefined>(undefined);

export function ModelStateProvider({ children }: { children: React.ReactNode }) {
  const state = useRef<ModelState>({ ...defaultState });
  const [paused, setPaused] = React.useState(false);

  const setState = (
  partial: Partial<ModelState> | ((prev: ModelState) => Partial<ModelState>)
) => {
  const update = typeof partial === "function" ? partial(state.current) : partial;
  Object.assign(state.current, update);
};


  const pauseModel = () => setPaused(true);
  const resumeModel = () => setPaused(false);

  return (
    <ModelStateContext.Provider value={{ currentSection: state.current.currentSection, state, setState, paused, pauseModel, resumeModel }}>
      {children}
    </ModelStateContext.Provider>
  );
}

export function useModelState() {
  const context = useContext(ModelStateContext);
  if (!context) throw new Error("useModelState must be used within ModelStateProvider");
  return context;
}
