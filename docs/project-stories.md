# Photos and YouTube videos

Edit `lib/project-stories.ts` to manage the Stories section. Each item has a title, category, local image and alt text. Paste a public, embeddable YouTube HTTPS URL into `youtubeUrl` to enable its play button. Supported forms: watch?v=, youtu.be/, shorts/, live/ and embed/. Set `videoSlot: true` for a featured card.

No API key is needed. This is an embed connector configured in the project, not a CMS or an administrative interface. YouTube loads only after the visitor clicks Watch film, using the privacy-enhanced youtube-nocookie.com player. Only one player is mounted at a time. Videos restricted by their owner may not allow embedding.

The initial videos were selected from the user-provided https://www.youtube.com/@ShiraLandscaping channel: V307i5x-Rto (Lawn Care POV) and YnhX7XXW4P4 (Mowing Vlog). Their official YouTube thumbnails are used as posters. The carpentry photograph is an existing local asset from Shira's published website. Add images to public/landscapes and use their /landscapes/filename path. A videoSlot with an empty URL shows Coming soon without a nonfunctional play button.
