"use server";

export type SubscribeState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribe(
  _previous: SubscribeState,
  formData: FormData
): Promise<SubscribeState> {
  // Honeypot: real visitors never see or fill this field.
  if (String(formData.get("nettside") ?? "").length > 0) {
    return { status: "success", message: "Nesten ferdig. Sjekk innboksen din og bekreft adressen." };
  }

  const email = String(formData.get("epost") ?? "").trim();
  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Skriv inn en gyldig e-postadresse." };
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;
  const failure: SubscribeState = {
    status: "error",
    message: "Påmeldingen feilet. Prøv igjen om litt, eller skriv til kontakt@jeycup.com.",
  };
  if (!apiKey || !groupId) return failure;

  try {
    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, groups: [groupId] }),
      cache: "no-store",
    });

    if (response.status === 422) {
      return { status: "error", message: "Adressen ble ikke godtatt. Sjekk at den er riktig skrevet." };
    }
    if (!response.ok) return failure;
  } catch {
    return failure;
  }

  return { status: "success", message: "Nesten ferdig. Sjekk innboksen din og bekreft adressen." };
}
