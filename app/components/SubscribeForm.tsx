"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { subscribe, type SubscribeState } from "@/app/actions/subscribe";

const initialState: SubscribeState = { status: "idle", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SubscribeForm({ title }: { title: string }) {
  const [state, formAction, pending] = useActionState(subscribe, initialState);
  const [clientError, setClientError] = useState("");

  const error = clientError || (state.status === "error" ? state.message : "");
  const success = state.status === "success" && !clientError;

  if (success) {
    return (
      <div role="status" aria-live="polite">
        <p className="font-condensed text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent-text)]">
          {title}
        </p>
        <p className="mt-3 text-base leading-7 text-[var(--color-body)]">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      onSubmit={(event) => {
        const value = String(new FormData(event.currentTarget).get("epost") ?? "").trim();
        if (!EMAIL_PATTERN.test(value)) {
          event.preventDefault();
          setClientError("Skriv inn en gyldig e-postadresse.");
        } else {
          setClientError("");
        }
      }}
    >
      <label
        htmlFor="epost"
        className="block font-condensed text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent-text)]"
      >
        {title}
      </label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input
          id="epost"
          name="epost"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="din@epost.no"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "epost-feil" : "epost-hjelp"}
          className="min-w-0 flex-1 rounded-none border border-[var(--color-field-border)] bg-transparent px-3 py-2 text-base text-[var(--color-foreground)] transition-colors duration-300 ease-soft placeholder:text-[var(--color-secondary)] hover:border-[var(--color-foreground)] aria-[invalid=true]:border-[var(--color-error)] aria-[invalid=true]:hover:border-[var(--color-error)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-text)]"
        />
        <button
          type="submit"
          disabled={pending}
          className="press bg-[var(--color-ink)] px-3 py-2 text-base font-semibold text-[var(--color-off-white)] transition-[color,background-color,transform] duration-300 ease-soft enabled:hover:bg-[var(--color-ink-hover)] disabled:cursor-default disabled:opacity-70"
        >
          {pending ? "Sender" : "Få nye artikler"}
        </button>
      </div>
      <div
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        >
        <label htmlFor="nettside">Nettside</label>
        <input id="nettside" name="nettside" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {error ? (
        <p id="epost-feil" role="alert" className="mt-3 text-sm leading-5 text-[var(--color-error)]">
          {error}
        </p>
      ) : (
        <p id="epost-hjelp" className="mt-3 text-sm leading-5 text-[var(--color-secondary)]">
          Ingen spam. Jeg bruker adressen bare til å varsle om nye artikler.{" "}
          <Link href="/personvern" className="underline underline-offset-2 transition-colors duration-300 ease-soft hover:text-[var(--color-foreground)] active:text-[var(--color-foreground)]">
            Personvern
          </Link>
        </p>
      )}
    </form>
  );
}
