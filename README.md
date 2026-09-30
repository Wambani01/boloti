# Boloti Camp Resort: website

A redesign of boloticampresort.com built with Next.js 16 (App Router, React Server Components), Tailwind CSS v4 and Node.js. It keeps the original story and photographs, with an ultra-luxury look and a technical SEO setup.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Optional: set `BOOKING_WEBHOOK_URL` in `.env.local` to forward reservation requests as JSON to your CRM or inbox automation. If it isn't set, requests are only logged on the server.

## Where things live

| What | File |
| --- | --- |
| Name, address, phone, rating, social links | `lib/site.ts` |
| Room, experience, amenity and FAQ copy | `lib/content.ts` |
| Every photo, with its SEO filename and alt text | `lib/images.ts` |
| JSON-LD builders (Resort, rooms, Restaurant, FAQ, breadcrumbs) | `lib/schema.ts` |
| Design tokens (colours, fonts, motion) | `app/globals.css` |
| Reservation server action | `app/contact/actions.ts` |
| 301 redirects from the old WordPress URLs | `next.config.ts` |

Only the header, the floating booking bar, the parallax/reveal effects, the gallery lightbox and the reservation form run on the client. Everything else is server-rendered and static.

## Pages and target searches

| URL | Title | Main searches |
| --- | --- | --- |
| `/` | Boloti Camp Resort \| Luxury Eco-Lodge at the Foothills of Mt. Kilimanjaro | boloti camp resort, Kilimanjaro luxury lodge |
| `/rooms` | Rooms, Villa & Luxury Tents near Kilimanjaro | accommodation near Kilimanjaro |
| `/rooms/family-villa` | Two-Bedroom Family Villa near Kilimanjaro | family villa Kilimanjaro |
| `/rooms/king-double-rooms` | King Double Rooms near Kilimanjaro Airport | luxury hotel near Kilimanjaro airport |
| `/rooms/family-tents` | Family Tents: Luxury Glamping at Kilimanjaro | glamping Kilimanjaro |
| `/rooms/single-tents` | Single Tents: Tented Camp near Machame Gate | Kilimanjaro tented camp, hotel near Machame Gate |
| `/kilimanjaro-climb-stay` | Where to Stay Before Climbing Kilimanjaro | where to stay before climbing Kilimanjaro, lodge near Machame Gate |
| `/kilimanjaro-weekend-getaway` | Weekend Getaway near Arusha & Moshi (includes a Kiswahili section) | weekend getaway Arusha / Moshi / from Dar es Salaam, hoteli nzuri Moshi |
| `/nairobi-to-moshi-road-trip` | Nairobi to Moshi by Road via Namanga or Oloitoktok | Nairobi to Moshi by road, Namanga to Moshi, Oloitoktok / Loitokitok to Moshi, Tarakea border |
| `/dining` | Restaurant & Bar at the Foot of Kilimanjaro | restaurant Machame / Moshi |
| `/experiences` | Things to Do near Kilimanjaro | Kikuletwa Hot Springs, Kibong'oto waterfalls |
| `/gallery`, `/about`, `/contact` | | brand searches |

Each page has a unique title, meta description and canonical URL. `sitemap.xml` and `robots.txt` are generated automatically.

**Alt-text template:** `<what is pictured> <detail> at Boloti Camp Resort, <place keyword>`. For example: *"Luxury Family Villa with private garden at Boloti Camp Resort, Mt. Kilimanjaro"*.

## Before launch

1. **Exact map pin:** replace `site.geo` in `lib/site.ts` with the coordinates from Google Business Profile. The current value is the Masama Magharibi ward centre. The address shows both local names, Masama Magharibi and Sanya Juu, on purpose.
2. **WhatsApp:** confirm +255 754 710 563 is on WhatsApp Business. Every WhatsApp button uses it.
3. **One email address:** the old site used info@, bookings@ and reservations@. This site uses `reservations@` everywhere.
4. **Check-in and check-out times:** add them to `lib/schema.ts` (they are commented out there).
5. **Ratings:** update `site.ratings` as reviews grow. The schema's `aggregateRating` must match what the page shows.
6. **Booking engine:** point `BOOKING_WEBHOOK_URL` at your CRM, or swap the form for your booking engine's widget. Then connect that engine to Google's free booking links.
7. **Search Console:** submit `https://boloticampresort.com/sitemap.xml`, and test the home, `/kilimanjaro-climb-stay` and room pages in the Rich Results Test.
8. **Hosting:** don't put a "verifying your request" bot screen in front of the new site. The competitor report found the current one blocks visitors and ad reviewers.
