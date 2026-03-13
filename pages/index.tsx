import Head from "next/head";
import { useRef } from "react";
import business from "@/data/business.json";
import events from "@/data/events.json";
import gallery from "@/data/gallery.json";
import hours from "@/data/hours.json";
import menuPreview from "@/data/menu-preview.json";
import seo from "@/data/seo.json";
import socials from "@/data/socials.json";
import { SmoothScroll } from "@/components/SmoothScroll";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { useScrollStory } from "@/hooks/useScrollStory";
import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/sections/Footer";
import { GallerySection } from "@/sections/GallerySection";
import { HeroSection } from "@/sections/HeroSection";
import { KaraokeHighlightSection } from "@/sections/KaraokeHighlightSection";
import { ReservationSection } from "@/sections/ReservationSection";
import { SocialMediaSection } from "@/sections/SocialMediaSection";
import { UpcomingEventsSection } from "@/sections/UpcomingEventsSection";
import { WeekendPartySection } from "@/sections/WeekendPartySection";
import { WeeklyEventsSection } from "@/sections/WeeklyEventsSection";

const phoneHref = `tel:${business.contact.phoneE164}`;

const openingHoursSpecification = hours.schedule
  .filter((entry) => entry.schemaDay && entry.opens && entry.closes)
  .map((entry) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: entry.schemaDay,
    opens: entry.opens,
    closes: entry.closes
  }));

const eventSchema = events.items
  .filter((item) => item.startTimeForSchema)
  .map((item) => ({
    "@type": "Event",
    name: `${item.title} - ${business.displayName}`,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: business.displayName,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.location.street,
        postalCode: business.location.postalCode,
        addressLocality: business.location.city,
        addressCountry: "PL"
      }
    },
    description: item.description,
    organizer: {
      "@type": "Organization",
      name: business.displayName,
      telephone: business.contact.phoneDisplay
    },
    startDate: item.startTimeForSchema
  }));

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    name: business.displayName,
    alternateName: business.name,
    description: business.seoDescription,
    telephone: business.contact.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.location.street,
      addressLocality: business.location.city,
      postalCode: business.location.postalCode,
      addressCountry: "PL"
    },
    image: ["/images/hero.png", "/images/weekend-party.jpg"],
    sameAs: socials.links.filter((link) => link.status === "active").map((link) => link.url),
    openingHoursSpecification
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.displayName,
    description: business.seoDescription,
    telephone: business.contact.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.location.street,
      addressLocality: business.location.city,
      postalCode: business.location.postalCode,
      addressCountry: "PL"
    },
    sameAs: socials.links.filter((link) => link.status === "active").map((link) => link.url),
    openingHoursSpecification
  },
  ...eventSchema
];

export default function HomePage() {
  const rootRef = useRef<HTMLElement>(null);
  useScrollStory(rootRef);

  return (
    <>
      <Head>
        <title>{seo.metaTitle}</title>
        <meta name="description" content={seo.metaDescription} />
        <meta name="keywords" content={seo.keywords.join(", ")} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.og.title} />
        <meta property="og:description" content={seo.og.description} />
        <meta property="og:image" content={seo.og.image} />
        <meta name="twitter:card" content={seo.twitter.card} />
        <meta name="twitter:title" content={seo.twitter.title} />
        <meta name="twitter:description" content={seo.twitter.description} />
        <meta name="twitter:image" content={seo.twitter.image} />
        {seo.canonicalUrl ? <link rel="canonical" href={seo.canonicalUrl} /> : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <SmoothScroll />

      <main ref={rootRef} className="story-shell overflow-hidden">
        <div data-page-progress className="fixed left-0 right-0 top-0 z-[70] h-px origin-left bg-gradient-to-r from-gold-300 via-white to-ruby-500" />
        <HeroSection
          name={business.displayName}
          slogan={business.heroSlogan}
          description={business.heroDescription}
          phoneHref={phoneHref}
        />
        <AboutSection description={business.about.description} highlights={business.about.highlights} />
        <WeeklyEventsSection events={events.items} />
        <KaraokeHighlightSection
          title={events.items[0]?.title ?? "Karaoke Night"}
          time={events.items[0]?.time ?? ""}
          description={events.items[0]?.description ?? ""}
          phoneHref={phoneHref}
        />
        <WeekendPartySection events={events.items.slice(1)} menuSections={menuPreview.sections} />
        <GallerySection items={gallery.items} />
        <UpcomingEventsSection events={events.items} />
        <ReservationSection
          phoneDisplay={business.contact.phoneDisplay}
          phoneHref={phoneHref}
          text={business.reservationText}
        />
        <ContactSection
          addressLine1={business.location.street}
          addressLine2={`${business.location.postalCode} ${business.location.city}, Polska`}
          phoneDisplay={business.contact.phoneDisplay}
          phoneHref={phoneHref}
          mapQuery={`${business.location.street}, ${business.location.postalCode} ${business.location.city}, Poland`}
          schedule={hours.schedule.map((entry) => ({ day: entry.dayLabel, hours: entry.displayHours }))}
        />
        <SocialMediaSection links={socials.links} />
        <Footer
          name={business.displayName}
          address={`${business.location.street}, ${business.location.postalCode} ${business.location.city}`}
          phoneDisplay={business.contact.phoneDisplay}
        />
        <StickyMobileBar phoneHref={phoneHref} />
      </main>
    </>
  );
}
