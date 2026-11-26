import type { KeyboardEvent } from "react";

/** Active un conteneur role=button via son gestionnaire onClick existant. */
export function activateCardOnKey(event: KeyboardEvent<HTMLElement>): void {
  if (event.target !== event.currentTarget || event.repeat) return;
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  event.currentTarget.click();
}
