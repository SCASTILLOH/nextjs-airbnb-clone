"use client";
import { Toaster } from "react-hot-toast";

import React from "react";

const ToasterProvider = () => {
  return <Toaster />;
};

export default ToasterProvider;

// Se crea un Provider debido a que nextjs necesita por lo menos un padre que tenga 'use client', asi, este es el elemento que va al layout principal
