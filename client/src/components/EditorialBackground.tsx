import React from "react";
import "../styles/editorial-motion.css";

/**
 * Option A : trame décorative dessinée une fois, puis statique.
 * À placer dans un parent portant la classe `viw-editorial-page`.
 * Aucune boucle JavaScript, aucun écouteur ni dépendance supplémentaire.
 */
export default function EditorialBackground() {
  return (
    <div className="viw-editorial-bg" aria-hidden="true">
      <svg
        className="viw-editorial-svg"
        viewBox="0 0 600 460"
        fill="none"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className="viw-trame-line viw-trame-line--1" d="M374 25H590" pathLength="1" />
        <path className="viw-trame-line viw-trame-line--2" d="M454 0V230" pathLength="1" />
        <path className="viw-trame-line viw-trame-line--3" d="M350 98H600" pathLength="1" />
        <path className="viw-trame-line viw-trame-line--4" d="M530 30V460" pathLength="1" />
        <path className="viw-trame-line viw-trame-line--5" d="M0 263H600" pathLength="1" />
        <path className="viw-trame-accent" d="M445 98H475" />
      </svg>
    </div>
  );
}
