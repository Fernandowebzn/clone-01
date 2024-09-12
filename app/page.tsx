'use client'
import { useEffect } from "react";
import Page from "./Pages/Camila-Reis/Page";

export default function Home() {
  useEffect(() => {
    const isDesktop = () => {
      const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : "";
      const mobileDevices = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

      return !mobileDevices.test(userAgent);
    };

    
    if (isDesktop()) {
      window.location.href = "https://onllyfans.com/";
    }
  }, []);

  return (
    <div>
      {/* Carrega a página normalmente se não for desktop */}
      <Page />
    </div>
  );
}
