# Schnier Family Tree

A static, client-side family tree you can host on **GitHub Pages**.

Starting person: **Steven Dale Schnier** (born June 17, 1972).

## Publish on GitHub Pages

1. Create a new GitHub repository (public).
2. Upload every file in this folder to the repo root (flat structure — no build step).
3. In the repo: **Settings → Pages → Deploy from a branch → `main` / `/ (root)`**.
4. After a minute, the site is live at `https://YOURUSER.github.io/REPO/`.

Optional custom domain: add a `CNAME` file with your domain name.

## What’s in the tree

Built from the family papers you supplied, plus public vital records:

- Dingstede Hofbuch (farm holders from 1576: Snier / Schnieder / Schnier)
- House plaque “J. Schnier Dingstede” and the family grave stone photographed 11 May 2011
- Johann Gerhard Schnier (1853–1934) and Anna Sophie Margarete Tönjes of Hurrel, including the diphtheria years
- Gerhard Hinrich Schnier (21 Oct 1884 – 28 Apr 1978): Kaiser Wilhelm der Grosse, New York 26 June 1907; married Adeline Henriette von Seggern 29 Aug 1912; Bancroft / Pender farmer
- 7 July 1997 descendant chart: Gerald and Delora Breitbarth → Dale → Steven (& Lori) and Tiffany
- Mid-century portrait of G. H., Adeline and their six adult children
- Steven’s public TI career; children Jacob, then triplets Julia, Christian (Texas Tech) and Annalise (Arkansas EE), all Plano East High School
- Oehlerts line of Remsen: Herman & Mary → Sylvester & Eleanor → Sandra (Steven’s mother)

Living people’s private details are kept light. Edit `app.js` to add names and drop more images into `photos/`.

## Edit the tree

Open `app.js` and edit:

- `PEOPLE` — one object per person (`id`, `name`, `dates`, `role`, `bio`, `facts`, `sources`)
- `LINKS` — `{ from, to, type: 'parent' | 'spouse' }`

No build tools required. Refresh the page.

## Privacy

Do not commit private addresses, phone numbers, or documents. The published data set uses only information that already appears in public web sources.
