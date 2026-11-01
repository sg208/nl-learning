import { siteConfig } from '~/config/site';
import type { LegalPageContent } from './types';

export const privacy: Record<'en' | 'nl', LegalPageContent> = {
  en: {
    title: 'Your privacy on NL Learning.',
    eyebrow: 'Privacy policy',
    intro:
      'NL Learning has no accounts, no analytics, no ads and no cookies. Your study progress stays in your own browser.',
    blocks: [
      {
        heading: 'What stays on your device',
        paragraphs: [
          'The KNM practice app keeps your current exam and your place on the page in session storage. That is how you can switch between English and Dutch without losing progress. Session storage belongs to one browser tab and is deleted when you close it.',
          'The site registers a service worker that caches pages and files so you can keep studying offline. The cache stays in your browser until you clear it or a new version of the site replaces it.',
          'None of this is sent to us. We have no server that could receive it.',
        ],
      },
      {
        heading: 'What we do not collect',
        paragraphs: [
          'You do not need an account, email address or payment details. The site sets no cookies and runs no analytics, advertising or tracking scripts.',
          'Fonts, icons and all study content are bundled with the site, so your browser does not contact other services such as font or image hosts while you use it.',
        ],
      },
      {
        heading: 'Hosting',
        paragraphs: [
          'The site runs on Cloudflare. Like any web host, Cloudflare receives standard request data when your browser loads a page, such as your IP address, browser type and the page you asked for, and may keep it in logs for security and reliability. We do not use that data to build profiles of visitors. Cloudflare explains its own handling in its privacy policy.',
        ],
        links: [
          { href: 'https://www.cloudflare.com/privacypolicy/', label: 'Cloudflare privacy policy' },
        ],
      },
      {
        heading: 'Your choices',
        paragraphs: [
          'You can delete everything the site stores by clearing site data in your browser settings. Removing the service worker there also removes the offline cache.',
          'Depending on where you live, you may have the right to ask what personal data is held about you, or to have it deleted. Because the site itself stores nothing about you, questions about request logs are best sent to Cloudflare.',
          'For other questions, open an issue on GitHub. Issues are public, so please do not include personal details.',
        ],
        links: [{ href: siteConfig.issuesUrl, label: 'Open an issue on GitHub' }],
      },
      {
        heading: 'Changes',
        paragraphs: [
          'If the site starts storing or sending anything new, this page will be updated first. Last updated on 1 November 2026.',
        ],
      },
    ],
  },
  nl: {
    title: 'Jouw privacy op NL Learning.',
    eyebrow: 'Privacybeleid',
    intro:
      'NL Learning heeft geen accounts, geen analytics, geen advertenties en geen cookies. Je studievoortgang blijft in je eigen browser.',
    blocks: [
      {
        heading: 'Wat er op je apparaat blijft',
        paragraphs: [
          'De KNM-oefenapp bewaart je lopende examen en je plek op de pagina in de sessieopslag van je browser. Zo kun je tussen Engels en Nederlands wisselen zonder je voortgang kwijt te raken. Die opslag hoort bij één tabblad en verdwijnt zodra je het sluit.',
          "De site gebruikt een service worker die pagina's en bestanden in je browser bewaart, zodat je ook offline kunt studeren. Die cache blijft staan tot je hem zelf wist of een nieuwe versie van de site hem vervangt.",
          'Niets hiervan wordt naar ons gestuurd. We hebben geen server die het zou kunnen ontvangen.',
        ],
      },
      {
        heading: 'Wat we niet verzamelen',
        paragraphs: [
          'Je hebt geen account, e-mailadres of betaalgegevens nodig. De site plaatst geen cookies en gebruikt geen analytics, advertenties of trackers.',
          'Lettertypen, pictogrammen en alle studiestof zitten in de site zelf. Je browser maakt tijdens het gebruik dus geen verbinding met andere diensten, zoals lettertype- of afbeeldingsservers.',
        ],
      },
      {
        heading: 'Hosting',
        paragraphs: [
          'De site draait op Cloudflare. Zoals elke webhost ontvangt Cloudflare de gebruikelijke verzoekgegevens wanneer je browser een pagina laadt, zoals je IP-adres, je browsertype en de opgevraagde pagina. Cloudflare kan die gegevens in logbestanden bewaren voor beveiliging en betrouwbaarheid. Wij gebruiken ze niet om profielen van bezoekers te maken. Hoe Cloudflare er zelf mee omgaat, lees je in het privacybeleid van Cloudflare.',
        ],
        links: [
          {
            href: 'https://www.cloudflare.com/privacypolicy/',
            label: 'Privacybeleid van Cloudflare (Engels)',
          },
        ],
      },
      {
        heading: 'Jouw keuzes',
        paragraphs: [
          'Je kunt alles wat de site opslaat verwijderen door de sitegegevens te wissen in de instellingen van je browser. Als je daar ook de service worker verwijdert, is de offline cache weg.',
          'Afhankelijk van waar je woont, heb je misschien het recht om te vragen welke persoonsgegevens er over je zijn, of om die te laten verwijderen. De site zelf bewaart niets over jou, dus vragen over logbestanden kun je het beste aan Cloudflare stellen.',
          'Heb je een andere vraag? Maak dan een issue aan op GitHub. Issues zijn openbaar, dus zet er geen persoonlijke gegevens in.',
        ],
        links: [{ href: siteConfig.issuesUrl, label: 'Issue aanmaken op GitHub' }],
      },
      {
        heading: 'Wijzigingen',
        paragraphs: [
          'Als de site iets nieuws gaat opslaan of versturen, passen we deze pagina eerst aan. Laatst bijgewerkt op 1 november 2026.',
        ],
      },
    ],
  },
};
