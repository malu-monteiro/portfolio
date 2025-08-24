import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "pt-BR"];

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  let locale = cookieStore.get("NEXT_LOCALE")?.value;

  if (!locale || !locales.includes(locale)) {
    locale = "pt-BR";
  }

  if (!locales.includes(locale)) notFound();

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
