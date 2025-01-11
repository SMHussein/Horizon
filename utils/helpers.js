import json from "@messages/en.json";

export function getItems(t, jsonPath) {
  const keys = jsonPath.split(".");
  const roleLength = keys.reduce((obj, key) => obj && obj[key], json).length;
  const roleType = jsonPath.split(".").slice(1).join(".");

  return Array.from({ length: roleLength }, (_, i) => t(`${roleType}.${i}`));
}

export function getMetadata(locale) {
  if (locale === "ar") {
    return {
      title:
        "الافق للامن و الحماية, شركة رائدة في مجال خدمات الأمن والحماية في الأردن",
      description:
        "الافق للامن و الحماية تقدم حلول أمنية رفيعة المستوى تشمل توفير حراس الأمن، ومراقبة كاميرات وخدمات الإشراف.",
      alternates: {
        canonical: "https://www.horizon-sp.com/ar",
      },
      author: "الافق للأمن و الحماية",
      keywords:
        "شركات امن في الأردن , شركات امن وحماية في الاردن , شركة حراسة في الاردن , امن وحماية , شركات امن , شركات حراسة ,  شركات حراسة اردنية ، شركة الامن الافضل في الاردن ،افضل شركة حراسات امنية في الاردن ",
      openGraph: {
        type: "website",
        url: "https://www.horizon-sp.com",
        title:
          "الافق للامن و الحماية, شركة رائدة في مجال خدمات الأمن والحماية في الأردن",
        description:
          "الافق للامن و الحماية تقدم حلول أمنية رفيعة المستوى تشمل توفير حراس الأمن، ومراقبة كاميرات وخدمات الإشراف.",
      },
      metadataBase: new URL("https://www.horizon-sp.com"), // Add this line
    };
  }
  return {
    title:
      "Horizon Security - Leading Security & Protection Services in Jordan",
    description:
      "Horizon is a leading security and protection company in Jordan, providing security guard services, CCTV monitoring, and all related security services",
    alternates: {
      canonical: "https://www.horizon-sp.com",
    },
    author: "Horizon Security & Protection",
    keywords:
      "security services, Site Security and protection,Security Consultancy, security guards, CCTV monitoring, supervision, facilities management, security manpower, Security companies in Jordan, security and protection companies in Jordan, public security, best security company in Jordan",
    openGraph: {
      type: "website",
      url: "https://www.horizon-sp.com",
      title:
        "Horizon Security - Leading Security & Protection Services in Jordan",
      description:
        "Horizon Security and Protection is a leading private security company in Jordan, providing tailored security guard services, CCTV monitoring, and all related security services",
    },
    metadataBase: new URL("https://www.horizon-sp.com"), // Add this line
  };
}
