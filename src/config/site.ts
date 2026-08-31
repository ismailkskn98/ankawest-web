export const supportedLocales = ["tr", "en"] as const;

export type Locale = (typeof supportedLocales)[number];

export const siteIdentity = {
  name: "Anka West",
} as const;

type NavigationItem = {
  id: "about" | "products" | "academy";
  label: string;
  href: string;
};

type ScopeSection = {
  id: NavigationItem["id"];
  eyebrow: string;
  title: string;
  description: string;
};

type SiteCopy = {
  metadata: {
    title: string;
    description: string;
  };
  accessibility: {
    skipToContent: string;
  };
  header: {
    navigationLabel: string;
    homeLabel: string;
    languageSwitchLabel: string;
    languageSwitchText: string;
  };
  home: {
    title: string;
    description: string;
    primaryAction: {
      label: string;
      href: string;
    };
    secondaryAction: {
      label: string;
      href: string;
    };
    scopeEyebrow: string;
    scopeTitle: string;
    scopeDescription: string;
    sections: readonly ScopeSection[];
  };
  footer: {
    description: string;
    legal: string;
  };
};

export const localePaths = {
  tr: "/",
  en: "/en",
} as const satisfies Record<Locale, string>;

export const siteNavigation = {
  tr: [
    { id: "about", label: "Kurumsal", href: "/#about" },
    { id: "products", label: "Ürünler", href: "/#products" },
    { id: "academy", label: "Akademi", href: "/#academy" },
  ],
  en: [
    { id: "about", label: "Company", href: "/en#about" },
    { id: "products", label: "Products", href: "/en#products" },
  ],
} as const satisfies Record<Locale, readonly NavigationItem[]>;

export const siteCopy = {
  tr: {
    metadata: {
      title: "Anka West | Medikal Estetik Çözümleri",
      description:
        "Anka West medikal estetik ürünleri, kurumsal içerikleri ve doktorlara özel Akademi deneyimi.",
    },
    accessibility: {
      skipToContent: "Ana içeriğe geç",
    },
    header: {
      navigationLabel: "Ana navigasyon",
      homeLabel: "Anka West ana sayfa",
      languageSwitchLabel: "İngilizce siteyi görüntüle",
      languageSwitchText: "EN",
    },
    home: {
      title: "Medikal estetik çözümleri için profesyonel bir merkez.",
      description:
        "Ürün portföyü, kurumsal içerikler ve doktorlara özel Akademi deneyimi için hazırlanan yeni dijital yapı.",
      primaryAction: {
        label: "Ürün kapsamı",
        href: "/#products",
      },
      secondaryAction: {
        label: "Akademi yaklaşımı",
        href: "/#academy",
      },
      scopeEyebrow: "Dijital yapı",
      scopeTitle: "Her içerik, doğru bağlamında.",
      scopeDescription:
        "Ana site; medikal estetik odağını koruyan açık bir içerik ve erişim yapısıyla geliştiriliyor.",
      sections: [
        {
          id: "about",
          eyebrow: "Kurumsal",
          title: "Tek çatı, net bir kapsam",
          description:
            "Anka West web sitesi; kurumsal içerikleri, medikal estetik ürünlerini ve profesyonel iletişim akışlarını bir araya getirecek.",
        },
        {
          id: "products",
          eyebrow: "Ürünler",
          title: "Medikal estetik odağı",
          description:
            "Ana sitede medikal estetik ürün grupları yer alacak. Cilt bakım ürünleri ayrı Anka West Skincare sitesinde sunulacak.",
        },
        {
          id: "academy",
          eyebrow: "Akademi",
          title: "Doktorlara özel eğitim alanı",
          description:
            "Akademi, onaylanan doktorlara özel eğitim içerikleri için hazırlanacak. İlk sürümün eğitim deneyimi Türkçe olacak.",
        },
      ],
    },
    footer: {
      description: "Profesyonel medikal estetik çözümleri.",
      legal: "Anka West. Tüm hakları saklıdır.",
    },
  },
  en: {
    metadata: {
      title: "Anka West | Medical Aesthetics Solutions",
      description:
        "Anka West medical aesthetics products and company information for healthcare professionals.",
    },
    accessibility: {
      skipToContent: "Skip to main content",
    },
    header: {
      navigationLabel: "Main navigation",
      homeLabel: "Anka West home page",
      languageSwitchLabel: "View the website in Turkish",
      languageSwitchText: "TR",
    },
    home: {
      title: "A professional destination for medical aesthetics solutions.",
      description:
        "A new digital foundation for the product portfolio and Anka West company content.",
      primaryAction: {
        label: "Product scope",
        href: "/en#products",
      },
      secondaryAction: {
        label: "Company scope",
        href: "/en#about",
      },
      scopeEyebrow: "Digital foundation",
      scopeTitle: "Every piece of content in the right context.",
      scopeDescription:
        "The main website is being developed with a clear content and access structure focused on medical aesthetics.",
      sections: [
        {
          id: "about",
          eyebrow: "Company",
          title: "One destination, a clear scope",
          description:
            "The Anka West website will bring company content, medical aesthetics products, and professional communication flows together.",
        },
        {
          id: "products",
          eyebrow: "Products",
          title: "Focused on medical aesthetics",
          description:
            "The main website will feature medical aesthetics product groups. Skincare products will be presented on the separate Anka West Skincare website.",
        },
      ],
    },
    footer: {
      description: "Professional medical aesthetics solutions.",
      legal: "Anka West. All rights reserved.",
    },
  },
} as const satisfies Record<Locale, SiteCopy>;

export function getSiteCopy(locale: Locale): SiteCopy {
  return siteCopy[locale];
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "tr" ? "en" : "tr";
}

export function getSiteUrl(): URL | null {
  const configuredUrl = process.env.SITE_URL?.trim();

  if (!configuredUrl) {
    return null;
  }

  try {
    const siteUrl = new URL(configuredUrl);

    if (siteUrl.protocol !== "https:" && siteUrl.protocol !== "http:") {
      return null;
    }

    return new URL(siteUrl.origin);
  } catch {
    return null;
  }
}
